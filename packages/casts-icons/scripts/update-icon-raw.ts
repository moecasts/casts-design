import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Define the source repository and target directory
const repoUrl = 'https://github.com/Remix-Design/RemixIcon.git';

// Create a temporary directory path
const tempDir = path.join(__dirname, '../temp-remix-icon');
const sourceDir = path.join(tempDir, 'icons');
const targetDir = path.join(__dirname, '../assets/raw');

/**
 * Replace '&' with '_' in subfolder names within a folder
 * @param {string} dirPath The folder path
 */
function replaceAmpersandInFolderNames(dirPath: string) {
  // Read the folder contents
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  // Iterate through the contents and process folders
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const oldFolderPath = path.join(dirPath, entry.name);
      const newFolderName = entry.name.replace(/\s*&\s*/g, '_');
      const newFolderPath = path.join(dirPath, newFolderName);

      // If the folder name has changed, rename the folder
      if (oldFolderPath !== newFolderPath) {
        fs.renameSync(oldFolderPath, newFolderPath);
      }

      // Recursively process subfolders
      replaceAmpersandInFolderNames(newFolderPath);
    }
  }
}

function copyRecursively(src: string, dest: string) {
  // Check if the source path exists
  if (!fs.existsSync(src)) {
    throw new Error(`Source path does not exist: ${src}`);
  }

  // Check if the source path is a file or directory
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    // If the target directory does not exist, create it
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        // Recursively copy directories
        copyRecursively(srcPath, destPath);
      } else {
        // Copy files
        fs.copyFileSync(srcPath, destPath);
      }
    }
  } else {
    // Ensure the target directory exists
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    // Copy files
    fs.copyFileSync(src, dest);
  }
}

/**
 * Clear a folder
 * @param {string} dirPath The folder path
 */
function cleanDirectory(dirPath: string) {
  // Read the folder contents
  const entries = fs.readdirSync(dirPath);

  // Iterate through the contents and delete files or subdirectories
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry);
    const stats = fs.statSync(fullPath);

    if (stats.isFile()) {
      // If it's a file, delete it directly
      fs.unlinkSync(fullPath);
    } else if (stats.isDirectory()) {
      // If it's a directory, recursively clear it
      cleanDirectory(fullPath);
      // Delete the empty directory
      fs.rmdirSync(fullPath);
    }
  }
}

const run = () => {
  // Clone the repository to a temporary directory
  exec(`git clone ${repoUrl} ${tempDir} --depth=1`, (err) => {
    if (err) {
      console.error('Error cloning repository:', err);
      return;
    }

    // Repository cloned successfully, move icons folder contents to the target directory

    // Ensure the target directory exists
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    cleanDirectory(targetDir);

    copyRecursively(sourceDir, targetDir);

    replaceAmpersandInFolderNames(targetDir);

    // Delete the temporary repository directory
    fs.rmSync(tempDir, { recursive: true });
  });
};

run();

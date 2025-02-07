/**
 * Converts markdown formatted text to plain text by removing markup elements
 * @param text - Input markdown text to be converted
 * @returns Clean plain text content with markdown elements removed
 */
export const transformMarkdownToPlainText = (text: string) => {
  return (
    text
      // Remove code blocks (preserve content)
      .replace(/```\S*([\s\S]*?)```/g, '$1')
      // Remove inline code
      .replace(/`([^`]+)`/g, '$1')
      // Remove images (preserve alt text)
      .replace(/!\[(.*?)\]\(.*?\)/g, '$1')
      // Remove links (preserve description)
      .replace(/\[(.*?)\]\(.*?\)/g, '$1')
      // Remove bold/strong formatting
      .replace(/(\*\*|__)(.*?)\1/g, '$2')
      // Remove italic/emphasis formatting
      .replace(/(\*|_)(.*?)\1/g, '$2')
      // Remove headers
      .replace(/^#+\s+/gm, '')
      // Remove list markers
      .replace(/^\s*([-*+]|\d+\.)\s+/gm, '')
      // Remove blockquote markers
      .replace(/^>\s*/gm, '')
      // Remove horizontal rules
      .replace(/^[-*]{3,}\s*$/gm, '')
      // Remove HTML tags
      .replace(/<[^>]*>/g, '')
      // Unescape special characters
      .replace(/\\([\\`*{}[\]()#+\-.!_>~|])/g, '$1')
      // Collapse multiple newlines to max 2
      .replace(/\n{3,}/g, '\n\n')
      .trim()
  );
};

// vite.config.ts
import vitestConfig from "file:///Users/caster/Developments/self/cd/packages/casts-standard/dist/cjs/vite/vite.config.js";
import react from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+@vitejs+plugin-react@4.0.4_vite@4.5.2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { omit } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import path5 from "path";
import { defineConfig } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/vite@4.5.2_@types+node@20.5.8_sass@1.66.1/node_modules/vite/dist/node/index.js";
import { mergeConfig } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/vite@4.5.2_@types+node@20.5.8_sass@1.66.1/node_modules/vite/dist/node/index.js";
import svgr from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+vite-plugin-svgr@3.2.0_rollup@3.28.1_vite@4.5.2/node_modules/vite-plugin-svgr/dist/index.js";

// ../utils.ts
import { readdirSync, readFileSync } from "fs";
import * as path from "path";
var getDirectoryNames = (source) => readdirSync(source, { withFileTypes: true }).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
var getPackageNames = (packageDirNames) => {
  return packageDirNames.map((packageDir) => {
    const content = readFileSync(path.join(packageDir, "package.json"), "utf8");
    const packageJson = JSON.parse(content);
    return packageJson.name;
  });
};
var getPackageAlias = (source) => {
  const packageDirNames = getDirectoryNames(source);
  const packageDirPaths = packageDirNames.map(
    (packageDirName) => path.join(source, packageDirName)
  );
  const packageNames = getPackageNames(packageDirPaths);
  return packageNames.reduce(
    (acc, packageName, index) => {
      const alias = {
        [`${packageName}/dist/esm`]: path.join(packageDirPaths[index], "src"),
        [`${packageName}/dist/cjs`]: path.join(packageDirPaths[index], "src"),
        [`${packageName}`]: path.join(packageDirPaths[index], "src")
      };
      return { ...acc, ...alias };
    },
    {}
  );
};

// packages/rd-vite/src/index.ts
import { createFormatAwareProcessors } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/@mdx-js+mdx@2.3.0/node_modules/@mdx-js/mdx/lib/util/create-format-aware-processors.js";
import { transformSync as transformSync2 } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+esbuild@0.19.2/node_modules/esbuild/lib/main.js";
import { readFileSync as readFileSync3 } from "fs";
import { find as find3 } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import path4 from "path";
import rehypeAutolinkHeadings from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+rehype-autolink-headings@6.1.1/node_modules/rehype-autolink-headings/index.js";
import rehypeSlug2 from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+rehype-slug@6.0.0/node_modules/rehype-slug/index.js";
import remarkFrontmatter from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+remark-frontmatter@4.0.1/node_modules/remark-frontmatter/index.js";
import remarkGFM from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+remark-gfm@3.0.1/node_modules/remark-gfm/index.js";
import remarkMdxImages from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+remark-mdx-images@2.0.0/node_modules/remark-mdx-images/index.js";
import { SourceMapGenerator } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/source-map.js";
import { toVFile } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+to-vfile@7.2.4/node_modules/to-vfile/index.js";

// packages/rd-vite/src/common/locale.ts
var locales = [
  ["en-US", "English"],
  ["zh-CN", "\u4E2D\u6587"]
];
var localeCodes = locales.map((i) => i[0]);
var fallbackLocaleCode = localeCodes[0];

// packages/rd-vite/src/utils/path.ts
import { filter, identity, isEmpty } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
function ensureRelativePath(relativePath) {
  if (!relativePath.startsWith(".")) {
    relativePath = `./${relativePath}`;
  }
  return relativePath;
}
var ensureSlashStartPath = (path6) => {
  if (path6.startsWith("/")) {
    return path6;
  }
  return `/${path6}`;
};

// packages/rd-vite/src/utils/toc.ts
import { parse } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/acorn@8.10.0/node_modules/acorn/dist/acorn.mjs";
import { identity as identity2, isEmpty as isEmpty2 } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
var getTocData = (node) => {
  const findTocRoot = (node2) => {
    var _a, _b, _c;
    if (!node2) {
      return void 0;
    }
    if ((_b = (_a = node2 == null ? void 0 : node2.properties) == null ? void 0 : _a.className) == null ? void 0 : _b.includes("toc-level")) {
      return node2;
    }
    if (isEmpty2(node2 == null ? void 0 : node2.children)) {
      return void 0;
    }
    return findTocRoot((_c = node2.children) == null ? void 0 : _c[0]);
  };
  const rootLevel = findTocRoot(node);
  const transformLevel = (level) => {
    if (!(level == null ? void 0 : level.children)) {
      return;
    }
    const nodes = level.children.map(
      (item) => {
        var _a, _b, _c, _d;
        const anchor = (_a = item.children) == null ? void 0 : _a[0];
        if (!anchor) {
          return void 0;
        }
        const child = {
          // @ts-ignore value will exist
          title: (_c = (_b = anchor.children) == null ? void 0 : _b[0]) == null ? void 0 : _c.value,
          href: anchor.properties.href
        };
        const childLevel = (_d = item.children) == null ? void 0 : _d[1];
        if (childLevel) {
          child.children = transformLevel(childLevel);
        }
        return child;
      }
    );
    const cleanNodes = nodes.filter(identity2);
    return isEmpty2(cleanNodes) ? void 0 : cleanNodes;
  };
  return transformLevel(rootLevel);
};
var customizeTOC = (toc) => {
  const data = getTocData(toc) || [];
  const dataCode = `${JSON.stringify(data)}`;
  const dataAst = parse(dataCode, {
    ecmaVersion: "latest"
  });
  Object.assign(toc, {
    type: "mdxJsxFlowElement",
    name: "Toc",
    attributes: [
      {
        type: "mdxJsxAttribute",
        name: "data",
        value: {
          type: "mdxJsxAttributeValueExpression",
          value: dataCode,
          data: {
            estree: dataAst
          }
        }
      }
    ]
  });
  return toc;
};

// packages/rd-vite/src/node/provider/import.ts
var getRuntimeImports = (sources) => {
  return `
    {
      ${sources.map((source) => {
    const id = ensureSlashStartPath(source.path);
    return `
          '${id}': {
            import: import.meta.glob('${id}')['${id}'],
            // raw: import.meta.glob('${id}', { as: 'raw' })['${id}'],
          }
        `;
  }).join(",")}
    }
  `;
};

// packages/rd-vite/src/node/provider/markdown.ts
import rehypeToc from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+@jsdevtools+rehype-toc@3.0.2/node_modules/@jsdevtools/rehype-toc/lib/index.js";
import { compileSync } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/@mdx-js+mdx@2.3.0/node_modules/@mdx-js/mdx/index.js";
import fg from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+fast-glob@3.3.1/node_modules/fast-glob/out/index.js";
import { isEmpty as isEmpty5, reduce as reduce2 } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import path3 from "path";
import rehypeSlug from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+rehype-slug@6.0.0/node_modules/rehype-slug/index.js";
import { readSync } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+to-vfile@7.2.4/node_modules/to-vfile/index.js";
import { matter } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+vfile-matter@4.0.1/node_modules/vfile-matter/index.js";
import { normalizePath } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/vite@4.5.2_@types+node@20.5.8_sass@1.66.1/node_modules/vite/dist/node/index.js";

// packages/rd-vite/src/node/remarks/code-block.ts
import { parseSync, traverse } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/@babel+core@7.22.11/node_modules/@babel/core/lib/index.js";
import { isIdentifier, isStringLiteral } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+@babel+types@7.22.11/node_modules/@babel/types/lib/index.js";
import { parse as parse2 } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/acorn@8.10.0/node_modules/acorn/dist/acorn.mjs";
import { transformSync } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+esbuild@0.19.2/node_modules/esbuild/lib/main.js";
import { existsSync, readFileSync as readFileSync2 } from "fs";
import { resolve as polyfillResolve } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+import-meta-resolve@3.0.0/node_modules/import-meta-resolve/index.js";
import { find, isEmpty as isEmpty3, isString, map, zipObject } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import path2, { extname, relative } from "path";
import { visit } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+unist-util-visit@5.0.0/node_modules/unist-util-visit/index.js";
import { pathToFileURL } from "url";
var jsExtRegex = /\.(tsx?|jsx?)$/;
var isJsFile = (path6) => /(.m?tsx?|.m?jsx?)$/.test(path6);
var isNodeModulePackage = (path6) => path6 && (path6.includes("node_modules") || path6.includes("dist"));
var parseFileSync = (path6) => {
  var _a;
  const code = readFileSync2(path6).toString();
  const ext = ((_a = jsExtRegex.exec(path6)) == null ? void 0 : _a[1]) || "tsx";
  try {
    const transformResult = transformSync(code, {
      loader: ext
    });
    return parseSync(transformResult.code);
  } catch (err) {
    console.log("failed to parseSync:", path6);
  }
};
var collectImportSourcesFromAst = (ast) => {
  const sourcesSet = /* @__PURE__ */ new Set();
  if (ast) {
    traverse(ast, {
      ImportDeclaration: (path6) => {
        sourcesSet.add(path6.node.source.value);
      },
      CallExpression: (path6) => {
        if (isIdentifier(path6.node.callee) && path6.node.callee.name === "require" && isStringLiteral(path6.node.arguments[0])) {
          sourcesSet.add(path6.node.arguments[0].value);
        }
      }
    });
  }
  return Array.from(sourcesSet);
};
var ensureJsExt = (source) => {
  const jsExts = [
    ".tsx",
    ".ts",
    ".jsx",
    ".js",
    ".mts",
    ".mtsx",
    ".mjs",
    ".mjsx"
  ];
  const currentExt = extname(source).replace(".tsx", "");
  if (currentExt) {
    return source;
  }
  for (const ext of jsExts) {
    const fullSource = `${source}${ext}`;
    if (existsSync(fullSource)) {
      return fullSource;
    }
  }
  return source;
};
var remarkCodeBlock = (options) => {
  const { resolverRef, root } = options;
  const resolve = (resolverRef == null ? void 0 : resolverRef.current) ?? (async (source, importer) => {
    const href = pathToFileURL(importer).href;
    return {
      id: polyfillResolve(source, href)
    };
  });
  const getSlashStartPath = (p) => {
    if (!root) {
      return p;
    }
    return ensureSlashStartPath(relative(root, p));
  };
  return async (ast, file) => {
    const codeAbsSources = [];
    visit(
      ast,
      {
        type: "mdxJsxFlowElement",
        name: "Code"
      },
      (node) => {
        var _a;
        const codeSrc = (_a = node.attributes) == null ? void 0 : _a[0].value;
        const codeAbsSrc = ensureJsExt(path2.join(file.dirname, codeSrc));
        codeAbsSources.push(codeAbsSrc);
      }
    );
    const analyzeImports = async (indexPath) => {
      const deps = /* @__PURE__ */ new Set();
      const traverseFileImports = async (currentPath) => {
        const fileImportSources = {};
        if (!isJsFile(currentPath)) {
          return fileImportSources;
        }
        const ast2 = parseFileSync(currentPath);
        const importSources2 = collectImportSourcesFromAst(ast2);
        const resolveSource = async (source) => {
          var _a;
          try {
            const resolvedId = (_a = await resolve(source, currentPath)) == null ? void 0 : _a.id;
            if (!resolvedId) {
              return;
            }
            if (isNodeModulePackage(resolvedId) || !source.startsWith(".")) {
              deps.add(source);
              return;
            }
            const id = ensureRelativePath(
              path2.relative(currentPath, path2.join(currentPath, source))
            );
            fileImportSources[id] = resolvedId;
          } catch (error) {
            console.log(`cannot resolve ${source} from ${currentPath}`, error);
          }
        };
        await Promise.all(importSources2.map(resolveSource));
        await Promise.all(
          Object.values(fileImportSources).map(async (importSource) => {
            Object.assign(
              fileImportSources,
              await traverseFileImports(importSource)
            );
            return;
          })
        );
        return fileImportSources;
      };
      return await traverseFileImports(indexPath);
    };
    const importSources = zipObject(
      codeAbsSources,
      await Promise.all(
        codeAbsSources.map(async (src) => {
          return await analyzeImports(src);
        })
      )
    );
    visit(
      ast,
      {
        type: "mdxJsxFlowElement",
        name: "Code"
      },
      (node) => {
        var _a;
        const codeSrc = (_a = node.attributes) == null ? void 0 : _a[0].value;
        if (!isString(codeSrc)) {
          return;
        }
        const codeAbsSrc = ensureJsExt(path2.join(file.dirname, codeSrc));
        const currentFileImportSources = importSources[codeAbsSrc];
        const wholeImportSources = {
          index: codeAbsSrc,
          ...currentFileImportSources
        };
        const importSourcesCode = `Object.assign({
            ${map(wholeImportSources, (source, id) => {
          return `'${id}': () => import('${getSlashStartPath(
            source
          )}?raw')`;
        }).join(",")}
          })`;
        const code = importSourcesCode;
        const codeAst = parse2(code, { ecmaVersion: "latest" });
        node.attributes.push({
          type: "mdxJsxAttribute",
          name: "codeSources",
          value: {
            type: "mdxJsxAttributeValueExpression",
            value: code,
            data: {
              estree: codeAst
            }
          }
        });
        const childrenImportCode = `() => import('${getSlashStartPath(
          codeAbsSrc
        )}')`;
        const childrenCodeAst = parse2(childrenImportCode, {
          ecmaVersion: "latest"
        });
        node.attributes.push({
          type: "mdxJsxAttribute",
          name: "children",
          value: {
            type: "mdxJsxAttributeValueExpression",
            value: childrenImportCode,
            data: {
              estree: childrenCodeAst
            }
          }
        });
      }
    );
    return ast;
  };
};
var remarkCodeBlockStandalone = () => {
  return (ast, file) => {
    const standaloneCodeBlocks = {};
    visit(
      ast,
      {
        type: "mdxJsxFlowElement",
        name: "Code"
      },
      (node) => {
        var _a;
        const isStandalone = true;
        if (!isStandalone) {
          return;
        }
        const source = (_a = find(node.attributes, { name: "src" })) == null ? void 0 : _a.value;
        if (!source) {
          return;
        }
        const codeBlockSrc = ensureJsExt(path2.join(file.dirname, source));
        standaloneCodeBlocks[source] = codeBlockSrc;
      }
    );
    if (!isEmpty3(standaloneCodeBlocks)) {
      file.data.standaloneCodeBlocks = standaloneCodeBlocks;
    }
    return ast;
  };
};

// packages/rd-vite/src/node/remarks/code-block-replacer.ts
import { visit as visit2 } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+unist-util-visit@5.0.0/node_modules/unist-util-visit/index.js";
var remarkCodeBlockReplacer = () => (ast) => {
  visit2(
    ast,
    {
      type: "mdxJsxFlowElement",
      name: "code"
    },
    (node) => {
      node.name = "Code";
    }
  );
  return ast;
};

// packages/rd-vite/src/node/remarks/react-api.ts
import * as acorn from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/acorn@8.10.0/node_modules/acorn/dist/acorn.mjs";
import {
  find as find2,
  isEmpty as isEmpty4,
  isUndefined,
  map as map2,
  reduce,
  uniq,
  zipObject as zipObject2
} from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import { fromMarkdown } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+mdast-util-from-markdown@2.0.0/node_modules/mdast-util-from-markdown/index.js";
import { gfmTableFromMarkdown } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+mdast-util-gfm-table@2.0.0/node_modules/mdast-util-gfm-table/index.js";
import { mdxJsxFromMarkdown } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mdast-util-mdx-jsx@3.0.0/node_modules/mdast-util-mdx-jsx/index.js";
import { gfmTable } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/micromark-extension-gfm-table@2.0.0/node_modules/micromark-extension-gfm-table/index.js";
import { mdxJsx } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+micromark-extension-mdx-jsx@2.0.0/node_modules/micromark-extension-mdx-jsx/index.js";
import {
  withDefaultConfig
} from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+react-docgen-typescript@2.2.2_typescript@5.0.4/node_modules/react-docgen-typescript/lib/index.js";
import { visit as visit3 } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+unist-util-visit@5.0.0/node_modules/unist-util-visit/index.js";
var apiParserOptions = {
  shouldExtractValuesFromUnion: true,
  shouldExtractLiteralValuesFromEnum: true,
  propFilter: (prop) => {
    if (prop.declarations !== void 0 && prop.declarations.length > 0) {
      const hasPropAdditionalDescription = prop.declarations.find(
        (declaration) => {
          return !declaration.fileName.includes("node_modules");
        }
      );
      return Boolean(hasPropAdditionalDescription);
    }
    return true;
  }
};
var apiParser = withDefaultConfig(apiParserOptions);
var remarkReactApi = ({ resolve }) => {
  return async (ast) => {
    const reactApiEntries = [];
    visit3(
      ast,
      {
        type: "mdxJsxFlowElement",
        name: "API"
      },
      (node) => {
        const src = find2(node.attributes, { name: "src" });
        const { value } = src;
        reactApiEntries.push(value);
      }
    );
    const getReactApiRealPaths = async (entries) => {
      const uniqueEntries = uniq(entries);
      return zipObject2(
        uniqueEntries,
        await Promise.all(
          uniqueEntries.map(async (entry) => {
            const resolved = await resolve(entry);
            return (resolved == null ? void 0 : resolved.id) || "";
          })
        )
      );
    };
    const reactApiRealPaths = await getReactApiRealPaths(reactApiEntries);
    if (isEmpty4(reactApiRealPaths)) {
      return;
    }
    const apiDeclarations = reduce(
      reactApiRealPaths,
      (acc, realPath, entry) => ({
        ...acc,
        [entry]: apiParser.parse(realPath)
      }),
      {}
    );
    visit3(
      ast,
      {
        type: "mdxJsxFlowElement",
        name: "API"
      },
      (node, index, parent) => {
        const src = find2(node.attributes, { name: "src" });
        const { value } = src;
        const currentApiDeclarations = apiDeclarations[value];
        const apiData = getApiData(currentApiDeclarations);
        const apiDeclarationsCode = JSON.stringify(apiData);
        const apiDeclarationsAst = acorn.parse(
          `Object.assign({}, ${apiDeclarationsCode})`,
          {
            ecmaVersion: "latest"
          }
        );
        node.attributes.push({
          type: "mdxJsxAttribute",
          name: "apis",
          value: {
            type: "mdxJsxAttributeValueExpression",
            value: apiDeclarationsCode,
            data: {
              estree: apiDeclarationsAst
            }
          }
        });
        const apisMarkdown = map2(apiData, (apis, name) => {
          return `### ${name}
${getApiTableMarkdown(apis)}`;
        }).join("\n");
        const apsAst = fromMarkdown(apisMarkdown, {
          extensions: [
            mdxJsx({ acorn, addResult: true }),
            gfmTable()
          ],
          mdastExtensions: [mdxJsxFromMarkdown(), gfmTableFromMarkdown()]
        });
        parent.children.splice(
          index,
          1,
          ...apsAst.children
        );
      }
    );
  };
};
var getApiData = (declarations) => {
  const apis = reduce(
    declarations,
    (acc, componentDoc) => {
      const props = map2(componentDoc.props, (prop) => {
        var _a;
        return {
          identifier: prop.name,
          description: prop.description,
          default: (_a = prop.defaultValue) == null ? void 0 : _a.value,
          type: prop.type,
          required: prop.required
        };
      });
      return {
        ...acc,
        [componentDoc.displayName]: props
      };
    },
    {}
  );
  return apis;
};
var getApiTableMarkdown = (apis) => {
  let code = "";
  const getDeclarationType = (type) => {
    if (type.name === "enum") {
      if (["Color", "boolean"].includes(type.raw) || type.raw.includes("ReactNode")) {
        return escape(`\`${type.raw}\``);
      }
      return escape(
        map2(
          type.value,
          (item) => `\`${item.value.replace(/['"]/g, "")}\``
        ).join(" | ")
      );
    }
    return escape(type.name);
  };
  code += "| Property | Description | Type | Default | Required |\n";
  code += "| --- | --- | --- | --- | --- |\n";
  code += apis.map(
    (api) => `| ${api.identifier} | ${(api.description || "-").replace(
      /\n/g,
      "<br />"
    )} | ${getDeclarationType(api.type)} | ${isUndefined(api.default) ? "-" : escape(api.default)} | ${api.required} |`
  ).join("\n");
  return code;
};
var entityEscapeMap = {
  "<": "&lt;",
  "|": "\\|"
};
var codeEntityEscapeMap = {
  // prettier-ignore
  // eslint-disable-next-line prettier/prettier, no-useless-escape
  "<": "<",
  "|": "\\|"
};
var entityEscapeReg = RegExp(
  "[" + Object.keys(entityEscapeMap).join("") + "]",
  "g"
);
var codeEntityEscapeReg = RegExp(
  "`[^`]*`|([" + Object.keys(codeEntityEscapeMap).join("") + "])",
  "g"
);
function escape(html) {
  if (typeof html !== "string") {
    return "";
  }
  return html.replace(codeEntityEscapeReg, (codeHtml, group) => {
    if (group) {
      return entityEscapeMap[group];
    }
    return codeHtml.replace(entityEscapeReg, function(match) {
      return codeEntityEscapeMap[match];
    });
  });
}

// packages/rd-vite/src/node/provider/markdown.ts
var defaultDetectMarkdownsOptions = {
  withMeta: true
};
var detectMarkdowns = (root, options = {}) => {
  const { withMeta } = Object.assign(defaultDetectMarkdownsOptions, options);
  const paths = fg.sync(["**/docs/**/[^_]*.@(md|mdx)", "**/src/**/[^_]*.@(md|mdx)"], {
    cwd: root,
    ignore: ["**/node_modules/**"]
  }).map((p) => {
    const item = {
      id: normalizePath(p),
      path: normalizePath(path3.posix.join(root, p)),
      data: {}
    };
    if (withMeta) {
      const file = readSync(item.path);
      item.meta = matter(file).data.matter;
      const compiledFile = compileSync(file, {
        remarkPlugins: [remarkCodeBlockReplacer, remarkCodeBlockStandalone],
        rehypePlugins: [rehypeSlug, rehypeToc],
        format: "mdx"
      });
      if (!isEmpty5(compiledFile.data.standaloneCodeBlocks)) {
        item.data.standaloneCodeBlocks = reduce2(
          compiledFile.data.standaloneCodeBlocks,
          (acc, blockSource, id) => ({
            ...acc,
            [id]: normalizePath(blockSource)
          }),
          {}
        );
      }
    }
    return item;
  });
  return paths;
};

// packages/rd-vite/src/node/rehypes/toc.ts
import rehypeTocBase from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+@jsdevtools+rehype-toc@3.0.2/node_modules/@jsdevtools/rehype-toc/lib/index.js";
import { matter as matter2 } from "file:///Users/caster/Developments/self/cd/node_modules/.pnpm/mirrors.tencent.com+vfile-matter@4.0.1/node_modules/vfile-matter/index.js";
function rehypeToc2(opts) {
  const tocTransformer = rehypeTocBase.bind(this)(opts);
  return (ast, file) => {
    var _a;
    const frontmatter = matter2(file);
    if (((_a = frontmatter.data.matter) == null ? void 0 : _a.toc) === false) {
      return ast;
    }
    return tocTransformer(ast);
  };
}

// packages/rd-vite/src/index.ts
var __vite_injected_original_dirname = "/Users/caster/Developments/self/cd/site/packages/rd-vite/src";
var getMdxOptions = ({
  resolverRef,
  root
}) => ({
  providerImportSource: "@mdx-js/react",
  mdxExtensions: [".mdx", ".md"],
  format: "mdx",
  remarkPlugins: [
    remarkGFM,
    remarkMdxImages,
    remarkCodeBlockReplacer,
    [remarkCodeBlock, { resolverRef, root }],
    [remarkReactApi, { resolve: resolverRef.current }]
  ],
  rehypePlugins: [
    rehypeSlug2,
    [
      rehypeToc2,
      {
        cssClasses: {
          toc: "rd-toc"
        },
        headings: ["h2", "h3", "h4"],
        customizeTOC
      }
    ],
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: "rd-heading-link"
        },
        content: {
          type: "element",
          tagName: "svg",
          properties: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            className: "rd-heading-link-icon"
          },
          children: [
            {
              type: "element",
              tagName: "path",
              properties: {
                d: "M13.0605 8.11073L14.4747 9.52494C17.2084 12.2586 17.2084 16.6908 14.4747 19.4244L14.1211 19.778C11.3875 22.5117 6.95531 22.5117 4.22164 19.778C1.48797 17.0443 1.48797 12.6122 4.22164 9.87849L5.63585 11.2927C3.68323 13.2453 3.68323 16.4112 5.63585 18.3638C7.58847 20.3164 10.7543 20.3164 12.7069 18.3638L13.0605 18.0102C15.0131 16.0576 15.0131 12.8918 13.0605 10.9392L11.6463 9.52494L13.0605 8.11073ZM19.778 14.1211L18.3638 12.7069C20.3164 10.7543 20.3164 7.58847 18.3638 5.63585C16.4112 3.68323 13.2453 3.68323 11.2927 5.63585L10.9392 5.98941C8.98653 7.94203 8.98653 11.1079 10.9392 13.0605L12.3534 14.4747L10.9392 15.8889L9.52494 14.4747C6.79127 11.741 6.79127 7.30886 9.52494 4.57519L9.87849 4.22164C12.6122 1.48797 17.0443 1.48797 19.778 4.22164C22.5117 6.95531 22.5117 11.3875 19.778 14.1211Z"
              }
            }
          ]
        }
      }
    ]
  ],
  recmaPlugins: [remarkFrontmatter]
});
var rd = (config = {}) => {
  return [createPlugin(config)];
};
var getDefaultRdConfig = () => ({
  locales
});
var createPlugin = (userConfig = {}) => {
  const config = Object.assign({}, getDefaultRdConfig(), userConfig);
  const virtualModuleId = "virtual:rd-provider";
  const resolvedVirtualModuleId = `\0${virtualModuleId}`;
  let docRoot = (config == null ? void 0 : config.root) || "../";
  let root;
  let processors;
  let resolve;
  let alias;
  const plugin = {
    name: "rd-vite",
    enforce: "pre",
    config: () => ({
      resolve: {
        modules: ["@mdx-js/react"],
        alias: {
          "@root": docRoot,
          "@casts/rd-vite": path4.resolve(__vite_injected_original_dirname)
        }
      }
    }),
    resolveId: (id) => {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
      return void 0;
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const markdownSources = detectMarkdowns(docRoot);
        const providerContent = readFileSync3(
          path4.join(__vite_injected_original_dirname, "./node/provider/virtual.ts")
        );
        const content = `
          ${providerContent.toString()};
          export const rdProvider = initRdProvider({
            sources: ${JSON.stringify(markdownSources)},
            runtimeImports: ${getRuntimeImports(markdownSources)},
          });
        `;
        return transformSync2(content, { loader: "tsx" });
      }
      return void 0;
    },
    // config: (config, { command }) => {
    //   console.log('这里是config钩子', { config, command });
    // },
    configResolved(resolvedConfig) {
      if (!docRoot) {
        docRoot = resolvedConfig.root;
      }
      if (!root) {
        root = resolvedConfig.root;
      }
      alias = resolvedConfig.resolve.alias;
    },
    async transform(value, path6) {
      if (!resolve) {
        resolve = (source, importer, options) => {
          const mergedOptions = Object.assign(
            {
              skipSelf: true
            },
            options
          );
          const currentAlias = find3(alias, { find: source });
          if (currentAlias == null ? void 0 : currentAlias.replacement) {
            const realSource = source.replace(source, currentAlias.replacement);
            return this.resolve(realSource, importer, mergedOptions);
          }
          return this.resolve(source, importer, mergedOptions);
        };
      }
      if (!processors) {
        processors = createFormatAwareProcessors({
          SourceMapGenerator,
          ...getMdxOptions({
            resolverRef: { current: resolve },
            root
          })
        });
      }
      const { extnames, process } = processors;
      const file = toVFile({ value, path: path6 });
      if (file.extname && // filter(file.path) &&
      extnames.includes(file.extname)) {
        const compiled = await process(file);
        const code = String(compiled.value);
        const result = { code, map: compiled.map };
        return result;
      }
      return;
    }
    // handleHotUpdate(ctx) {
    //   const { server } = ctx;
    //   console.log('debug handleHotUpdate', server);
    //   server.ws.send({
    //     type: 'full-reload',
    //     path: '*',
    //   });
    // },
    // configureServer(server) {
    //   console.log('这里是configureServer钩子', { server });
    // },
    //
    // transformIndexHtml(html) {
    //   console.log('这里是transformIndexHtml钩子', { html });
    // },
  };
  return plugin;
};

// vite.config.ts
var __vite_injected_original_dirname2 = "/Users/caster/Developments/self/cd/site";
var packagesAlias = omit(
  getPackageAlias(path5.resolve(path5.join(__vite_injected_original_dirname2, "../packages"))),
  ["@casts/theme/dist/esm", "@casts/theme/dist/cjs", "@casts/theme"]
);
var vite_config_default = mergeConfig(
  vitestConfig,
  defineConfig({
    server: {
      host: "0.0.0.0",
      port: 15e3,
      open: "/",
      https: false
    },
    resolve: {
      alias: {
        "@": path5.resolve(__vite_injected_original_dirname2, ".."),
        ...packagesAlias
      }
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '$prefix-cls: rdc;\n',
    //     },
    //   },
    // },
    plugins: [
      react(),
      svgr(),
      rd({
        // docRoot: path.resolve(__dirname, '..'),
      })
    ],
    optimizeDeps: {
      include: ["@casts/icons"],
      exclude: ["@casts/config-provider"],
      esbuildOptions: {
        jsx: "automatic"
      }
    }
  })
);
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiLi4vdXRpbHMudHMiLCAicGFja2FnZXMvcmQtdml0ZS9zcmMvaW5kZXgudHMiLCAicGFja2FnZXMvcmQtdml0ZS9zcmMvY29tbW9uL2xvY2FsZS50cyIsICJwYWNrYWdlcy9yZC12aXRlL3NyYy91dGlscy9wYXRoLnRzIiwgInBhY2thZ2VzL3JkLXZpdGUvc3JjL3V0aWxzL3RvYy50cyIsICJwYWNrYWdlcy9yZC12aXRlL3NyYy9ub2RlL3Byb3ZpZGVyL2ltcG9ydC50cyIsICJwYWNrYWdlcy9yZC12aXRlL3NyYy9ub2RlL3Byb3ZpZGVyL21hcmtkb3duLnRzIiwgInBhY2thZ2VzL3JkLXZpdGUvc3JjL25vZGUvcmVtYXJrcy9jb2RlLWJsb2NrLnRzIiwgInBhY2thZ2VzL3JkLXZpdGUvc3JjL25vZGUvcmVtYXJrcy9jb2RlLWJsb2NrLXJlcGxhY2VyLnRzIiwgInBhY2thZ2VzL3JkLXZpdGUvc3JjL25vZGUvcmVtYXJrcy9yZWFjdC1hcGkudHMiLCAicGFja2FnZXMvcmQtdml0ZS9zcmMvbm9kZS9yZWh5cGVzL3RvYy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9jYXN0ZXIvRGV2ZWxvcG1lbnRzL3NlbGYvY2Qvc2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2Nhc3Rlci9EZXZlbG9wbWVudHMvc2VsZi9jZC9zaXRlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jYXN0ZXIvRGV2ZWxvcG1lbnRzL3NlbGYvY2Qvc2l0ZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB2aXRlc3RDb25maWcgZnJvbSAnQGNhc3RzL3N0YW5kYXJkL2Rpc3QvY2pzL3ZpdGUvdml0ZS5jb25maWcnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7IG9taXQgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IG1lcmdlQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcblxuaW1wb3J0IHsgZ2V0UGFja2FnZUFsaWFzIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgcmQgfSBmcm9tICcuL3BhY2thZ2VzL3JkLXZpdGUvc3JjJztcblxuY29uc3QgcGFja2FnZXNBbGlhcyA9IG9taXQoXG4gIGdldFBhY2thZ2VBbGlhcyhwYXRoLnJlc29sdmUocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3BhY2thZ2VzJykpKSxcbiAgWydAY2FzdHMvdGhlbWUvZGlzdC9lc20nLCAnQGNhc3RzL3RoZW1lL2Rpc3QvY2pzJywgJ0BjYXN0cy90aGVtZSddLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VDb25maWcoXG4gIHZpdGVzdENvbmZpZyxcbiAgZGVmaW5lQ29uZmlnKHtcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICAgIHBvcnQ6IDE1MDAwLFxuICAgICAgb3BlbjogJy8nLFxuICAgICAgaHR0cHM6IGZhbHNlLFxuICAgIH0sXG5cbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicpLFxuICAgICAgICAuLi5wYWNrYWdlc0FsaWFzLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gY3NzOiB7XG4gICAgLy8gICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgLy8gICAgIHNjc3M6IHtcbiAgICAvLyAgICAgICBhZGRpdGlvbmFsRGF0YTogJyRwcmVmaXgtY2xzOiByZGM7XFxuJyxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcblxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHJlYWN0KCksXG4gICAgICBzdmdyKCksXG4gICAgICByZCh7XG4gICAgICAgIC8vIGRvY1Jvb3Q6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicpLFxuICAgICAgfSksXG4gICAgXSxcblxuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgaW5jbHVkZTogWydAY2FzdHMvaWNvbnMnXSxcbiAgICAgIGV4Y2x1ZGU6IFsnQGNhc3RzL2NvbmZpZy1wcm92aWRlciddLFxuICAgICAgZXNidWlsZE9wdGlvbnM6IHtcbiAgICAgICAganN4OiAnYXV0b21hdGljJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2FzdGVyL0RldmVsb3BtZW50cy9zZWxmL2NkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2FzdGVyL0RldmVsb3BtZW50cy9zZWxmL2NkL3V0aWxzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jYXN0ZXIvRGV2ZWxvcG1lbnRzL3NlbGYvY2QvdXRpbHMudHNcIjtpbXBvcnQgdHlwZSB7IERpcmVudCB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IHJlYWRkaXJTeW5jLCByZWFkRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IFdlYnBhY2tDaGFpbiBmcm9tICd3ZWJwYWNrLWNoYWluJztcblxuZXhwb3J0IGNvbnN0IGdldERpcmVjdG9yeU5hbWVzID0gKHNvdXJjZTogc3RyaW5nKSA9PlxuICByZWFkZGlyU3luYyhzb3VyY2UsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KVxuICAgIC5maWx0ZXIoKGRpcmVudDogRGlyZW50KSA9PiBkaXJlbnQuaXNEaXJlY3RvcnkoKSlcbiAgICAubWFwKChkaXJlbnQ6IERpcmVudCkgPT4gZGlyZW50Lm5hbWUpO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFja2FnZURvY1BhdGhzID0gKHNvdXJjZTogc3RyaW5nKSA9PlxuICBnZXREaXJlY3RvcnlOYW1lcyhzb3VyY2UpLm1hcChcbiAgICAocGFja2FnZURpcjogc3RyaW5nKSA9PiBgcGFja2FnZXMvJHtwYWNrYWdlRGlyfS9kb2NzYCxcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhY2thZ2VOYW1lcyA9IChwYWNrYWdlRGlyTmFtZXM6IHN0cmluZ1tdKSA9PiB7XG4gIHJldHVybiBwYWNrYWdlRGlyTmFtZXMubWFwKChwYWNrYWdlRGlyKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHJlYWRGaWxlU3luYyhwYXRoLmpvaW4ocGFja2FnZURpciwgJ3BhY2thZ2UuanNvbicpLCAndXRmOCcpO1xuICAgIGNvbnN0IHBhY2thZ2VKc29uID0gSlNPTi5wYXJzZShjb250ZW50KTtcbiAgICByZXR1cm4gcGFja2FnZUpzb24ubmFtZTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGFja2FnZUFsaWFzID0gKHNvdXJjZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHBhY2thZ2VEaXJOYW1lcyA9IGdldERpcmVjdG9yeU5hbWVzKHNvdXJjZSk7XG4gIGNvbnN0IHBhY2thZ2VEaXJQYXRocyA9IHBhY2thZ2VEaXJOYW1lcy5tYXAoKHBhY2thZ2VEaXJOYW1lOiBzdHJpbmcpID0+XG4gICAgcGF0aC5qb2luKHNvdXJjZSwgcGFja2FnZURpck5hbWUpLFxuICApO1xuICBjb25zdCBwYWNrYWdlTmFtZXMgPSBnZXRQYWNrYWdlTmFtZXMocGFja2FnZURpclBhdGhzKTtcblxuICByZXR1cm4gcGFja2FnZU5hbWVzLnJlZHVjZShcbiAgICAoYWNjOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LCBwYWNrYWdlTmFtZTogc3RyaW5nLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYWxpYXMgPSB7XG4gICAgICAgIFtgJHtwYWNrYWdlTmFtZX0vZGlzdC9lc21gXTogcGF0aC5qb2luKHBhY2thZ2VEaXJQYXRoc1tpbmRleF0sICdzcmMnKSxcbiAgICAgICAgW2Ake3BhY2thZ2VOYW1lfS9kaXN0L2Nqc2BdOiBwYXRoLmpvaW4ocGFja2FnZURpclBhdGhzW2luZGV4XSwgJ3NyYycpLFxuICAgICAgICBbYCR7cGFja2FnZU5hbWV9YF06IHBhdGguam9pbihwYWNrYWdlRGlyUGF0aHNbaW5kZXhdLCAnc3JjJyksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHsgLi4uYWNjLCAuLi5hbGlhcyB9O1xuICAgIH0sXG4gICAge30sXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlUGFja2FnZUFsaWFzID0gKG1lbW86IFdlYnBhY2tDaGFpbiwgc291cmNlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcGFja2FnZURpck5hbWVzID0gZ2V0RGlyZWN0b3J5TmFtZXMoc291cmNlKTtcbiAgY29uc3QgcGFja2FnZURpclBhdGhzID0gcGFja2FnZURpck5hbWVzLm1hcCgocGFja2FnZURpck5hbWU6IHN0cmluZykgPT5cbiAgICBwYXRoLmpvaW4oc291cmNlLCBwYWNrYWdlRGlyTmFtZSksXG4gICk7XG4gIGNvbnN0IHBhY2thZ2VOYW1lcyA9IGdldFBhY2thZ2VOYW1lcyhwYWNrYWdlRGlyUGF0aHMpO1xuXG4gIHBhY2thZ2VOYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgbWVtby5yZXNvbHZlLmFsaWFzLmRlbGV0ZShuYW1lKTtcbiAgfSk7XG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2FzdGVyL0RldmVsb3BtZW50cy9zZWxmL2NkL3NpdGUvcGFja2FnZXMvcmQtdml0ZS9zcmNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jYXN0ZXIvRGV2ZWxvcG1lbnRzL3NlbGYvY2Qvc2l0ZS9wYWNrYWdlcy9yZC12aXRlL3NyYy9pbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2FzdGVyL0RldmVsb3BtZW50cy9zZWxmL2NkL3NpdGUvcGFja2FnZXMvcmQtdml0ZS9zcmMvaW5kZXgudHNcIjtpbXBvcnQgeyBjcmVhdGVGb3JtYXRBd2FyZVByb2Nlc3NvcnMgfSBmcm9tICdAbWR4LWpzL21keC9saWIvdXRpbC9jcmVhdGUtZm9ybWF0LWF3YXJlLXByb2Nlc3NvcnMuanMnO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJ0BtZHgtanMvcm9sbHVwJztcbmltcG9ydCB7IHRyYW5zZm9ybVN5bmMgfSBmcm9tICdlc2J1aWxkJztcbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IGZpbmQgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyBmcm9tICdyZWh5cGUtYXV0b2xpbmstaGVhZGluZ3MnO1xuaW1wb3J0IHJlaHlwZVNsdWcgZnJvbSAncmVoeXBlLXNsdWcnO1xuaW1wb3J0IHJlbWFya0Zyb250bWF0dGVyIGZyb20gJ3JlbWFyay1mcm9udG1hdHRlcic7XG5pbXBvcnQgcmVtYXJrR0ZNIGZyb20gJ3JlbWFyay1nZm0nO1xuaW1wb3J0IHJlbWFya01keEltYWdlcyBmcm9tICdyZW1hcmstbWR4LWltYWdlcyc7XG5pbXBvcnQgeyBTb3VyY2VNYXBHZW5lcmF0b3IgfSBmcm9tICdzb3VyY2UtbWFwJztcbmltcG9ydCB7IHRvVkZpbGUgfSBmcm9tICd0by12ZmlsZSc7XG5pbXBvcnQgdHlwZSB7IEFsaWFzLCBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJztcblxuaW1wb3J0IHsgTG9jYWxlcywgbG9jYWxlcyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCB7IGRldGVjdE1hcmtkb3ducywgcmVtYXJrUmVhY3RBcGkgfSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHsgcmVoeXBlVG9jLCByZW1hcmtDb2RlQmxvY2ssIHJlbWFya0NvZGVCbG9ja1JlcGxhY2VyIH0gZnJvbSAnLi9ub2RlJztcbmltcG9ydCB7IGdldFJ1bnRpbWVJbXBvcnRzIH0gZnJvbSAnLi9ub2RlL3Byb3ZpZGVyJztcbmltcG9ydCB7IFJlc29sdmVGdW5jdGlvbiwgUmVzb2x2ZXJSZWYgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGN1c3RvbWl6ZVRPQyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBnZXRNZHhPcHRpb25zID0gKHtcbiAgcmVzb2x2ZXJSZWYsXG4gIHJvb3QsXG59OiB7XG4gIHJlc29sdmVyUmVmOiBSZXNvbHZlclJlZjtcbiAgcm9vdD86IHN0cmluZztcbn0pOiBPcHRpb25zID0+ICh7XG4gIHByb3ZpZGVySW1wb3J0U291cmNlOiAnQG1keC1qcy9yZWFjdCcsXG4gIG1keEV4dGVuc2lvbnM6IFsnLm1keCcsICcubWQnXSxcbiAgZm9ybWF0OiAnbWR4JyxcbiAgcmVtYXJrUGx1Z2luczogW1xuICAgIHJlbWFya0dGTSxcbiAgICByZW1hcmtNZHhJbWFnZXMsXG4gICAgcmVtYXJrQ29kZUJsb2NrUmVwbGFjZXIsXG4gICAgW3JlbWFya0NvZGVCbG9jaywgeyByZXNvbHZlclJlZiwgcm9vdCB9XSxcbiAgICBbcmVtYXJrUmVhY3RBcGksIHsgcmVzb2x2ZTogcmVzb2x2ZXJSZWYuY3VycmVudCB9XSxcbiAgXSxcbiAgcmVoeXBlUGx1Z2luczogW1xuICAgIHJlaHlwZVNsdWcsXG4gICAgW1xuICAgICAgcmVoeXBlVG9jLFxuICAgICAge1xuICAgICAgICBjc3NDbGFzc2VzOiB7XG4gICAgICAgICAgdG9jOiAncmQtdG9jJyxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGluZ3M6IFsnaDInLCAnaDMnLCAnaDQnXSxcbiAgICAgICAgY3VzdG9taXplVE9DOiBjdXN0b21pemVUT0MsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW1xuICAgICAgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyxcbiAgICAgIHtcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3JkLWhlYWRpbmctbGluaycsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgICAgICAgdGFnTmFtZTogJ3N2ZycsXG4gICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gICAgICAgICAgICB2aWV3Qm94OiAnMCAwIDI0IDI0JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3JkLWhlYWRpbmctbGluay1pY29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICAgICAgICAgICAgdGFnTmFtZTogJ3BhdGgnLFxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgZDogJ00xMy4wNjA1IDguMTEwNzNMMTQuNDc0NyA5LjUyNDk0QzE3LjIwODQgMTIuMjU4NiAxNy4yMDg0IDE2LjY5MDggMTQuNDc0NyAxOS40MjQ0TDE0LjEyMTEgMTkuNzc4QzExLjM4NzUgMjIuNTExNyA2Ljk1NTMxIDIyLjUxMTcgNC4yMjE2NCAxOS43NzhDMS40ODc5NyAxNy4wNDQzIDEuNDg3OTcgMTIuNjEyMiA0LjIyMTY0IDkuODc4NDlMNS42MzU4NSAxMS4yOTI3QzMuNjgzMjMgMTMuMjQ1MyAzLjY4MzIzIDE2LjQxMTIgNS42MzU4NSAxOC4zNjM4QzcuNTg4NDcgMjAuMzE2NCAxMC43NTQzIDIwLjMxNjQgMTIuNzA2OSAxOC4zNjM4TDEzLjA2MDUgMTguMDEwMkMxNS4wMTMxIDE2LjA1NzYgMTUuMDEzMSAxMi44OTE4IDEzLjA2MDUgMTAuOTM5MkwxMS42NDYzIDkuNTI0OTRMMTMuMDYwNSA4LjExMDczWk0xOS43NzggMTQuMTIxMUwxOC4zNjM4IDEyLjcwNjlDMjAuMzE2NCAxMC43NTQzIDIwLjMxNjQgNy41ODg0NyAxOC4zNjM4IDUuNjM1ODVDMTYuNDExMiAzLjY4MzIzIDEzLjI0NTMgMy42ODMyMyAxMS4yOTI3IDUuNjM1ODVMMTAuOTM5MiA1Ljk4OTQxQzguOTg2NTMgNy45NDIwMyA4Ljk4NjUzIDExLjEwNzkgMTAuOTM5MiAxMy4wNjA1TDEyLjM1MzQgMTQuNDc0N0wxMC45MzkyIDE1Ljg4ODlMOS41MjQ5NCAxNC40NzQ3QzYuNzkxMjcgMTEuNzQxIDYuNzkxMjcgNy4zMDg4NiA5LjUyNDk0IDQuNTc1MTlMOS44Nzg0OSA0LjIyMTY0QzEyLjYxMjIgMS40ODc5NyAxNy4wNDQzIDEuNDg3OTcgMTkuNzc4IDQuMjIxNjRDMjIuNTExNyA2Ljk1NTMxIDIyLjUxMTcgMTEuMzg3NSAxOS43NzggMTQuMTIxMVonLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICBdLFxuICByZWNtYVBsdWdpbnM6IFtyZW1hcmtGcm9udG1hdHRlcl0sXG59KTtcblxuZXhwb3J0IHR5cGUgUmRDb25maWcgPSB7XG4gIHJvb3Q/OiBzdHJpbmc7XG4gIGRvdFJvb3Q/OiBzdHJpbmc7XG4gIGxvY2FsZXM/OiBMb2NhbGVzO1xufTtcblxuZXhwb3J0IGNvbnN0IHJkID0gKGNvbmZpZzogUmRDb25maWcgPSB7fSkgPT4ge1xuICByZXR1cm4gW2NyZWF0ZVBsdWdpbihjb25maWcpXTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0UmRDb25maWcgPSAoKTogUmRDb25maWcgPT4gKHtcbiAgbG9jYWxlcyxcbn0pO1xuXG5jb25zdCBjcmVhdGVQbHVnaW4gPSAodXNlckNvbmZpZzogUmRDb25maWcgPSB7fSkgPT4ge1xuICBjb25zdCBjb25maWc6IFJkQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RGVmYXVsdFJkQ29uZmlnKCksIHVzZXJDb25maWcpO1xuXG4gIGNvbnN0IHZpcnR1YWxNb2R1bGVJZCA9ICd2aXJ0dWFsOnJkLXByb3ZpZGVyJztcbiAgY29uc3QgcmVzb2x2ZWRWaXJ0dWFsTW9kdWxlSWQgPSBgXFwwJHt2aXJ0dWFsTW9kdWxlSWR9YDtcblxuICBsZXQgZG9jUm9vdCA9IGNvbmZpZz8ucm9vdCB8fCAnLi4vJztcbiAgbGV0IHJvb3Q6IHN0cmluZztcblxuICBsZXQgcHJvY2Vzc29yczogUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlRm9ybWF0QXdhcmVQcm9jZXNzb3JzPjtcblxuICBsZXQgcmVzb2x2ZTogUmVzb2x2ZUZ1bmN0aW9uO1xuXG4gIGxldCBhbGlhczogQWxpYXNbXTtcblxuICBjb25zdCBwbHVnaW46IFBsdWdpbk9wdGlvbiA9IHtcbiAgICBuYW1lOiAncmQtdml0ZScsXG4gICAgZW5mb3JjZTogJ3ByZScsXG5cbiAgICBjb25maWc6ICgpID0+ICh7XG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIG1vZHVsZXM6IFsnQG1keC1qcy9yZWFjdCddLFxuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICdAcm9vdCc6IGRvY1Jvb3QsXG4gICAgICAgICAgJ0BjYXN0cy9yZC12aXRlJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgcmVzb2x2ZUlkOiAoaWQpID0+IHtcbiAgICAgIGlmIChpZCA9PT0gdmlydHVhbE1vZHVsZUlkKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlZFZpcnR1YWxNb2R1bGVJZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuXG4gICAgbG9hZChpZCkge1xuICAgICAgaWYgKGlkID09PSByZXNvbHZlZFZpcnR1YWxNb2R1bGVJZCkge1xuICAgICAgICBjb25zdCBtYXJrZG93blNvdXJjZXMgPSBkZXRlY3RNYXJrZG93bnMoZG9jUm9vdCk7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyQ29udGVudCA9IHJlYWRGaWxlU3luYyhcbiAgICAgICAgICBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9ub2RlL3Byb3ZpZGVyL3ZpcnR1YWwudHMnKSxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gYFxuICAgICAgICAgICR7cHJvdmlkZXJDb250ZW50LnRvU3RyaW5nKCl9O1xuICAgICAgICAgIGV4cG9ydCBjb25zdCByZFByb3ZpZGVyID0gaW5pdFJkUHJvdmlkZXIoe1xuICAgICAgICAgICAgc291cmNlczogJHtKU09OLnN0cmluZ2lmeShtYXJrZG93blNvdXJjZXMpfSxcbiAgICAgICAgICAgIHJ1bnRpbWVJbXBvcnRzOiAke2dldFJ1bnRpbWVJbXBvcnRzKG1hcmtkb3duU291cmNlcyl9LFxuICAgICAgICAgIH0pO1xuICAgICAgICBgO1xuXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1TeW5jKGNvbnRlbnQsIHsgbG9hZGVyOiAndHN4JyB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuXG4gICAgLy8gY29uZmlnOiAoY29uZmlnLCB7IGNvbW1hbmQgfSkgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coJ1x1OEZEOVx1OTFDQ1x1NjYyRmNvbmZpZ1x1OTRBOVx1NUI1MCcsIHsgY29uZmlnLCBjb21tYW5kIH0pO1xuICAgIC8vIH0sXG5cbiAgICBjb25maWdSZXNvbHZlZChyZXNvbHZlZENvbmZpZykge1xuICAgICAgLy8gY29uc29sZS5sb2coJ1x1OEZEOVx1OTFDQ1x1NjYyRmNvbmZpZ1Jlc29sdmVkXHU5NEE5XHU1QjUwJywgeyByZXNvbHZlZENvbmZpZyB9KTtcbiAgICAgIGlmICghZG9jUm9vdCkge1xuICAgICAgICBkb2NSb290ID0gcmVzb2x2ZWRDb25maWcucm9vdDtcbiAgICAgIH1cbiAgICAgIGlmICghcm9vdCkge1xuICAgICAgICByb290ID0gcmVzb2x2ZWRDb25maWcucm9vdDtcbiAgICAgIH1cbiAgICAgIGFsaWFzID0gcmVzb2x2ZWRDb25maWcucmVzb2x2ZS5hbGlhcztcbiAgICB9LFxuICAgIGFzeW5jIHRyYW5zZm9ybSh2YWx1ZSwgcGF0aCkge1xuICAgICAgaWYgKCFyZXNvbHZlKSB7XG4gICAgICAgIHJlc29sdmUgPSAoc291cmNlLCBpbXBvcnRlciwgb3B0aW9ucykgPT4ge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZE9wdGlvbnM6IHR5cGVvZiBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2tpcFNlbGY6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY29uc3QgY3VycmVudEFsaWFzID0gZmluZChhbGlhcywgeyBmaW5kOiBzb3VyY2UgfSk7XG5cbiAgICAgICAgICBpZiAoY3VycmVudEFsaWFzPy5yZXBsYWNlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVhbFNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKHNvdXJjZSwgY3VycmVudEFsaWFzLnJlcGxhY2VtZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc29sdmUocmVhbFNvdXJjZSwgaW1wb3J0ZXIsIG1lcmdlZE9wdGlvbnMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aGlzLnJlc29sdmUoc291cmNlLCBpbXBvcnRlciwgbWVyZ2VkT3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmICghcHJvY2Vzc29ycykge1xuICAgICAgICBwcm9jZXNzb3JzID0gY3JlYXRlRm9ybWF0QXdhcmVQcm9jZXNzb3JzKHtcbiAgICAgICAgICBTb3VyY2VNYXBHZW5lcmF0b3IsXG4gICAgICAgICAgLi4uZ2V0TWR4T3B0aW9ucyh7XG4gICAgICAgICAgICByZXNvbHZlclJlZjogeyBjdXJyZW50OiByZXNvbHZlIH0sXG4gICAgICAgICAgICByb290LFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBleHRuYW1lcywgcHJvY2VzcyB9ID0gcHJvY2Vzc29ycztcbiAgICAgIGNvbnN0IGZpbGUgPSB0b1ZGaWxlKHsgdmFsdWUsIHBhdGggfSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgZmlsZS5leHRuYW1lICYmXG4gICAgICAgIC8vIGZpbHRlcihmaWxlLnBhdGgpICYmXG4gICAgICAgIGV4dG5hbWVzLmluY2x1ZGVzKGZpbGUuZXh0bmFtZSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBjb21waWxlZCA9IGF3YWl0IHByb2Nlc3MoZmlsZSk7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBTdHJpbmcoY29tcGlsZWQudmFsdWUpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7IGNvZGUsIG1hcDogY29tcGlsZWQubWFwIH07XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICAgIC8vIC8vIEB0cy1pZ25vcmUgbWR4UGx1Z2luIGhhcyB0cmFuc2Zvcm0gZnVuY3Rpb25cbiAgICAgIC8vIGNvbnN0IGNvZGUgPSBhd2FpdCBtZHhQbHVnaW4udHJhbnNmb3JtPy4odmFsdWUsIHBhdGgpO1xuICAgICAgLy9cbiAgICAgIC8vIGlmIChwYXRoLmluY2x1ZGVzKCd0b29sdGlwJykgJiYgY29kZSkge1xuICAgICAgLy8gICByZXR1cm4ge1xuICAgICAgLy8gICAgIC4uLmNvZGUsXG4gICAgICAvLyAgICAgLy8gY29kZTogXCJpbXBvcnQoJy8uLi9kb2NzL2hlbHAubWQnKVwiICsgY29kZS5jb2RlLFxuICAgICAgLy8gICB9O1xuICAgICAgLy8gfVxuICAgICAgLy8gcmV0dXJuIGNvZGU7XG4gICAgfSxcblxuICAgIC8vIGhhbmRsZUhvdFVwZGF0ZShjdHgpIHtcbiAgICAvLyAgIGNvbnN0IHsgc2VydmVyIH0gPSBjdHg7XG4gICAgLy8gICBjb25zb2xlLmxvZygnZGVidWcgaGFuZGxlSG90VXBkYXRlJywgc2VydmVyKTtcbiAgICAvLyAgIHNlcnZlci53cy5zZW5kKHtcbiAgICAvLyAgICAgdHlwZTogJ2Z1bGwtcmVsb2FkJyxcbiAgICAvLyAgICAgcGF0aDogJyonLFxuICAgIC8vICAgfSk7XG4gICAgLy8gfSxcblxuICAgIC8vIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXIpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdcdThGRDlcdTkxQ0NcdTY2MkZjb25maWd1cmVTZXJ2ZXJcdTk0QTlcdTVCNTAnLCB7IHNlcnZlciB9KTtcbiAgICAvLyB9LFxuICAgIC8vXG4gICAgLy8gdHJhbnNmb3JtSW5kZXhIdG1sKGh0bWwpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdcdThGRDlcdTkxQ0NcdTY2MkZ0cmFuc2Zvcm1JbmRleEh0bWxcdTk0QTlcdTVCNTAnLCB7IGh0bWwgfSk7XG4gICAgLy8gfSxcbiAgfTtcblxuICByZXR1cm4gcGx1Z2luO1xufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2Nhc3Rlci9EZXZlbG9wbWVudHMvc2VsZi9jZC9zaXRlL3BhY2thZ2VzL3JkLXZpdGUvc3JjL2NvbW1vblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2Nhc3Rlci9EZXZlbG9wbWVudHMvc2VsZi9jZC9zaXRlL3BhY2thZ2VzL3JkLXZpdGUvc3JjL2NvbW1vbi9sb2NhbGUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2Nhc3Rlci9EZXZlbG9wbWVudHMvc2VsZi9jZC9zaXRlL3BhY2thZ2VzL3JkLXZpdGUvc3JjL2NvbW1vbi9sb2NhbGUudHNcIjtleHBvcnQgdHlwZSBMb2NhbGVzID0gW3N0cmluZywgc3RyaW5nXVtdO1xuXG5leHBvcnQgdHlwZSBMb2NhbGVDb2RlID0gc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBMb2NhbGVDb2RlcyA9IExvY2FsZUNvZGVbXTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsZXM6IExvY2FsZXMgPSBbXG4gIFsnZW4tVVMnLCAnRW5nbGlzaCddLFxuICBbJ3poLUNOJywgJ1x1NEUyRFx1NjU4NyddLFxuXTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsZUNvZGVzOiBMb2NhbGVDb2RlcyA9IGxvY2FsZXMubWFwKChpKSA9PiBpWzBdKTtcblxuZXhwb3J0IGNvbnN0IGZhbGxiYWNrTG9jYWxlQ29kZSA9IGxvY2FsZUNvZGVzWzBdO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2FzdGVyL0RldmVsb3BtZW50cy9zZWxmL2NkL3NpdGUvcGFja2FnZXMvcmQtdml0ZS9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jYXN0ZXIvRGV2ZWxvcG1lbnRzL3NlbGYvY2Qvc2l0ZS9wYWNrYWdlcy9yZC12aXRlL3NyYy91dGlscy9wYXRoLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jYXN0ZXIvRGV2ZWxvcG1lbnRzL3NlbGYvY2Qvc2l0ZS9wYWNrYWdlcy9yZC12aXRlL3NyYy91dGlscy9wYXRoLnRzXCI7aW1wb3J0IHsgZmlsdGVyLCBpZGVudGl0eSwgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbmltcG9ydCB7IGZhbGxiYWNrTG9jYWxlQ29kZSwgbG9jYWxlQ29kZXMgfSBmcm9tICcuLi9jb21tb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlUmVsYXRpdmVQYXRoKHJlbGF0aXZlUGF0aDogc3RyaW5nKSB7XG4gIC8vIHByZWZpeCAuIGZvciBzYW1lLWxldmVsIHBhdGhcbiAgaWYgKCFyZWxhdGl2ZVBhdGguc3RhcnRzV2l0aCgnLicpKSB7XG4gICAgcmVsYXRpdmVQYXRoID0gYC4vJHtyZWxhdGl2ZVBhdGh9YDtcbiAgfVxuICByZXR1cm4gcmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgY29uc3QgZW5zdXJlU2xhc2hTdGFydFBhdGggPSAocGF0aDogc3RyaW5nKSA9PiB7XG4gIGlmIChwYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHJldHVybiBwYXRoO1xuICB9XG4gIHJldHVybiBgLyR7cGF0aH1gO1xufTtcblxuLyoqXG4gKiBwYXJzZSBzb3VyY2UgaXRlbVxuICogQHBhcmFtIHthbnl9IGl0ZW0gLSBzb3VyY2UgaXRlbVxuICovXG5leHBvcnQgY29uc3QgcGFyc2VQYXRoID0gKGl0ZW06IGFueSkgPT4ge1xuICBjb25zdCBsb2NhbGVzUkUgPSBuZXcgUmVnRXhwKGBcXFxcLigke2xvY2FsZUNvZGVzLmpvaW4oJ3wnKX0pJGApO1xuICBjb25zdCByb3V0ZVBhdGhSRSA9IG5ldyBSZWdFeHAoJyhkb2NzfHNyYykoW1xcXFwvXFxcXHdcXFxcZFxcXFwtX1xcXFwuXSspPy5tZCcpO1xuICBjb25zdCByb3V0ZVBhdGggPSByb3V0ZVBhdGhSRS5leGVjKGl0ZW0uaWQpPy5bMl0gfHwgJyc7XG5cbiAgbGV0IHBhdGhzID0gcm91dGVQYXRoLnNwbGl0KCcvJyk7XG4gIGNvbnN0IG5hbWVQYXRoID0gcGF0aHNbcGF0aHMubGVuZ3RoIC0gMV07XG5cbiAgcGF0aHMgPSBwYXRocy5zbGljZSgwLCAtMSk7XG5cbiAgY29uc3QgbWV0YVBhdGggPSAoaXRlbS5tZXRhLm5hdj8ucGF0aCB8fCAnJykgKyAoaXRlbS5tZXRhLmdyb3VwPy5wYXRoIHx8ICcnKTtcblxuICBpZiAobWV0YVBhdGgpIHtcbiAgICBjb25zdCBjbGVhck1ldGFQYXRoID0gZmlsdGVyKG1ldGFQYXRoLnNwbGl0KCcvJyksIGlkZW50aXR5KTtcblxuICAgIHBhdGhzLnNwbGljZSgwLCAwLCAuLi5jbGVhck1ldGFQYXRoKTtcbiAgfVxuXG4gIGNvbnN0IGxvY2FsZSA9IGxvY2FsZXNSRS5leGVjKG5hbWVQYXRoKT8uWzFdO1xuXG4gIHBhdGhzLnB1c2gobmFtZVBhdGgucmVwbGFjZShsb2NhbGVzUkUsICcnKSk7XG5cbiAgcGF0aHMgPSBmaWx0ZXIocGF0aHMsIChwKSA9PiAhaXNFbXB0eShwKSk7XG5cbiAgY29uc3QgcHJlZml4ID0gbG9jYWxlICYmIGxvY2FsZSAhPT0gZmFsbGJhY2tMb2NhbGVDb2RlID8gYC8ke2xvY2FsZX1gIDogJyc7XG4gIHBhdGhzLnNwbGljZSgwLCAwLCBwcmVmaXgpO1xuXG4gIHJldHVybiB7IHBhdGhzLCBsb2NhbGU6IGxvY2FsZSB8fCBmYWxsYmFja0xvY2FsZUNvZGUgfTtcbn07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9jYXN0ZXIvRGV2ZWxvcG1lbnRzL3NlbGYvY2Qvc2l0ZS9wYWNrYWdlcy9yZC12aXRlL3NyYy91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2Nhc3Rlci9EZXZlbG9wbWVudHMvc2VsZi9jZC9zaXRlL3BhY2thZ2VzL3JkLXZpdGUvc3JjL3V0aWxzL3RvYy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2FzdGVyL0RldmVsb3BtZW50cy9zZWxmL2NkL3NpdGUvcGFja2FnZXMvcmQtdml0ZS9zcmMvdXRpbHMvdG9jLnRzXCI7aW1wb3J0IHsgSHRtbEVsZW1lbnROb2RlIH0gZnJvbSAnQGpzZGV2dG9vbHMvcmVoeXBlLXRvYyc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ2Fjb3JuJztcbmltcG9ydCB7IFByb2dyYW0gfSBmcm9tICdlc3RyZWUnO1xuaW1wb3J0IHsgaWRlbnRpdHksIGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5leHBvcnQgdHlwZSBUb2NJdGVtID0ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbiAgY2hpbGRyZW4/OiBUb2NJdGVtW107XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VG9jRGF0YSA9IChub2RlOiBIdG1sRWxlbWVudE5vZGUpID0+IHtcbiAgY29uc3QgZmluZFRvY1Jvb3QgPSAobm9kZT86IEh0bWxFbGVtZW50Tm9kZSk6IEh0bWxFbGVtZW50Tm9kZSB8IHVuZGVmaW5lZCA9PiB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChub2RlPy5wcm9wZXJ0aWVzPy5jbGFzc05hbWU/LmluY2x1ZGVzKCd0b2MtbGV2ZWwnKSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgaWYgKGlzRW1wdHkobm9kZT8uY2hpbGRyZW4pKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBmaW5kVG9jUm9vdChub2RlLmNoaWxkcmVuPy5bMF0gYXMgSHRtbEVsZW1lbnROb2RlKTtcbiAgfTtcblxuICBjb25zdCByb290TGV2ZWwgPSBmaW5kVG9jUm9vdChub2RlKTtcblxuICBjb25zdCB0cmFuc2Zvcm1MZXZlbCA9IChsZXZlbD86IEh0bWxFbGVtZW50Tm9kZSk6IFRvY0l0ZW1bXSB8IHVuZGVmaW5lZCA9PiB7XG4gICAgaWYgKCFsZXZlbD8uY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IChsZXZlbC5jaGlsZHJlbiBhcyBIdG1sRWxlbWVudE5vZGVbXSkubWFwKFxuICAgICAgKGl0ZW06IEh0bWxFbGVtZW50Tm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBhbmNob3IgPSBpdGVtLmNoaWxkcmVuPy5bMF0gYXMgSHRtbEVsZW1lbnROb2RlIHwgdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIWFuY2hvcikge1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGlsZDogVG9jSXRlbSA9IHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIHZhbHVlIHdpbGwgZXhpc3RcbiAgICAgICAgICB0aXRsZTogYW5jaG9yLmNoaWxkcmVuPy5bMF0/LnZhbHVlLFxuICAgICAgICAgIGhyZWY6IGFuY2hvci5wcm9wZXJ0aWVzLmhyZWYhLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNoaWxkTGV2ZWwgPSBpdGVtLmNoaWxkcmVuPy5bMV0gYXMgSHRtbEVsZW1lbnROb2RlO1xuXG4gICAgICAgIGlmIChjaGlsZExldmVsKSB7XG4gICAgICAgICAgY2hpbGQuY2hpbGRyZW4gPSB0cmFuc2Zvcm1MZXZlbChjaGlsZExldmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGNsZWFuTm9kZXMgPSBub2Rlcy5maWx0ZXIoaWRlbnRpdHkpIGFzIFRvY0l0ZW1bXTtcblxuICAgIHJldHVybiBpc0VtcHR5KGNsZWFuTm9kZXMpID8gdW5kZWZpbmVkIDogY2xlYW5Ob2RlcztcbiAgfTtcblxuICByZXR1cm4gdHJhbnNmb3JtTGV2ZWwocm9vdExldmVsKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUb2NEYXRhQXN0ID0gKHRvYzogSHRtbEVsZW1lbnROb2RlKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBnZXRUb2NEYXRhKHRvYyk7XG5cbiAgY29uc3QgZGF0YUFzdCA9IHBhcnNlKGBPYmplY3QuYXNzaWduKCR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9KWAsIHtcbiAgICBlY21hVmVyc2lvbjogJ2xhdGVzdCcsXG4gIH0pO1xuXG4gIHJldHVybiBkYXRhQXN0O1xufTtcblxuZXhwb3J0IGNvbnN0IGN1c3RvbWl6ZVRPQyA9ICh0b2M6IEh0bWxFbGVtZW50Tm9kZSkgPT4ge1xuICBjb25zdCBkYXRhID0gZ2V0VG9jRGF0YSh0b2MpIHx8IFtdO1xuXG4gIGNvbnN0IGRhdGFDb2RlID0gYCR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YDtcblxuICBjb25zdCBkYXRhQXN0ID0gcGFyc2UoZGF0YUNvZGUsIHtcbiAgICBlY21hVmVyc2lvbjogJ2xhdGVzdCcsXG4gIH0pO1xuXG4gIE9iamVjdC5hc3NpZ24odG9jLCB7XG4gICAgdHlwZTogJ21keEpzeEZsb3dFbGVtZW50JyxcbiAgICBuYW1lOiAnVG9jJyxcbiAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdtZHhKc3hBdHRyaWJ1dGUnLFxuICAgICAgICBuYW1lOiAnZGF0YScsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgdHlwZTogJ21keEpzeEF0dHJpYnV0ZVZhbHVlRXhwcmVzc2lvbicsXG4gICAgICAgICAgdmFsdWU6IGRhdGFDb2RlLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGVzdHJlZTogZGF0YUFzdCBhcyB1bmtub3duIGFzIFByb2dyYW0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSk7XG4gIHJldHVybiB0b2M7XG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2FzdGVyL0RldmVsb3BtZW50cy9zZWxmL2NkL3NpdGUvcGFja2FnZXMvcmQtdml0ZS9zcmMvbm9kZS9wcm92aWRlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2Nhc3Rlci9EZXZlbG9wbWVudHMvc2VsZi9jZC9zaXRlL3BhY2thZ2VzL3JkLXZpdGUvc3JjL25vZGUvcHJvdmlkZXIvaW1wb3J0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jYXN0ZXIvRGV2ZWxvcG1lbnRzL3NlbGYvY2Qvc2l0ZS9wYWNrYWdlcy9yZC12aXRlL3NyYy9ub2RlL3Byb3ZpZGVyL2ltcG9ydC50c1wiO2ltcG9ydCB7IFNvdXJjZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGVuc3VyZVNsYXNoU3RhcnRQYXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0UnVudGltZUltcG9ydHMgPSAoc291cmNlczogU291cmNlW10pID0+IHtcbiAgcmV0dXJuIGBcbiAgICB7XG4gICAgICAke3NvdXJjZXNcbiAgICAgICAgLm1hcCgoc291cmNlOiBTb3VyY2UpID0+IHtcbiAgICAgICAgICBjb25zdCBpZCA9IGVuc3VyZVNsYXNoU3RhcnRQYXRoKHNvdXJjZS5wYXRoKTtcbiAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICcke2lkfSc6IHtcbiAgICAgICAgICAgIGltcG9ydDogaW1wb3J0Lm1ldGEuZ2xvYignJHtpZH0nKVsnJHtpZH0nXSxcbiAgICAgICAgICAgIC8vIHJhdzogaW1wb3J0Lm1ldGEuZ2xvYignJHtpZH0nLCB7IGFzOiAncmF3JyB9KVsnJHtpZH0nXSxcbiAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcsJyl9XG4gICAgfVxuICBgO1xufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2Nhc3Rlci9EZXZlbG9wbWVudHMvc2VsZi9jZC9zaXRlL3BhY2thZ2VzL3JkLXZpdGUvc3JjL25vZGUvcHJvdmlkZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jYXN0ZXIvRGV2ZWxvcG1lbnRzL3NlbGYvY2Qvc2l0ZS9wYWNrYWdlcy9yZC12aXRlL3NyYy9ub2RlL3Byb3ZpZGVyL21hcmtkb3duLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jYXN0ZXIvRGV2ZWxvcG1lbnRzL3NlbGYvY2Qvc2l0ZS9wYWNrYWdlcy9yZC12aXRlL3NyYy9ub2RlL3Byb3ZpZGVyL21hcmtkb3duLnRzXCI7aW1wb3J0IHJlaHlwZVRvYyBmcm9tICdAanNkZXZ0b29scy9yZWh5cGUtdG9jJztcbmltcG9ydCB7IGNvbXBpbGVTeW5jIH0gZnJvbSAnQG1keC1qcy9tZHgnO1xuaW1wb3J0IGZnIGZyb20gJ2Zhc3QtZ2xvYic7XG5pbXBvcnQgeyBpc0VtcHR5LCByZWR1Y2UgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcmVoeXBlU2x1ZyBmcm9tICdyZWh5cGUtc2x1Zyc7XG5pbXBvcnQgeyByZWFkU3luYyB9IGZyb20gJ3RvLXZmaWxlJztcbmltcG9ydCB7IG1hdHRlciB9IGZyb20gJ3ZmaWxlLW1hdHRlcic7XG5pbXBvcnQgeyBub3JtYWxpemVQYXRoIH0gZnJvbSAndml0ZSc7XG5cbmltcG9ydCB7IFJlc29sdmVGdW5jdGlvbiwgU291cmNlLCBTb3VyY2VEYXRhLCBTb3VyY2VNZXRhIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgcmVtYXJrQ29kZUJsb2NrUmVwbGFjZXIgfSBmcm9tICcuLi9yZW1hcmtzJztcbmltcG9ydCB7IHJlbWFya0NvZGVCbG9ja1N0YW5kYWxvbmUgfSBmcm9tICcuLi9yZW1hcmtzL2NvZGUtYmxvY2snO1xuXG5leHBvcnQgdHlwZSBEZXRlY3RNYXJrZG93bnNPcHRpb25zID0ge1xuICB3aXRoTWV0YT86IGJvb2xlYW47XG4gIHJlc29sdmU/OiBSZXNvbHZlRnVuY3Rpb247XG59O1xuXG5jb25zdCBkZWZhdWx0RGV0ZWN0TWFya2Rvd25zT3B0aW9uczogUGFydGlhbDxEZXRlY3RNYXJrZG93bnNPcHRpb25zPiA9IHtcbiAgd2l0aE1ldGE6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgZGV0ZWN0TWFya2Rvd25zID0gKFxuICByb290OiBzdHJpbmcsXG4gIG9wdGlvbnM6IERldGVjdE1hcmtkb3duc09wdGlvbnMgPSB7fSxcbikgPT4ge1xuICBjb25zdCB7IHdpdGhNZXRhIH0gPSBPYmplY3QuYXNzaWduKGRlZmF1bHREZXRlY3RNYXJrZG93bnNPcHRpb25zLCBvcHRpb25zKTtcblxuICBjb25zdCBwYXRocyA9IGZnXG4gICAgLnN5bmMoWycqKi9kb2NzLyoqL1teX10qLkAobWR8bWR4KScsICcqKi9zcmMvKiovW15fXSouQChtZHxtZHgpJ10sIHtcbiAgICAgIGN3ZDogcm9vdCxcbiAgICAgIGlnbm9yZTogWycqKi9ub2RlX21vZHVsZXMvKionXSxcbiAgICB9KVxuICAgIC5tYXAoKHApID0+IHtcbiAgICAgIGNvbnN0IGl0ZW06IFNvdXJjZSA9IHtcbiAgICAgICAgaWQ6IG5vcm1hbGl6ZVBhdGgocCksXG4gICAgICAgIHBhdGg6IG5vcm1hbGl6ZVBhdGgocGF0aC5wb3NpeC5qb2luKHJvb3QsIHApKSxcbiAgICAgICAgZGF0YToge30sXG4gICAgICB9O1xuICAgICAgaWYgKHdpdGhNZXRhKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSByZWFkU3luYyhpdGVtLnBhdGgpO1xuICAgICAgICBpdGVtLm1ldGEgPSBtYXR0ZXIoZmlsZSkuZGF0YS5tYXR0ZXIgYXMgU291cmNlTWV0YTtcblxuICAgICAgICBjb25zdCBjb21waWxlZEZpbGUgPSBjb21waWxlU3luYyhmaWxlLCB7XG4gICAgICAgICAgcmVtYXJrUGx1Z2luczogW3JlbWFya0NvZGVCbG9ja1JlcGxhY2VyLCByZW1hcmtDb2RlQmxvY2tTdGFuZGFsb25lXSxcbiAgICAgICAgICByZWh5cGVQbHVnaW5zOiBbcmVoeXBlU2x1ZywgcmVoeXBlVG9jXSxcbiAgICAgICAgICBmb3JtYXQ6ICdtZHgnLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWlzRW1wdHkoY29tcGlsZWRGaWxlLmRhdGEuc3RhbmRhbG9uZUNvZGVCbG9ja3MpKSB7XG4gICAgICAgICAgaXRlbS5kYXRhLnN0YW5kYWxvbmVDb2RlQmxvY2tzID0gcmVkdWNlKFxuICAgICAgICAgICAgY29tcGlsZWRGaWxlLmRhdGFcbiAgICAgICAgICAgICAgLnN0YW5kYWxvbmVDb2RlQmxvY2tzIGFzIFNvdXJjZURhdGFbJ3N0YW5kYWxvbmVDb2RlQmxvY2tzJ10sXG4gICAgICAgICAgICAoYWNjLCBibG9ja1NvdXJjZSwgaWQpID0+ICh7XG4gICAgICAgICAgICAgIC4uLmFjYyxcbiAgICAgICAgICAgICAgW2lkXTogbm9ybWFsaXplUGF0aChibG9ja1NvdXJjZSksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG5cbiAgcmV0dXJuIHBhdGhzO1xufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2Nhc3Rlci9EZXZlbG9wbWVudHMvc2VsZi9jZC9zaXRlL3BhY2thZ2VzL3JkLXZpdGUvc3JjL25vZGUvcmVtYXJrc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2Nhc3Rlci9EZXZlbG9wbWVudHMvc2VsZi9jZC9zaXRlL3BhY2thZ2VzL3JkLXZpdGUvc3JjL25vZGUvcmVtYXJrcy9jb2RlLWJsb2NrLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jYXN0ZXIvRGV2ZWxvcG1lbnRzL3NlbGYvY2Qvc2l0ZS9wYWNrYWdlcy9yZC12aXRlL3NyYy9ub2RlL3JlbWFya3MvY29kZS1ibG9jay50c1wiO2ltcG9ydCB7IE5vZGUsIHBhcnNlU3luYywgdHJhdmVyc2UgfSBmcm9tICdAYmFiZWwvY29yZSc7XG5pbXBvcnQgeyBpc0lkZW50aWZpZXIsIGlzU3RyaW5nTGl0ZXJhbCB9IGZyb20gJ0BiYWJlbC90eXBlcyc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ2Fjb3JuJztcbmltcG9ydCB7IExvYWRlciwgdHJhbnNmb3JtU3luYyB9IGZyb20gJ2VzYnVpbGQnO1xuaW1wb3J0IHsgUHJvZ3JhbSB9IGZyb20gJ2VzdHJlZSc7XG5pbXBvcnQgeyBleGlzdHNTeW5jLCByZWFkRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyByZXNvbHZlIGFzIHBvbHlmaWxsUmVzb2x2ZSB9IGZyb20gJ2ltcG9ydC1tZXRhLXJlc29sdmUnO1xuaW1wb3J0IHsgZmluZCwgaXNFbXB0eSwgaXNTdHJpbmcsIG1hcCwgemlwT2JqZWN0IH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB0eXBlIHsgTWR4SnN4Rmxvd0VsZW1lbnQgfSBmcm9tICdtZGFzdC11dGlsLW1keC1qc3gnO1xuaW1wb3J0IHBhdGgsIHsgZXh0bmFtZSwgcmVsYXRpdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB0eXBlIHsgUGx1Z2luLCBUcmFuc2Zvcm1lciB9IGZyb20gJ3VuaWZpZWQnO1xuaW1wb3J0IHsgdmlzaXQgfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0JztcbmltcG9ydCB7IHBhdGhUb0ZpbGVVUkwgfSBmcm9tICd1cmwnO1xuXG5pbXBvcnQgeyBSZXNvbHZlclJlZiB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGVuc3VyZVNsYXNoU3RhcnRQYXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgZW5zdXJlUmVsYXRpdmVQYXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGF0aCc7XG5cbmV4cG9ydCBjb25zdCBqc0V4dFJlZ2V4ID0gL1xcLih0c3g/fGpzeD8pJC87XG5cbi8qKiBjaGVjayBpcyBqcyBmaWxlICovXG5leHBvcnQgY29uc3QgaXNKc0ZpbGUgPSAocGF0aDogc3RyaW5nKSA9PiAvKC5tP3RzeD98Lm0/anN4PykkLy50ZXN0KHBhdGgpO1xuXG5leHBvcnQgY29uc3QgaXNOb2RlTW9kdWxlUGFja2FnZSA9IChwYXRoPzogc3RyaW5nKSA9PlxuICBwYXRoICYmIChwYXRoLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSB8fCBwYXRoLmluY2x1ZGVzKCdkaXN0JykpO1xuXG4vKiogcGFyc2UgY29kZSB0byBhc3QgdXNpbmcgQGJhYmVsL3BhcnNlciAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlRmlsZVN5bmMgPSAoXG4gIHBhdGg6IHN0cmluZyxcbik6IFJldHVyblR5cGU8dHlwZW9mIHBhcnNlU3luYz4gfCB2b2lkID0+IHtcbiAgY29uc3QgY29kZSA9IHJlYWRGaWxlU3luYyhwYXRoKS50b1N0cmluZygpO1xuICBjb25zdCBleHQgPSBqc0V4dFJlZ2V4LmV4ZWMocGF0aCk/LlsxXSB8fCAndHN4JztcblxuICB0cnkge1xuICAgIGNvbnN0IHRyYW5zZm9ybVJlc3VsdCA9IHRyYW5zZm9ybVN5bmMoY29kZSwge1xuICAgICAgbG9hZGVyOiBleHQgYXMgTG9hZGVyLFxuICAgIH0pO1xuICAgIHJldHVybiBwYXJzZVN5bmModHJhbnNmb3JtUmVzdWx0LmNvZGUpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZygnZmFpbGVkIHRvIHBhcnNlU3luYzonLCBwYXRoKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNvbGxlY3RJbXBvcnRTb3VyY2VzRnJvbUFzdCA9IChhc3Q6IE5vZGUpID0+IHtcbiAgY29uc3Qgc291cmNlc1NldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIGlmIChhc3QpIHtcbiAgICB0cmF2ZXJzZShhc3QsIHtcbiAgICAgIEltcG9ydERlY2xhcmF0aW9uOiAocGF0aCkgPT4ge1xuICAgICAgICBzb3VyY2VzU2V0LmFkZChwYXRoLm5vZGUuc291cmNlLnZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBDYWxsRXhwcmVzc2lvbjogKHBhdGgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzSWRlbnRpZmllcihwYXRoLm5vZGUuY2FsbGVlKSAmJlxuICAgICAgICAgIHBhdGgubm9kZS5jYWxsZWUubmFtZSA9PT0gJ3JlcXVpcmUnICYmXG4gICAgICAgICAgaXNTdHJpbmdMaXRlcmFsKHBhdGgubm9kZS5hcmd1bWVudHNbMF0pXG4gICAgICAgICkge1xuICAgICAgICAgIHNvdXJjZXNTZXQuYWRkKHBhdGgubm9kZS5hcmd1bWVudHNbMF0udmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIEFycmF5LmZyb20oc291cmNlc1NldCk7XG59O1xuXG5leHBvcnQgY29uc3QgZW5zdXJlSnNFeHQgPSAoc291cmNlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QganNFeHRzID0gW1xuICAgICcudHN4JyxcbiAgICAnLnRzJyxcbiAgICAnLmpzeCcsXG4gICAgJy5qcycsXG4gICAgJy5tdHMnLFxuICAgICcubXRzeCcsXG4gICAgJy5tanMnLFxuICAgICcubWpzeCcsXG4gIF07XG4gIGNvbnN0IGN1cnJlbnRFeHQgPSBleHRuYW1lKHNvdXJjZSkucmVwbGFjZSgnLnRzeCcsICcnKTtcblxuICBpZiAoY3VycmVudEV4dCkge1xuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICBmb3IgKGNvbnN0IGV4dCBvZiBqc0V4dHMpIHtcbiAgICBjb25zdCBmdWxsU291cmNlID0gYCR7c291cmNlfSR7ZXh0fWA7XG4gICAgaWYgKGV4aXN0c1N5bmMoZnVsbFNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBmdWxsU291cmNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzb3VyY2U7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtYXJrQ29kZUJsb2NrOiBQbHVnaW48XG4gIFtcbiAgICB7XG4gICAgICByZXNvbHZlclJlZj86IFJlc29sdmVyUmVmO1xuICAgICAgcm9vdD86IHN0cmluZztcbiAgICB9LFxuICBdLFxuICBNZHhKc3hGbG93RWxlbWVudFxuPiA9IChvcHRpb25zKTogVHJhbnNmb3JtZXIgPT4ge1xuICBjb25zdCB7IHJlc29sdmVyUmVmLCByb290IH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHJlc29sdmUgPVxuICAgIHJlc29sdmVyUmVmPy5jdXJyZW50ID8/XG4gICAgKGFzeW5jIChzb3VyY2UsIGltcG9ydGVyKSA9PiB7XG4gICAgICBjb25zdCBocmVmID0gcGF0aFRvRmlsZVVSTChpbXBvcnRlciEpLmhyZWY7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogcG9seWZpbGxSZXNvbHZlKHNvdXJjZSwgaHJlZiksXG4gICAgICB9O1xuICAgIH0pO1xuXG4gIGNvbnN0IGdldFNsYXNoU3RhcnRQYXRoID0gKHA6IHN0cmluZykgPT4ge1xuICAgIGlmICghcm9vdCkge1xuICAgICAgcmV0dXJuIHA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuc3VyZVNsYXNoU3RhcnRQYXRoKHJlbGF0aXZlKHJvb3QsIHApKTtcbiAgfTtcblxuICByZXR1cm4gYXN5bmMgKGFzdCwgZmlsZSkgPT4ge1xuICAgIGNvbnN0IGNvZGVBYnNTb3VyY2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbGxlY3QgY29kZSBzb3VyY2VzIHN0YXJ0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICB2aXNpdChcbiAgICAgIGFzdCxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ21keEpzeEZsb3dFbGVtZW50JyxcbiAgICAgICAgbmFtZTogJ0NvZGUnLFxuICAgICAgfSxcbiAgICAgIChub2RlOiBNZHhKc3hGbG93RWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBjb2RlU3JjOiBzdHJpbmcgPSBub2RlLmF0dHJpYnV0ZXM/LlswXS52YWx1ZSBhcyBzdHJpbmc7XG5cbiAgICAgICAgY29uc3QgY29kZUFic1NyYyA9IGVuc3VyZUpzRXh0KHBhdGguam9pbihmaWxlLmRpcm5hbWUhLCBjb2RlU3JjKSk7XG5cbiAgICAgICAgY29kZUFic1NvdXJjZXMucHVzaChjb2RlQWJzU3JjKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29sbGVjdCBjb2RlIHNvdXJjZXMgc3RhcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGxvYWQgY29kZSBzb3VyY2VzIGNvbnRlbnQgc3RhcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIGNvbnN0IGFuYWx5emVJbXBvcnRzID0gYXN5bmMgKGluZGV4UGF0aDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBkZXBzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICAgIGNvbnN0IHRyYXZlcnNlRmlsZUltcG9ydHMgPSBhc3luYyAoY3VycmVudFBhdGg6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBmaWxlSW1wb3J0U291cmNlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG4gICAgICAgIGlmICghaXNKc0ZpbGUoY3VycmVudFBhdGgpKSB7XG4gICAgICAgICAgcmV0dXJuIGZpbGVJbXBvcnRTb3VyY2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXN0ID0gcGFyc2VGaWxlU3luYyhjdXJyZW50UGF0aCk7XG5cbiAgICAgICAgY29uc3QgaW1wb3J0U291cmNlcyA9IGNvbGxlY3RJbXBvcnRTb3VyY2VzRnJvbUFzdChhc3QgYXMgTm9kZSk7XG5cbiAgICAgICAgY29uc3QgcmVzb2x2ZVNvdXJjZSA9IGFzeW5jIChzb3VyY2U6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZElkID0gKGF3YWl0IHJlc29sdmUoc291cmNlLCBjdXJyZW50UGF0aCkpPy5pZDtcbiAgICAgICAgICAgIGlmICghcmVzb2x2ZWRJZCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc05vZGVNb2R1bGVQYWNrYWdlKHJlc29sdmVkSWQpIHx8ICFzb3VyY2Uuc3RhcnRzV2l0aCgnLicpKSB7XG4gICAgICAgICAgICAgIGRlcHMuYWRkKHNvdXJjZSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaWQgPSBlbnN1cmVSZWxhdGl2ZVBhdGgoXG4gICAgICAgICAgICAgIHBhdGgucmVsYXRpdmUoY3VycmVudFBhdGgsIHBhdGguam9pbihjdXJyZW50UGF0aCwgc291cmNlKSksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmaWxlSW1wb3J0U291cmNlc1tpZF0gPSByZXNvbHZlZElkO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgY2Fubm90IHJlc29sdmUgJHtzb3VyY2V9IGZyb20gJHtjdXJyZW50UGF0aH1gLCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGltcG9ydFNvdXJjZXMubWFwKHJlc29sdmVTb3VyY2UpKTtcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICBPYmplY3QudmFsdWVzKGZpbGVJbXBvcnRTb3VyY2VzKS5tYXAoYXN5bmMgKGltcG9ydFNvdXJjZSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgZmlsZUltcG9ydFNvdXJjZXMsXG4gICAgICAgICAgICAgIGF3YWl0IHRyYXZlcnNlRmlsZUltcG9ydHMoaW1wb3J0U291cmNlKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGZpbGVJbXBvcnRTb3VyY2VzO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGF3YWl0IHRyYXZlcnNlRmlsZUltcG9ydHMoaW5kZXhQYXRoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW1wb3J0U291cmNlcyA9IHppcE9iamVjdChcbiAgICAgIGNvZGVBYnNTb3VyY2VzLFxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIGNvZGVBYnNTb3VyY2VzLm1hcChhc3luYyAoc3JjKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IGFuYWx5emVJbXBvcnRzKHNyYyk7XG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICApO1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBsb2FkIGNvZGUgc291cmNlcyBjb250ZW50IGVuZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGFzcyBjb2RlIHNvdXJjZXMgY29udGVudCB0byBjb21wb25lbnQgc3RhcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIHZpc2l0KFxuICAgICAgYXN0LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbWR4SnN4Rmxvd0VsZW1lbnQnLFxuICAgICAgICBuYW1lOiAnQ29kZScsXG4gICAgICB9LFxuICAgICAgKG5vZGU6IE1keEpzeEZsb3dFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvZGVTcmMgPSBub2RlLmF0dHJpYnV0ZXM/LlswXS52YWx1ZTtcbiAgICAgICAgaWYgKCFpc1N0cmluZyhjb2RlU3JjKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvZGVBYnNTcmMgPSBlbnN1cmVKc0V4dChwYXRoLmpvaW4oZmlsZS5kaXJuYW1lISwgY29kZVNyYykpO1xuICAgICAgICBjb25zdCBjdXJyZW50RmlsZUltcG9ydFNvdXJjZXMgPSBpbXBvcnRTb3VyY2VzW2NvZGVBYnNTcmNdO1xuXG4gICAgICAgIGNvbnN0IHdob2xlSW1wb3J0U291cmNlcyA9IHtcbiAgICAgICAgICBpbmRleDogY29kZUFic1NyYyxcbiAgICAgICAgICAuLi5jdXJyZW50RmlsZUltcG9ydFNvdXJjZXMsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaW1wb3J0U291cmNlc0NvZGUgPSBgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAke21hcCh3aG9sZUltcG9ydFNvdXJjZXMsIChzb3VyY2UsIGlkKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBgJyR7aWR9JzogKCkgPT4gaW1wb3J0KCcke2dldFNsYXNoU3RhcnRQYXRoKFxuICAgICAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgICAgKX0/cmF3JylgO1xuICAgICAgICAgICAgfSkuam9pbignLCcpfVxuICAgICAgICAgIH0pYDtcblxuICAgICAgICBjb25zdCBjb2RlID0gaW1wb3J0U291cmNlc0NvZGU7XG4gICAgICAgIGNvbnN0IGNvZGVBc3QgPSBwYXJzZShjb2RlLCB7IGVjbWFWZXJzaW9uOiAnbGF0ZXN0JyB9KTtcblxuICAgICAgICBub2RlLmF0dHJpYnV0ZXMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ21keEpzeEF0dHJpYnV0ZScsXG4gICAgICAgICAgbmFtZTogJ2NvZGVTb3VyY2VzJyxcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogJ21keEpzeEF0dHJpYnV0ZVZhbHVlRXhwcmVzc2lvbicsXG4gICAgICAgICAgICB2YWx1ZTogY29kZSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgZXN0cmVlOiBjb2RlQXN0IGFzIHVua25vd24gYXMgUHJvZ3JhbSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2hpbGRyZW5JbXBvcnRDb2RlID0gYCgpID0+IGltcG9ydCgnJHtnZXRTbGFzaFN0YXJ0UGF0aChcbiAgICAgICAgICBjb2RlQWJzU3JjLFxuICAgICAgICApfScpYDtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5Db2RlQXN0ID0gcGFyc2UoY2hpbGRyZW5JbXBvcnRDb2RlLCB7XG4gICAgICAgICAgZWNtYVZlcnNpb246ICdsYXRlc3QnLFxuICAgICAgICB9KTtcblxuICAgICAgICBub2RlLmF0dHJpYnV0ZXMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ21keEpzeEF0dHJpYnV0ZScsXG4gICAgICAgICAgbmFtZTogJ2NoaWxkcmVuJyxcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogJ21keEpzeEF0dHJpYnV0ZVZhbHVlRXhwcmVzc2lvbicsXG4gICAgICAgICAgICB2YWx1ZTogY2hpbGRyZW5JbXBvcnRDb2RlLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBlc3RyZWU6IGNoaWxkcmVuQ29kZUFzdCBhcyB1bmtub3duIGFzIFByb2dyYW0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICApO1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwYXNzIGNvZGUgc291cmNlcyBjb250ZW50IHRvIGNvbXBvbmVudCBlbmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgcmV0dXJuIGFzdDtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1hcmtDb2RlQmxvY2tTdGFuZGFsb25lOiBQbHVnaW48XG4gIFtdLFxuICBNZHhKc3hGbG93RWxlbWVudFxuPiA9ICgpOiBUcmFuc2Zvcm1lciA9PiB7XG4gIHJldHVybiAoYXN0LCBmaWxlKSA9PiB7XG4gICAgY29uc3Qgc3RhbmRhbG9uZUNvZGVCbG9ja3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb2xsZWN0IHN0YW5kYWxvbmUgY29kZSBibG9jayBzb3VyY2VzIHN0YXJ0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICB2aXNpdChcbiAgICAgIGFzdCxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ21keEpzeEZsb3dFbGVtZW50JyxcbiAgICAgICAgbmFtZTogJ0NvZGUnLFxuICAgICAgfSxcbiAgICAgIChub2RlOiBNZHhKc3hGbG93RWxlbWVudCkgPT4ge1xuICAgICAgICAvLyBOT1RFOiBjcmVhdGUgc3RhbmRhbG9uZSByb3V0ZSBhbnl3YXlcbiAgICAgICAgY29uc3QgaXNTdGFuZGFsb25lID0gdHJ1ZTtcbiAgICAgICAgLy8gZmluZChcbiAgICAgICAgLy8gICBub2RlLmF0dHJpYnV0ZXMsXG4gICAgICAgIC8vICAgKGF0dHJpYnV0ZTogTWR4SnN4QXR0cmlidXRlKSA9PiBhdHRyaWJ1dGUubmFtZSA9PT0gJ2lmcmFtZScsXG4gICAgICAgIC8vICk7XG5cbiAgICAgICAgaWYgKCFpc1N0YW5kYWxvbmUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzb3VyY2UgPSBmaW5kKG5vZGUuYXR0cmlidXRlcywgeyBuYW1lOiAnc3JjJyB9KT8udmFsdWUgYXMgc3RyaW5nO1xuICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgIGNvbnN0IGNvZGVCbG9ja1NyYyA9IGVuc3VyZUpzRXh0KHBhdGguam9pbihmaWxlLmRpcm5hbWUhLCBzb3VyY2UpKTtcbiAgICAgICAgc3RhbmRhbG9uZUNvZGVCbG9ja3Nbc291cmNlIGFzIHN0cmluZ10gPSBjb2RlQmxvY2tTcmM7XG4gICAgICB9LFxuICAgICk7XG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbGxlY3Qgc3RhbmRhbG9uZSBjb2RlIGJsb2NrIHNvdXJjZXMgZW5kIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGlmICghaXNFbXB0eShzdGFuZGFsb25lQ29kZUJsb2NrcykpIHtcbiAgICAgIGZpbGUuZGF0YS5zdGFuZGFsb25lQ29kZUJsb2NrcyA9IHN0YW5kYWxvbmVDb2RlQmxvY2tzO1xuICAgIH1cblxuICAgIHJldHVybiBhc3Q7XG4gIH07XG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2FzdGVyL0RldmVsb3BtZW50cy9zZWxmL2NkL3NpdGUvcGFja2FnZXMvcmQtdml0ZS9zcmMvbm9kZS9yZW1hcmtzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2FzdGVyL0RldmVsb3BtZW50cy9zZWxmL2NkL3NpdGUvcGFja2FnZXMvcmQtdml0ZS9zcmMvbm9kZS9yZW1hcmtzL2NvZGUtYmxvY2stcmVwbGFjZXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2Nhc3Rlci9EZXZlbG9wbWVudHMvc2VsZi9jZC9zaXRlL3BhY2thZ2VzL3JkLXZpdGUvc3JjL25vZGUvcmVtYXJrcy9jb2RlLWJsb2NrLXJlcGxhY2VyLnRzXCI7aW1wb3J0IHR5cGUgeyBNZHhKc3hGbG93RWxlbWVudCB9IGZyb20gJ21kYXN0LXV0aWwtbWR4LWpzeCc7XG5pbXBvcnQgdHlwZSB7IFBsdWdpbiwgVHJhbnNmb3JtZXIgfSBmcm9tICd1bmlmaWVkJztcbmltcG9ydCB7IHZpc2l0IH0gZnJvbSAndW5pc3QtdXRpbC12aXNpdCc7XG5cbmV4cG9ydCBjb25zdCByZW1hcmtDb2RlQmxvY2tSZXBsYWNlcjogUGx1Z2luPFtdLCBNZHhKc3hGbG93RWxlbWVudD4gPVxuICAoKTogVHJhbnNmb3JtZXIgPT4gKGFzdCkgPT4ge1xuICAgIHZpc2l0KFxuICAgICAgYXN0LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbWR4SnN4Rmxvd0VsZW1lbnQnLFxuICAgICAgICBuYW1lOiAnY29kZScsXG4gICAgICB9LFxuICAgICAgKG5vZGU6IE1keEpzeEZsb3dFbGVtZW50KSA9PiB7XG4gICAgICAgIG5vZGUubmFtZSA9ICdDb2RlJztcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIHJldHVybiBhc3Q7XG4gIH07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9jYXN0ZXIvRGV2ZWxvcG1lbnRzL3NlbGYvY2Qvc2l0ZS9wYWNrYWdlcy9yZC12aXRlL3NyYy9ub2RlL3JlbWFya3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jYXN0ZXIvRGV2ZWxvcG1lbnRzL3NlbGYvY2Qvc2l0ZS9wYWNrYWdlcy9yZC12aXRlL3NyYy9ub2RlL3JlbWFya3MvcmVhY3QtYXBpLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9jYXN0ZXIvRGV2ZWxvcG1lbnRzL3NlbGYvY2Qvc2l0ZS9wYWNrYWdlcy9yZC12aXRlL3NyYy9ub2RlL3JlbWFya3MvcmVhY3QtYXBpLnRzXCI7aW1wb3J0IHtcbiAgQXBpRGVjbGFyYXRpb24sXG4gIEFwaURlY2xhcmF0aW9ucyxcbiAgQXBpc0RlY2xhcmF0aW9ucyxcbiAgUmVzb2x2ZUZ1bmN0aW9uLFxufSBmcm9tICdAY2FzdHMvcmQtdml0ZS90eXBlcyc7XG5pbXBvcnQgKiBhcyBhY29ybiBmcm9tICdhY29ybic7XG5pbXBvcnQgdHlwZSB7IFByb2dyYW0gfSBmcm9tICdlc3RyZWUnO1xuaW1wb3J0IHtcbiAgZmluZCxcbiAgaXNFbXB0eSxcbiAgaXNVbmRlZmluZWQsXG4gIG1hcCxcbiAgcmVkdWNlLFxuICB1bmlxLFxuICB6aXBPYmplY3QsXG59IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgdHlwZSB7IEJsb2NrQ29udGVudCB9IGZyb20gJ21kYXN0JztcbmltcG9ydCB7IGZyb21NYXJrZG93biB9IGZyb20gJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bic7XG5pbXBvcnQgeyBnZm1UYWJsZUZyb21NYXJrZG93biB9IGZyb20gJ21kYXN0LXV0aWwtZ2ZtLXRhYmxlJztcbmltcG9ydCB7IG1keEpzeEZyb21NYXJrZG93biB9IGZyb20gJ21kYXN0LXV0aWwtbWR4LWpzeCc7XG5pbXBvcnQgeyBNZHhKc3hGbG93RWxlbWVudCB9IGZyb20gJ21kYXN0LXV0aWwtbWR4LWpzeC9saWInO1xuaW1wb3J0IHsgZ2ZtVGFibGUgfSBmcm9tICdtaWNyb21hcmstZXh0ZW5zaW9uLWdmbS10YWJsZSc7XG5pbXBvcnQgeyBtZHhKc3ggfSBmcm9tICdtaWNyb21hcmstZXh0ZW5zaW9uLW1keC1qc3gnO1xuaW1wb3J0IHsgQWNvcm4gfSBmcm9tICdtaWNyb21hcmstZXh0ZW5zaW9uLW1keC1qc3gvbGliL3N5bnRheCc7XG5pbXBvcnQge1xuICBDb21wb25lbnREb2MsXG4gIFBhcnNlck9wdGlvbnMsXG4gIFByb3BJdGVtLFxuICB3aXRoRGVmYXVsdENvbmZpZyxcbn0gZnJvbSAncmVhY3QtZG9jZ2VuLXR5cGVzY3JpcHQnO1xuaW1wb3J0IHsgUGx1Z2luLCBUcmFuc2Zvcm1lciB9IGZyb20gJ3VuaWZpZWQnO1xuaW1wb3J0IHsgdmlzaXQgfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0JztcblxuY29uc3QgYXBpUGFyc2VyT3B0aW9uczogUGFyc2VyT3B0aW9ucyA9IHtcbiAgc2hvdWxkRXh0cmFjdFZhbHVlc0Zyb21VbmlvbjogdHJ1ZSxcbiAgc2hvdWxkRXh0cmFjdExpdGVyYWxWYWx1ZXNGcm9tRW51bTogdHJ1ZSxcblxuICBwcm9wRmlsdGVyOiAocHJvcDogUHJvcEl0ZW0pID0+IHtcbiAgICBpZiAocHJvcC5kZWNsYXJhdGlvbnMgIT09IHVuZGVmaW5lZCAmJiBwcm9wLmRlY2xhcmF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBoYXNQcm9wQWRkaXRpb25hbERlc2NyaXB0aW9uID0gcHJvcC5kZWNsYXJhdGlvbnMuZmluZChcbiAgICAgICAgKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFkZWNsYXJhdGlvbi5maWxlTmFtZS5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJyk7XG4gICAgICAgIH0sXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gQm9vbGVhbihoYXNQcm9wQWRkaXRpb25hbERlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbn07XG5cbmNvbnN0IGFwaVBhcnNlciA9IHdpdGhEZWZhdWx0Q29uZmlnKGFwaVBhcnNlck9wdGlvbnMpO1xuXG5leHBvcnQgY29uc3QgcmVtYXJrUmVhY3RBcGk6IFBsdWdpbjxcbiAgW1xuICAgIHtcbiAgICAgIHJlc29sdmU6IFJlc29sdmVGdW5jdGlvbjtcbiAgICB9LFxuICBdLFxuICBNZHhKc3hGbG93RWxlbWVudFxuPiA9ICh7IHJlc29sdmUgfSk6IFRyYW5zZm9ybWVyID0+IHtcbiAgcmV0dXJuIGFzeW5jIChhc3QpID0+IHtcbiAgICBjb25zdCByZWFjdEFwaUVudHJpZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29sbGVjdCBhcGkgc291cmNlcyBzdGFydCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgdmlzaXQoXG4gICAgICBhc3QsXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdtZHhKc3hGbG93RWxlbWVudCcsXG4gICAgICAgIG5hbWU6ICdBUEknLFxuICAgICAgfSxcbiAgICAgIChub2RlOiBNZHhKc3hGbG93RWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBzcmMgPSBmaW5kKG5vZGUuYXR0cmlidXRlcywgeyBuYW1lOiAnc3JjJyB9KTtcblxuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBzcmMgYXMgYW55O1xuXG4gICAgICAgIHJlYWN0QXBpRW50cmllcy5wdXNoKHZhbHVlKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29sbGVjdCBhcGkgc291cmNlcyBlbmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFwaSBkb2NnZW4gcGFyc2Ugc3RhcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIGNvbnN0IGdldFJlYWN0QXBpUmVhbFBhdGhzID0gYXN5bmMgKGVudHJpZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgICBjb25zdCB1bmlxdWVFbnRyaWVzID0gdW5pcShlbnRyaWVzKTtcblxuICAgICAgcmV0dXJuIHppcE9iamVjdChcbiAgICAgICAgdW5pcXVlRW50cmllcyxcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgdW5pcXVlRW50cmllcy5tYXAoYXN5bmMgKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZCA9IGF3YWl0IHJlc29sdmUoZW50cnkpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQ/LmlkIHx8ICcnO1xuICAgICAgICAgIH0pLFxuICAgICAgICApLFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVhY3RBcGlSZWFsUGF0aHMgPSBhd2FpdCBnZXRSZWFjdEFwaVJlYWxQYXRocyhyZWFjdEFwaUVudHJpZXMpO1xuXG4gICAgaWYgKGlzRW1wdHkocmVhY3RBcGlSZWFsUGF0aHMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXBpRGVjbGFyYXRpb25zID0gcmVkdWNlKFxuICAgICAgcmVhY3RBcGlSZWFsUGF0aHMsXG4gICAgICAoYWNjLCByZWFsUGF0aCwgZW50cnkpID0+ICh7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgW2VudHJ5XTogYXBpUGFyc2VyLnBhcnNlKHJlYWxQYXRoKSxcbiAgICAgIH0pLFxuICAgICAge30gYXMgUmVjb3JkPHN0cmluZywgQ29tcG9uZW50RG9jW10+LFxuICAgICk7XG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFwaSBkb2NnZW4gcGFyc2UgZW5kIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIHZpc2l0KFxuICAgICAgYXN0LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbWR4SnN4Rmxvd0VsZW1lbnQnLFxuICAgICAgICBuYW1lOiAnQVBJJyxcbiAgICAgIH0sXG4gICAgICAobm9kZTogTWR4SnN4Rmxvd0VsZW1lbnQsIGluZGV4OiBudW1iZXIsIHBhcmVudDogTWR4SnN4Rmxvd0VsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gZmluZChub2RlLmF0dHJpYnV0ZXMsIHsgbmFtZTogJ3NyYycgfSk7XG5cbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gc3JjIGFzIGFueTtcblxuICAgICAgICBjb25zdCBjdXJyZW50QXBpRGVjbGFyYXRpb25zID0gYXBpRGVjbGFyYXRpb25zW3ZhbHVlXTtcbiAgICAgICAgY29uc3QgYXBpRGF0YSA9IGdldEFwaURhdGEoY3VycmVudEFwaURlY2xhcmF0aW9ucyk7XG5cbiAgICAgICAgY29uc3QgYXBpRGVjbGFyYXRpb25zQ29kZSA9IEpTT04uc3RyaW5naWZ5KGFwaURhdGEpO1xuXG4gICAgICAgIGNvbnN0IGFwaURlY2xhcmF0aW9uc0FzdCA9IGFjb3JuLnBhcnNlKFxuICAgICAgICAgIGBPYmplY3QuYXNzaWduKHt9LCAke2FwaURlY2xhcmF0aW9uc0NvZGV9KWAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZWNtYVZlcnNpb246ICdsYXRlc3QnLFxuICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgbm9kZS5hdHRyaWJ1dGVzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdtZHhKc3hBdHRyaWJ1dGUnLFxuICAgICAgICAgIG5hbWU6ICdhcGlzJyxcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogJ21keEpzeEF0dHJpYnV0ZVZhbHVlRXhwcmVzc2lvbicsXG4gICAgICAgICAgICB2YWx1ZTogYXBpRGVjbGFyYXRpb25zQ29kZSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgZXN0cmVlOiBhcGlEZWNsYXJhdGlvbnNBc3QgYXMgdW5rbm93biBhcyBQcm9ncmFtLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBhcGlzTWFya2Rvd24gPSBtYXAoYXBpRGF0YSwgKGFwaXMsIG5hbWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gYCMjIyAke25hbWV9XFxuJHtnZXRBcGlUYWJsZU1hcmtkb3duKGFwaXMpfWA7XG4gICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuXG4gICAgICAgIGNvbnN0IGFwc0FzdCA9IGZyb21NYXJrZG93bihhcGlzTWFya2Rvd24sIHtcbiAgICAgICAgICBleHRlbnNpb25zOiBbXG4gICAgICAgICAgICBtZHhKc3goeyBhY29ybjogYWNvcm4gYXMgdW5rbm93biBhcyBBY29ybiwgYWRkUmVzdWx0OiB0cnVlIH0pLFxuICAgICAgICAgICAgZ2ZtVGFibGUoKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIG1kYXN0RXh0ZW5zaW9uczogW21keEpzeEZyb21NYXJrZG93bigpLCBnZm1UYWJsZUZyb21NYXJrZG93bigpXSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmVwbGFjZSA8QVBJPiB0YWcgd2l0aCBhcGlzXG4gICAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAuLi4oYXBzQXN0LmNoaWxkcmVuIGFzIEJsb2NrQ29udGVudFtdKSxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcbn07XG5cbmNvbnN0IGdldEFwaURhdGEgPSAoZGVjbGFyYXRpb25zOiBDb21wb25lbnREb2NbXSkgPT4ge1xuICBjb25zdCBhcGlzID0gcmVkdWNlKFxuICAgIGRlY2xhcmF0aW9ucyxcbiAgICAoYWNjLCBjb21wb25lbnREb2MpID0+IHtcbiAgICAgIGNvbnN0IHByb3BzID0gbWFwKGNvbXBvbmVudERvYy5wcm9wcywgKHByb3ApID0+ICh7XG4gICAgICAgIGlkZW50aWZpZXI6IHByb3AubmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHByb3AuZGVzY3JpcHRpb24sXG4gICAgICAgIGRlZmF1bHQ6IHByb3AuZGVmYXVsdFZhbHVlPy52YWx1ZSxcbiAgICAgICAgdHlwZTogcHJvcC50eXBlLFxuICAgICAgICByZXF1aXJlZDogcHJvcC5yZXF1aXJlZCxcbiAgICAgIH0pKSBhcyBBcGlEZWNsYXJhdGlvbnM7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgW2NvbXBvbmVudERvYy5kaXNwbGF5TmFtZV06IHByb3BzLFxuICAgICAgfTtcbiAgICB9LFxuICAgIHt9IGFzIEFwaXNEZWNsYXJhdGlvbnMsXG4gICk7XG5cbiAgcmV0dXJuIGFwaXM7XG59O1xuXG5jb25zdCBnZXRBcGlUYWJsZU1hcmtkb3duID0gKGFwaXM6IEFwaURlY2xhcmF0aW9ucykgPT4ge1xuICBsZXQgY29kZSA9ICcnO1xuXG4gIGNvbnN0IGdldERlY2xhcmF0aW9uVHlwZSA9ICh0eXBlOiBBcGlEZWNsYXJhdGlvblsndHlwZSddKSA9PiB7XG4gICAgaWYgKHR5cGUubmFtZSA9PT0gJ2VudW0nKSB7XG4gICAgICAvLyBleGNsdWRlIHNvbWUgc3BlY2lhbCBlbnVtXG4gICAgICBpZiAoXG4gICAgICAgIFsnQ29sb3InLCAnYm9vbGVhbiddLmluY2x1ZGVzKHR5cGUucmF3KSB8fFxuICAgICAgICB0eXBlLnJhdy5pbmNsdWRlcygnUmVhY3ROb2RlJylcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZXNjYXBlKGBcXGAke3R5cGUucmF3fVxcYGApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXNjYXBlKFxuICAgICAgICBtYXAoXG4gICAgICAgICAgdHlwZS52YWx1ZSxcbiAgICAgICAgICAoaXRlbSkgPT4gYFxcYCR7aXRlbS52YWx1ZS5yZXBsYWNlKC9bJ1wiXS9nLCAnJyl9XFxgYCxcbiAgICAgICAgKS5qb2luKCcgfCAnKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVzY2FwZSh0eXBlLm5hbWUpO1xuICB9O1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0YWJsZSBoZWFkIGNvZGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBjb2RlICs9ICd8IFByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBUeXBlIHwgRGVmYXVsdCB8IFJlcXVpcmVkIHxcXG4nO1xuICBjb2RlICs9ICd8IC0tLSB8IC0tLSB8IC0tLSB8IC0tLSB8IC0tLSB8XFxuJztcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGFibGUgY29udGVudCBjb2RlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgY29kZSArPSBhcGlzXG4gICAgLm1hcChcbiAgICAgIChhcGkpID0+XG4gICAgICAgIGB8ICR7YXBpLmlkZW50aWZpZXJ9IHwgJHsoYXBpLmRlc2NyaXB0aW9uIHx8ICctJykucmVwbGFjZShcbiAgICAgICAgICAvXFxuL2csXG4gICAgICAgICAgJzxiciAvPicsXG4gICAgICAgICl9IHwgJHtnZXREZWNsYXJhdGlvblR5cGUoYXBpLnR5cGUpfSB8ICR7XG4gICAgICAgICAgaXNVbmRlZmluZWQoYXBpLmRlZmF1bHQpID8gJy0nIDogZXNjYXBlKGFwaS5kZWZhdWx0KVxuICAgICAgICB9IHwgJHthcGkucmVxdWlyZWR9IHxgLFxuICAgIClcbiAgICAuam9pbignXFxuJyk7XG5cbiAgcmV0dXJuIGNvZGU7XG59O1xuXG5jb25zdCBlbnRpdHlFc2NhcGVNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICc8JzogJyZsdDsnLFxuICAnfCc6ICdcXFxcfCcsXG59O1xuXG5jb25zdCBjb2RlRW50aXR5RXNjYXBlTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyLCBuby11c2VsZXNzLWVzY2FwZVxuICAnPCc6ICdcXDwnLFxuICAnfCc6ICdcXFxcfCcsXG59O1xuXG5jb25zdCBlbnRpdHlFc2NhcGVSZWcgPSBSZWdFeHAoXG4gICdbJyArIE9iamVjdC5rZXlzKGVudGl0eUVzY2FwZU1hcCkuam9pbignJykgKyAnXScsXG4gICdnJyxcbik7XG5cbmNvbnN0IGNvZGVFbnRpdHlFc2NhcGVSZWcgPSBSZWdFeHAoXG4gICdgW15gXSpgfChbJyArIE9iamVjdC5rZXlzKGNvZGVFbnRpdHlFc2NhcGVNYXApLmpvaW4oJycpICsgJ10pJyxcbiAgJ2cnLFxuKTtcblxuLy8gZXNjYXBlIGh0bWwgdGFnXG5mdW5jdGlvbiBlc2NhcGUoaHRtbDogc3RyaW5nKSB7XG4gIGlmICh0eXBlb2YgaHRtbCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gaHRtbC5yZXBsYWNlKGNvZGVFbnRpdHlFc2NhcGVSZWcsIChjb2RlSHRtbCwgZ3JvdXA/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoZ3JvdXApIHtcbiAgICAgIHJldHVybiBlbnRpdHlFc2NhcGVNYXBbZ3JvdXBdO1xuICAgIH1cblxuICAgIHJldHVybiBjb2RlSHRtbC5yZXBsYWNlKGVudGl0eUVzY2FwZVJlZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gY29kZUVudGl0eUVzY2FwZU1hcFttYXRjaF07XG4gICAgfSk7XG4gIH0pO1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2FzdGVyL0RldmVsb3BtZW50cy9zZWxmL2NkL3NpdGUvcGFja2FnZXMvcmQtdml0ZS9zcmMvbm9kZS9yZWh5cGVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2FzdGVyL0RldmVsb3BtZW50cy9zZWxmL2NkL3NpdGUvcGFja2FnZXMvcmQtdml0ZS9zcmMvbm9kZS9yZWh5cGVzL3RvYy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2FzdGVyL0RldmVsb3BtZW50cy9zZWxmL2NkL3NpdGUvcGFja2FnZXMvcmQtdml0ZS9zcmMvbm9kZS9yZWh5cGVzL3RvYy50c1wiO2ltcG9ydCByZWh5cGVUb2NCYXNlIGZyb20gJ0Bqc2RldnRvb2xzL3JlaHlwZS10b2MnO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJ0Bqc2RldnRvb2xzL3JlaHlwZS10b2MvbGliL29wdGlvbnMnO1xuaW1wb3J0IHR5cGUgeyBQcm9jZXNzb3IsIFRyYW5zZm9ybWVyIH0gZnJvbSAndW5pZmllZCc7XG5pbXBvcnQgeyBtYXR0ZXIgfSBmcm9tICd2ZmlsZS1tYXR0ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVoeXBlVG9jKHRoaXM6IFByb2Nlc3Nvciwgb3B0cz86IE9wdGlvbnMpOiBUcmFuc2Zvcm1lciB7XG4gIGNvbnN0IHRvY1RyYW5zZm9ybWVyID0gcmVoeXBlVG9jQmFzZS5iaW5kKHRoaXMpKG9wdHMpO1xuXG4gIHJldHVybiAoYXN0LCBmaWxlKSA9PiB7XG4gICAgY29uc3QgZnJvbnRtYXR0ZXIgPSBtYXR0ZXIoZmlsZSk7XG4gICAgLy8gQHRzLWlnbm9yZSBoaWRlIHRvYyBpZiBtYXR0ZXIudG9jID09PSBmYWxzZVxuICAgIGlmIChmcm9udG1hdHRlci5kYXRhLm1hdHRlcj8udG9jID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGFzdDtcbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZSB0b2MgdHJhbnNmb3JtZXIgZXhwZWN0ZWQgb25lIGFyZ3VtZW50XG4gICAgcmV0dXJuIHRvY1RyYW5zZm9ybWVyKGFzdCk7XG4gIH07XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVTLE9BQU8sa0JBQWtCO0FBQ2hVLE9BQU8sV0FBVztBQUNsQixTQUFTLFlBQVk7QUFDckIsT0FBT0EsV0FBVTtBQUNqQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLG1CQUFtQjtBQUM1QixPQUFPLFVBQVU7OztBQ0xqQixTQUFTLGFBQWEsb0JBQW9CO0FBQzFDLFlBQVksVUFBVTtBQUdmLElBQU0sb0JBQW9CLENBQUMsV0FDaEMsWUFBWSxRQUFRLEVBQUUsZUFBZSxLQUFLLENBQUMsRUFDeEMsT0FBTyxDQUFDLFdBQW1CLE9BQU8sWUFBWSxDQUFDLEVBQy9DLElBQUksQ0FBQyxXQUFtQixPQUFPLElBQUk7QUFPakMsSUFBTSxrQkFBa0IsQ0FBQyxvQkFBOEI7QUFDNUQsU0FBTyxnQkFBZ0IsSUFBSSxDQUFDLGVBQWU7QUFDekMsVUFBTSxVQUFVLGFBQWtCLFVBQUssWUFBWSxjQUFjLEdBQUcsTUFBTTtBQUMxRSxVQUFNLGNBQWMsS0FBSyxNQUFNLE9BQU87QUFDdEMsV0FBTyxZQUFZO0FBQUEsRUFDckIsQ0FBQztBQUNIO0FBRU8sSUFBTSxrQkFBa0IsQ0FBQyxXQUFtQjtBQUNqRCxRQUFNLGtCQUFrQixrQkFBa0IsTUFBTTtBQUNoRCxRQUFNLGtCQUFrQixnQkFBZ0I7QUFBQSxJQUFJLENBQUMsbUJBQ3RDLFVBQUssUUFBUSxjQUFjO0FBQUEsRUFDbEM7QUFDQSxRQUFNLGVBQWUsZ0JBQWdC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LGdCQUFnQjtBQUFBLEVBQ3BCLGdCQUFnQkMsTUFBSyxRQUFRQSxNQUFLLEtBQUtDLG1DQUFXLGFBQWEsQ0FBQyxDQUFDO0FBQUEsRUFDakUsQ0FBQyx5QkFBeUIseUJBQXlCLGNBQWM7QUFDbkU7QUFFQSxJQUFPLHNCQUFRO0FBQUEsRUFDYjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUtELE1BQUssUUFBUUMsbUNBQVcsSUFBSTtBQUFBLFFBQ2pDLEdBQUc7QUFBQSxNQUNMO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFVQSxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxHQUFHO0FBQUE7QUFBQSxNQUVILENBQUM7QUFBQSxJQUNIO0FBQUEsSUFFQSxjQUFjO0FBQUEsTUFDWixTQUFTLENBQUMsY0FBYztBQUFBLE1BQ3hCLFNBQVMsQ0FBQyx3QkFBd0I7QUFBQSxNQUNsQyxnQkFBZ0I7QUFBQSxRQUNkLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogWyJwYXRoIiwgInRyYW5zZm9ybVN5bmMiLCAicmVhZEZpbGVTeW5jIiwgImZpbmQiLCAicGF0aCIsICJyZWh5cGVTbHVnIiwgInBhdGgiLCAiaWRlbnRpdHkiLCAiaXNFbXB0eSIsICJub2RlIiwgImlzRW1wdHkiLCAiaWRlbnRpdHkiLCAiaXNFbXB0eSIsICJyZWR1Y2UiLCAicGF0aCIsICJwYXJzZSIsICJyZWFkRmlsZVN5bmMiLCAiaXNFbXB0eSIsICJwYXRoIiwgInBhdGgiLCAicmVhZEZpbGVTeW5jIiwgImFzdCIsICJpbXBvcnRTb3VyY2VzIiwgInBhcnNlIiwgImlzRW1wdHkiLCAidmlzaXQiLCAidmlzaXQiLCAiZmluZCIsICJpc0VtcHR5IiwgIm1hcCIsICJ6aXBPYmplY3QiLCAidmlzaXQiLCAidmlzaXQiLCAiZmluZCIsICJ6aXBPYmplY3QiLCAiaXNFbXB0eSIsICJtYXAiLCAicGF0aCIsICJpc0VtcHR5IiwgInJlZHVjZSIsICJtYXR0ZXIiLCAicmVoeXBlVG9jIiwgIm1hdHRlciIsICJyZWh5cGVTbHVnIiwgInJlaHlwZVRvYyIsICJwYXRoIiwgInJlYWRGaWxlU3luYyIsICJ0cmFuc2Zvcm1TeW5jIiwgImZpbmQiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicGF0aCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSJdCn0K

import { find, isArray, isEmpty, isString, map } from 'lodash-es';

type TreeNode = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

/**
 * find node by path(DFS)
 */
export const findNodeByPathDFS = (payload: {
  tree: TreeNode[];
  path: TreeNode[];
  prop: keyof TreeNode;
}): TreeNode | undefined => {
  const { tree, path, prop } = payload;

  if (isEmpty(path)) {
    return;
  }

  const root = isArray(tree) ? tree : [tree];

  const headPathItem = path[0];
  const currentNode = find(root, (r) => r[prop] === headPathItem[prop]);

  const restPath = path.slice(1);
  if (!currentNode || isEmpty(restPath)) {
    return currentNode;
  }

  return findNodeByPathDFS({
    tree: currentNode.children,
    path: restPath,
    prop,
  });
};

export const traverse = (payload: {
  tree: TreeNode[];
  getChildren?: string | ((node: TreeNode) => TreeNode[]);
  iterator?: (node: TreeNode) => TreeNode | undefined;
}) => {
  const { tree, getChildren = 'children', iterator } = payload;

  const dfs = (tree: TreeNode[]): (TreeNode | undefined)[] =>
    map(tree, (node) => {
      const children = isString(getChildren)
        ? node[getChildren]
        : getChildren(node);

      const item = { ...node };

      if (children) {
        item.children = dfs(children);
      }

      if (iterator) {
        return iterator(item);
      }
      return item;
    });

  return dfs(tree);
};

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (!root) return 0;
        let currentLevel: TreeNode[] = [root];
        let depth = 0;
        while (currentLevel.length > 0) {
            const nextLevel: TreeNode[] = [];
            for (const node of currentLevel) {
                if (node.left) nextLevel.push(node.left)
                if (node.right) nextLevel.push(node.right)
            }
            currentLevel = nextLevel;
            depth++;
        }
        return depth;
    }
}

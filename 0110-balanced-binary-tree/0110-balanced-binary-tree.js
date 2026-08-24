var isBalanced = function(root) {

    function checkHeight(root) {

        if (root === null) return 0;

        let leftHeight = checkHeight(root.left);

        // Left side is already unbalanced
        if (leftHeight === -1) return -1;

        // Get right height
        let rightHeight = checkHeight(root.right);

        // Right side is already unbalanced
        if (rightHeight === -1) return -1;

        // Current node is unbalanced
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // Return height
        return 1 + Math.max(leftHeight, rightHeight);
    }

    // -1 means unbalanced
    return checkHeight(root) !== -1;
};
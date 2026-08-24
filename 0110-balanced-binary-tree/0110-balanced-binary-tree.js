var isBalanced = function(root) {

    function checkHeight(root) {

        if (root === null) return 0;

        let leftHeight = checkHeight(root.left);

        if (leftHeight === -1) return -1;

        let rightHeight = checkHeight(root.right);

     if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }

    return checkHeight(root) !== -1;
};
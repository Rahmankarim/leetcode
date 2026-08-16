var merge = function(nums1, m, nums2, n) {

    // Remove the unused positions from nums1
    nums1.splice(m, n);

    // Add nums2 elements
    nums1.push(...nums2);

    // Sort numerically
    nums1.sort((a, b) => a - b);
};
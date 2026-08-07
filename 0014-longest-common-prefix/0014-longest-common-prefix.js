var longestCommonPrefix = function(strs) {

    let result = "";

    let first = strs[0];

    for (let i = 0; i < first.length; i++) {

        let ch = first[i];

        for (let j = 1; j < strs.length; j++) {

            if (strs[j][i] !== ch) {
                return result;
            }
        }

        result += ch;
    }

    return result;
};
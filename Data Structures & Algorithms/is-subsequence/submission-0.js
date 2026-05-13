class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if (s.length > t.length) return false
        const sArr = s.split('')
        const tArr = t.split('')
        for (let tI = 0, sI = 0; tI < tArr.length; tI++) {
            // tI goes through the main string
            // sI goes through the subsequence string
            if (sArr[sI] == tArr[tI]) { // if same char is found in both, move sI up
                sI++
            }
            if (sI == sArr.length) { // if sI goes past the end of its string, its a subsequence
                return true
            }
        }
        return false
    }
}

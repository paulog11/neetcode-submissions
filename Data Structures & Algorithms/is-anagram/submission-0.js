class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        let x = s.split('').sort().join('')
        let y = t.split('').sort().join('')
        return x == y
    }
}

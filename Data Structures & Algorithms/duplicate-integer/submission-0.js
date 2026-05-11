class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let existingVals = {}
        for(let val of nums) {
            if (existingVals[val]) {
                return true
            } else {
                existingVals[val] = true
            }
        }
        return false
    }
}

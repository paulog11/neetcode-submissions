class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numsDirectory = {}
        for (let x = 0; x < nums.length; x++) {
            if (numsDirectory[target - nums[x]] != null) {
                return [numsDirectory[target-nums[x]], x]
            }
            if (numsDirectory[nums[x]] == undefined) { // check if 
                numsDirectory[nums[x]] = x
            } 
        }
        return []
    }
}

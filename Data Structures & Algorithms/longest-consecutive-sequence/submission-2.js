class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let best = 0;
    
        for (let n of numSet) {
            // Only start counting from the beginning of a sequence
            if (!numSet.has(n - 1)) {
                let length = 1;
                while (numSet.has(n + length)) {
                    length++;
                }
                best = Math.max(best, length);
            }
        }
        return best;
    }
}
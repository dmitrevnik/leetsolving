import bisect

class Solution:
    def triangleNumber(self, nums):
        nums.sort()
        cnt = 0
        n = len(nums)

        for i in range(n):
            for j in range(i + 1, n):
                sum_val = nums[i] + nums[j]
                ind = bisect.bisect_left(nums, sum_val, j + 1, n)
                cnt += (ind - j - 1)

        return cnt

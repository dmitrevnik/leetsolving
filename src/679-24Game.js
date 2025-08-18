
var judgePoint24 = function(cards) {
    const EPS = 1e-6;

    const dfs = (nums) => {
        if (nums.length === 1) {
            return Math.abs(nums[0] - 24.0) < EPS;
        }

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i === j) continue;

                let next = [];
                for (let k = 0; k < nums.length; k++) {
                    if (k !== i && k !== j) next.push(nums[k]);
                }

                let a = nums[i], b = nums[j];
                let candidates = [a + b, a - b, b - a, a * b];
                if (Math.abs(b) > EPS) candidates.push(a / b);
                if (Math.abs(a) > EPS) candidates.push(b / a);

                for (let val of candidates) {
                    if (dfs([...next, val])) return true;
                }
            }
        }
        return false;
    };

    return dfs(cards.map(x => x * 1.0));
};

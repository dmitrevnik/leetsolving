var areaOfMaxDiagonal = function (dimensions) {
    let ans = 0;
    let max = 0;
    let el = [];
    for (let [a, b] of dimensions) {
        sqrt = Math.sqrt((a * a) + (b * b));
        if (sqrt > max) {
            max = sqrt;
            el = [a, b];
            ans = (a * b);
        } else if (sqrt === max) {
            ans = Math.max(ans, (a * b));
        }
    }
    return ans;
};

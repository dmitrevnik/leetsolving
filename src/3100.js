

var maxBottlesDrunk = function(numBottles, numExchange) {
    let full = numBottles;
    let empty = 0;
    let ans = 0;
    let curEx = numExchange;

    while (full > 0) {
        ans += full;
        empty += full;
        full = 0;

        while (empty >= curEx) {
            empty -= curEx;
            full += 1;
            curEx += 1;
        }
    }
    return ans;
};

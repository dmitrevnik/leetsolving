const peopleAwareOfSecret = (n, delay, forget) => {
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    let share = 0n;
    const MOD = 1000000007n;
    for (let t = 2; t <= n; t++) {
        if (t - delay > 0) share = (share + BigInt(dp[t - delay]) + MOD) % MOD;
        if (t - forget > 0) share = (share - BigInt(dp[t - forget]) + MOD) % MOD;
        dp[t] = Number(share);
    }
    let know = 0n;
    for (let i = n - forget + 1; i <= n; i++) know = (know + BigInt(dp[i])) % MOD;
    return Number(know);
};

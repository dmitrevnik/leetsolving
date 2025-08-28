var sortMatrix = function(grid) {
    const n = grid.length, m = grid[0].length;
    const diags = {};

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const key = i - j;
            if (!(key in diags)) diags[key] = [];
            diags[key].push(grid[i][j]);
        }
    }

    for (const key in diags) {
        if (key < 0) diags[key].sort((a,b)=>a-b);
        else diags[key].sort((a,b)=>b-a);
    }

    const idx = {};
    for (const key in diags) idx[key] = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const key = i - j;
            grid[i][j] = diags[key][idx[key]++];
        }
    }
    return grid;
};

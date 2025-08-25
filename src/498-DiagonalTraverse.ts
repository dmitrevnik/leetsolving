function findDiagonalOrder(mat: number[][]): number[] {
    const m = mat.length, n = mat[0].length;
    const result: number[] = [];
    const dirs = [[-1, 1], [1, -1]];
    
    let row = 0, col = 0, d = 0;
    
    for (let i = 0; i < m * n; i++) {
        result.push(mat[row][col]);
        row += dirs[d][0];
        col += dirs[d][1];
        
        if (row >= m) { row = m - 1; col += 2; d ^= 1; }
        else if (col >= n) { col = n - 1; row += 2; d ^= 1; }
        else if (row < 0) { row = 0; d ^= 1; }
        else if (col < 0) { col = 0; d ^= 1; }
    }
    
    return result;
}

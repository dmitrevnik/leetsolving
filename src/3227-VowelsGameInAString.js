const doesAliceWin = s => {
    for (let i = 0; i < s.length; i++)
        if ((0x104111 >> (s.charCodeAt(i) - 97)) & 1)
            return 1;
    return 0;
};

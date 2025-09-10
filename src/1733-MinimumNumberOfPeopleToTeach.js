var minimumTeachings = function(totalLanguages, userLanguages, friendships) {
    let usersToTeach = new Set();
    
    // Step 1: Find users who cannot communicate
    for (let [u1, u2] of friendships) {
        u1 -= 1;
        u2 -= 1;
        let canCommunicate = false;
        
        for (let lang1 of userLanguages[u1]) {
            for (let lang2 of userLanguages[u2]) {
                if (lang1 === lang2) {
                    canCommunicate = true;
                    break;
                }
            }
            if (canCommunicate) break;
        }
        
        if (!canCommunicate) {
            usersToTeach.add(u1);
            usersToTeach.add(u2);
        }
    }
    
    let minUsersToTeach = userLanguages.length + 1;
    
    // Step 2: Try each language
    for (let lang = 1; lang <= totalLanguages; lang++) {
        let count = 0;
        
        for (let user of usersToTeach) {
            if (!userLanguages[user].includes(lang)) {
                count++;
            }
        }
        
        minUsersToTeach = Math.min(minUsersToTeach, count);
    }
    
    return minUsersToTeach;
};

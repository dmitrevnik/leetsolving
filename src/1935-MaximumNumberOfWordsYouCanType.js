/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let words = text.split(" ");
    let count = 0;
    for (let word of words) {
        let canType = true;
        for (let c of brokenLetters) {
            if (word.includes(c)) {
                canType = false;
                break;
            }
        }
        if (canType) count++;
    }
    return count;
};

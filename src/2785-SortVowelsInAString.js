/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = [];
    for (let ch of s) {
        if ("AEIOUaeiou".includes(ch)) {
            vowels.push(ch);
        }
    }

    vowels.sort();

    let result = '';
    let vIndex = 0;

    for (let ch of s) {
        if ("AEIOUaeiou".includes(ch)) {
            result += vowels[vIndex++];
        } else {
            result += ch;
        }
    }

    return result;
};

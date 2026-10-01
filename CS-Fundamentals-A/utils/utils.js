/**
 * Return a shuffled copy of an array using the Fisher-Yates algorithm.
 * @param {Array} array - The target array to shuffle
 * @returns {Array} A new shuffled array copy
 */
const shuffleArray = (array) => {
    // Copy first so callers' original arrays remain unchanged.
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};
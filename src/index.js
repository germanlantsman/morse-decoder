const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '*****': ' ',
};

function decode(expr) {
    let array1 = expr.split('');
    let array2 = [];
    let result = '';

    while (array1.length > 0) {
        array2.push(array1.splice(0, 10));
    }

    for (let i = 0; i < array2.length; i++) {
        let test = '';
        for (let j = 0; j < array2[i].length; j = j + 2) {
            if (array2[i][j] === '1' && array2[i][j + 1] === '0') {
                test += '.';
            } else if (array2[i][j] === '1' && array2[i][j + 1] === '1') {
                test += '-';
            } else if (array2[i].includes('*')) {
                test += '*';
            }
        }
        result = result + MORSE_TABLE[test];
    }
    return result;
}

module.exports = {
    decode
}
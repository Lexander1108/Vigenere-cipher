const english = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabet = english.split("");

const {codeWord} = require ('./input.js');

const {initialText} = require ('./input.js');

// const codeWord = 'OBUNGA';
// const initialText = 'KRETOV OLEXANDER VALENTYNOVYCH';

const word = initialText.split(" ").join('');

const stretchedCodeWord = codeWord.padEnd(initialText.length, codeWord)

function indexReturner(str){
    str.split("");
    let result = [];
    for(let i = 0; i < str.length; i++){
        alphabet.filter(function(letter){
            if (letter == str[i]){
                result.push(alphabet.indexOf(letter));
            };
        });
    };
    return result;
}

const codeWordIndexes = indexReturner(stretchedCodeWord);

function cutter(index) {
    let arr1 = [];
    let arr2 = [];
    for(let i = index; i < 26; i++) {
        arr1.push(i);
    };
    for(let i = 0; i < index; i++) {
        arr2.push(i);
    };
    return (arr1.concat(arr2));
};

function converter(arr){
    let result = [];
    for(let i = 0; i < 26; i++){
        result.push(alphabet[arr[i]]);
    };
    return result;
};

function arrays(indexes){
    let result = [];
    for(let i = 0; i < indexes.length; i++){
        result.push(converter(cutter(indexes[i])));
    };
    return result;
};

for(let i = 0; i < word.length; i++){
    codeWordIndexes.push(codeWordIndexes[i]);
}

const arrs = arrays(codeWordIndexes);

function code(arrays, textIndexes) {
    let result = [];
    for (let i = 0; i < textIndexes.length; i++){
        result.push(arrays[i][textIndexes[i]]);
    }
    return result;
}

function decode(arrays, word){
    word.split("");
    let decodedIndexes = [];
    for(let i = 0; i < word.length; i++){
        arrays[i].filter(function(letter){
            if (letter == word[i]){
                decodedIndexes.push(arrays[i].indexOf(letter));
            };
        });
    }
    let result = [];
    for(i = 0; i < decodedIndexes.length; i++){
        result.push(english[decodedIndexes[i]])

    }
    return result.join('');
}

function spaceIndexesReturner(str){
    let spaces = [];
    for (let i = 0; i < str.length; i++){
        if (str[i] == ' '){
            spaces.push(str.indexOf(' ', i))
            }
    }
    return spaces;
}

let spaceIndexes = spaceIndexesReturner(initialText);

function spaceAdder(spaceIndexes, arr){
    for (let i = 0; i < spaceIndexes.length; i++){
        arr.splice(spaceIndexes[i], 0, ' ');
    }
    return arr.join('');
}

let codedResult = code(arrs, indexReturner(initialText)).join('');

const encodedText = spaceAdder(spaceIndexes, codedResult.split(''));

const decodedText = spaceAdder(spaceIndexes, decode(arrs, word).split(""));

module.exports = {encodedText, decodedText}
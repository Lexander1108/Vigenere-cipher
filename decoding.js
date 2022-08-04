const english = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabet = english.split("");

const codeWord = 'BIKE';

const myName = 'BIKE';

const stretchedCodeWord = codeWord.padEnd(myName.length, codeWord)

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

const arrs = arrays(codeWordIndexes);

const word = 'CQUI'

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

console.log(decode(arrs, word));




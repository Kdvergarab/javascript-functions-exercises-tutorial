
const rapid = (nombre) => {
    let consonants = [];
    for(let letter of nombre){
        if(['a','e','i','o','u'].includes(letter) == false)
            consonants.push(letter)
    }
    return consonants.join('');
};

let hombre = "john";


let str = rapid(hombre)
console.log(str.toUpperCase());

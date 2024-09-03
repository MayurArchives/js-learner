function longestWord(str) {
    let words = str.split(" ");
    let longestWord = "";
    for(let word of words){
        if(word.length > longestWord.length){

         longestWord = word;
        }
    }
    return longestWord;

}

console.log(longestWord(" my name is mayur singh kanyal "));
console.log(longestWord("today i had gone kaichi dham ashram"));



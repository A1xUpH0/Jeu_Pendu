const fs = require('fs');
const csv = require('csv-parser');
const { log } = require('console');


const EASY = 1;
const MEDIUM = 2;
const HARD = 3;

let listOfWords = [];

let word = "";
let foundedWord = "";

let healthPoint;

class Game {

    constructor() {
        this.listOfWords = [];

        fs.createReadStream('words_fr.txt')
            .pipe(csv())
            .on('data', (row) => {
                this.listOfWords.push(row.word.toUpperCase());
            })
            .on('end', () => {
                //console.log(this.listOfWords);
                console.log('CSV file successfully processed\n');
                //this.chooseWord();
            });
    }

    /**
     * Should set a random word in terms of the difficulty
     * @param {int} difficulty 
     * @returns
     */
    getRandomWord(difficulty){
        let newArray = [];

        switch (difficulty){
            
            case 1:
                {newArray = [];
                    for (let word of this.listOfWords){
                        if (word.length < 6){
                            newArray.push(word);
                        }
                    }
                    healthPoint = 9;
                    break;
                }
                
            case 2:
                {newArray = [];
                    for (let word of this.listOfWords){
                        if (word.length > 5 && word.length < 8){
                            newArray.push(word);
                        }
                    }
                    healthPoint = 7;
                    break;
                }
                
            case 3:
                {newArray = [];
                    for (let word of this.listOfWords){
                        if (word.length > 7){
                            newArray.push(word);
                        }
                    }
                    healthPoint = 5;
                    break;
                }
                
            default:
                {
                    newArray = this.listOfWords;
                    healthPoint = 7;
                }
        }
        word = newArray[Math.floor(Math.random() * newArray.length)];
        return word;
    }

    /**
     * Should return "true" when the letter is present or "false" when the letter is not present
     * @param {string} oneLetter 
     * @param {string} word 
     * @returns
     */
    guess(oneLetter, word){
        let isPresent = false;

        for (let letterIndex in word){
            if(oneLetter === word[letterIndex]){
                isPresent = true;
                this.changeFoundedLetter(word[letterIndex], letterIndex);
            }
        }
        return isPresent;
    }

    /**
     * Should modify the variable "foudedWord" to show the founded letters
     * @param {string} letter 
     * @param {int} index 
     */
    changeFoundedLetter(letter, index){
        if (foundedWord === ""){
            for (let i = 0; i < word.length; i++){
                foundedWord += "_"
            }
        }
        let split = foundedWord.split("")
        split[index] = letter;
        foundedWord = split.join("")
        this.printWord()
    }

    /**
     * Should print the founded letters in the word
     */
    printWord(){
        console.log("\n YOUR WORD\n| " + foundedWord + " |\n");
    }

}

module.exports = {Game : Game, EASY : EASY, MEDIUM : MEDIUM, HARD : HARD}
const {Game, EASY, MEDIUM, HARD} = require ("../game.js");
const chai = require ("chai");

const expect = chai.expect;

let game = new Game()

describe("Game engine test", function(){

    describe("When a random word is found", function(){
        it("Should return the length of the random word in EASY difficulty", function(){
            expect(game.getRandomWord(EASY).length).is.lessThanOrEqual(5);
        })
        it("Should return the length of the random word in MEDIUM difficulty", function(){
            expect(game.getRandomWord(MEDIUM).length).is.greaterThan(5).and.is.lessThanOrEqual(7);
        })
        it("Should return the length of the random word in HARD difficulty", function(){
            expect(game.getRandomWord(HARD).length).is.greaterThan(7);
        })
        it("Should return the length of the random word in NO difficulty\n", function(){
            expect(game.getRandomWord("abricot").length).is.greaterThan(0);
        })
    })


    describe("When a letter is found", function() {
        it("Should return true when the letter is present\n", function(){
            expect(game.guess("L","STYLO")).is.true; 
        })
        
    });

    describe("When a letter is not found", function(){
        it("Should return false when the letter is not present\n", function(){
            expect(game.guess("Z","STYLO")).is.false;
        })
    })

})
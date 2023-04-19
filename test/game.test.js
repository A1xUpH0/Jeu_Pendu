const {Game, EASY, MEDIUM, HARD} = require ("../game.js");
const chai = require ("chai");

const expect = chai.expect;

let game = new Game()

describe("Game engine test", function(){

    describe("When a letter is found", function() {
        it("Should return true when the letter is present", function(){
            expect(game.guess("a")).is.true; 
        })
        
    });

    describe("When a letter is not found", function(){
        it("Should return false when the letter is not present", function(){
            expect(game.guess("z")).is.false;
        })
    })

    describe("When a random word is found", function(){
        it("Should return the length of the random word in easy difficulty", function(){
            expect(game.getRandomWord(EASY).length).is.lessThanOrEqual(5);
        })
        it("Should return the length of the random word in medium difficulty", function(){
            expect(game.getRandomWord(MEDIUM).length).is.greaterThan(5).and.is.lessThanOrEqual(7);
        })
        it("Should return the length of the random word in hard difficulty", function(){
            expect(game.getRandomWord(HARD).length).is.greaterThan(7);
        })
    })

})
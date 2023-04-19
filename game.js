const EASY = 1;
const MEDIUM = 2;
const HARD = 3;

class Game {


    guess(oneLetter){
        if(oneLetter === "a"){
            return true;
        } else {
            return false;
        }
    }

    getRandomWord(difficulty){
        switch(difficulty){
            case 1 :
                return "salut"
            case 2 :
                return "bonjour"
            case 3 :
                return "dracofeu"
            default :
                return "ah"
        }
    }


}

module.exports = {Game : Game, EASY : EASY, MEDIUM : MEDIUM, HARD : HARD}
const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(fieldArray){
        this._fieldArray = fieldArray;
        this.x = 0;
        this.y = 0;
        this.gameOverFlag = false;
    }

    print() {
        for (let row of this._fieldArray){
          console.log(row.join(' '));
        }
      }

    gameOverChecker(input) {
        if (input === undefined){
            console.log('You went out of bounds, n00b, try again');
            this.gameOverFlag = true;
            return false;            
        }
        else if (input === hole){
            console.log('You fell in a hole, you\'re human garbage');
            this.gameOverFlag = true;
            return false; 
        }
        else if (input === hat){
            console.log('You found your hat, you win');
            this.gameOverFlag = true;
            return false;
        }
        else{
            return true; 
        }  
    }

    playGame() {
        this.print();
        while(this.gameOverFlag === false){
            const playerInput = prompt('Enter a travel direction, N S E or W');
            switch (playerInput.toUpperCase()){
            case 'N':
                this.x -= 1;
                if (this.gameOverChecker(this._fieldArray[this.x]) === true){
                    this._fieldArray[this.x][this.y] = pathCharacter;
                    this._fieldArray[this.x+1][this.y] = fieldCharacter;
                    this.print();
                }
                break;

            case 'S':
                this.x += 1;
                if (this.gameOverChecker(this._fieldArray[this.x]) === true){
                    this._fieldArray[this.x][this.y] = pathCharacter;
                    this._fieldArray[this.x-1][this.y] = fieldCharacter;
                    this.print();
                }
                break;

            case 'E':
                this.y += 1;
                if (this.gameOverChecker(this._fieldArray[this.x][this.y]) === true){
                    this._fieldArray[this.x][this.y] = pathCharacter;
                    this._fieldArray[this.x][this.y-1] = fieldCharacter;
                    this.print();
                }
                break;
                
            case 'W':
                this.y -= 1;
                if (this.gameOverChecker(this._fieldArray[this.x][this.y]) === true){
                    this._fieldArray[this.x][this.y] = pathCharacter;
                    this._fieldArray[this.x][this.y+1] = fieldCharacter;
                this.print();
                };

                break;
            
            default: 
                console.log('Illegal input :(');
            }
        }
    }

    static generateField(height, width) {
        let outputField = [];
        function holeOrField () {
            let outputArray = [];
            for(let i = 0; i < width; i++){
                const randomNum = Math.floor(Math.random() * 2);

                switch (randomNum){
                    case 0:
                        outputArray[i] = fieldCharacter;
                        break;
                    case 1: 
                        outputArray[i] =hole;
                        break;
                }
            }
            return outputArray; 
        }

        function hatPlacer() {
            const hatXRandomNum = Math.floor(Math.random() * width);
            const hatYRandomNum = Math.floor(Math.random() * height);
            outputField[hatYRandomNum][hatXRandomNum] = hat;
        } 

        for (let j = 0; j < height; j++){
            outputField.push(holeOrField());
        }

        hatPlacer(outputField);
        outputField[0][0] = pathCharacter;
        this._fieldArray = outputField;
        return outputField; 

    }


}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);


Field.generateField(3, 3);

const staticField = Field.generateField(3, 3);
const epicTest = new Field(staticField);
epicTest.playGame();
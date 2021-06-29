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
    }

    print() {
        for (let row of this._fieldArray){
          console.log(row.join(' '));
        }
      }

    gameOverChecker(input) {
        if (input === undefined){
            console.log('You went out of bounds, n00b, try again');
            return false;            
        }
        else if (input === hole){
            console.log('You fell in a hole, you\'re human garbage');
            return false; 
        }
        else if (input === hat){
            console.log('You found your hat, suprising');
            return false;
        }
        else{
            return true; 
        }  
    }

    playGame() {
        this.print();
        while(this.gameOverChecker(this._fieldArray[this.x][this.y]) !== false){
            const playerInput = prompt('Enter a travel direction, N S E or W');
            switch (playerInput.toUpperCase()){
            case 'N':
                this.x -= 1;
                this._fieldArray[this.x][this.y] = pathCharacter;
                this._fieldArray[this.x+1][this.y] = fieldCharacter;
                this.print();
                break;

            case 'S':
                this.x += 1;
                this._fieldArray[this.x][this.y] = pathCharacter;
                this._fieldArray[this.x-1][this.y] = fieldCharacter;
                this.print();
                break;

            case 'E':
                this.y += 1;

                this._fieldArray[this.x][this.y] = pathCharacter;
                this._fieldArray[this.x][this.y-1] = fieldCharacter;
                this.print();
                break;
                
            case 'W':
                this.y -= 1;
                this._fieldArray[this.x][this.y] = pathCharacter;
                this._fieldArray[this.x][this.y+1] = fieldCharacter;
                this.print();
                break;
            
            default: 
                console.log('Illegal input :(');
            }
        }
    }


}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);


myField.playGame();
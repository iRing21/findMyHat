const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(fieldArray){
        this._fieldArray = fieldArray;
    }

    print() {
        for (let row of this._fieldArray){
          console.log(row.join(' '));
        }
      }

    playGame() {
        const input = prompt('Enter a travel direction, N S E or W');
        
    }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);




console.log(myField.print());

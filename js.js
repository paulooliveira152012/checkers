// reference to squares
const squares = document.querySelectorAll(".square");

/*
function to receive the position of a piece (row and column) and returns
all possible moves for that piece
*/

function getPossibleMoves(squareIndex) {
        console.log("Selected square index: ", squareIndex);
        console.log(turn);
        console.log(squareIndex);
        //identify the "line" starting from 0, top to bottom (math.flor arredonda pra baixo)
        const row = Math.floor(squareIndex / 8);
        console.log(row);
        //identify the column starting from 0, left to right
        //the sign of % means the rest of the devision
        const col = squareIndex % 8;
        console.log(col);
        // console.log("Row: ", row, "Col: ", col)
        var moves = [];
        // const piece = board[row][col];

        //mandar cada movimento junto com o index do quadrado correspondente 
        for (let i = 0; i < moves.length; i++) {
            const [row, col] = moves[i];
            const index = row * 8 + col;
            squares[index].classList.add("possible-move"); 
          }

    
        //se a peca atual e uma peca preta ou dama preta
        if(turn === 1) {
            console.log("it is green turn")
            
            //verificar movimentos de pecas ou damas pretas
        if (row > 0) {
            // verificar movimentos para cima e existe movimento para a esquerda
            if (col > 0 && !board[row - 1][col - 1]) {
                console.log("existe movimento para cima e para esquerda")
                //pushing current row and column and value of current row -1 and current column -1
                moves.push([row, col, row-1, col-1]);
            } else if (col > 1 && board[row-1][col-1] && !board[row-2][col-2]) {
                console.log("QUANDO???")
                moves.push([row, col, row-2, col-2]);
            }
            if (col < 7 && !board[row-1][col+1]) {
                moves.push([row, col, row-1, col+1]);
            }
        } 
    } else {
        console.log("it is blue turn")
            //verificar movimentos de pecas ou damas brancas
            if(row < 7) {
                // verificar movimentos para baixo
                if (col > 0 && !board[row+1][col-1]) {
                    moves.push([row, col, row+1, col-1]);
                } else if (col > 1 && board[row+1][col-1] && !board[row+2][col-2]) {
                    moves.push([row, col, row+2, col-2]);
                }
                if (col < 7 && !board[row+1][col+1]) {
                    moves.push([row, col, row+1, col+1]);
                }
            }
        }
    
               // add a background color to squares 35 and 37 if square 44 is clicked
//   if (squareIndex === 44) {
//     window.alert("44")
//     squares[35].style.backgroundColor = "purple";
//     squares[37].style.backgroundColor = "purple";
//     console.log(squares[35])
//   }

  console.log(squareIndex);

  
  


    console.log(moves)
    
    // mudar a cor dos quadrados que podem ser possivelmente movidos:
    // loop through all squares and reset their background color
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "";
      }
      
      // loop through the moves and set the background color of the corresponding squares
    //   for (let i = 0; i < moves.length; i++) {
    //     const [row, col] = moves[i];
    //     const index = row * 8 + col;
    //     squares[index].style.backgroundColor = "yellow"; 
    //   }

        // set the background color of the corresponding squares
  for (let i = 0; i < moves.length; i++) {
    const [startIndex, endIndex] = moves[i];
    squares[startIndex].style.backgroundColor = "white";
    squares[endIndex].style.backgroundColor = "yellow";
  }

    }

// adding click event to each square
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    getPossibleMoves(i);
  });
}

// adding numbers to each house
for (let i = 0; i < squares.length; i++) {
  const identificador = document.createElement("h1");
  identificador.innerText = i;
  identificador.style.color = "red";
  identificador.classList.add("identificador");
  squares[i].appendChild(identificador);
}

// loop through the squares I want to add the buttons to player1
[56, 49, 58, 51, 60, 53, 62, 55, 40, 42, 44, 46].forEach((index) => {
  const circulo = document.createElement("div");
  circulo.classList.add("circulo", "verde");

  const square = squares[index];
  square.appendChild(circulo.cloneNode(true));
});

// loop through the squares I want to add the buttons to player2
[1, 3, 5, 7, 8, 10, 12, 14, 17, 19, 21, 23].forEach((index) => {
  const circulo = document.createElement("div");
  circulo.classList.add("circulo", "azul");

  const square = squares[index];
  square.appendChild(circulo.cloneNode(true));
});

/*
if turn = 1, circulos with a background color green can move forward
as long as the house is black, is not occupied, and is touching the
current house.
*/

const greenCircles = document.querySelectorAll(".verde");
const blueCircles = document.querySelectorAll(".azul");
let turn = 1;

// implementing a matrix to check possible moves
const board = [
  [null, "B", null, "B", null, "B", null, "B"],
  ["B", null, "B", null, "B", null, "B", null],
  [null, "B", null, "B", null, "B", null, "B"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["W", null, "W", null, "W", null, "W", null],
  [null, "W", null, "W", null, "W", null, "W"],
  ["W", null, "W", null, "W", null, "W", null],
];



function start() {
    console.log(turn)
    if(turn == 1) {
        //adicionar eventlistener
        for(var i = 0; i < greenCircles.length; i++) {
            greenCircles[i].addEventListener("click", handleClick1);
        }
    } else if(turn == 2){
        for(var i = 1; i < blueCircles.length; i++) {
            blueCircles[i].addEventListener("click", handleClick2);
        }
    }
}

function handleClick1() {
    window.alert("test")
                removeClick();
}

function handleClick2() {
    window.alert("test")
                console.log(turn);
                removeClick();
}

function removeClick() {
    if(turn == 1) {
        for(var i=0; i < greenCircles.length; i ++) {
            greenCircles[i].removeEventListener("click", handleClick1)
            };

            // turn = (turn == 1 ? 2 : 1)
            // start()
            getPossibleMoves()
        } else if(turn == 2) {
            for(var i = 0; i < blueCircles.length; i++) {
                blueCircles[i].removeEventListener("click", handleClick2)

                // turn = (turn == 2 ? 1 : 1)
                // start()
                getPossibleMoves()
            };
            
        }
    }


start()
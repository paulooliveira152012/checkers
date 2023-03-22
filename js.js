//continue from line 80

// reference to squares
const squares = document.querySelectorAll(".square");
const greenCircles = document.querySelectorAll(".verde");
const blueCircles = document.querySelectorAll(".azul");
let turn = 1;
let playerOneSquares = [];
let playerTwoSquares = [];
let emptySquares = [];
let currentSquare = [];


//add ids to each square element
for(let i = 0; i < squares.length; i++) {
    const id = i;
    squares[i].setAttribute('id', id);
    squareIndex = squares[i].id;
    // console.log(squareIndex)
    // squares[i].addEventListener('click', () => {
    //     const squareIndex = squares[i].id;
    //     console.log(squareIndex);
    //     //evoke function based on selected square 
    //     getPossibleMoves(i);
    // })
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

  //loop throught elements that has the green circle as attribute and push to playerOne's array
  squares.forEach(parent => {
    const child = parent.querySelector(`.verde`);
    if(child) {
        playerOneSquares.push(parent)
    }
  });
  console.log(playerOneSquares)

  //loop throught elements that has the blue circle as attribute and push to playerTwo's array
  squares.forEach(parent => {
    const child = parent.querySelector('.azul');
    if(child) {
        playerTwoSquares.push(parent)
    }
  });
  console.log(playerTwoSquares)


  //loop throught elements that has no child alement and push them to emptySquare array
  squares.forEach(square => {
    if(square.classList.contains('black') && square.childElementCount === 1) {
        emptySquares.push(square);
    }
});
console.log(emptySquares);

//make a move possible from any "green box" to any empty square based of the emptySquares array

//only add click event to current player's pieces
if(turn == 1) {
    playerOneSquares.forEach(square => {
        square.addEventListener('click', () => {
            const squareIndex = square.id;
            console.log("the square selected was " + squareIndex)
            // window.alert("test")
            //call function to check possible moves
            getPossibleMoves(squareIndex)
        })
    }
    )
}




//function to get possible moves based on the current turn and piece position.
function getPossibleMoves(squareIndex) {

    console.log(turn)
    console.log("turn = player " + turn)
    console.log("the square selected was " + squareIndex)
    currentSquare.push(squareIndex);
    console.log(currentSquare)
    // console.log(emptySquares)

    //find the clicked green square and its position on the board 
    const clickedSquare = squares[squareIndex];
    const row = Math.floor(squareIndex / 8);
    const col = squareIndex % 8;

    //only highlight empty squares that are one row less and one column to the right or one column to the left
    emptySquares.forEach(square => {
        //a funcao Number esta convertendo o valor da propriedade id em um numero, para que possamos usar esse numero em uma operacao matematica
        const squareIndex = Number(square.id);
        //Math.floor arredonda o resultado da divisao de "squareIndex" para baixo para sabermos o row
        //por exemplo, clicando na casa 44, ele faz 44/8 e arredonda pra baixo. vai dar o row 5
        const squareRow = Math.floor(squareIndex / 8);
        //o poerador % encontra o RESTO da divisao de squareIndex por 8, para identificar a coluna que pode ir
        //por exemplo, clicando na casa 44, o calculo e 44/8; o resultado de numero intiro e 5; e sobra 3. a coluna 3 e indicada
        const squareCol = squareIndex % 8;

        if(squareRow === row - 1 && (squareCol === col - 1 || squareCol === col + 1)) {
            square.style.backgroundColor = "yellow";
            square.addEventListener("click", makeMove)
        } else {
            square.style.backgroundColor = "";
            square.removeEventListener("click", makeMove)
        }
    });

    // if(turn == 1) {
    //     for (var i = 0; i < squares.length; i++) {
    //         if (emptySquares.includes(squares[i]))  {
    //           squares[i].style.backgroundColor = "yellow";
    //         }
    //       }
    // }

    //remove event listener from squares that belong to player 2 when it's player 1's turn
    //create a player 1 and player 2 array, and push squares to these array

    // squares.forEach(square => {
    //     if(square.classList.contains('azul')) {
    //         console.log("teste")
    //     }
    // })

};

//function to make a move
function makeMove() {
    //add event listeners click to boxes that got highlighted
    //add a green circle to it and remove the circle from where it was originally
    //idea: create an array, send these yellow options to them, loop through them and add event listeners to receive the move
    
    //find the square that has a green circle and remove the green circle
    

    //criar e adicionar o circulo verde ao elemento clicado
    var circuloVerde = document.createElement("div");
    circuloVerde.classList.add("circulo");
    circuloVerde.classList.add("verde");
    this.appendChild(circuloVerde);
    //add this new square to player one
    playerOneSquares.push(this);
    console.log(playerOneSquares)
    //retirar o fundo amarelo dos quadrados
    for(i = 0; i < emptySquares.length; i++) {
        if(emptySquares[i].style.backgroundColor === "yellow") {
            // console.log(emptySquares[i])
            emptySquares[i].style.backgroundColor = "";
            emptySquares[i].removeEventListener("click", makeMove);
        }
    }

    console.log(currentSquare)
    // if(currentSquare.id) {
    //     currentSquare.style.backgroundColor="red"
    // }
}



 
// function getPossibleMoves(squareIndex) {
//         console.log("Selected square index: ", squareIndex);
//         console.log(turn);
//         console.log("squareIndex is " + squareIndex);
//         //identify the "line" starting from 0, top to bottom (math.flor arredonda pra baixo)
//         const row = Math.floor(squareIndex / 8);
//         // console.log(row);
//         // //identify the column starting from 0, left to right
//         // //the sign of % means the rest of the devision
//         const col = squareIndex % 8;
//         // console.log(col);
//         // // console.log("Row: ", row, "Col: ", col)
//         // var moves = [];
//         // // const piece = board[row][col];

//         // //mandar cada movimento junto com o index do quadrado correspondente 
//         // for (let i = 0; i < moves.length; i++) {
//         //     const [row, col] = moves[i];
//         //     const index = row * 8 + col;
//         //     squares[index].classList.add("possible-move"); 
//         //   }

    
//         // //se a peca atual e uma peca preta ou dama preta
//         if(turn === 1) {
//             console.log("it is green turn")

//             if (col > 0) {
//                 console.log(squareIndex);
//                 console.log(squareIndex - 6)
//                 var possibleMove1 = squareIndex - 9;
//                 console.log("a primeira possibilidade e " + possibleMove1);
//                 var possibleMove2 = squareIndex -7;
//                 console.log("a segunda possibilidade e " + possibleMove2);
//                 console.log(this.possibleMove1);

//                 //selecionar os elementos correspondentes usando os indices das posicoes possiveis
//                 var element1 = document.querySelector("#square" + possibleMove1);
//                 var element2 = document.querySelector("#square" + possibleMove2);

//                 // element1.style.backgroundColor = "blue";
//                 // element2.style.backgroundColor = "green";
//             }

            
//         //     //verificar movimentos de pecas ou damas pretas
//         // if (row > 0) {
//         //     // verificar movimentos para cima e existe movimento para a esquerda
//         //     if (col > 0 && !board[row - 1][col - 1]) {
//         //         console.log("existe movimento para cima e para esquerda")
//         //         //pushing current row and column and value of current row -1 and current column -1
//         //         moves.push([row, col, row-1, col-1]);
//         //     } else if (col > 1 && board[row-1][col-1] && !board[row-2][col-2]) {
//         //         console.log("QUANDO???")
//         //         moves.push([row, col, row-2, col-2]);
//         //     }
//         //     if (col < 7 && !board[row-1][col+1]) {
//         //         moves.push([row, col, row-1, col+1]);
//         //     }
//         // } 
//         // for(var i=0; i < greenCircles.length; i ++) {
//         //     greenCircles[i].removeEventListener("click", handleClick1)
//         //     };
//     } else {
//         console.log("it is blue turn")
//             //verificar movimentos de pecas ou damas brancas
//             if(row < 7) {
//                 // verificar movimentos para baixo
//                 if (col > 0 && !board[row+1][col-1]) {
//                     moves.push([row, col, row+1, col-1]);
//                 } else if (col > 1 && board[row+1][col-1] && !board[row+2][col-2]) {
//                     moves.push([row, col, row+2, col-2]);
//                 }
//                 if (col < 7 && !board[row+1][col+1]) {
//                     moves.push([row, col, row+1, col+1]);
//                 }
//             }
//         }
    
//                // add a background color to squares 35 and 37 if square 44 is clicked
// //   if (squareIndex === 44) {
// //     window.alert("44")
// //     squares[35].style.backgroundColor = "purple";
// //     squares[37].style.backgroundColor = "purple";
// //     console.log(squares[35])
// //   }

//   console.log(squareIndex);

  
  


//     // console.log(moves)
    
//     // mudar a cor dos quadrados que podem ser possivelmente movidos:
//     // loop through all squares and reset their background color
//     // for (let i = 0; i < squares.length; i++) {
//     //     squares[i].style.backgroundColor = "";
//     //   }
      
//       // loop through the moves and set the background color of the corresponding squares
//     //   for (let i = 0; i < moves.length; i++) {
//     //     const [row, col] = moves[i];
//     //     const index = row * 8 + col;
//     //     squares[index].style.backgroundColor = "yellow"; 
//     //   }

//         // set the background color of the corresponding squares
// //   for (let i = 0; i < moves.length; i++) {
// //     const [startIndex, endIndex] = moves[i];
// //     squares[startIndex].style.backgroundColor = "white";
// //     squares[endIndex].style.backgroundColor = "yellow";
// //   }

//     }

// // adding click event to each square
// // for (let i = 0; i < squares.length; i++) {
// //   squares[i].addEventListener("click", function () {
// //     getPossibleMoves(i);
// //   });
// // }





// /*
// if turn = 1, circulos with a background color green can move forward
// as long as the house is black, is not occupied, and is touching the
// current house.
// */



// // implementing a matrix to check possible moves
// const board = [
//   [null, "B", null, "B", null, "B", null, "B"],
//   ["B", null, "B", null, "B", null, "B", null],
//   [null, "B", null, "B", null, "B", null, "B"],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   ["W", null, "W", null, "W", null, "W", null],
//   [null, "W", null, "W", null, "W", null, "W"],
//   ["W", null, "W", null, "W", null, "W", null],
// ];



// function start() {
//     console.log(turn)
//     if(turn == 1) {
//         //adicionar eventlistener
//         for(var i = 0; i < greenCircles.length; i++) {
//             greenCircles[i].addEventListener("click", handleClick1);
//         }
//     } else if(turn == 2){
//         for(var i = 0; i < blueCircles.length; i++) {
//             blueCircles[i].addEventListener("click", handleClick2);
//         }
//     }
// }

// function handleClick1() {
//     // window.alert("test")
//                 removeClick();
// }

// function handleClick2() {
//     // window.alert("test")
//                 console.log(turn);
//                 removeClick();
// }

// function removeClick() {
//     if(turn == 1) {
//         // for(var i=0; i < greenCircles.length; i ++) {
//         //     greenCircles[i].removeEventListener("click", handleClick1)
//         //     };

//             turn = (turn == 1 ? 2 : 1)
//             // start()
//             getPossibleMoves()
//         } else if(turn == 2) {
//             for(var i = 0; i < blueCircles.length; i++) {
//                 blueCircles[i].removeEventListener("click", handleClick2)

//                 // turn = (turn == 2 ? 1 : 1)
//                 // start()
//                 getPossibleMoves()
//             };
            
//         }
//     }


// start()
let turn = 'O';
let winning_condition = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
 let total_turn=0;
// creat a new array of size 9 Filled with empty
let board_Array = new Array(9).fill("E");

function chechwinner() {
    //destructuring of array as [index0,index1,index2]
    for (let [index0, index1, index2] of winning_condition) {
        if (board_Array[index0] !== "E" && board_Array[index0] === board_Array[index1] && board_Array[index1] === board_Array[index2]) {
            return 1;
        }
    }
    return 0;
}
// checkwinner();
const printer=((event)=>
{
    const element = event.target;
    if (board_Array[element.id] == "E") {
    
        total_turn++;

        if (turn === "O") {
            element.innerHTML = "O"; 
            board_Array[element.id] = "O";
            if (chechwinner()) {
                document.getElementById("winningMessage").innerHTML = "Winner is O ";
                board.removeEventListener('click',printer);
                return;
            }
            turn = "X";
        }
        else {
            element.innerHTML = "X";
            board_Array[element.id] = "X";
            if (chechwinner()) {
                document.getElementById("winningMessage").innerHTML = "Winner is X ";
                board.removeEventListener('click',printer)
                return;
            }

            turn = "O";
        }
        if(total_turn==9)
        {
            document.getElementById("winningMessage").innerText="Match is Tie"
        }
    }
})
const board = document.querySelector('.board');
board.addEventListener('click',printer);

const Restart = document.getElementById("restartButton");
Restart.addEventListener('click',(event)=>{
       const cell = document.getElementsByClassName('cell');

       Array.from(cell).forEach((value)=>{
        value.innerHTML="";
       })
       turn="O";
       total_turn=0;
       board_Array=new Array(9).fill("E");
       document.getElementById("winningMessage").innerHTML="";
       board.addEventListener('click',printer) ;
       
})

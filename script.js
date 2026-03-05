let cells=document.querySelectorAll(".cell");
let statusText=document.getElementById("status");

let currentPlayer="X";
let gameActive=true;

let board=["","","","","","","","",""];

const winPatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach(cell=>{
cell.addEventListener("click",cellClicked);
});

function cellClicked(){

let index=this.getAttribute("data-index");

if(board[index]!=="" || !gameActive){
return;
}

board[index]=currentPlayer;
this.textContent=currentPlayer;

checkWinner();

}

function checkWinner(){

let won=false;

for(let pattern of winPatterns){

let a=board[pattern[0]];
let b=board[pattern[1]];
let c=board[pattern[2]];

if(a===""||b===""||c===""){
continue;
}

if(a===b && b===c){
won=true;
break;
}

}

if(won){
statusText.textContent="Player "+currentPlayer+" Wins!";
gameActive=false;
return;
}

if(!board.includes("")){
statusText.textContent="Draw!";
gameActive=false;
return;
}

currentPlayer=currentPlayer==="X"?"O":"X";
statusText.textContent="Player "+currentPlayer+" turn";

}

function restartGame(){

board=["","","","","","","","",""];
gameActive=true;
currentPlayer="X";
statusText.textContent="Player X turn";

cells.forEach(cell=>{
cell.textContent="";
});

}
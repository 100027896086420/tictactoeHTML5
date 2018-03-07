// made by keyzR
// todo: DRAW winning line
var xTurn=true, 
moves=0, 
gameOver=false;
var fields=[-1,-1,-1,
            -1,-1,-1,        
            -1,-1,-1];
function move(cell){ 
    if(gameOver) return;
    cellIndex=cell.charAt(4);// cell index
    if(-1!==fields[cellIndex]) return; // if cell is filled already (it's not equals -1), then return
    drawPlayer(cell);
    fields[cellIndex]=getTurn();
    incrAndPrintMoves();
    if(isWon()){
        printWinner();
        gameOver=true;
    }
    xTurn=!xTurn; // switch turn
}
function drawPlayer(cell){
    if(xTurn){
        document.getElementById(cell).style.backgroundImage="url(img/render_x.png)";
    }else{
        document.getElementById(cell).style.backgroundImage="url(img/render_0.png)";
    }
}
function getTurn(){
    return xTurn===true?"x":"0";
}
function incrAndPrintMoves(){
    document.getElementById("moves").innerHTML=("moves: "+(++moves));
}
function printWinner(){
    document.getElementById("won").innerHTML = "Player "+getTurn()+" Won!";
}
//just checking each possible line, total=8
function isWon(){
    if(moves<4) return; //optimization
    t=0;
    //1,2&&2,3
    (fields[0]!=-1&&fields[0]==fields[1]&&fields[1]==fields[2])?t++:false;
    (fields[0]!=-1&&fields[0]==fields[4]&&fields[4]==fields[8])?t++:false;
    (fields[0]!=-1&&fields[0]==fields[3]&&fields[3]==fields[6])?t++:false;
    (fields[1]!=-1&&fields[1]==fields[4]&&fields[4]==fields[7])?t++:false;
    (fields[2]!=-1&&fields[2]==fields[4]&&fields[4]==fields[6])?t++:false;
    (fields[2]!=-1&&fields[2]==fields[5]&&fields[5]==fields[8])?t++:false;
    (fields[3]!=-1&&fields[3]==fields[4]&&fields[4]==fields[5])?t++:false;
    (fields[6]!=-1&&fields[6]==fields[7]&&fields[6]==fields[8])?t++:false;
    return t>0?true:false;
}
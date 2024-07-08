let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=false;

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let p=0;

const resetGame = () => {
    turnO=false;
    enableBoxes();
    resetBtn.innerText="Reset Game";
    msgContainer.classList.add("hide");
    p=0;
};

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        p++;
        box.disabled=true;
        checkWinner();
        if(p===9 && resetBtn.innerText!=="New Game"){
            resetBtn.innerText="New Game";
            msgContainer.classList.remove("hide");
            msg.innerText="It's a DRAW !!";
        }
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    resetBtn.innerText="New Game";
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of win){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val!=="" && pos2Val!=="" && pos3Val!==""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log(pos1Val, pos2Val, pos3Val);
                showWinner(pos1Val);
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
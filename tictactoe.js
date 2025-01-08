let boxes = document.querySelectorAll(".boxes");
let reset = document.querySelector(".reset");
let winner = document.querySelector("h2");
let newGameBtn = document.querySelector("#new");
let resetBtn = document.querySelector(".reset");
let counting = 0;
const winning_pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const showWinner = (win) => {
    winner.innerText = `The winner is ${win}`;
    winner.classList.add("show");
};
const checkwinner = () => {
    for (let pattern of winning_pattern) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                showWinner(posval1);
                boxes.forEach((box) => {
                    box.disabled = true;
                });
                return true;
            }
        }
    }
    return false;
};
const resetGame = () => {
    counting = 0;
    isTurn = true;
    enableBoxes();
    winner.classList.add("hide");
    winner.classList.remove("show");
};
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
};
const draw = ()=>{
        if(counting===9){
            winner.innerText = "This is a draw";
            winner.classList.add("show");
        }
    };
let isTurn = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (isTurn === true) {
            box.innerText = "X";
            isTurn = false;
        }
        else {
            box.innerText = "O";






            
            isTurn = true;
        }
        box.disabled = true;
        counting++;
        checkwinner();
        if(checkwinner()===false){
            draw();
        }
    });
});
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);




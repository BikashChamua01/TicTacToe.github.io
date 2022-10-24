console.log("Eelcome to tic tac toe")
let music = new Audio("/audio/gameover.wav")
let click_audio = new Audio("/audio/buttonClick.wav")
let gameover = new Audio("/audio/clapping.wav")
let turn = "X";
let someone_wins = false;
let count = 0;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to display line
// function displayLine(wins,boxtext)
// {
//     let line=document.getElementsByClassName('line')[0];
//     if(boxtext[wins[0][0]].innerHTML==boxtext[wins[0][1]].innerHTML && boxtext[wins[0][0]].innerHTML==boxtext[wins[0][2]].innerHTML&& boxtext[[0][0]].innerHTML !== "")
//     {
//         line.style="top: 54px";
//         line.style.display="inline";
//     }
//     else if(boxtext[wins[1][0]].innerHTML==boxtext[wins[1][1]].innerHTML && boxtext[wins[1][0]].innerHTML==boxtext[wins[1][2]].innerHTML&& boxtext[[1][0]].innerHTML !== "")
//     {
//         line.style="top: 164px";
//         line.style.display="inline";
//     }
//     else if(boxtext[wins[2][0]].innerHTML==boxtext[wins[2][1]].innerHTML && boxtext[wins[2][0]].innerHTML==boxtext[wins[2][2]].innerHTML&& boxtext[[2][0]].innerHTML !== "")
//     {
//         line.style="top: 164px";
//         line.style.display="inline";
//     }

// }

// Function to check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach((e) => {
        if (boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML && boxtext[e[0]].innerHTML === boxtext[e[2]].innerHTML && boxtext[e[0]].innerHTML !== "") {
            // alert(`game ended!${boxtext[e[0]].innerHTML}has won` )
            someone_wins = true;
            document.querySelector(".info").innerHTML += `<br>${boxtext[e[0]].innerHTML} has won`;
            // Image showing
            let img = document.getElementsByTagName('img')[0];
            img.style.display = "block"

            // gameover music playing
            gameover.play();

            // body background chamge on win
            document.body.style.backgroundImage = "url(/gif/celebration.gif)"
            // line drawing
            // displayLine(wins,boxtext);
        }
        // Check for draw
        if (count >= 9 && someone_wins == false) {
            document.getElementsByClassName('info')[0].innerHTML = `No one has won <br>Better luck for next time`;
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((e) => {
    let boxtext = e.querySelector('.boxtext');
    e.addEventListener('click', () => {
        // stopping the click music
        click_audio.pause();
        click_audio.currentTime = 0;
        // increasing count
        count++;

        // Check for win
        if (boxtext.innerHTML === '') {
            console.log(someone_wins);

            if (someone_wins == true) {
                document.getElementsByClassName('info')[0].innerHTML = "";
            }
            else {
                document.getElementsByClassName('info')[0].innerHTML = `TURN FOR: ${turn}`;
                boxtext.innerHTML = turn;
                turn = changeTurn();
                click_audio.play();
                checkWin();
            }
        }
    })
})

// reset
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let boxtext = document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach((e) => {
        e.innerHTML = "";
    })
    turn = 'X';
    document.getElementsByClassName('info')[0].innerHTML = null;
    let img = document.getElementsByTagName('img')[0];
    img.style.display = "none";
    someone_wins = false;

    // Stopping the music
    gameover.pause();
    gameover.currentTime = 0;

    // body background chamge on win
    document.body.style.backgroundImage = ""

    // Setting count to 0
    count=0;

    // // Setting the cross line to top position
    // let line=document.getElementsByClassName('line')[0];
    // line.style="top: 0px; display:none";
})


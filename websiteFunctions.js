


function openTab(evt, tabName){

    //Define variables
    var x, content, links;
    content = document.getElementsByClassName("content");
    links = document.getElementsByClassName("links");

    //Hide all content
    for(x = 0; x < content.length; x++) { 
        content[x].style.display = "none";
    }
    
    //Remove active
    for(x = 0; x < links.length; x++){
        links[x].className = links[x].className.replace(" active","");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.tabName += " active";
    
}

window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');
    const start = ['','',''
                ,'','',''
                ,'','','']
    let board = start
    let currentPlayer = 'X'
    let isGameActive = true;

    const wins = [
        [0, 1, 2],
        [0, 3, 6],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2],
    ]

    const announce = (type) => {
        switch(type){
            case O_WON:
                announcer.innerHTML = 'Player </span class="playerY">O</span> Won';
            case X_WON:
                announcer.innerHTML = 'Player </span class="playerX">X</span> Won';
            case TIE:
                announcer.innerText = 'Tie';
        }
        announcer.clasList.remove('hide')
    };

    function handleResultValidation(){
        let roundWon = false;
        for(let i = 0; i<=7; i++){
            const win = wins[i];
            const a = board[win[0]]
            const b = board[win[1]]
            const c = board[win[2]]
            if(a === '' || b === '' || c === ''){
                continue;
            }
            if(a === b && b === c){
                roundWon = true;
                break;
            }
        }

        if(roundWon){
            announce(currentPlayer === 'X' ? X_WON : O_WON)
            isGameActive = false;
            return;
        }

        if(!board.includes('')){
            announce(TIE);
        }
    }

    if(!board.includes('')){
        resetBoard
    }

    const updateBoard = (index) => {
        board[index] = currentPlayer;
    }

    const isValidAction = (tile) => {
        if(tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }
        return true;
    }
    tiles.forEach( ( tile, index) => {
        tile.addEventListener('click', () => userAction(tile,index));
    })

    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive){
            tile.innerText = currentPlayer;
            tile.classList.add('player${currentPlayer}');
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    const changePlayer = () => {
        playerDisplay.classList.remove('player${currentPlayer}');
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add('player${currentPlayer}')
    }

    const resetBoard = () => {
        board = start;
        isGameActive = true;
        announcer.classList.add('hide');

        if(currentPlayer === 'O'){
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    resetButton.addEventListener('click', resetBoard)
});

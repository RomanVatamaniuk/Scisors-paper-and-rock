let scisors = document.querySelector('.scisors');
let paper = document.querySelector('.paper');
let rock = document.querySelector('.rock');
let game = ['scisors', 'paper', 'rock'];
let result = document.querySelector('.result');
let pScore = document.querySelector('.player');
let cScore = document.querySelector('.computer');
let i = 1;

let computerChoice = function(){
    let a = Math.floor(Math.random()*3);
    console.log(game[a])
    return game[a];
    
}



scisors.addEventListener('click', function(){
    let player = 'scisors';
    console.log(player);  
    move('scisors', scisors);
});

paper.addEventListener('click', function(){
    let player = 'paper';
    console.log(player);  
    move('paper', paper);
    
});

rock.addEventListener('click', function(){
    let player = 'rock';
    console.log(player);  
    move('rock', rock);
});


const move = function(player, variable){
    const computer = computerChoice()
    switch(computer + player){

        case 'paperscisors':
        case 'scisorsrock':
        case 'rockpaper':
            winStyle(variable);
        break; 


        case 'rockscisors':
        case 'scisorspaper':
        case 'paperrock':
            loseStyle(variable);
        break; 

        case 'scisorsscisors':
        case 'paperpaper':
        case 'rockrock':
            drawStyle(variable);
        break;
    };
};

const winStyle = function(variable){
    result.textContent = 'You win';
    result.style.color = '#09ff00';
    pScore.textContent = `${i++}`;
    variable.style.border = 'solid #09ff00 6px'; 
    setTimeout(()=>{
        variable.style.border = 'solid 6px #fee715ff';
        result.textContent = null;
    }, 500);
}

const loseStyle = function(variable){
    result.textContent = 'You lose';
    result.style.color = '#cf0202';
    cScore.textContent = `${i++}`;
    variable.style.border = 'solid #cf0202 6px'; 
    setTimeout(()=>{
        variable.style.border = 'solid 6px #fee715ff';
        result.textContent = null;
    }, 500);
}
const drawStyle = function(variable){
    result.textContent = 'Draw';
    result.style.color = '#fff';
    variable.style.border = 'solid #fff 6px'; 
    setTimeout(()=>{
        variable.style.border = 'solid 6px #fee715ff';
        result.textContent = null;
    }, 500);
}
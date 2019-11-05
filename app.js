/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundedNumber, activePlayer, inactivePlayer;


//console.log(dice);

//document.querySelector('#current-0').textContent = dice;
//document.getElementById('current-0').textContent = dice;
//document.getElementById('current-0').write = dice;
//innerhtml is used to add html. using textcontent you can nly add string.
//document.querySelector('#current-'+activePlayer).textContent = dice;
//console.log(document.querySelector('#score-0'));

init();

function init(){
    score = [0,0];
roundedNumber = 0;
activePlayer =0;
    document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('#name-'+activePlayer).textContent = 'Player '+(activePlayer+1);
    document.querySelector('.btn-hold').style.display = 'block';
                document.querySelector('.btn-roll').style.display = 'block';


    
}


document.querySelector('.btn-roll').addEventListener('click', function(){    
    //1. Get random number    
    var dice = Math.floor(Math.random() * 6) + 1; 
    
    //2. Display the result
     var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';
    
    //3.Update the round score if rolled number was not 1
    if(dice == 1){
                 document.getElementById('current-'+activePlayer).textContent = '0';

        roundedNumber = 0;
        if(activePlayer == 0){
            activePlayer = 1;
        }
        else{
            activePlayer = 0;
        }
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");  

    }
    else{
    roundedNumber += dice;
    }
    document.getElementById('current-'+activePlayer).textContent = roundedNumber;
    
})

document.querySelector('.btn-hold').addEventListener('click',function(){
    
    //populate total score
    score[activePlayer] += roundedNumber;
    console.log(score);
    roundedNumber =0;
    document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
    
    //make other player active and reset current score
    
    document.querySelector('.dice').style.display = 'none'; 
    if(score[activePlayer]>=20){
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.getElementById('current-'+activePlayer).textContent = '0'; 
        document.querySelector('.btn-hold').style.display = 'none';
                document.querySelector('.btn-roll').style.display = 'none';


    }
    else{
    document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");    
    document.getElementById('current-'+activePlayer).textContent = '0';    
    }
    if(activePlayer == 0){
            activePlayer = 1;
        }
        else{
            activePlayer = 0;
        }
    //checking if player has won
    
    

})

document.querySelector('.btn-new').addEventListener('click',function(){
    
    init();
    
})



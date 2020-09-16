

let roundScore, activePlayer, scores, gamePlaying, previousDice;

innit();

document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){

         //Throw a random number
    let dice1= Math.floor( Math.random() * 6 ) + 1;
    let dice2= Math.floor( Math.random() * 6 ) + 1;

    document.querySelector('#dice-1').src= 'dice-'+ dice1 + '.png';
    document.querySelector('#dice-2').src= 'dice-'+ dice1 + '.png'
    document.querySelector('#dice-1').style.display= 'block';
    document.querySelector('#dice-2').style.display= 'block';
    
    //display the result
    
    //previousDice= dice;//
    //hold the result if the result is not 1
    /*if(dice===6 && previousDice===6){
        roundScore=0;
        scores[activePlayer]=0;
        document.querySelector('#score-' + activePlayer).textContent= 0;
        nextPlayer();

    }else*/ if(dice1!==1 && dice2!==1){
        //store the random number in current value
        roundScore+= dice1;
        roundScore+= dice2;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;

    } else {
        //switch the player
       nextPlayer();
        
    }
   }
   
});

document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying){

        scores[activePlayer]+= roundScore;

        let input= document.querySelector('.final-score').value;
        let winningScore
        if(input){
            winningScore= input;
        }else{
            winningScore= 100;
        }

        //update the UI
        document.querySelector('#score-'+ activePlayer).textContent= scores[activePlayer];
    
        if(scores[activePlayer]>=winningScore){
            document.querySelector('#name-' + activePlayer).textContent= 'winner';
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
            hideDice();

            gamePlaying= false;

        }else{
            nextPlayer();
        }

    }
});


function nextPlayer(){
    
    activePlayer=== 0 ? activePlayer=1 : activePlayer= 0;
    roundScore= 0;

    document.querySelector('#current-0').textContent= 0;
    document.querySelector('#current-1').textContent= 0;

    hideDice();

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', innit);

function innit(){
    
    scores=[0,0]
    roundScore= 0;
    activePlayer= 0;
    gamePlaying= true;

    hideDice();

    document.getElementById('score-0').textContent= 0;
    document.getElementById('score-1').textContent= 0;
    document.getElementById('current-0').textContent= 0;
    document.getElementById('current-1').textContent= 0;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('#name-0').textContent= 'Player-1';
    document.querySelector('#name-1').textContent= 'Player-2';

}

function hideDice(){
    document.querySelector('#dice-1').style.display= 'none';
    document.querySelector('#dice-2').style.display= 'none';
}







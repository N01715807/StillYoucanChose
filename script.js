window.onload  = function(){
function simulateOneGame(){
    let choice = Math.floor(Math.random()*3) + 1
    return choice;
}

function winningDoor(){
    let winner = Math.floor(Math.random()*3) + 1
    return winner;
}

function removeDoor(choice, winner){
    let door = [1,2,3]
    let availableToRemove = door. filter(function(door)
    {
        return door !== choice && door !== winner
    })
    let remove = availableToRemove[Math.floor(Math.random()*availableToRemove.length)]
    return remove;
}

function staychoice(choice, winner){
    if(choice == winner){return "win"}
    else{return "lose"}
}

function changeChoice(choice, remove, winner){
    let Select = [1,2,3]
    let leftDoor = Select. filter(function(Select){
        return Select != choice && Select !== remove
    })

    if(leftDoor[0]  == winner){return "win"}
    else{return "lose"}
}

function runSimulation(rounds) {
let switchWins = 0; 
for(let i = 0 ;i < rounds ;i++){
    let choice = simulateOneGame();
    let winner = winningDoor();
    let remove = removeDoor(choice, winner);
    let result = changeChoice(choice, remove, winner);
    if(result === "win"){
        switchWins++;
    }
}

let stayWins = 0; 
for(let i=0 ; i < rounds ; i++){
    let choice = simulateOneGame();
    let winner = winningDoor();
    let result = staychoice(choice, winner);
    if(result === "win"){
        stayWins++;
    }
}

let switchRate = ((switchWins / rounds) * 100).toFixed(2);
let stayRate = ((stayWins / rounds)*100).toFixed(2);

document.getElementById('output').innerHTML = `
        <p><strong>Simulated ${rounds} times</strong></p>
        <p>Switch strategy: <strong>${switchWins}</strong> wins (${switchRate}%)</p>
        <p>Stay strategy: <strong>${stayWins}</strong> wins (${stayRate}%)</p>
    `;
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        let rounds = parseInt(button.dataset.rounds.replace(",", ""));
        runSimulation(rounds);
    });
});

}
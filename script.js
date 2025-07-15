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
    let remove = availableToRemove[Math.floor(Math.random()*Math.random.length)]
    return remove;
}
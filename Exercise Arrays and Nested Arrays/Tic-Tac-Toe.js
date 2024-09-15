function ticTacToe(data){
let initialDashboard=[
    [false, false, false],
    [false, false, false],
    [false, false, false]
]
let isFristPlayrPlay=true
for (let el of data) {
    let [x,y]=el.split(" ")

    if(initialDashboard[x][y]){
        console.log("This place is already taken. Please choose another!");
        continue;
    }
    let marker= isFristPlayrPlay? "X":"O"
    initialDashboard [x][y]=marker

    //winer
    if(checkWiner(initialDashboard,marker)){
        console.log(`Player ${marker} wins!`);
        return prindDashboard(initialDashboard)
    }
    //free space
    if(checkForFreeSpace(initialDashboard)){
        console.log(`The game ended! Nobody wins :(` );
        return prindDashboard(initialDashboard)
        
    }
    isFristPlayrPlay=!isFristPlayrPlay
}

}

function prindDashboard(dashboart){
    dashboart.forEach(row=>{
        console.log(row.join('\t'));
        
    })
}

function checkForFreeSpace(dashboart){
    return !dashboart.flat().filter(x=>!x).length
}

function checkWiner(dashboart,marker){
    if(dashboart[0][0]===marker&&
        dashboart[1][1]===marker&&
        dashboart[2][2]===marker){
            return true
        }else if(dashboart[0][2]===marker&&
            dashboart[1][1]===marker&&
            dashboart[2][0]===marker){
                return true
            }

    for(let i=0;i<dashboart.length;i++){
        if(dashboart[i][0]===marker&&
            dashboart[i][1]===marker&&
            dashboart[i][2]===marker){
                return true
            }else if(dashboart[0][i]===marker&&
                dashboart[1][i]===marker&&
                dashboart[2][i]===marker){
                    return true
                }
                return false
    }

}

ticTacToe(["0 1", 

    "0 0", 
   
    "0 2", 
   
    "2 0", 
   
    "1 0", 
   
    "1 2", 
   
    "1 1", 
   
    "2 1", 
   
    "2 2", 
   
    "0 0"] )
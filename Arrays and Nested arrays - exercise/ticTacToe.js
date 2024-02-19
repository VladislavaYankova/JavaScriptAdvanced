function ticTacToe(moves) {

    let dashboard =
    [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let isFirstPlayer = true;


   for (let i = 0; i < moves.length; i++) {
    let [x, y] = moves[i].split(' ');

    if (dashboard[x][y]) {
        console.log(`This place is already taken. Please choose another!`);
        continue;
    }

    let marker = isFirstPlayer ? "X" : "O";

    dashboard[x][y] = marker;

    if (isWin(dashboard, marker)) {
        console.log(`Player ${marker} wins!`);
        return printDashboard(dashboard);
    }

    if (!isFreeSpace(dashboard)) {
        console.log(`The game ended! Nobody wins :(`);
        return printDashboard(dashboard);
    }

    isFirstPlayer = !isFirstPlayer;

   }

   function printDashboard(dashboard) {
    dashboard.forEach(row => {
        console.log(row.join('\t'));
    })
    }

   function isFreeSpace(dashboard) {
    for (let i = 0; i < dashboard.length; i++) {
        for (let j = 0; j < dashboard[i].length; j++) {
            let currentElement = dashboard[i][j];
            if (!currentElement) {
                return true;
            }
        }
    }
   }


   function isWin(dashboard, marker) {
    for (let i = 0; i < dashboard.length; i++) {
        if (dashboard[i][0] == marker && dashboard[i][1] == marker && dashboard[i][2] == marker) {
            return true;
        } else if (dashboard[0][i] == marker && dashboard[1][i] == marker && dashboard[2][i] == marker) {
            return true;
        } else if (dashboard[0][0] == marker && dashboard[1][1] == marker && dashboard[2][2] == marker) {
            return true;
        } else if (dashboard[0][2] == marker && dashboard[1][1] == marker && dashboard[2][0] == marker) {
            return true;
        }
    }
   }
    
}
// ticTacToe(["0 1",
// "0 0",
// "0 2", 
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"]
// );

// ticTacToe(["0 0",
// "0 0",
// "1 1",
// "0 1",
// "1 2",
// "0 2",
// "2 2",
// "1 2",
// "2 2",
// "2 1"]
// );

ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);

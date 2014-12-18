/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = [];

  var innerFunc = function(board, startIndex){
    var boardSize = board.get('n');
    for (var i=0; i < boardSize; i++){
        var row = board.get(i);
        if (startIndex === n){
            solution.push(board);
            return;
        }
        for (var j=startIndex; j < row.length; j++){
            row[j] = 1;
            if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()){
                row[j] = 0;
            } else {
                innerFunc(board, startIndex+1);
            }
        }

    }
  }
  innerFunc(new Board({"n": n}), 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution[Math.floor(Math.random() * solution.length)].rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = [];

  var innerFunc = function(board, startIndex){
    var boardSize = board.get('n');
    for (var i=0; i < boardSize; i++){
        var row = board.get(i);
        if (startIndex === n){
            solution.push(board);
            return;
        }
        for (var j=startIndex; j < row.length; j++){
            row[j] = 1;
            if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()){
                row[j] = 0;
            } else {
                innerFunc(board, startIndex+1);
            }
        }

    }
  }
  innerFunc(new Board({"n": n}), 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.length;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

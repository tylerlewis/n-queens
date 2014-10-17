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
  var first = n;
  var recurse = function(n, idx) {
    if(n > 0) {
      var row = [];
      for(var i = 0; i < first; i++) {
        if(i === idx) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
      solution.push(row);
      idx++;
      recurse(n - 1, idx);
    } else {
      return;
    }
  };
  recurse(first, 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});
  var findSolution = function(board, row) {
    if(row === n) {
      solutionCount++;
      return;
    }
    for(var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if(!board.hasAnyRooksConflicts()) {
        findSolution(board, row + 1);
      }
      board.togglePiece(row, i);
    }
  };
  findSolution(board, 0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
 // debugger;
  console.log("This is n: "+ n);
  var board = new Board({n:n});
  if(n < 4) {
    if(n > 1) {
      return board.rows();
    }
  }
  var findSolution = function(board, row) {
    if(row === n) {
      console.log(n);
      return board.rows();
    }
    for(var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if(!board.hasAnyQueensConflicts()) {
        return findSolution(board, row + 1);
      }
      board.togglePiece(row, i);
    }
  };
  var solution = findSolution(board, 0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;


};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});
  var findSolution = function(board, row) {
    if(row === n) {
      solutionCount++;
      return;
    }
    for(var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if(!board.hasAnyQueensConflicts()) {
        findSolution(board, row + 1);
      }
      board.togglePiece(row, i);
    }
  };
  findSolution(board, 0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

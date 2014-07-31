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



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var boards = [];
  var board = [];
  var first = true;
  var next = false;
  //create a row full of 0's of n length
  var nRow =[];
  for(var j=0; j<n; j++){
    nRow.push(0);
  }

  var boardMaker = function(n, offLimits) {
    //for loop for creating the top row
    if(first) {
      for(var i = 0; i < n; i++) {
        var row = nRow.slice();
        row[i] = 1;
        var row1 = row.slice();
        first = false;
        board.push(row1);
        //create next row (recurse)
        boardMaker(n, row);
        //
      }
      return;
    } else if(next) {
      next = false;


    } else if(offLimits.indexOf(0) === -1) {
      solutionCount++;
      //reseting
      next = true;
      offLimits = nRow.slice();
      boards.push(board);
      board = [];
      boardMaker(n, offLimits);


    } else {
      for(var i = 0; i < n; i++) {
        if(offLimits[i] === 1) {
          continue;
        } else {
          row1 = nRow.slice();
          row1[i] = 1;
          offLimits[i] = 1;
          board.push(row1);
          boardMaker(n, offLimits);
        }
      }
    }
  };
  boardMaker(n);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  console.log(boards);
  return solutionCount;
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

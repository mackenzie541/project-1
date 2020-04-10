// jshint esversion: 7

// Requirement 3 b
let arrAvg = (arr) => {
  let sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr [i];
  }
  return sum / arr.length;
};

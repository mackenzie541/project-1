// jshint esversion: 7

// 3B
let arrAvg = (arr) => {
  let sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr [i];
  }
  return sum / arr.length;
};


// 3C
function arrMax (arr) {
  var max = arr [0];
  arr.forEach (x => {
    if (x > max) {
      max = x;
    }
  });
  return max;
}


// 3D
let sumEvens = (arr) => {
  var sum = 0;
    for (var x of arr){
      if (x % 2 == 0){
        sum = sum + x;
      }
    }
    return sum;
};

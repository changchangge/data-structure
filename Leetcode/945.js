/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
  A = A.sort((a, b) => a - b);
  var k = 0;
  var i = 0;
  var mid;
  while (i < A.length - 1) {
    if (A[i] === A[i + 1]) {
      A[i + 1]++;
      k++;
    } else if (A[i] > A[i + 1]) {
      mid = A[i + 1];
      A[i + 1] = A[i] + 1;
      k = k + A[i + 1] - mid;
    }
    i++;
  }
  return k;
};
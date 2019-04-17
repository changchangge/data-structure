/*
 * @Author: changchang
 * @github: https://github.com/changchangge
 * @LastEditors: changchang
 * @Date: 2019-04-17 23:04:24
 * @LastEditTime: 2019-04-17 23:04:35
 */



/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  var o = {};
  for (var i = 0; i < parseInt(A.length / 2) + 2; i++) {
    if (o[A[i]] !== undefined) {
      return A[i];
    } else {
      o[A[i]] = 1;
    }
  }
};
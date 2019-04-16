/*
 * @Author: changchang
 * @github: https://github.com/changchangge
 * @LastEditors: changchang
 * @Date: 2019-04-16 16:30:53
 * @LastEditTime: 2019-04-16 16:31:35
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  for (let i = 0; i <= x; i++) {
    if (i ** 2 <= x && (i + 1) ** 2 > x) {
      return i;
    }
  }
};
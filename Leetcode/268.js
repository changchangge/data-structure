/*
 * @Author: changchang
 * @github: https://github.com/changchangge
 * @LastEditors: changchang
 * @Date: 2019-04-16 16:33:51
 * @LastEditTime: 2019-04-16 16:52:42
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var a=nums.reduce((accu,curr,index,arr)=>{
      return accu=accu^curr^index;
    })
    console.log(a^nums.length)
};

missingNumber([9,6,4,2,3,5,7,0,1])
// /*
//  * @Author: changchang
//  * @github: https://github.com/changchangge
//  * @LastEditors: changchang
//  * @Date: 2019-04-15 16:35:13
//  * @LastEditTime: 2019-04-16 01:06:17
//  */

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var checkValidString = function (s) {
//   let index;
//   if (s == "" || s == "*") {
//     return true
//   }
//   let o = {
//     "(": ")",
//   };
//   let arr = [s[0]];
//   for (let i = 1; i < s.length; i++) {
//     if (s[i] === "*") {
//       arr.push(s[i]);
//     } else {
//       if (s[i] === ")") {
//         index = arr.lastIndexOf("(");
//         if (index === -1) {
//           arr.push(")")
//         } else {
//           arr[index] = "";
//         }
//       } else {
//         arr.push(s[i]);
//       }
//     }
//   }
//   return arr.join("")===""?true:verify(arr.join(""))
//   // return (arr.length === 0 || sum.length >= arr.length)
// }
// console.log(checkValidString("()*()(()(*()(((())()()())*))()*()(*)(((*))(())(())((*()*(()(())()*(((*(**))((())*)(((()()))(())()))"))
// // console.log(checkValidString("()()((*()()(*()((())()))))(()())))(((()*())))))(())()))((*(())))))()))))())*(())()(()(*))*(*"))
// // console.log(checkValidString("(())((())()()(*)(*()(())())())()()((()())((()))(*"))

// function verify(s) {
//   console.log(s)
//   var arr=s.split("");
//   var i=0;
//   var mid;
//   var sarr=[...new Set(arr)];
//   while(sarr.length>1){
//     switch(arr[i]){
//       case "*":
//         i++;
//         mid="*"
//         break;
//       case "(":
//         mid=arr[arr.length-1];
//         arr.pop();
//         arr.splice(i,1);
//         break;
//       case ")":
//         mid=arr[0]
//         arr.shift();
//         i--;
//         arr.splice(i,1);
//         break;
//     }
//     console.log(arr,i)
//     if(mid!=="*"){return false}
//     if(arr.length===0){return true}
//     if(i===arr.length-1){sarr=[...new Set(arr)];}
//   }
//   return sarr[0]==="*"?true:false;
// }
# React_Project2

//memoization we use to make our code more efficient if any function taking some time
// to exicute we will store the output of the function in cache and user call same function with same
// arguments instead running that function again it will just pick the value from cache and return it.
// function calc(arr) {
// let result = 0;
// for (i = 0; i <= arr; i++) {
// result = result + i;
// }
// return result;
// }
// const memoization = (fun) => {
// let cache = {};
// return function (...args) {
// n = args[0];
// if (n in cache) {
// return cache[n];
// } else {
// let result = fun(n);
// cache[n] = result;
// return result;
// }
// };
// };
// let sum = function (a) {
// return function (b) {
// if (b) {
// return sum(a + b);
// } else {
// return a;
// }
// };
// };
// console.log(sum(1)(2)(3)(4)());

// const memo = memoization(calc);
// console.log(memo(6));
// console.log(memo(5));

//Redux Toolkit
// build store
// connect store with app
// create a cart slice
// dispatch action
// read data using selector
// @reduxjs/toolkit and resct-redux

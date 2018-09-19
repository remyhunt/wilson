
console.log('item 1:' , wilson_lower_bound(5, 100) );
// console.log('item 2:' , wilson_lower_bound(2, 2) );
// console.log('item 2:' , wilson_lower_bound(3, 3) );
// console.log('item 2:' , wilson_lower_bound(4, 4) );
// console.log('item 2:' , wilson_lower_bound(5, 5) );
// console.log('item 2:' , wilson_lower_bound(10, 10) );
// console.log('item 2:' , wilson_lower_bound(100, 100) );
// console.log('item 2:' , wilson_lower_bound(1000, 1000) );
// console.log('item 2:' , wilson_lower_bound(40000, 4000) );
// console.log('item 2:' , wilson_lower_bound(10001, 10001) );
// console.log('item 2:' , wilson_lower_bound(20, 200) );
// console.log('item 2:' , wilson_lower_bound(.5, 400) );




// let n be the sample size, and pos be the amount of positive reviews
// calculates the binomial proportion confidence interval
// lower bound of a bernoulli parameter
function wilson_lower_bound(pos, n){
  // calculate p hat
  let p = pos/n;

  // in this case, a z score for this implementation
  let z = 1.96;

  let interval = ( p + z * z / (2 * n) - z * Math.sqrt( (p * (1 - p) + z * z / ( 4 * n )) / n)) / (1 + z * z /n);
  // console.log()
  return interval;
}
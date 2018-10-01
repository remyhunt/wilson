// let n be the sample size, and pos be the amount of positive reviews
// calculates the binomial proportion confidence interval
// lower bound of a bernoulli parameter
function wilson_lower_bound(pos, n) {
  // calculate p hat
  let p = pos / n;

  // most rudimentary case, a z score for this implementation for .95 confidence
  let z = 1.96;

  let interval =
    (p +
      (z * z) / (2 * n) -
      z * Math.sqrt((p * (1 - p) + (z * z) / (4 * n)) / n)) /
    (1 + (z * z) / n);
  // console.log()
  return interval;
}

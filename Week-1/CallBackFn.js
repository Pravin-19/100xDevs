function square(n) {
  return n * n;
}

function sumofsquares(a, b) {
  let sample1 = square(a);
  let sample2 = square(b);

  return sample1 + sample2;
}

console.log(sumofsquares(2, 3));

function cube(n) {
  return n * n * n;
}

function calculate(a, b, fn) {
  console.log(a);
  console.log(fn);
  let val1 = fn(a);
  let val2 = fn(b);

  return val1 + val2;
}

console.log(calculate(2, 2, cube));
console.log(calculate(2, 2, square));
console.log(
  calculate(2, 3, function add(m) {
    return m + m;
  })
);
let ans = calculate(1, 2, function (n) {
  return n + n;
});

console.log(ans);

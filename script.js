function secondHighest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second;
}

let n = Number(prompt());
let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(Number(prompt()));
}

alert(secondHighest(arr));
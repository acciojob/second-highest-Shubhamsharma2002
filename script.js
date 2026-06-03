function secondHighest(arr) {
    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        num = Number(num);

        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }

    return second;
}
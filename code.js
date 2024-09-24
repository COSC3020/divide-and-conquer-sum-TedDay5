function divideAndConquerSum(a) {
    return sumOfArrays(a, 0, a.length-1);
}

function sumOfArrays(a, head, tail) {
    if (head > tail) {
        return 0;
    }
    if (head === tail) {
        return a[head];
    }

    const split = Math.floor((tail - head + 1)/3);
    const thrid1 = head + split;
    const thrid2 = head + (split*2);

    const subA1 = sumOfArrays(a, head, thrid1-1);
    const subA2 = sumOfArrays(a, thrid1, thrid2-1);
    const subA3 = sumOfArrays(a, thrid2, tail);

    return subA1 + subA2 + subA3;
}

function divideAndConquerSum(a) {
    if (a.length == 0) {
        return 0;
    }
    return (sumOfArrays(0, a.length-1, a) + a[a.length-1]);
}

function sumOfArrays(tail, head, temp) {
    if (head - tail <= 1) {
        if (head == tail) {
            return 0;
        }
        else if (tail < head) {
            return temp[tail];
        }
        else {
            return 0;
        }
    }
    else {
        var thrid1 = tail + Math.floor((head - tail)/3);
        var thrid2 = tail + 2 * Math.floor((head - tail)/3) + 1;
        return ((sumOfArrays(tail, thrid1, temp)) + (sumOfArrays(thrid1, thrid2, temp)) + (sumOfArrays(thrid2, head, temp)));
    }
}

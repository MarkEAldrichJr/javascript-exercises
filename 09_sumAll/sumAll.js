const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b))
        return 'ERROR';
    if (a < 0 || b < 0) return 'ERROR';

    let val = 0;
    if (a > b){
        for (let i = b; i <= a; i++){
            val += i;
        }
    } else if (a < b) {
        for (let i = a; i <= b; i++){
            val += i;
        }
    }
    return val;
};

// Do not edit below this line
module.exports = sumAll;

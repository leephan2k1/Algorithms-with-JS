// the algorithm shuffles the sequence
// Thuật toán xáo trộn chuỗi / mảng

//Random integer number with range  min - max
function randomInt(min = 0, max = 1) {
    return Math.round((min - 0.5) + Math.random() * (max - min + 1));
}
//shuffle using Fisher-Yates algorithm: ref: wiki, javascript.info.
function shuffle(arr = []) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let randomIndex = randomInt(0, i);
        let temp = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
}
//<-- count the probability of occurrence -->
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};
//Test: shuffle is called 1 million times
for (let i = 0; i < 1000000; i++) {
    let arr = [1, 2, 3];
    shuffle(arr);
    count[arr.join('')]++;
}
//proof for frequency
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}
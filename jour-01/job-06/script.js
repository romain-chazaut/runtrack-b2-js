function mySquareArray(array) {
    let squaredArray = [];
    for (let i = 0; i < array.length; i++) {
        let squaredValue = array[i] * array[i];
        squaredArray[i] = squaredValue;
    }
    return squaredArray;
}


console.log(mySquareArray([1, 2, 7, 55, 5])); 

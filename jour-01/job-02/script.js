function myCountChar(haystack, needle) {
    let count = 0;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            count++;
        }
    }

    return count;
}


console.log(myCountChar("Hello World", "o"));  

function myIsInString(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let matched = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                matched = false;
                break;
            }
        }
        if (matched) {
            return true;
        }
    }
    return false;
}


console.log(myIsInString("Hello World", "llo"));  
console.log(myIsInString("Hello World", "rele"));  

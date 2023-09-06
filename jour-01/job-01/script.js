function myUpperCase(string) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < string.length; i++) {
        const currentChar = string[i];
        let convertedChar = currentChar;

        for (let j = 0; j < lowercase.length; j++) {
            if (currentChar === lowercase[j]) {
                convertedChar = uppercase[j];
                break;
            }
        }

        result += convertedChar;
    }

    return result;
}

// Affiche le résultat dans la console du navigateur
console.log(myUpperCase("Hello world"));

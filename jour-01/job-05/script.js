function myPrimeList(limit) {
    let primes = [];
    let primeCount = 0;

    for (let num = 2; num <= limit; num++) {
        let isPrime = true;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes[primeCount] = num;
            primeCount++;
        }
    }

    return primes;
}


console.log(myPrimeList(18));  

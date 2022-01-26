function fatorial(n) {
    if (n > 1) {
        return (n * fatorial(n-1));
    } else {
        return n;
    }
}

console.log(fatorial(10));
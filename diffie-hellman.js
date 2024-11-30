// Diffie-Hellman
const {nextPrime, modExp, charToAscii} = require('./supportfunc')
const nim = "222294";
let n = nextPrime(parseInt(nim.slice(-2))); // Ambil 2 angka terakhir NIM
const g = 5; // g diberikan (g < n)

const a = 6; // Nilai privat Alice (contoh)
const b = 15; // Nilai privat Bob (contoh)

const A = modExp(g, a, n);
const B = modExp(g, b, n);

const K_Alice = modExp(B, a, n);
const K_Bob = modExp(A, b, n);

console.log("Diffie-Hellman:");
console.log("Nilai n:", n);
console.log("Nilai g:", g);
console.log("Nilai publik Alice (A):", A);
console.log("Nilai publik Bob (B):", B);
console.log("Shared secret K (Alice):", K_Alice);
console.log("Shared secret K (Bob):", K_Bob);

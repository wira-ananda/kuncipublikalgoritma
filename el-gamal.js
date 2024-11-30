// ElGamal
const {nextPrime, modExp, charToAscii} = require('./supportfunc')
const nim = "222294";
const plaintext = parseInt(nim.slice(0, 4)); // Ambil 4 angka pertama NIM sebagai plaintext
let p = nextPrime(parseInt(nim.slice(-2))); // Ambil 2 angka terakhir NIM
const g_elgamal = 3; // g diberikan (g < p)
let x = nextPrime(parseInt(nim.slice(0, 2))); // Ambil 2 angka pertama NIM

// Hitung kunci publik dan privat
const y = modExp(g_elgamal, x, p); // y = g^x mod p
const publicKey = { p, g: g_elgamal, y };
const privateKey = x;

console.log("ElGamal:");
console.log("Kunci Publik:", publicKey);
console.log("Kunci Privat:", privateKey);

// Enkripsi
const k = 7; // Random bilangan prima kecil
const c1 = modExp(g_elgamal, k, p); // c1 = g^k mod p
const c2 = (plaintext * modExp(y, k, p)) % p; // c2 = m * y^k mod p
console.log("Hasil Enkripsi (c1, c2):", { c1, c2 });

// Dekripsi
const decrypted = (c2 * modExp(c1, p - 1 - x, p)) % p; // m = c2 * c1^(p-1-x) mod p
console.log("Hasil Dekripsi:", decrypted);

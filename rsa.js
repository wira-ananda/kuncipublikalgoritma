// RSA
const {nextPrime, modExp, charToAscii, asciiToChar} = require('./supportfunc')
const name = "WIRAANANDA"; // Nama untuk dienkripsi (5 huruf pertama)
const p_rsa = 7;
const q_rsa = 17;
const n_rsa = p_rsa * q_rsa;
const phi = (p_rsa - 1) * (q_rsa - 1);

// Cari e (kunci publik) yang relatif prima dengan phi
let e = 2;
while (e < phi && gcd(e, phi) !== 1) {
  e++;
}

// Cari d (kunci privat) dengan mod invers
function modInverse(a, m) {
  for (let i = 1; i < m; i++) {
    if ((a * i) % m === 1) return i;
  }
  return -1;
}
const d = modInverse(e, phi);

console.log("RSA:");
console.log("Kunci Publik (e, n):", { e, n: n_rsa });
console.log("Kunci Privat (d, n):", { d, n: n_rsa });

// Enkripsi
const encryptedName = name
  .slice(0, 5)
  .split("")
  .map(char => modExp(charToAscii(char), e, n_rsa));
console.log("Hasil Enkripsi:", encryptedName);

// Dekripsi
const decryptedName = encryptedName
  .map(num => asciiToChar(modExp(num, d, n_rsa)))
  .join("");
console.log("Hasil Dekripsi:", decryptedName);

// Helper: GCD
function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

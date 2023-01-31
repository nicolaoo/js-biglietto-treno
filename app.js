// 1. Chiedre all'utente i km che vuole percorrere
let kmPercorsi = parseInt ( prompt ('Quanti km vuoi percorrere?'));
console.log (kmPercorsi)
// 2. Chiedre all'utente l'eta
let eta = prompt ('Quanti anni hai?')
console.log(eta)
// 3. Trovare il prezzo del biglietto (0.21€)
let prezzoBiglietto = kmPercorsi * 0.21
console.log(prezzoBiglietto)
// 4. inserire il 20% di sconto per gli under 18
let scontoUnder = (prezzoBiglietto * 20) / 100
let prezzoScontoUnder = prezzoBiglietto - scontoUnder
console.log(scontoUnder)
console.log(prezzoScontoUnder)
// 5. Inserire il 40% di sconto per gli over 65
// 6. Calcolare il prezzo del biglietto in base ai dati sopra trovati


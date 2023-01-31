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
console.log(scontoUnder)
// 5. Inserire il 40% di sconto per gli over 65
let scontoOver = (prezzoBiglietto * 40) / 100
console.log(scontoOver)
// 6. Calcolare il prezzo scontato del biglietto in base ai dati sopra trovati
let prezzoScontoUnder = ( prezzoBiglietto - scontoUnder)
console.log(prezzoScontoUnder)
let prezzoScontoOver = prezzoBiglietto - scontoOver
console.log (prezzoScontoOver)



// if (eta > 65) {
//     let over65 = document.getElementById('prezzo-biglietto')
//     over65.innerHTML = prezzoScontoOver
//     console.log('sconto eta 65')
// }
// else if (eta < 18) {
//     let under18 = document.getElementById('prezzo-biglietto')
//     under18.innerHTML=prezzoScontoUnder
//     console.log('sconto eta 18')
// }
// else {
//     let prezzo = document.getElementById('prezzo-biglietto')
//     prezzo.innerHTML = prezzoBiglietto
//     console.log('altri prezzi')
// }

// 7. Stampare in html il prezzo del biglietto

if (eta > 65) {
    console.log('eta maggiore di 65')
}

else if (eta < 18){
    console.log('eta inore di 18')
}

else {
    console.log ('ttuo il resto')
}
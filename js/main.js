const bikes = [
    {
        brand: "olmo",
        kg: 18,
        color: "red"
    },
    {
        brand: "kona",
        kg: 11,
        color: "red"
    },
    {
        brand: "attila",
        kg: 20,
        color: "red"
    },
    {
        brand: "montali",
        kg: 19,
        color: "red"
    }, {
        brand: "montali",
        kg: 9,
        color: "red"
    }, {
        brand: "montali",
        kg: 29,
        color: "red"
    }, {
        brand: "montali",
        kg: 22,
        color: "red"
    }, {
        brand: "montali",
        kg: 39,
        color: "red"
    }
];
// creo variabile-array che mappa tutti gli oggetti dentro l'array, e associa alla variabile-array il valore contenuto nel oggetto
let weigth = bikes.map(bike => bike.kg);
console.log(weigth);


//ciclo i valori ottenuti da prima per constataee il minore
let min = Math.min(...weigth); 
let pos = weigth.findIndex( kg => kg === min);
console.log(pos);
console.log("la bici che pesa di meno pesa è : " + bikes[pos].brand +" di kg "+  bikes[pos].kg  +" colore "+  bikes[pos].color);
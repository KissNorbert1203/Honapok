let Honapok = [
    {
        honapnev : "Január",
        evszak : "Tél",
        napszam : 31
    },
    {
        honapnev : "Február",
        evszak : "Tél",
        napszam : 28
    },
    {
        honapnev : "Március",
        evszak : "Tavasz",
        napszam : 31
    },
    {
        honapnev : "Áprils",
        evszak : "Tavasz",
        napszam : 30
    },
    {
        honapnev : "Május",
        evszak : "Tavasz",
        napszam : 31
    },
    {
        honapnev : "Június",
        evszak : "Nyár",
        napszam : 30
    },
    {
        honapnev : "Július",
        evszak : "Nyár",
        napszam : 31
    },
    {
        honapnev : "Augusztus",
        evszak : "Nyár",
        napszam : 31
    },
    {
        honapnev : "Szeptember",
        evszak : "Ősz",
        napszam : 30
    },
    {
        honapnev : "Október",
        evszak : "Ősz",
        napszam : 31
    },
    {
        honapnev : "November",
        evszak : "Ősz",
        napszam : 30
    },
    {
        honapnev : "December",
        evszak : "Tél",
        napszam : 31
    }
]

let honapszam

function honapkereses(honapszam){
    let index = Honapok[honapszam - 1]
    // console.log(index) 
    console.log("Hónap: " + index.honapnev)
    console.log("Évszak: " + index.evszak)
    console.log("Napok száma: " + index.napszam)
    return index
}
try{
    honapszam = prompt("Adj meg egy hónapszámot:")
    if(isNaN(honapszam)){
        throw("Nem szám")
    }
    else if (honapszam > 12 || honapszam < 1) {
        throw("Nem érvényes szám");
    }
    honapkereses(honapszam)
    
} 
catch (e) {
    console.error(e)
}




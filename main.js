let Honapok = [
    {
        honapnev : "Január",
        evszak : "Tél",
        napszam : 31,
        unnep : "Újév"
    },
    {
        honapnev : "Február",
        evszak : "Tél",
        napszam : 28,
        unnep : "Nincs ünnep"
    },
    {
        honapnev : "Március",
        evszak : "Tavasz",
        napszam : 31,
        unnep : "Nemzeti ünnep"
    },
    {
        honapnev : "Áprils",
        evszak : "Tavasz",
        napszam : 30,
        unnep : "Húsvét"
    },
    {
        honapnev : "Május",
        evszak : "Tavasz",
        napszam : 31,
        unnep : "Anyák napja"
    },
    {
        honapnev : "Június",
        evszak : "Nyár",
        napszam : 30,
        unnep : "Nincs ünnep"
    },
    {
        honapnev : "Július",
        evszak : "Nyár",
        napszam : 31,
        unnep : "Nincs ünnep"
    },
    {
        honapnev : "Augusztus",
        evszak : "Nyár",
        napszam : 31,
        unnep : "Nemzeti ünnep (államalapítás)"
    },
    {
        honapnev : "Szeptember",
        evszak : "Ősz",
        napszam : 30,
        unnep : "Nincs ünnep"
    },
    {
        honapnev : "Október",
        evszak : "Ősz",
        napszam : 31,
        unnep : "Nemzeti ünnep(1956 os Forradalom)"
    },
    {
        honapnev : "November",
        evszak : "Ősz",
        napszam : 30,
        unnep : "Mindenszentek"
    },
    {
        honapnev : "December",
        evszak : "Tél",
        napszam : 31,
        unnep : "Karácsony"
    }
]

document.getElementById("beirt").value = "";

function honapkereses(h){
    let index = Honapok[h-1]
    return index
}

function start(){
    let honap
    let honapszam
    document.getElementById("eredmenyHonap").innerHTML = ""
    document.getElementById("eredmenyEvszak").innerHTML = ""
    document.getElementById("eredmenyNap").innerHTML = ""
    document.getElementById("eredmenyUnnep").innerHTML = ""
    try{
        honapszam = +document.getElementById("beirt").value
        if(isNaN(honapszam)){
            throw("Hiba: Nem számot adtál meg!")
        }
        else if(honapszam == ""){
            throw("Hiba: Nem adtál meg semmit!")
        }
        else if (honapszam > 12 || honapszam < 1) {
            throw("Hiba: A hónapszámnak 1 és 12 közé kell esnie!");
        }
        honap = honapkereses(honapszam)
        document.getElementById("eredmenyHonap").innerHTML = "Hónap: " + honap.honapnev
        document.getElementById("eredmenyEvszak").innerHTML = "Évszak: " + honap.evszak
        document.getElementById("eredmenyNap").innerHTML = "Napok száma: " + honap.napszam
        document.getElementById("eredmenyUnnep").innerHTML = "Ünnep: " + honap.unnep
        document.getElementById("honapgomb").style.visibility = "visible"
        document.getElementById("unnepvaltoztatas").style.visibility = "visible"
    } 
    catch (e) {
        document.getElementById("eredmenyHonap").innerHTML = e
        document.getElementById("honapgomb").style.visibility = "hidden"
        document.getElementById("unnepvaltoztatas").style.visibility = "hidden"
    }
    return honapszam
}

let valasztotHonap
let unnepModositas
document.getElementById("honapgomb").style.visibility = "hidden"
document.getElementById("unnepvaltoztatas").style.visibility = "hidden"

function valtoztatas(){
    let honapSzam = +document.getElementById("beirt").value;
    let keresettHonap = honapSzam - 1;
    let unnepUj = document.getElementById("unnepvaltoztatas").value;
    if (Honapok[keresettHonap]) {
        Honapok[keresettHonap].unnep = unnepUj
    }
    document.getElementById("eredmenyUnnep").innerHTML = "Ünnep: " + Honapok[keresettHonap].unnep
}
let a=10;
let b=20;
let c=23.2;

let dodawanie = a + b;
let odejmowanie = a - b;
let mnozenie = a * c;
let dzielenie = b / c;

// alert(a+b+c)
console.log(a+b+c);

document.getElementById("dodawanie").innerHTML=`Dodawanie: ${dodawanie},<br> Odejmowanie: ${odejmowanie}, <br>Mnożenie: ${mnozenie}, <br>Dzielenie: ${dzielenie}`;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let s = (a + b + c) / 2;
let pole = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(`Pole trójkąta: ${pole}`);
document.getElementById("polet").innerHTML=pole;

let imie=prompt("Podaj imie: ");
alert(`Witaj ${imie}`);

let l1=parseInt(prompt("Podaj 1 liczbe: "));
let l2=parseInt(prompt("Podaj 2 liczbe: "));
let dod1= l1 + l2;
alert(`Wynik dodawania ${dod1}`);

let lb1=parseFloat(prompt("Podaj 1 liczbe: "));
let lb2=parseFloat(prompt("Podaj 2 liczbe: "));
let lb3=parseFloat(prompt("Podaj 3 liczbe: "));

let max = Math.max(lb1,lb2,lb3);
alert(`Max: ${max}`)


function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
let liczbaA = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
let liczbaB = parseInt(prompt("Podaj drugą liczbę całkowitą:"));
let nwd = gcd(liczbaA, liczbaB);
alert(`Największy wspólny dzielnik: ${nwd}`);

function wyswietlCzas() {
    const now = new Date();
    const godzina = now.getHours();
    const minuta = now.getMinutes();
    const sekunda = now.getSeconds();
    document.getElementById("czas").innerText = `Aktualny czas: ${godzina}:${minuta}:${sekunda}`;
}
setInterval(wyswietlCzas, 1000);
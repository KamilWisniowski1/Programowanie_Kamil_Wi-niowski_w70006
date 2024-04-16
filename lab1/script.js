// let a=10;
// let b=20;
// let c=23.2;

// let dodawanie = a + b;
// let odejmowanie = a - b;
// let mnozenie = a * c;
// let dzielenie = b / c;

// // alert(a+b+c)
// console.log(a+b+c);

// document.getElementById("dodawanie").innerHTML=`Dodawanie: ${dodawanie},<br> Odejmowanie: ${odejmowanie}, <br>Mnożenie: ${mnozenie}, <br>Dzielenie: ${dzielenie}`;

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// let s = (a + b + c) / 2;
// let pole = Math.sqrt(s * (s - a) * (s - b) * (s - c));
// console.log(`Pole trójkąta: ${pole}`);
// document.getElementById("polet").innerHTML=pole;

// let imie=prompt("Podaj imie: ");
// alert(`Witaj ${imie}`);

// let l1=parseInt(prompt("Podaj 1 liczbe: "));
// let l2=parseInt(prompt("Podaj 2 liczbe: "));
// let dod1= l1 + l2;
// alert(`Wynik dodawania ${dod1}`);

// let lb1=parseFloat(prompt("Podaj 1 liczbe: "));
// let lb2=parseFloat(prompt("Podaj 2 liczbe: "));
// let lb3=parseFloat(prompt("Podaj 3 liczbe: "));

// let max = Math.max(lb1,lb2,lb3);
// alert(`Max: ${max}`)


// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
// let liczbaA = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
// let liczbaB = parseInt(prompt("Podaj drugą liczbę całkowitą:"));
// let nwd = gcd(liczbaA, liczbaB);
// alert(`Największy wspólny dzielnik: ${nwd}`);

// function wyswietlCzas() {
//     const now = new Date();
//     const godzina = now.getHours();
//     const minuta = now.getMinutes();
//     const sekunda = now.getSeconds();
//     document.getElementById("czas").innerText = `Aktualny czas: ${godzina}:${minuta}:${sekunda}`;
// }
// setInterval(wyswietlCzas, 1000);

// function odliczanie(){
//     for(let i = 10; i>=0; i--){
//        setTimeout(() => {
//         console.log(i);
//         if(i===0){
//             console.log("Happy New Year!")
//         }
//        }, (10 - i) * 100);   
//     }
// }

// odliczanie()

// function silnia(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * silnia(n - 1);
//     }
// }
// console.log(silnia(5)); 

// function sprawdzwiek(w){
//     if(w<18){
//         window.open("https://www.w3schools.com/jsref/met_win_open.asp", "_self");
//     }
// }
// sprawdzwiek(prompt("Wprowadź wiek"))

// function zmienkolor(buttonId) {
//     var buttons = document.querySelectorAll(".button");
//     buttons.forEach(function (button) {
//         button.classList.remove("active");
//     });
//     document.getElementById(buttonId).classList.add("active");
// }

// function pokazElement() {
//     var element = document.getElementById("pokazElement");
//     if (element.style.display === "none") {
//         element.style.display = "block";
//     } else {
//         element.style.display = "none";
//     }
// }

// function dodajDoListy() {
//     var inputText = document.getElementById("textInput").value;
//     var list = document.getElementById("list");
//     var listItem = document.createElement("li");
//     listItem.appendChild(document.createTextNode(inputText));
//     list.appendChild(listItem);
// }

// function dodajDoTabeli() {
//     var imie = document.getElementById("imie").value;
//     var nazwisko = document.getElementById("nazwisko").value;
//     var tabela = document.getElementById("tabela");
//     var row = tabela.insertRow(-1);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.innerHTML = imie;
//     cell2.innerHTML = nazwisko;
//     document.getElementById("imie").value = "";
//     document.getElementById("nazwisko").value = "";
// }

// function konwerterDoFahrenheit() {
//     var celsius = parseFloat(document.getElementById("celsiusInput").value);
//     var fahrenheit = (celsius * 9 / 5) + 32;
//     document.getElementById("fahrenheitOutput").innerText = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
// }

// function konwerterDoCelsius() {
//     var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
//     var celsius = (fahrenheit - 32) * 5 / 9;
//     document.getElementById("celsiusOutput").innerText = fahrenheit + "°F = " + celsius.toFixed(2) + "°C";
// }

// let liczby = [];

// for(var i=0; i<10; i++){
//     var liczba = parseInt(prompt("Podaj liczbę całkowitą: "));
//     liczby.push(liczba);
// }

// console.log(liczby);

// var szukanaLiczba = parseInt(prompt("Podaj liczbę całkowitą: "));

// var licznik=0;

// for(var j=0;j<liczby.length;j++){
//     if(liczby[j]==szukanaLiczba){
//         licznik++;
//     }
// }
// console.log("Liczba wystąpień liczby", szukanaLiczba, "w tablicy:", licznik);

// let liczby=[1,2,3,4,5,6];

// var dodanaLiczba = parseInt(prompt("Podaj liczbę całkowitą: "));
// var index = parseInt(prompt("Podaj index: "));

// liczby.splice(index,0,dodanaLiczba)

// console.log(liczby);
// liczby.reverse();
// console.log(liczby);

// Funkcja generująca tablicę 'count' losowych liczb całkowitych z zakresu od 'min' do 'max'
// 5. Operacje na tablicy liczb
let numbers = [3, 7, 12, 5, 8, 6, 9, 4]; // Przykładowa tablica liczb

// a. Zsumuj wartości
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Suma liczb:", sum);

// b. Znajdź liczby parzyste
const przysteLiczby = numbers.filter(num => num % 2 === 0);
console.log("Liczby parzyste:", przysteLiczby);

// c. Pomnóż wartości razy 3
const pomnozoneLiczby = numbers.map(num => num * 3);
console.log("Liczby pomnożone przez 3:", pomnozoneLiczby);

// d. Dodaj do tablicy swój numer albumu i znajdź jego index
const myAlbumNumber = 70006; // Twój numer albumu
numbers.push(myAlbumNumber);
const index = numbers.indexOf(myAlbumNumber);
console.log("Index numeru albumu:", index);

// e. Oblicz średnią arytmetyczną
const srednia = sum / numbers.length;
console.log("Średnia arytmetyczna:", srednia);

// f. Znajdź największą liczbę
const maxNumber = Math.max(...numbers);
console.log("Największa liczba:", maxNumber);

// g. Zlicz ilość wystąpień wybranej wartości
const iloscWyswietlen = 5; // Wybrana wartość
const count = numbers.filter(num => num === iloscWyswietlen).length;
console.log("Ilość wystąpień wartości", iloscWyswietlen + ":", count);

// 6. Tablica z ciągiem Fibonacciego
function ciagFibonacciego(iloscElementow) {
    let fib = [0, 1];
    for (let i = 2; i < iloscElementow; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

const fibonacci = ciagFibonacciego(100);
console.log("Ciąg Fibonacciego (pierwsze 100 elementów):", fibonacci);

// 7. Funkcja zwracająca sumę dwóch największych liczb z tablicy
function sumaDwochNajwiekszychLiczb(arr) {
    if (arr.length < 2) return "Tablica ma za mało elementów";
    
    arr.sort((a, b) => b - a);
    return arr[0] + arr[1];
}

const tablicaLiczb = [3, 7, 12, 5, 8, 6, 9, 4]; // Przykładowa tablica liczb
const sumaDwochNajwiekszych = sumaDwochNajwiekszychLiczb(tablicaLiczb);
console.log("Suma dwóch największych liczb:", sumaDwochNajwiekszychLiczb);

// 8. Funkcja usuwająca duplikaty z tablicy
function usunDuplikaty(arr) {
    return [...new Set(arr)];
}

const tablicaDuplikaty = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const tablicaBezDuplikatow = usunDuplikaty(tablicaDuplikaty);
console.log("Tablica bez duplikatów:", tablicaBezDuplikatow);

// 9. Funkcja sprawdzająca czy liczba jest pierwsza
function spawdzCzyLiczbaPierwsza(liczba) {
    if (liczba <= 1) return false;
    if (liczba <= 3) return true;

    if (liczba % 2 === 0 || liczba % 3 === 0) return false;

    let i = 5;
    while (i * i <= liczba) {
        if (liczba % i === 0 || liczba % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

const liczbaDoSprawdzenia = 17;
console.log(liczbaDoSprawdzenia + " jest liczbą pierwszą:", spawdzCzyLiczbaPierwsza(liczbaDoSprawdzenia));

// 10. Funkcja odwracająca kolejność słów w zdaniu
function odwrocKolejnosc(zdanie) {
    return zdanie.split(" ").reverse().join(" ");
}

const zdanie = "To jest przykładowe zdanie do odwrócenia";
const odwroconeZdanie = odwrocKolejnosc(zdanie);
console.log("Odwrócone zdanie:", odwroconeZdanie);

// 11. Funkcja generująca losowe hasło
function generujRandomoweHaslo(length) {
    const zbiorZnakow = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let hasło = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * zbiorZnakow.length);
        hasło += zbiorZnakow[randomIndex];
    }
    return hasło;
}

const dlugoscHasla = 8;
const losoweHaslo = generujRandomoweHaslo(dlugoscHasla);
console.log("Losowe hasło:", losoweHaslo);


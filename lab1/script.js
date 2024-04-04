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

function odliczanie(){
    for(let i = 10; i>=0; i--){
       setTimeout(() => {
        console.log(i);
        if(i===0){
            console.log("Happy New Year!")
        }
       }, (10 - i) * 100);   
    }
}

odliczanie()

function silnia(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * silnia(n - 1);
    }
}
console.log(silnia(5)); 

// function sprawdzwiek(w){
//     if(w<18){
//         window.open("https://www.w3schools.com/jsref/met_win_open.asp", "_self");
//     }
// }
// sprawdzwiek(prompt("Wprowadź wiek"))

function zmienkolor(buttonId) {
    var buttons = document.querySelectorAll(".button");
    buttons.forEach(function (button) {
        button.classList.remove("active");
    });
    document.getElementById(buttonId).classList.add("active");
}

function pokazElement() {
    var element = document.getElementById("pokazElement");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function dodajDoListy() {
    var inputText = document.getElementById("textInput").value;
    var list = document.getElementById("list");
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(inputText));
    list.appendChild(listItem);
}

function dodajDoTabeli() {
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    var tabela = document.getElementById("tabela");
    var row = tabela.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = imie;
    cell2.innerHTML = nazwisko;
    document.getElementById("imie").value = "";
    document.getElementById("nazwisko").value = "";
}

function konwerterDoFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("fahrenheitOutput").innerText = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
}

function konwerterDoCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("celsiusOutput").innerText = fahrenheit + "°F = " + celsius.toFixed(2) + "°C";
}
//zad1
const ksiazka = {
    tytul: "Władca Pierścieni",
    autor: "J.K Rowling",
    rokWydania: 1154
};

function informacjeOKsiazce(ksiazkaObj) {
    return `${ksiazkaObj.tytul} - ${ksiazkaObj.autor} (${ksiazkaObj.rokWydania})`;
}

console.log(informacjeOKsiazce(ksiazka));

//zad2
const student = {
    imie: "Kamil",
    nazwisko: "Wiśniowski",
    numerAlbumu: "70006",
    oceny: [4, 2, 3.5, 5]
};

function obliczSredniaOcen(oceny) {
    const suma = oceny.reduce((total, ocena) => total + ocena, 0);
    return suma / oceny.length;
}

const sredniaOcena = obliczSredniaOcen(student.oceny);
console.log(`Średnia ocen studenta ${student.imie} ${student.nazwisko}: ${sredniaOcena}`);

//zad3
class Trojkat {
    constructor(wysokosc, dlugoscPodstawy, nazwa) {
        this.wysokosc = wysokosc;
        this.dlugoscPodstawy = dlugoscPodstawy;
        this.nazwa = nazwa;
    }

    obliczPole() {
        return 0.5 * this.dlugoscPodstawy * this.wysokosc;
    }

    static porownajPola(trojkat1, trojkat2) {
        const poleTrojkat1 = trojkat1.obliczPole();
        const poleTrojkat2 = trojkat2.obliczPole();

        if (poleTrojkat1 > poleTrojkat2) {
            return trojkat1;
        } else if (poleTrojkat1 < poleTrojkat2) {
            return trojkat2;
        } else {
            return "Pola trójkątów są równe.";
        }
    }
}

const trojkat1 = new Trojkat(6,9, "ABC");
const trojkat2 = new Trojkat(3, 5, "DEF");
const trojkat3 = new Trojkat(2, 4, "GHI");

console.log("Pole trójkąta 1:", trojkat1.obliczPole());
console.log("Pole trójkąta 2:", trojkat2.obliczPole());
console.log("Pole trójkąta 3:", trojkat3.obliczPole());

const wiekszyTrojkat = Trojkat.porownajPola(trojkat1, trojkat2);
console.log("Trójkąt o większym polu:", wiekszyTrojkat instanceof Trojkat ? wiekszyTrojkat.nazwa : wiekszyTrojkat);


//zad4
class Trapez {
    constructor(wysokosc, podstawa1, podstawa2, nazwa) {
        this.wysokosc = wysokosc;
        this.podstawa1 = podstawa1;
        this.podstawa2 = podstawa2;
        this.nazwa = nazwa;
    }

    obliczPole() {
        return 0.5 * (this.podstawa1 + this.podstawa2) * this.wysokosc;
    }

    zmienNazwe(nowaNazwa) {
        this.nazwa = nowaNazwa;
    }
}

const trapez1 = new Trapez(5, 3, 7, "Trapez ABC");
const trapez2 = new Trapez(4, 2, 6, "Trapez DEF");
const trapez3 = new Trapez(6, 4, 8, "Trapez GHI");

console.log("Pole trapezu 1:", trapez1.obliczPole());
console.log("Pole trapezu 2:", trapez2.obliczPole());
console.log("Pole trapezu 3:", trapez3.obliczPole());

trapez1.zmienNazwe("Nowy Trapez");
console.log("Nowa nazwa trapezu 1:", trapez1.nazwa);

//zad 5
function wiekszaFigura(trojkat, trapez) {
    const poleTrojkat = trojkat.obliczPole();
    const poleTrapez = trapez.obliczPole();

    if (poleTrojkat > poleTrapez) {
        console.log(`Większa figura to ${trojkat.nazwa} o polu ${poleTrojkat}`);
    } else if (poleTrapez > poleTrojkat) {
        console.log(`Większa figura to ${trapez.nazwa} o polu ${poleTrapez}`);
    } else {
        console.log("Pola obu figur są równe.");
    }
}

wiekszaFigura(trojkat1, trapez1);


//zad6
class Prostokat {
    constructor(bokA, bokB) {
        this.bokA = bokA;
        this.bokB = bokB;
    }

    obliczPole() {
        return this.bokA * this.bokB;
    }

    obliczObwod() {
        return 2 * (this.bokA + this.bokB);
    }

    czyKwadrat() {
        return this.bokA === this.bokB;
    }
}

const prostokat = new Prostokat(5, 7);
console.log("Pole prostokąta:", prostokat.obliczPole());
console.log("Obwód prostokąta:", prostokat.obliczObwod());
console.log("Czy prostokąt jest kwadratem?", prostokat.czyKwadrat());


//zad 7
class Samochod {
    constructor(marka, model, rokProdukcji, kolor, predkoscMax) {
        this.marka = marka;
        this.model = model;
        this.rokProdukcji = rokProdukcji;
        this.kolor = kolor;
        this.predkoscMax = predkoscMax;
        this.predkosc = 0;
    }

    zwiekszPredkosc(wartosc) {
        if (this.predkosc + wartosc <= this.predkoscMax) {
            this.predkosc += wartosc;
        } else {
            this.predkosc = this.predkoscMax;
        }
    }

    zmniejszPredkosc(wartosc) {
        if (this.predkosc - wartosc >= 0) {
            this.predkosc -= wartosc;
        } else {
            this.predkosc = 0;
        }
    }

    informacjeOSamochodzie() {
        return `${this.marka} ${this.model} (${this.rokProdukcji}), Kolor: ${this.kolor}, Prędkość: ${this.predkosc}`;
    }

    zwrocWiekSamochodu() {
        const dzis = new Date().getFullYear();
        return dzis - this.rokProdukcji;
    }
}

const samochod = new Samochod("OPEL", "Vectra", 1997, "szary", 180);

console.log(samochod.informacjeOSamochodzie());
samochod.zwiekszPredkosc(50);
console.log(samochod.informacjeOSamochodzie());
console.log("Wiek samochodu:", samochod.zwrocWiekSamochodu());


//zad8
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Brak wystarczających środków na koncie.");
        }
    }

    getBalance() {
        return this.balance;
    }
}

const kontoBankowe = new BankAccount(1000);

console.log("Saldo początkowe:", kontoBankowe.getBalance());
kontoBankowe.deposit(500);
console.log("Saldo po wpłacie:", kontoBankowe.getBalance());
kontoBankowe.withdraw(300);
console.log("Saldo po wypłacie:", kontoBankowe.getBalance());
kontoBankowe.withdraw(1300); // Próba wypłaty większej kwoty niż saldo na koncie

//zad 9
class Pracownik {
    constructor(imie, nazwisko, pensja) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.pensja = pensja;
    }
}

class ZarzadzaniePracownikami {
    constructor() {
        this.listaPracownikow = [];
    }

    dodajPracownika(pracownik) {
        this.listaPracownikow.push(pracownik);
    }

    usunPracownika(imie, nazwisko) {
        this.listaPracownikow = this.listaPracownikow.filter(pracownik => pracownik.imie !== imie || pracownik.nazwisko !== nazwisko);
    }

    pobierzPracownika(imie, nazwisko) {
        return this.listaPracownikow.find(pracownik => pracownik.imie === imie && pracownik.nazwisko === nazwisko);
    }

    zapiszDoJSON(nazwaPliku) {
        const fs = require('fs');
        fs.writeFileSync(nazwaPliku, JSON.stringify(this.listaPracownikow));
    }

    wczytajZJSON(nazwaPliku) {
        const fs = require('fs');
        const data = fs.readFileSync(nazwaPliku);
        this.listaPracownikow = JSON.parse(data);
    }
}

const zarzadzanie = new ZarzadzaniePracownikami();
zarzadzanie.dodajPracownika(new Pracownik("Kamil", "Kowalski", 8000));
zarzadzanie.dodajPracownika(new Pracownik("Julka", "Wiśniowska", 7000));
console.log(zarzadzanie.listaPracownikow);

zarzadzanie.usunPracownika("Kamil", "Kowalski");
console.log(zarzadzanie.listaPracownikow);

zarzadzanie.zapiszDoJSON("pracownicy.json");
zarzadzanie.listaPracownikow = [];
zarzadzanie.wczytajZJSON("pracownicy.json");
console.log(zarzadzanie.listaPracownikow);


//zad 10

class Produkt {
    constructor(nazwa, cena, dostepneSztuki) {
        this.nazwa = nazwa;
        this.cena = cena;
        this.dostepneSztuki = dostepneSztuki;
    }
}

class ZarzadzanieProduktami {
    constructor() {
        this.listaProduktow = [];
    }

    dodajProdukt(produkt) {
        this.listaProduktow.push(produkt);
    }

    usunProdukt(nazwa) {
        this.listaProduktow = this.listaProduktow.filter(produkt => produkt.nazwa !== nazwa);
    }

    zmienCene(nazwa, nowaCena) {
        const produkt = this.listaProduktow.find(produkt => produkt.nazwa === nazwa);
        if (produkt) {
            produkt.cena = nowaCena;
        } else {
            console.log("Produkt o podanej nazwie nie istnieje.");
        }
    }

    zapiszDoJSON(nazwaPliku) {
        const fs = require('fs');
        fs.writeFileSync(nazwaPliku, JSON.stringify(this.listaProduktow));
    }

    wczytajZJSON(nazwaPliku) {
        const fs = require('fs');
        const data = fs.readFileSync(nazwaPliku);
        this.listaProduktow = JSON.parse(data);
    }
}

// Przykładowe użycie:
const zarzadzanieProduktami = new ZarzadzanieProduktami();
zarzadzanieProduktami.dodajProdukt(new Produkt("Telefon", 1500, 10));
zarzadzanieProduktami.dodajProdukt(new Produkt("Laptop", 3000, 5));
console.log(zarzadzanieProduktami.listaProduktow);

zarzadzanieProduktami.usunProdukt("Telefon");
console.log(zarzadzanieProduktami.listaProduktow);

zarzadzanieProduktami.zmienCene("Laptop", 2800);
console.log(zarzadzanieProduktami.listaProduktow);

zarzadzanieProduktami.zapiszDoJSON("produkty.json");
zarzadzanieProduktami.listaProduktow = [];
zarzadzanieProduktami.wczytajZJSON("produkty.json");
console.log(zarzadzanieProduktami.listaProduktow);

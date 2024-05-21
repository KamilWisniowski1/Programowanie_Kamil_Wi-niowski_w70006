document.getElementById('kraj').addEventListener('change', function() {
    const wojewodztwo = document.getElementById('wojewodztwo');
    const adresZamieszkania = document.getElementById('adresZamieszkania');
    const adresKorespondencyjny = document.getElementById('adresKorespondencyjny');

    if (this.value === 'Polska') {
        wojewodztwo.disabled = false;
        wojewodztwo.innerHTML = `
            <option value="">Wybierz...</option>
            <option value="Mazowieckie">Mazowieckie</option>
            <option value="Małopolskie">Małopolskie</option>
            <!-- dodaj pozostałe województwa -->
        `;
    } else {
        wojewodztwo.disabled = true;
        wojewodztwo.innerHTML = '<option value="">Wybierz...</option>';
    }

    wojewodztwo.addEventListener('change', function() {
        if (this.value) {
            adresZamieszkania.disabled = false;
            adresKorespondencyjny.disabled = false;
        } else {
            adresZamieszkania.disabled = true;
            adresKorespondencyjny.disabled = true;
        }
    });
});

document.getElementById('checkboxKorespondencyjny').addEventListener('change', function() {
    const adresKorespondencyjny = document.getElementById('adresKorespondencyjny');
    adresKorespondencyjny.disabled = this.checked;
});

function sprawdzTrudnoscHasla(haslo) {
    const warunki = [
        /[a-z]/.test(haslo),
        /[A-Z]/.test(haslo),
        /[0-9]/.test(haslo),
        /[^a-zA-Z0-9]/.test(haslo)
    ];
    return warunki.every(Boolean);
}

function walidacjaFormularza(event) {
    event.preventDefault();

    const imie = document.getElementById('imie');
    const nazwisko = document.getElementById('nazwisko');
    const email = document.getElementById('email');
    const haslo = document.getElementById('haslo');
    const powtorzHaslo = document.getElementById('powtorzHaslo');
    const plec = document.getElementById('plec');
    const telefon = document.getElementById('telefon');
    const dataUrodzenia = document.getElementById('dataUrodzenia');
    const kraj = document.getElementById('kraj');
    const wojewodztwo = document.getElementById('wojewodztwo');

    const errors = {};

    if (!imie.value) {
        errors.imie = 'Imię jest wymagane.';
    }

    if (!nazwisko.value) {
        errors.nazwisko = 'Nazwisko jest wymagane.';
    }

    if (!email.value) {
        errors.email = 'Email jest wymagany.';
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        errors.email = 'Email jest niepoprawny.';
    }

    if (!haslo.value) {
        errors.haslo = 'Hasło jest wymagane.';
    } else if (haslo.value.length < 8) {
        errors.haslo = 'Hasło musi mieć co najmniej 8 znaków.';
    } else if (!sprawdzTrudnoscHasla(haslo.value)) {
        errors.haslo = 'Hasło musi zawierać co najmniej jedną małą literę, jedną dużą literę, jedną cyfrę i jeden znak specjalny.';
    }

    if (!powtorzHaslo.value) {
        errors.powtorzHaslo = 'Musisz powtórzyć hasło.';
    } else if (powtorzHaslo.value !== haslo.value) {
        errors.powtorzHaslo = 'Hasła muszą być takie same.';
    }

    if (!plec.value) {
        errors.plec = 'Płeć jest wymagana.';
    }

    if (!telefon.value) {
        errors.telefon = 'Telefon jest wymagany.';
    } else if (!/^\d+$/.test(telefon.value)) {
        errors.telefon = 'Telefon musi zawierać tylko cyfry.';
    }

    if (!dataUrodzenia.value) {
        errors.dataUrodzenia = 'Data urodzenia jest wymagana.';
    } else {
        const dzis = new Date();
        const dataUrodzeniaDate = new Date(dataUrodzenia.value);
        const wiek = dzis.getFullYear() - dataUrodzeniaDate.getFullYear();
        const miesiac = dzis.getMonth() - dataUrodzeniaDate.getMonth();

        if (miesiac < 0 || (miesiac === 0 && dzis.getDate() < dataUrodzeniaDate.getDate())) {
            wiek--;
        }

        if (wiek < 18) {
            errors.dataUrodzenia = 'Musisz być pełnoletni.';
        }
    }

    if (!kraj.value) {
        errors.kraj = 'Kraj jest wymagany.';
    }

    if (kraj.value === 'Polska' && !wojewodztwo.value) {
        errors.wojewodztwo = 'Województwo jest wymagane.';
    }

    document.querySelectorAll('.error').forEach(errorElement => errorElement.textContent = '');

    if (Object.keys(errors).length > 0) {
        for (const key in errors) {
            const errorElement = document.getElementById(`${key}Error`);
            if (errorElement) {
                errorElement.textContent = errors[key];
            }
        }
    } else {
        alert('Formularz został poprawnie wypełniony.');
    }
}

document.getElementById('rejestracjaForm').addEventListener('submit', walidacjaFormularza);
const imieInput = document.getElementById('fname');

// zad2a
// function checkValue(input){
//     if(input.value !== ''){
//         console.log("Pole posiada warotść")
//     }
//     else{
//         console.log("Pole puste")
//     }
    // return input.value !== ''
// }

// zad2b
// function checkLength(input){
//     let text = input.value
//     console.log(text.length);
//     return input.value.length
// }

// zad2c
// function checkEmail(input) {
//     const re= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     let text = input.value;
//     if(text.match(re)){
//         console.log("Pasuje")
//     }
//     else{
//         console.log("Nie pasuje")
//     }
// }

// zad2d
function checkPassword(input) {
    const re= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let text = input.value;
    if(text.match(re)){
        console.log("Pasuje")
    }
    else{
        console.log("Nie pasuje")
    }
}

window.onload = function(){
        const form = document.querySelector('form');
        form.addEventListener('submit', validateForm)
};

function validateForm(){
    const imieInput = document.getElementById('fname');

    checkValue(imieInput);
}
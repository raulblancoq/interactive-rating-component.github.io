const form = document.getElementById('form');
const thankyou = document.getElementById('thankYou');
const rateValue = document.getElementById('rateValue');

form.addEventListener('submit',Rate)

function Rate(e) {
    e.preventDefault();

    const collection = document.getElementsByName('rate-option');
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].checked) {
            form.classList.add('hidden');
            
            rateValue.innerHTML = collection[i].value;
        } else {
            console.log('falta seleccionar')
        }
    }
    thankyou.classList.remove('hidden');
}
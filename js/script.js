const form = document.getElementById('form');
const thankyou = document.getElementById('thankYou');
const rateValue = document.getElementById('rateValue');
const error = document.getElementById('error');

form.addEventListener('submit',Rate)

function Rate(e) {
    e.preventDefault();

    const collection = document.getElementsByName('rate-option');
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].checked) {
            form.classList.add('hidden');
            thankyou.classList.remove('hidden');
            rateValue.innerHTML = collection[i].value;
        } else {
            error.innerHTML = 'Choose an option';
        }
    }
    
}
const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swapEl = document.getElementById('swap');
function calculater(){

    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/5847e49ab5b6cc1671478314/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
    
        const rate = data.conversion_rates[currency_two];
        rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);

    })
}

function swapele(){
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculater();

}
currencyEl_one.addEventListener('change' , calculater);
amountEl_one.addEventListener('input' , calculater);
currencyEl_two.addEventListener('change' , calculater);
amountEl_two.addEventListener('input' , calculater);
swapEl.addEventListener('click', swapele )
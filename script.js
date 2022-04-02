const adviceNumber = document.getElementById('adviceNumber');
const quote = document.getElementById('quote');
const button = document.getElementById('button');


//function 
async function fetchAdvice() {
    const data = await fetch('https://api.adviceslip.com/advice');
    const {slip} = await data.json();
    console.log('slip');
    adviceNumber.innerText = `Advice #${slip.id}`;
    quote.innerText = `"${slip.advice}"`


}

// to listen for button clicks
button.addEventListener('click', fetchAdvice);


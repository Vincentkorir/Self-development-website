const quotes = [

    "The only way to do great work is to love what you do. - Steve Jobs",

    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",

    "Believe you can and you're halfway there. - Theodore Roosevelt",

    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",

    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson"

];


function newQuote() {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById('quote').innerText = quotes[randomIndex];

}


// Load a quote when the page loads

window.onload = newQuote;
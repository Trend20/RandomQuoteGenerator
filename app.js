const quoteText = document.getElementById('text');
const authorName = document.querySelector('#author');
const quoteBtn = document.querySelector('#new-quote');


const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

function getQuote(){
    fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayQuote(data.message);
    })
    .catch(function () {
      console.log("An error occurred");
    });
}

function displayQuote(quote) {
  const quoteText = document.querySelector('.quote-text');
  quoteText.textContent = quote;

  const tweetButton = document.querySelector('.tweet');
  tweetButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
}

const newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);

getQuote();
// let quotes = [
//     'Loving',
//     'Cooking',
//     'Dancing',
//     'Playing',
//     'Eating',
//     'Drinking',
// ];

// quoteBtn.addEventListener('click', newQuote);

// function newQuote(){
//     let randomNumber = Math.floor(Math.random() * (quotes.length));
//     let realQuote = quoteText.innerHTML = (quotes[randomNumber]);
//     let quotationMark = document.createElement('i');
//     quotationMark.innerHTML = 'fas fa-quote-left';
//     insertAfter(quotationMark, realQuote);
// }

const quoteText = document.getElementById('text');
const authorName = document.querySelector('#author');
const quoteBtn = document.querySelector('#new_quote');

quoteBtn.addEventListener('click', function randomQuote(){
    fetch('https://api.quotable.io/random')
   .then(response => response.json())
   .then(data => {
    console.log(`${data.content} —${data.author}`)
  });
});
    // async function randomQuote(){
    //     const response = await fetch('https://api.quotable.io/random')
    //     const data = await response.json()
    //     console.log(`${data.content} —${data.author}`)
    // }
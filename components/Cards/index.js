// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cards = document.querySelector('cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles').then(data => {
    console.log('the data is here', data)
    const cardData = cardInfo(data.data)
    cards.appendChild(cardData);
    
})
.catch(err => {
    console.log('data is messed up')
});
function cardComponent(cardObj){
    const card = document.createElement('div');
    const headline = doucment.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const by = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    by.classList.add('span');

    image.src = imgUrl;

    card.append(headline, author, imgContainer, by);
    imgContainer.appendChild(image);
    
    return cards
}

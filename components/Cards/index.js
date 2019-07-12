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
const cardContainer = document.querySelector('.cards-container');
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(res => {
    const articles = res.data.articles;
    const articleTopic = Object.keys(articles);

    articleTopic.map(topic => {
        articles[`${topic}`].map(article => {
            cardContainer.append(cardComponent(articles));
        });
    });
})
.catch( err => {
    console.log("Error has occurred: ", err);
});

function cardComponent(data){
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');

    const authorinfo = document.createElement('div');
    authorinfo.classList.add('author');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const image = document.createElement('img');

    const by = document.createElement('span');
    by.classList.add('span');  
    
 //TESTING FUNCTION

 headline.textContent = data.headline;
 image.src = data.authorPhoto;
 by.textContent = data.authorName;

    card.append(headline);
    card.append(authorinfo);
    authorinfo.append(imgContainer);
    authorinfo.append(by);
    imgContainer.append(image);

   
    return card
}

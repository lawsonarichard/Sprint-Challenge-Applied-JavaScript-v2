// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



axios.get("https://lambda-times-backend.herokuapp.com/topics").then(res => {
    console.log('the data is here', res)
    const topics = document.querySelector('.topics');
    return res.data.topics.map(topic => {
        return topics.appendChild(tabsAlive(topic));
    });
    
    
})
.catch(err => {
    console.log('data is messed up')
});

function tabsAlive(topic) {

    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;
     

    return tab
}

// <!-- TABS COMPONENT, PLACE TABS HERE-->
//   <div class="tabs">
//     <div class="topics">
//       <span class="title">TRENDING TOPICS:</span>
//     </div>
//   </div>
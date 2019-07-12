// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-Container component

const topHeader = document.querySelector('.header-container')
topHeader.appendChild(Header());

function Header() {
    const header = document.createElement('div');
    header.classList.add('header');
    
    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = "SMARCH 28,2019";

    const h1 = document.createElement('h1');
    h1.textContent = "Lambda Times";

    const temp = document.createElement('temp');
    temp.textContent = "98 Degrees";
    temp.classList.add('temp');
    
    header.append(date);
    header.append(h1);
    header.append(temp);

    return header
}

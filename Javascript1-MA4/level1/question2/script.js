
const users = [
    'Bob',
    'Ted',
    'Donald',
    'Lisa',
    'Fredrick',
    'Hillary',
    'Jasmine',
    'Bart',
    'Homer',
    'Peter',
    'Alfred'
]; // Just some dummy text, I would assume there were user data available in real world case

const parentDiv = document.querySelector('#cards');


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response) {
        return response.json();
    })
    .then(function (json) {
        createCards(json);
    })
    .catch(function (errors) {
        console.log(errors);
    });

let boolToText = function(bool){
    if (bool) {
        return '<p class="complete status">Complete</p>'
    } else {
        return '<p class="incomplete status">Incomplete</p>'
    }
};

let createCards = function (cards) {

    for (let i = 0; i < cards.length; i++) {
        console.log(cards[i]);
        let template = `
          <div class="card">
            <h2>${users[cards[i].userId]}</h2>
            <p>${cards[i].title}</p>
            ${boolToText(cards[i].completed)}
          </div>
        `;
        console.log(template);
        parentDiv.innerHTML += template;
    }
};


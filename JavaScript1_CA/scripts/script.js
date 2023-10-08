// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards


let myCards = (function () {

    const cardContainer = document.querySelector('#cards');
    const loadingBar = document.querySelector('.loading');
    let isCreatingCards = false;
    let jsonObject = {};

    // Create the card HTML and append it to the DOM
    let createCards = function () {
        if ( jsonObject.length > 0 ) { // Found some cards with the criteria
            let card = {};
            let innerHtml = ``;
            let template = ``;

            for (let i = 0; i < jsonObject.length; i++) {
                // Get card and fix the imageUrl of the card
                card = fixCard(jsonObject[i]);

                // Produce the html and add it to the DOM
                template = `
                    <div class="col-sm-4">
                        <div class="card-container">
                            <h4>${card.number} - ${card.name}</h4>
                            <img class="card-image" src="${card.imageUrl}" width="100%">
                            <a href="card-specific.html?id=${card.id}" class="btn btn-success">View More</a>
                        </div>
                    </div>
                `;
                innerHtml += template;
            }
            // Append data to HTML
            cardContainer.innerHTML = innerHtml;
        } else { // Didn't find anything with that criteria
            displayErrors(['Nothing matches the given search query']);
        }
    };

    // Fix the card in question by searching the JSON object if anything is missing
    let fixCard = function (card) {
        let originalCard = {};

        if ( !card.hasOwnProperty('imageUrl') && card.hasOwnProperty('variations') ) {
            for (let i = 0; i < card.variations.length; i++) {
                // fix the special card imageUrl by finding the original variant
                originalCard = jsonObject.find(function (jsonCard) {
                    // Use the variation id to filter the cards
                    return jsonCard.id === card.variations[i];
                });
                // Insert the placeholder card if the original card version has image
                // originalCard could potentially be null because it can't be found in this array and can be fixed by fetching
                // the card again, but that could add a lot of requests and barely happen
                if ( originalCard != null && originalCard.hasOwnProperty('imageUrl') ) {
                    card.imageUrl = originalCard.imageUrl;
                    // Exit the for loop if a suitable card was found
                    break;
                }
            }
            // If there was no card with a imageUrl in variations insert placeholder
            if ( !card.hasOwnProperty('imageUrl' ) ) {
                card.imageUrl = './images/placeholder.png';
            }

        } else if ( !card.hasOwnProperty('imageUrl') && !card.hasOwnProperty('variations') ) {
            // If no variations at all insert placeholder
            card.imageUrl = './images/placeholder.png';
        }
        return card;
    };

    // Handle the incoming events
    let searchQuery = function (event) {
        // Start a search if enter is pressed or the search button clicked
        if ( !isCreatingCards && event.key === 'Enter' || event.button === 0 ) {
            // Remove cards and lock any new searches from coming trough, start search animation
            let value = document.querySelector('#search').value;
            isCreatingCards = true;
            loadingBar.style.display = 'block';
            cardContainer.innerHTML = '';
            initCards(value);
        }
    };

    // Fetch and return cards from the MTG API
    let fetchCards = function (value) {
        // Create a promise to deliver the data asynchronously
        return new Promise(function (resolve, reject) {
            let fetchUrl = ``;

            if ( isNaN(value) ) { // change the api url based on whether or not it's a number or string
                fetchUrl = `https://api.magicthegathering.io/v1/cards?name=${value}`
            } else {
                fetchUrl = `https://api.magicthegathering.io/v1/cards?number=${value}`
            }
            fetch(fetchUrl)
                .then(function(response) {
                    return response.json();
                })
                .then(function (json) {
                    resolve(json.cards);
                })
                .catch(function (errors) {
                    reject(errors);
                });
        });
    };

    // Takes a string to begin a new search of the API
    let initCards = function (value) {
        // Fetch and wait for the data
        fetchCards(value).then(function (cardsArray) {
            jsonObject = cardsArray;
            createCards();
            isCreatingCards = false;
            loadingBar.style.display = 'none';
        }).catch(function (errors) {
            // The API must have failed and sent us some error messages
            displayErrors(errors);
        });
    };

    let displayErrors = function (errors) {
        // Produce the html and add it to the DOM
        let innerHtml = ``;
        let template = ``;

        for (let i = 0; i < errors.length; i++) {
            template = `
                <div class="col-sm-11">
                    <div class="card-container">
                        <h4>${errors[i]}</h4>
                    </div>
                </div>
            `;
            innerHtml += template;
        }
        cardContainer.innerHTML = innerHtml;
        isCreatingCards = false;
        loadingBar.style.display = 'none';
    };

    // Create event listeners for user input
    document.querySelector('#search').addEventListener("keyup", searchQuery, false);
    document.querySelector('#searchButton').addEventListener("click", searchQuery, false);

    return {
        initCards: initCards
    }
})();

myCards.initCards(''); // Initialize cards for the first time




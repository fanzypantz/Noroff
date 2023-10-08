// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");


fetch(`https://api.magicthegathering.io/v1/cards/${id}`)
    .then(function(response) {
        return response.json();
    })
    .then(function (json) {
        let card = json.card;

        console.log('Fetched card', card, card.hasOwnProperty('imageUrl'));
        if ( !card.hasOwnProperty('imageUrl') && card.hasOwnProperty('variations') ) { // fix the different structure with missing info by getting the normal card version

            console.log('Has no imageUrl');
            fetch(`https://api.magicthegathering.io/v1/cards/${card.variations[0]}`)
                .then(function(response) {
                    return response.json();
                })
                .then(function (json) {
                    if ( json.card.hasOwnProperty('imageUrl') ) {
                        console.log('Got old card', json.card);
                        card.imageUrl = json.card.imageUrl;
                    } else {
                        console.log("Didn't find old card");
                        card.imageUrl = './images/placeholder.png';
                    }
                    createCard(card);
                })
                .catch(function (errors) {
                    console.log(errors);
                });
        } else if ( !card.hasOwnProperty('imageUrl') && !card.hasOwnProperty('variations') ){
            console.log('Has no imageUrl or variations');
            card.imageUrl = './images/placeholder.png';
            createCard(card);
        } else {
            createCard(card);
        }

    })
.catch(function (errors) {
    console.log(errors);
});

let createCard = function (card) {
    let text = "";
    let colors = "";

    // Fix flavor text
    if ( card.hasOwnProperty('flavor') ) {
        text = card.flavor;
    } else if ( card.hasOwnProperty('originalText') ) {
        text = card.originalText;
    } else {
        text = card.text;
    }

    // Fix colors
    if ( card.colors.length > 1 ) {
        for (let i = 0; i < card.colors.length ; i++) {
            colors = card.colors[i] + ", "
        }
    } else if ( card.colors.length === 0 ) {
        colors = "Colorless";
    } else {
        colors = card.colors[0];
    }

    document.querySelector('.loading').style.display = 'none';
    document.querySelector('#card').innerHTML = `
        <div class="row">
            <div class="col-sm-3" id="cardImage">
                <img src="${card.imageUrl}" width="100%">
            </div>
            <div class="col-sm-9" id="cardDetails">
                <h2>${card.name}</h2>
                <div><b>About:  </b>${text}</div>
                <div><b>Rarity: </b>${card.rarity}</div>
                <div><b>Color: </b>${colors}</div>
            </div>
        </div>
    `;

};





// refer to question 3 before development starts for scope document

document.querySelector('#moreInfoTrigger').addEventListener("click", function () {
    let text = document.querySelector('#moreInfoContent');
    if (text.style.display === 'none') {
        text.style.display = 'block'
    } else {
        text.style.display = 'none';
    }
});

let text = document.querySelector('#aboutText');
text.innerHTML = text.innerHTML.replace(new RegExp('magic', 'gi'), 'Something');
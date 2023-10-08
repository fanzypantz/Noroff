//Use RegEx to validate form

let validate = function() {
    let inputs = document.querySelectorAll('#name, #last-name, #number, #email');
    let pattern;
    let errors = [];

    for (let i = 0; i < inputs.length; i++) {
        pattern = new RegExp(inputs[i].pattern);

        if (!pattern.test(inputs[i].value)) {
            errors.push(inputs[i].title);
        }
    }

    if (errors.length > 0) {
        console.log(errors);
        return false;
    } else {
        return true;
    }
};
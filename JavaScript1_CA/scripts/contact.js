// refer to question 4 before development starts for scope document

// Assuming this is submitted by AJAX so no form needed(probably useful for validation).

let validate = function () {
    let inputFields = document.querySelectorAll('input');
    let errors = [];
    let pattern;

    let checkPattern = function (regPattern, element) {
        pattern = new RegExp(regPattern);
        if (!pattern.test(element.value)) {
            errors.push(element.id);
        }
    };

    let showErrors = function () {
        inputFields.forEach(function (element) {
            if ( errors.includes(element.id)) {
                document.querySelector('#'+ element.id + 'Error').style.display = 'block';
            } else {
                document.querySelector('#'+ element.id + 'Error').style.display = 'none';
            }
        })
    };

    let submit = function () {
        // some submit logic
    };

    inputFields.forEach(function (element) {
        switch (element.id) {
            case 'firstName':
            case 'lastName':
                checkPattern('^[a-zA-Z]+$', element);
                break;
            case 'phone':
                checkPattern('\\d{3}[\\s\\-\\.]\\d{3}[\\s\\-\\.]\\d{3}', element);
                break;
            case 'email':
                checkPattern('\\S+@\\S+\\.\\S+', element);
                break;
        }
    });

    showErrors();

    if ( errors.length === 0 ) {
        console.log('Submitting to server');
        submit();
    }

};

document.querySelector('#submitContact').addEventListener('click', validate, true);
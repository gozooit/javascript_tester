function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}


function add7(number) {
    return number + 7;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function lastLetter(string) {
    return string.charAt(string.length - 1);
}
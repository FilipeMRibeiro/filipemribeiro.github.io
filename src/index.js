
let name = 'Filipe';
let address = {
    city: 'Porto',
    country: 'Portugal'
};

function getPerson() {
    const age = 28;

    return {
        age,
        name,
        address
    }
}

const me = getPerson();

function getOlder(person) {
    const olderPerson = person;

    olderPerson.age = person.age + 1;

    return olderPerson;
}

getOlder(me);

console.log({
    me
});

const regexes = {
    ibanAndBank: (value) => {
        return /^(?=(AD|AE|AL|AT|AZ|BA|BE|BG|BH|BR|BY|CH|CR|CY|CZ|DE|DK|DO|EE|EG|ES|FI|FO|FR|GB|GE|GI|GL|GR|GT|HR|HU|IE|IL|IQ|IS|IT|JO|KW|KZ|LB|LC|LI|LT|LU|LV|MC|MD|ME|MK|MR|MT|MU|NL|NO|PK|PL|PS|PT|QA|RO|RS|SA|SC|SE|SI|SK|SM|ST|SV|TL|TN|TR|UA|VG|XK)){2}[0-9]{0,2}/i.test(value)
    },
    isIbanAccount: (value) => {

        const valueFormatted = value.trim().replaceAll(' ', '')

        return /^(?=(AD|AE|AL|AT|AZ|BA|BE|BG|BH|BR|BY|CH|CR|CY|CZ|DE|DK|DO|EE|EG|ES|FI|FO|FR|GB|GE|GI|GL|GR|GT|HR|HU|IE|IL|IQ|IS|IT|JO|KW|KZ|LB|LC|LI|LT|LU|LV|MC|MD|ME|MK|MR|MT|MU|NL|NO|PK|PL|PS|PT|QA|RO|RS|SA|SC|SE|SI|SK|SM|ST|SV|TL|TN|TR|UA|VG|XK")){2}[a-zA-Z0-9, -]{4,34}/i.test(

            valueFormatted

        )

    }
};

console.log(regexes.ibanAndBank('AD'));

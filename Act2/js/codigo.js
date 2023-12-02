function main() {
    console.log("Subtask1:")
    subtask1();
    console.log("\n---\n")
    console.log("Subtask2:\n")
    subtask2();
    console.log("\n---\n")
    console.log("Subtask4:\n")
    subtask4();
    console.log("\n---\n")
    console.log("Subtask5:\n")
    subtask5();
}


function subtask1() {
    var regExpression = new RegExp('[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}');

    var date = "05/04/1982";

    if (regExpression.test(date) == true) {
        console.log("Nací el 05/04/1982 en Donostia.")
    }
}

function subtask2() {
    var regExpression = new RegExp('[a-z0-9.-]+@[a-z0-9]+\.[a-z]{1,3}');

    var emails = ["test.test@test.com", "test-test@test.es", "test@test.longs", "test@test.test"];

    emails.forEach(function(email) {
        var isValid = regExpression.test(email);
        console.log(email + " matches the regular expression? " + isValid);
    });
}

function subtask4() {
    const string = `John Doe`;

    const regex = /(.*) (.*)/gm;
    const subst = `$2 $1`;

    console.log("Original: " + string);

    const result = string.replace(regex, subst);

    console.log("Modificado: " + result);
}

function subtask5() {
    const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

    const string = `<script>maliciousStuff();</script>`;

    console.log("Original: " + string);

    const result = string.replace(regex, "");

    console.log("Modificado: " + result);
}
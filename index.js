// Code your solutions in this file

function writeCards(names) {
    let message = []
    for (let i = 0; i < names.length; i++ ) {
        message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return message;
}


function countDown(time) {
    let i = time;
    while (i >= 0 ) {
        console.log(i);
        i--;
    }
}
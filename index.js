import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Please enter a text: ', function (answer) {

    const arrayNoFormat = answer.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    const array = arrayNoFormat.split('');
    const arrayRevesed = array.reverse();
    const arrayJoined = arrayRevesed.join('')
    if (arrayNoFormat == arrayJoined) {
        console.log('is palindrome')
    } else {
        console.log('in not palindrome')
    }

    rl.close();
})
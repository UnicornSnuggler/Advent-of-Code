import { readFile } from 'node:fs';

readFile('./Input.txt', 'utf8', (error, data) => {
    if (error) {
        console.error(error);
        return;
    }

    let input = data.split('\n').reverse(),
        result = 50,
        count = 0;

    while (input.length > 0) {
        let rotation = input.pop();
        let polarity = rotation.charAt(0) == 'L' ? -1 : 1;
        let clicks = parseInt(rotation.slice(1)) * polarity;

        result = (result + clicks + 100) % 100;

        count += result == 0 ? 1 : 0;
    }

    console.log(`The password is ${count}...`);
});
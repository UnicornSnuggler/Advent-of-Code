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

        count += Math.abs(Math.trunc(clicks / 100));

        clicks %= 100;

        let newResult = (result + clicks + 100) % 100;

        if (result != 0 && polarity < 0 && result < newResult) count++;
        else if (result != 0 && polarity > 0 && result > newResult) count++;
        else if (newResult == 0) count++;

        result = newResult;
    }

    console.log(`The password is ${count}...`);
});
import { readFile } from 'node:fs';

readFile('./_ Input.txt', 'utf8', (error, data) => {
    if (error) {
        console.error(error);
        return;
    }

    let input = data.split('\n').reverse(),
        answer = 0;

    while (input.length > 0) {
        let string = input.pop();

        let array = string.replace(/[^0-9]/, '').split('').map(x => parseInt(x)),
            first = Math.max(...array.slice(0, array.length - 1)),
            index = array.indexOf(first),
            second = Math.max(...array.slice(index + 1));

        answer += parseInt(`${first}${second}`);
    }

    console.log(`The answer is ${answer}!`);
});
import { readFile } from 'node:fs';

readFile('./_ Input.txt', 'utf8', (error, data) => {
    if (error) {
        console.error(error);
        return;
    }

    let input = data.split(',').reverse(),
        answer = 0;

    while (input.length > 0) {
        let range = input.pop();

        let separator = range.indexOf('-'),
            start = parseInt(range.slice(0, separator)),
            end = parseInt(range.slice(separator + 1, range.length));

        for (let i = start; i <= end; i++) {
            let string = i.toString();

            if (string.length % 2 > 0) continue;
            
            let front = string.slice(0, string.length / 2),
                back = string.slice((string.length / 2));
            
            if (front == back) answer += i;
        }
    }

    console.log(`The answer is ${answer}!`);
});
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

        for (let x = start; x <= end; x++) {
            let string = x.toString();

            for (let y = 1; y <= string.length / 2; y++) {
                let substring = string.slice(0, y);
                
                if (string.replaceAll(substring, '').length == 0) {
                    answer += x;
                    break;
                }
            }
        }
    }

    console.log(`The answer is ${answer}!`);
});
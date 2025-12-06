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
            sequence = [],
            index = 0;
        
        for (let i = 11; i >= 0; i--) {
            let subArray = array.slice(index, array.length - i),
                max = Math.max(...subArray);

            index += subArray.indexOf(max) + 1;
            
            sequence.push(max);
        }

        answer += parseInt(`${sequence.join('')}`);
    }

    console.log(`The answer is ${answer}!`);
});
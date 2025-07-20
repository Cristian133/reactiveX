import { interval } from 'rxjs';
import { reduce, take } from 'rxjs/operators';


const observer = {
    next: (value: number) => console.log('Next:', value),
    error: (err: Error) => console.error('Error:', err),
    complete: () => console.log('Complete')
};

const number = [1, 2, 3, 4, 5];
const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;

const sum = number.reduce(reducer, 0); // Javascript array reduce method
console.log(`The sum of the array is: ${sum}`);

interval(1000).pipe(
    take(5),
    reduce(reducer, 0)  // RxJS reduce operator
)
.subscribe(observer);

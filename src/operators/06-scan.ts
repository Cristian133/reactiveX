import { from } from 'rxjs';
import { reduce, scan } from 'rxjs/operators';

const observer = {
    next: (value: number) => console.log('Next:', value),
    error: (err: Error) => console.error('Error:', err),
    complete: () => console.log('Complete')
};

const number = [1, 2, 3, 4, 5];
const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;

from(number).pipe(
    reduce(reducer, 0)  // RxJS reduce operator
)
.subscribe(observer);

from(number).pipe(
    scan(reducer, 0)  // RxJS scan operator
)
.subscribe(observer);

// Ejemplos de cómo scan puede implementar un Redux-like state management
const initialState = { count: 0 };
const increment = (state: typeof initialState, action: { type: string }) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        default:
            return state;
    }
};
from([{ type: 'INCREMENT' }, { type: 'INCREMENT' }, { type: 'INCREMENT' }]).pipe(
    scan(increment, initialState)  // RxJS scan operator for state management
)
.subscribe(state => console.log('State:', state));
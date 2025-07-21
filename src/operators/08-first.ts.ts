import { fromEvent } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

interface coordinates {
    clientX: number;
    clientY: number;
}

const observer = {
    next: (value: coordinates) => console.log('Next:', value),
    error: (err: Error) => console.error('Error:', err),
    complete: () => console.log('Complete')
};

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map<MouseEvent, coordinates>(({ clientX, clientY }) => ({ clientX, clientY })),
    first(({ clientX }) => clientX > 100) // Only take the first click where clientX > 100
).subscribe(observer);
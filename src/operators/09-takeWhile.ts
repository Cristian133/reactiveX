import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const observer = {
    next: (value: { x: number; y: number }) => console.log('Next:', value),
    error: (err: Error) => console.error('Error:', err),
    complete: () => console.log('Complete')
};

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x, y }) => ({ x, y })),
    takeWhile(({ y }) => y > 100, true) // 'true' to include the last value that fails the condition.
).subscribe(observer);
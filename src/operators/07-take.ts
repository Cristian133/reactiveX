import { of, take, tap } from 'rxjs';

const observer = {
    next: (value: number) => console.log('Next:', value),
    error: (err: Error) => console.error('Error:', err),
    complete: () => console.log('Complete')
};

const number = of(...[1, 2, 3, 4, 5])
.pipe(
    tap(value => console.log('Emitted:', value))
);

number.pipe(
    take(2)
).subscribe(observer);
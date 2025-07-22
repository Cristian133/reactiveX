import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
click$.pipe(
    debounceTime(1000) // Wait for 1 second of inactivity
) // .subscribe(event => console.log(event));

const input = document.createElement('input');
document.body.appendChild(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    debounceTime(500), // Wait for 0.5 seconds of inactivity before emitting the latest value
    map(event => (event.target as HTMLInputElement).value), // Extract the input value
    // si no pongo el map, el distinctUntilChanged no funciona porque no compara el valor del input
    distinctUntilChanged() // Only emit if the value has changed
).subscribe(value => {
    console.log(value);
});
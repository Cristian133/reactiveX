import { asyncScheduler, fromEvent } from 'rxjs';
import { distinctUntilChanged, map, throttleTime } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
click$.pipe(
    throttleTime(1000), // Emit the first click and ignore subsequent clicks for 1 second
) //.subscribe(event => console.log(event));

const input = document.createElement('input');
document.body.appendChild(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    throttleTime(1000, asyncScheduler, { 
        leading: true,
        trailing: true
    }), // Emit the first keyup event and ignore subsequent events for 1000ms
    map(event => (event.target as HTMLInputElement).value), // Extract the input value
    // si no pongo el map, el distinctUntilChanged no funciona porque no compara el valor del input
    distinctUntilChanged() // Only emit if the value has changed
).subscribe(value => {
    console.log(value);
});
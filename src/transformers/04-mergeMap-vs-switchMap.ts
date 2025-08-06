import { fromEvent, interval } from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators";

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

// Using mergeMap to handle click events and emit interval values
// click$.pipe(
//     mergeMap(event => {
//         console.log('Click detected:', event);
//         return interval$;
//     })
// ).subscribe(event => {
//   console.log('Click event:', event);
// });


// Using switchMap to handle click events and switch to interval emissions
click$.pipe(
    switchMap(event => {
        console.log('Click detected:', event);
        return interval$;
    })
).subscribe(event => {
  console.log('Click event:', event);
});
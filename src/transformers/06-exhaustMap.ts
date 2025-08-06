import { fromEvent, interval } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";

const interval$ = interval(500).pipe(
    take(3), // Limit to 3 emissions
);
const click$ = fromEvent(document, 'click');

// click$.pipe(
//     switchMap(() => interval$)
// ).subscribe(event => {
//   console.log('Click event:', event);
// });

click$.pipe(
    exhaustMap(() => interval$)
).subscribe(event => {
  console.log('Click event:', event);
});
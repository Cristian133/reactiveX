import { fromEvent, interval, of } from 'rxjs';
import { map, mergeMap, take, takeUntil } from 'rxjs/operators';

const letters$ = of('a', 'b', 'c', 'd', 'e');

letters$.pipe(
    mergeMap(letter => interval(1000).pipe(
        map(i => `${letter} ${i}`),
        take(3),
    ))
).subscribe({
  next: (letter) => console.log(letter),
  complete: () => console.log('Completed')
});

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseUp$)
    ))
).subscribe(() => {
  console.log('Mouse down event detected');
});

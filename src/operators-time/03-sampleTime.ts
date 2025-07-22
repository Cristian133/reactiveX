import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(1000), // Emit the last click event every second
    // es mas eficiente primero el sampleTime
    map(({ x, y }) => ({ x, y })),
).subscribe(event => {
  console.log('Document clicked:', event);
});
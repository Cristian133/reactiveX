import { interval } from "rxjs";
import { auditTime } from "rxjs/operators";

const interval$ = interval(500);


interval$.pipe(
    auditTime(1000) // Emit the last value emitted by the source Observable within each 1000ms period
).subscribe((value) => {
  console.log("Interval value:", value);
});
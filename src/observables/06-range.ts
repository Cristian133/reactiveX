import { asyncScheduler, observeOn, range } from 'rxjs';

const observer = {
  next: (value: number) => console.log('next', value),
  error: (err: Error) => console.error('error', err),
  complete: () => console.log('complete')
};

console.log('Starting observable with range from 1 to 5');
const src$ = range(1, 5).subscribe(observer);
const srcAsyncDeprecated$ = range(1, 5, asyncScheduler).subscribe(observer);
const srcAsync$ = range(1, 5).pipe( observeOn(asyncScheduler) ).subscribe(observer);
console.log('Observable completed');
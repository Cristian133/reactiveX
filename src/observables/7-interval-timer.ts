import { interval, timer } from 'rxjs';

const observer = {
  next: (value: number) => console.log('next', value),
  error: (err: Error) => console.error('error', err),
  complete: () => console.log('complete')
};

const dentroDe5 = new Date();
dentroDe5.setSeconds(dentroDe5.getSeconds() + 5);

const interval$ = interval(1000);
const timer1$ = timer(2000);
const timer2$ = timer(dentroDe5);

console.log('Starting');
interval$.subscribe(observer);
timer1$.subscribe(observer);
timer2$.subscribe(observer);
console.log('Ending');


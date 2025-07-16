import { of } from 'rxjs';

const observable$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log('Inicio del Observable');
observable$.subscribe({
  next: value => console.log(`Received value: ${value}`),
  complete: () => console.log('Observable completed')
});
console.log('Fin del Observable');
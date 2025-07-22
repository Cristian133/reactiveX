import { range } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

const numeros$ = range(1, 15);

numeros$.pipe(
  filter((n) => n % 2 === 0),
  map((n) => n * 10),
  tap({
    next: (n) => console.log('next', n),
    error: (err) => console.warn('error', err),
    complete: () => console.info('complete'),
  })).subscribe();
import { fromEvent } from 'rxjs';


/**
 * Eventos del DOM
 */
const srcEvt1$ = fromEvent<MouseEvent>(document, 'click');
const srcEvt2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer1 = {
  next: ({ x, y }: MouseEvent) => console.log('MouseEvent next x: ', x, ' y: ', y),
  error: (err: Error) => console.error('MouseEvent error', err),
  complete: () => console.log('MouseEvent complete')
};

const observer2 = {
  next: (value: KeyboardEvent) => console.log('KeyboardEvent next', value.key),
  error: (err: Error) => console.error('KeyboardEvent error', err),
  complete: () => console.log('KeyboardEvent complete')
};

srcEvt1$.subscribe(observer1);
srcEvt2$.subscribe(observer2);
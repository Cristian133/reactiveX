import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
  next: (value) => console.log('next:', value),
  error: (e) => console.error('error:', e),
  complete: () => console.log('completado'),
};

const observable$ = new Observable<string>((subscriber) => {
  // Emisión de valores
  subscriber.next('Primera emisión!!!');
  subscriber.next('Segunda emisión!!!');
  
  // forzar un error
  subscriber.error('Error forzado');
  
  subscriber.complete();
  subscriber.next('No emite, ya se completó!');
});

console.log('--- Primer observer ---');
observable$.subscribe(observer);

// Segundo observer
console.log('--- Segundo observer ---');
observable$.subscribe({
  next: (value) => console.log('next:', value),
  error: (e) => console.error('error:', e),
  complete: () => console.log('completado desde el segundo observer'),
});

// Tercer observer Deprecado
console.log('--- Tercer observer Deprecado---');
observable$.subscribe(
  (value) => console.log('next:', value),
  (e) => console.error('error:', e),
  () => console.log('completado desde el tercer observer Deprecado'),
);


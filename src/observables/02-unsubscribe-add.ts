import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
  next: (value) => console.log('next:', value),
  error: (e) => console.error('error:', e),
  complete: () => console.info('completado'),
};

const interval$ = new Observable<string>(subscriber => {
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    subscriber.next(`Emisión número: ${count}`);
    
    if (count === 5) {
      subscriber.complete();
      clearInterval(intervalId);
    }
  }, 1000);

  return () => {
    clearInterval(intervalId);
    console.info('Intervalo limpiado');
  };
});

const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription1.add(subscription2);
subscription1.add(subscription3);

setTimeout(() => {
  subscription1.unsubscribe();
  console.info('Suscripción cancelada manualmente');
}, 6000);

console.info('Suscripción iniciada');
console.info('Esperando emisiones...');
console.info('Se cancelará la suscripción manualmente después de 6 segundos');
console.info('El observable seguirá emitiendo hasta completar o cancelar la suscripción');
console.info('Si no se cancela, se completará automáticamente después de 5 emisiones');

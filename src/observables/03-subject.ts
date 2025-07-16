import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log('next:', value),
  error: (e) => console.error('error:', e),
  complete: () => console.info('completado'),
};

const interval$ = new Observable<number>(subscriber => {
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    subscriber.next( Math.trunc( Math.random() * 100));

    if (count === 10) {
      subscriber.complete();
      clearInterval(intervalId);
    }
  }, 1000);

  return () => {
    clearInterval(intervalId);
    console.info('Intervalo limpiado');
  };
});


/**
 * 1- Casteo múltiple.
 * 2- También es un observer.
 * 3- Se puede usar como un observable: next, error, complete.
 */
const subject$ = new Subject<number>();
const subjectSubscription = interval$.subscribe(subject$);

const subscription1 = subject$.subscribe(observer);
const subscription2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subjectSubscription.unsubscribe();
  console.info('Suscripción al observable cancelada');
  subscription1.unsubscribe();
  subscription2.unsubscribe();
  console.info('Suscripciones canceladas');
}, 5000);
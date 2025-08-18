import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

(() =>{

    const inicio = 7;
    const countdown$ = interval(700).pipe(
      take(inicio + 1),
      map( val => inicio - val )
    );

    countdown$.subscribe( console.log ); // =

})();

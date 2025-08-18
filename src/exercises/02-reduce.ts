import { from } from 'rxjs';
import { filter, reduce } from 'rxjs/operators';

(() =>{

  enum Types {
    NUMBER = 'number',
    STRING = 'string'
  }


  const datos$ = from([1, 2, 'foo', 3, 5, 6, 'bar', 7, 8]);

  datos$.pipe(
    filter<any>(element => typeof element === Types.NUMBER),
    reduce((acc, curr) => acc + curr, 0)
  ).subscribe( console.log )

})();
import { from } from "rxjs";
import { map } from "rxjs/operators";

(() => {

  const nombres$ = from(['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa']);
  const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());

  nombres$.pipe(
    map( capitalizar )
  ).subscribe( console.log )

})();

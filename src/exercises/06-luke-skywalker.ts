import { ajax } from 'rxjs/ajax';
import { switchMap, map } from 'rxjs/operators';
import { zip, of } from 'rxjs';


(() =>{

    const SW_API = 'https://swapi.dev/api';                     
    const getRequest = ( url: string ) => ajax.getJSON<any>(url);

    getRequest(`${SW_API}/people/1`).pipe(
      switchMap( character => zip(of(character), getRequest(character.species[0]))),
      map( ([character, species]) => ({character, species}) )
    )
    .subscribe( console.log );

})();

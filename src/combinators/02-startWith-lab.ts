import { startWith } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

ajax.getJSON('https://reqres.in/api/users/2?delay=2', {'x-api-key': 'reqres-free-v1'})
.pipe(
    startWith(true),
)
.subscribe(resp => {
    if (resp === true) {
        // Muestro loading
    } else {
        // Borro loading
    }
})
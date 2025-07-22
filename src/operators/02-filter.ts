import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Key } from '../enums/keys';


range(1, 10).pipe(
    filter(x => x % 2 === 0)
).subscribe(x => console.log(x));

interface Personaje {
    nombre: string;
    poder: number;
}

const personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 7500 },
    { nombre: 'Trunks', poder: 5000 },
    { nombre: 'Freezer', poder: 100000 },
    { nombre: 'Cell', poder: 9000 },
    { nombre: 'Piccolo', poder: 3000 },
    { nombre: 'Krillin', poder: 1000 },
    { nombre: 'Bulma', poder: 100 }
];

const personajes$ = from(personajes).pipe(
    filter(p => p.poder > 5000)
);

personajes$.subscribe(p => console.log(p.nombre));

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event as KeyboardEvent),
    map(event => ({
        key: event.key,
        code: event.code,
        timeStamp: event.timeStamp
    })),
    filter(event => Object.values(Key).includes(event.key as Key))
);

keyup$.subscribe(event => {
    console.log(event.key);
});


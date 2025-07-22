import { from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';
import { ObserverLog } from '../enums/observer-log.enum';

const observer = {
    next: (value: number ) => console.log(ObserverLog.Next + ':', value),
    error: (err: Error) => console.error(ObserverLog.Error + ':', err),
    complete: () => console.log(ObserverLog.Complete)
};

const numbers$ = from([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

numbers$.pipe(
    distinctUntilChanged() // This will emit only distinct values
).subscribe(observer);

interface Persona {
    nombre: string;
    edad: number;
}

const personas: Persona[] = [
    { nombre: 'Cristian', edad: 30 },
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'Maria', edad: 25 },
    { nombre: 'Juan', edad: 40 },
    { nombre: 'Juana', edad: 40 }
];

from(personas).pipe(
    distinctUntilChanged((prev, curr) => prev.edad === curr.edad)
).subscribe({
    next: (persona: Persona) => console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}`),
    error: (err: Error) => console.error(ObserverLog.Error, err),
    complete: () => console.log(ObserverLog.Complete)
});
import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";
import { ObserverLog } from '../enums/observer-log.enum';

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
    distinctUntilKeyChanged('edad')
).subscribe({
    next: (persona: Persona) => console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}`),
    error: (err: Error) => console.error(ObserverLog.Error, err),
    complete: () => console.log(ObserverLog.Complete)
});
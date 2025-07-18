import { asyncScheduler } from 'rxjs';

const saludar = (nombre: string): void => {
  console.log(`Hola ${nombre}`);
}

asyncScheduler.schedule(() => saludar('Mundo'), 1000);


import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
  next: (value) => console.log('next:', value),
  error: (e) => console.error('error:', e),
  complete: () => console.log('completado'),
};

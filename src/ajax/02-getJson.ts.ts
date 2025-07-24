import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

const subscriber = {
  next: (response: any) => console.log('Response:', response),
  error: (err: any) => console.error('Error:', err),
  complete: () => console.log('Request completed')
};

const obs$ = ajax.getJSON(url, {
  'content-type': 'application/json',
  'Accept': 'application/json',
}).subscribe(subscriber);
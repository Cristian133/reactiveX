import { of } from "rxjs";
import { catchError } from "rxjs/operators";
import { ajax, AjaxError } from "rxjs/ajax";

const url = 'https://api.github.com/users?per_page=5';

// Create a subscriber function to handle responses
function createSubscriber(label: string) {
  return {
    next: (response: any) => console.log(`${label} Response:`, response),
    error: (err: any) => console.error(`${label} Error:`, err),
    complete: () => console.log(`${label} Request completed`)
  };
};

const handleResponse = (resp: AjaxError) => {
  console.error('Error:', resp.message);
  return of({
    error: true,
    ok: false,
    message: resp.message,
    users: []
  });
};

const obsGetJson$ = ajax.getJSON(url).pipe(
  catchError(handleResponse)
);
const obsAjax$ = ajax(url).pipe(
  catchError(handleResponse)
);

obsGetJson$.subscribe(createSubscriber('GET JSON'));
obsAjax$.subscribe(createSubscriber('AJAX'));
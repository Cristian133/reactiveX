import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

// Create a subscriber function to handle responses
function createSubscriber(label: string) {
  return {
    next: (response: any) => console.log(`${label} Response:`, response),
    error: (err: any) => console.error(`${label} Error:`, err),
    complete: () => console.log(`${label} Request completed`)
  };
};

ajax({
  url,
  method: 'GET', // Use GET method to fetch data
  responseType: 'json',
  headers: {
    "Content-Security-Policy": "default-src 'self'; img-src 'self' data:; connect-src 'self' https://api.github.com;"
  },
  body: null  // No body needed for GET request
}).pipe(
  catchError((error: AjaxError) => {
    console.error('Error occurred:', error);
    return of(null); // Return an observable with null in case of error
  })
).subscribe(createSubscriber('AJAX'));
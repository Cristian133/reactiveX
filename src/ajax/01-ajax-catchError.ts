import { Observable, of } from 'rxjs';
import { ajax, AjaxError, AjaxResponse } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';
import { GitHubUser } from '../interfaces/gitHubUser.interface';

const url = 'https://api.github.com/users?per_page=5';



interface Subscriber {
  next: (users: GitHubUser[]) => void;
  error: (err: any) => void;
  complete: () => void;
}

const subscriber: Subscriber = {
  next: (users: GitHubUser[]) => console.log(users),
  error: (err: any) => console.error('Error in subscription:', err),
  complete: () => console.log('Request completed')
};

// const handleError = (response: Response) => {
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   return response;
// };

// const fetchUsers = fetch(url).then(handleError);

// fetchUsers
//   .then(response => response.json())
//   .then(users => console.log(users))
//   .catch(error => console.error('Error fetching users:', error));

const handleError = (error: AjaxError) => {
  console.error('Error in AJAX request:', error);
  return of([]);
};

ajax<GitHubUser[]>({ url, method: 'GET' })
  .pipe<GitHubUser[], any[] | GitHubUser[]>(
    map<AjaxResponse<GitHubUser[]>, GitHubUser[]>(response => response.response),
    catchError<GitHubUser[], Observable<any[]>>(handleError)
  )
  .subscribe(subscriber);
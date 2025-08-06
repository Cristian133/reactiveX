import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, filter, map, mergeMap, switchMap } from 'rxjs/operators';
import { GitHubUsersResponse, GitHubUser } from '../interfaces/gitHubUser.interface';

const textInput = document.createElement('input');
textInput.type = 'text';
document.body.appendChild(textInput);

const orderList = document.createElement('ol');
document.body.appendChild(orderList);

const showUsers = (users: GitHubUser[]) => {
  orderList.innerHTML = '';
  users.forEach(user => {
    const listItem = document.createElement('li');
    const img = document.createElement('img');
    const anchor = document.createElement('a');

    img.src = user.avatar_url;
    listItem.textContent = user.login;
    
    anchor.href = user.html_url;
    anchor.textContent = 'Profile';
    anchor.target = '_blank';
    
    orderList.appendChild(listItem);
    listItem.appendChild(img);
    listItem.appendChild(anchor);
  });
};

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup').pipe(
  debounceTime<KeyboardEvent>(500),
  map<KeyboardEvent, string>((event: KeyboardEvent) => (event.target as HTMLInputElement).value),
  filter<string>((value: string) => value.length > 3),
  map<string, Observable<GitHubUsersResponse>>(
    (text: string) => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
  ),
  switchMap((obs: Observable<GitHubUsersResponse>) => obs),
  map((response: GitHubUsersResponse) => response.items),
);

input$.subscribe({
  next: (response: GitHubUser[]) => {
   showUsers(response);
  }
});

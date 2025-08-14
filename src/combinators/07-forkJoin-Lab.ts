import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'Cristian133';

forkJoin({
    user: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`).pipe(catchError(err => of(err.message))),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`).pipe(catchError(err => of(err.message))),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`).pipe(catchError(err => of(err.message))),
})
.subscribe( console.log );
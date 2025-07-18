import { of, from } from 'rxjs';

const observer = {
    next: (value: any) => console.log('Next:', value),
    error: (err: any) => console.error('Error:', err),
    complete: () => console.log('Complete')
};

const source$ = from([1, 2, 3, 4, 5]);
const anotherSource$ = of(...[6, 7, 8, 9, 10]);

source$.subscribe(observer);
anotherSource$.subscribe(observer);

const fetchSource$ = from(fetch('https://api.github.com/users/octocat/repos')
    .then(response => response.json())
    .catch(error => {
        console.error('Fetch error:', error);
        throw error;
    }));

fetchSource$.subscribe({
    next: (data) => console.log('Fetched data:', data),
    error: (err) => console.error('Fetch error:', err),
    complete: () => console.log('Fetch complete')
});

const myGenerator = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const myIterable = myGenerator();
console.log('Using generator:');

for (const value of myIterable) {
    console.log(value);
}

// Using from to convert the generator to an Observable
const generatorSource$ = from(myGenerator());
generatorSource$.subscribe({
    next: (value) => console.log('Generator value:', value),
    error: (err) => console.error('Generator error:', err),
    complete: () => console.log('Generator complete')
});
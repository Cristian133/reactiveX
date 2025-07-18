import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

range(1, 5).pipe(
    map<number, number>(x => x * x)
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

keyupCode$.subscribe(code => console.log(`Key pressed: ${code}`));

/** @deprecated
 *  Use map and optional chaining: pluck('foo', 'bar') is map(x => x?.foo?.bar).
 *  Will be removed in v8.
 * */
const keyupPlucker$ = keyup$.pipe(
    pluck('code')
);

keyupPlucker$.subscribe(code => console.log(`Key pressed (pluck): ${code}`));

/** @deprecated
 *  To be removed in v9.
 *  Use map instead: map(() => value).
 */
const keyupMapTo$ = keyup$.pipe(
    mapTo('Key pressed!')
);

keyupMapTo$.subscribe(console.log);

import { fromEvent, interval, skip, takeUntil, tap } from 'rxjs';
import { HTMLElementTag } from '../enums/html-element-tag';
import { ObserverLog } from '../enums/observer-log.enum';
import { EventType } from '../enums/events';

const observer = {
    next: (value: number ) => console.log(ObserverLog.Next + ':', value),
    error: (err: Error) => console.error(ObserverLog.Error + ':', err),
    complete: () => console.log(ObserverLog.Complete)
};

const button = document.createElement(HTMLElementTag.Button);
button.innerHTML = 'Detener timer';
document.body.appendChild(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(button, EventType.Click).pipe(
    tap(() => console.log('Button clicked, stopping timer...')),
    skip(3), // Skip the first 3 clicks
    tap(() => console.log('Button clicked, timer will stop now...'))
);

counter$.pipe(
    takeUntil(clickBtn$) // Stop the timer when the button is clicked
).subscribe(observer);
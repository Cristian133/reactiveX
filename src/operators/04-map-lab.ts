import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";
import { LoremIpsum } from "../consts/loreipsum";
import { HTMLElementTag } from "../enums/html-element-tag";
import { HTMLAttribute } from "../enums/html-atributes";
import { EventType } from "../enums/events";

const texto = document.createElement(HTMLElementTag.Div);
texto.innerHTML = LoremIpsum;
document.body.appendChild(texto);

const progressBar = document.createElement(HTMLElementTag.Div);
progressBar.setAttribute(HTMLAttribute.Class, 'progress-bar');
document.body.append(progressBar);

const CalculaScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const scroll$ = fromEvent(document, EventType.Scroll);
const progress$ = scroll$.pipe(
    map(() => CalculaScroll())
);

progress$.subscribe(progress => {
    progressBar.style.width = `${progress}%`;
    console.log(`Scroll progress: ${progress}%`);
});



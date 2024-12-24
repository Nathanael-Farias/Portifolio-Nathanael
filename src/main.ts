import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.querySelector('.text-body-p') as HTMLElement;

  if (textElement) {
    const text = textElement.innerText;
    textElement.innerHTML = ''; 

    Array.from(text).forEach((letter, index) => {
      if (letter === '\n') {
        const br = document.createElement('br');
        textElement.appendChild(br);
      } else if (letter === ' ') {
        const space = document.createElement('span');
        space.innerText = ' ';
        textElement.appendChild(space);
      } else {
        const span = document.createElement('span');
        span.innerText = letter;
        span.classList.add('letter');
        
        
        span.style.animationDelay = `${index * 0.009}s`; 
        textElement.appendChild(span);
      }
    });
  }
});

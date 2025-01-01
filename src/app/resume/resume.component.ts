import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    const textElement = document.querySelector('.text-body-p') as HTMLElement;

    if (textElement) {
      const text = textElement.innerText;
      textElement.innerHTML = '';

      let index = 0;
      const typingSpeed = 6;

      const type = () => {
        if (index < text.length) {
          const letter = text.charAt(index);

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
            textElement.appendChild(span);
          }

          index++;
          setTimeout(type, typingSpeed);
        }
      };

      type();
    }
  }
}

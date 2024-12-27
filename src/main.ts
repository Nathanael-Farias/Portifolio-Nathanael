import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

//Text Typing Animation with Progressive Delay Effect
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

//Using Intersection Observer for Element Animation on Scroll
const images: NodeListOf<HTMLImageElement> =
  document.querySelectorAll('.skills-icons img');
const titleSkills: HTMLElement | null = document.querySelector('.skills-title');
const titleProject: HTMLElement | null = document.querySelector(
  '.title-projectc-card'
);
const projectCards: NodeListOf<HTMLElement> =
  document.querySelectorAll('.project-card');
const studiesDiv: HTMLElement | null = document.querySelector('.studies-div');
const contactsDiv: HTMLElement | null = document.querySelector('.contacts-div');
const observerCallback: IntersectionObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.remove('hidden');
    } else {
      entry.target.classList.add('hidden');
      entry.target.classList.remove('visible');
    }
  });
};

const observerOptions: IntersectionObserverInit = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

if (studiesDiv) {
  observer.observe(studiesDiv);
}

if (titleSkills) {
  observer.observe(titleSkills);
}

if (titleProject) {
  observer.observe(titleProject);
}

images.forEach((image) => observer.observe(image));
projectCards.forEach((projectCard) => observer.observe(projectCard));

if (contactsDiv) {
  observer.observe(contactsDiv);
}

// Smooth scroll to sections on button click.
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.nav-button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetSectionId = (button as HTMLElement).getAttribute(
        'data-target'
      );
      const targetSection = document.getElementById(targetSectionId!);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
});

// Toggle hamburger menu and close it when clicking outside.
const hamburger = document.querySelector('.hamburger') as HTMLElement;
const navButtons = document.querySelector('.nav-buttons') as HTMLElement;
const body = document.querySelector('body') as HTMLElement;

const toggleMenu = () => {
  navButtons.classList.toggle('open');
  hamburger.classList.toggle('open');
};

hamburger.addEventListener('click', (event: MouseEvent) => {
  event.stopPropagation();
  toggleMenu();
});

const closeMenuOnClickOutside = (event: MouseEvent) => {
  if (
    !navButtons.contains(event.target as Node) &&
    !hamburger.contains(event.target as Node)
  ) {
    if (navButtons.classList.contains('open')) {
      toggleMenu();
    }
  }
};

body.addEventListener('click', closeMenuOnClickOutside);

import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: false,
})
export class SkillsComponent implements AfterViewInit {
  ngAfterViewInit() {
    const images: NodeListOf<HTMLImageElement> =
      document.querySelectorAll('.skills-icons img');
    const titleSkills: HTMLElement | null =
      document.querySelector('.skills-title');
    const titleProject: HTMLElement | null = document.querySelector(
      '.title-projectc-card'
    );
    const projectCards: NodeListOf<HTMLElement> =
      document.querySelectorAll('.project-card');
    const studiesDiv: HTMLElement | null =
      document.querySelector('.studies-div');
    const contactsDiv: HTMLElement | null =
      document.querySelector('.contacts-div');

    const projectsButton: HTMLElement | null =
      document.querySelector('.projects-button');

    const observerCallback: IntersectionObserverCallback = (entries) => {
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

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

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

    if (projectsButton) {
      observer.observe(projectsButton);
    }
  }
}

import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
  standalone: false,
})
export class HamburgerMenuComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    const hamburger = document.querySelector('.hamburger') as HTMLElement;
    const navButtons = document.querySelector('.nav-buttons') as HTMLElement;

    hamburger.addEventListener('click', (event: MouseEvent) => {
      event.stopPropagation();
      this.toggleMenu(navButtons, hamburger);
    });

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
  }

  toggleMenu(navButtons: HTMLElement, hamburger: HTMLElement) {
    navButtons.classList.toggle('open');
    hamburger.classList.toggle('open');
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: MouseEvent) {
    const navButtons = document.querySelector('.nav-buttons') as HTMLElement;
    const hamburger = document.querySelector('.hamburger') as HTMLElement;

    if (
      !navButtons.contains(event.target as Node) &&
      !hamburger.contains(event.target as Node)
    ) {
      if (navButtons.classList.contains('open')) {
        this.toggleMenu(navButtons, hamburger);
      }
    }
  }
}

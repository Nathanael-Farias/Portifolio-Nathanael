import { Component, TemplateRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-modal-projects',
  templateUrl: './modal-projects.component.html',
  styleUrls: ['./modal-projects.component.css'],
  standalone: false,
})
export class ModalProjectsComponent {
  isVisible = false;
  isFadingOut = false;

  @ViewChild('projectCardTemplate', { static: false })
  dynamicTemplate!: TemplateRef<any>;

  constructor(private renderer: Renderer2) {}

  openModal() {
    this.isVisible = true;
    this.isFadingOut = false;

    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  closeModal() {
    this.isFadingOut = true;

    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      this.renderer.addClass(backdrop, 'fade-out');
    }

    setTimeout(() => {
      this.isVisible = false;
      this.isFadingOut = false;
      this.renderer.removeStyle(document.body, 'overflow');

      if (backdrop) {
        this.renderer.removeClass(backdrop, 'fade-out');
      }
    }, 500);
  }
}

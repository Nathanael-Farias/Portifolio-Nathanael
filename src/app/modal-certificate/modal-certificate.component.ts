import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-certificate',
  templateUrl: './modal-certificate.component.html',
  styleUrls: ['./modal-certificate.component.css'],
  standalone: false,
})
export class ModalCertificateComponent {
  isVisible = false;
  isFadingOut = false;

  @ViewChild('certificateCardTemplate', { static: true })
  dynamicTemplate!: TemplateRef<any>;

  openModal() {
    this.isVisible = true;
    this.isFadingOut = false;
  }

  closeModal() {
    this.isFadingOut = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isFadingOut = false;
    }, 500);
  }
}

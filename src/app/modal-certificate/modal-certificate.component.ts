import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-certificate',
  templateUrl: './modal-certificate.component.html',
  styleUrls: ['./modal-certificate.component.css'],
  standalone: false,
})
export class ModalCertificateComponent {
  isVisible = false;

  @ViewChild('certificateCardTemplate', { static: true })
  dynamicTemplate!: TemplateRef<any>;

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificate-card',
  templateUrl: './certificate-card.component.html',
  styleUrls: ['./certificate-card.component.css'],
  standalone: false,
})
export class CertificateCardComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() icons: string[] = [];
  @Input() certificateDescription: string | null = null;
  @Input() certificateLink: string | null = null;
}

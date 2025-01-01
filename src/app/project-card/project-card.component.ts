import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  standalone: false,
})
export class ProjectCardComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() projectDescription: string = '';
  @Input() projectLink: string = '#';
  @Input() icons: string[] = [];
}

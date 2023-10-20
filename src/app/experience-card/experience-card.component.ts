import { Component, Input } from '@angular/core';
import { Experience } from '../model/experience';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class ExperienceCardComponent {

  @Input()
  experience: Experience;

  @Input()
  techStack: Experience["techStack"];

}

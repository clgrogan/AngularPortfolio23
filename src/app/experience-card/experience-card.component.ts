import { Component, Input } from '@angular/core';
import { Experience } from '../model/experience';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
  standalone: true
})
export class ExperienceCardComponent {
  @Input()
  experience: Experience;

}

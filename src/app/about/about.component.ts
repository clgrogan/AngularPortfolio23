import { Component, ViewChild } from '@angular/core';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { EXPERIENCE } from '../data/db-experience';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [ExperienceCardComponent],
  standalone: true
})
export class AboutComponent {

  experience = EXPERIENCE;

  @ViewChild('experienceCard')
  experienceCard: ExperienceCardComponent;

}

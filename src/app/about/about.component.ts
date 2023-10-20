import { Component, ViewChild } from '@angular/core';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { EXPERIENCES } from '../data/db-experience';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [ExperienceCardComponent, CommonModule],
  standalone: true
})
export class AboutComponent {

  experiences = EXPERIENCES;

  @ViewChild('experienceCard')
  experienceCard: ExperienceCardComponent;

}

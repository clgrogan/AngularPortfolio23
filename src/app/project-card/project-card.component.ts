import { Component, Input } from '@angular/core';
import { Project } from '../model/project';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  standalone: true
})
export class ProjectCardComponent {

  @Input()
  title: string;

  @Input()
  project: Project;

}

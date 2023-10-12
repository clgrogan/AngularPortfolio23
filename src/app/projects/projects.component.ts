import { Component, ViewChild } from '@angular/core';
import { AppModule } from '../app.module';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { PROJECTS } from '../data/db-projects';
import { Project } from '../model/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [ProjectCardComponent, CommonModule],
  standalone: true
})
export class ProjectsComponent {

  projects = PROJECTS;

  p1 = PROJECTS[0];

  @ViewChild('projectCard')
  projectCard: ProjectCardComponent;

}

import { Component, ViewChild, inject } from '@angular/core';
import { AppModule } from '../app.module';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectService } from '../projects.service';
import { CommonModule } from '@angular/common';
import { Project } from '../model/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [ProjectCardComponent, CommonModule],
  standalone: true
})
export class ProjectsComponent {

  projectService: ProjectService = inject(ProjectService);
  projectList: Project[] = [];

  constructor() {
    this.projectList = this.projectService.getAllProjects();
    console.log(this.projectList);
  }

  @ViewChild('projectCard')
  projectCard: ProjectCardComponent;

}

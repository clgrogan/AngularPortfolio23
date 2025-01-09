import { Injectable } from '@angular/core';
import { Project } from './model/project';
import { PROJECTS } from './data/db-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  protected projectList: Project[];

  constructor() {
    this.projectList = PROJECTS;
  }

  getAllProjects(): Project[] {
    return this.projectList;
  }
}

import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [ProjectCardComponent],
  standalone: true
})
export class ProjectsComponent {

}

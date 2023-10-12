import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent
  },
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

export default appRoutes;
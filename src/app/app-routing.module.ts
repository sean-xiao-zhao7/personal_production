import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomePageComponent } from './pages/home/home.component';
import { ProjectsPageComponent } from './pages/projects/projects.component';
import { DesignsPageComponent } from './pages/designs/designs.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'designs', component: DesignsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomePageComponent } from './pages/home/home.component';
import { ProjectsPageComponent } from './pages/projects/projects.component';
import { DesignsPageComponent } from './pages/designs/designs.component';
import { AlgorithmsComponent } from './pages/algorithms/algorithms.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MusicComponent } from './pages/music/music.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'designs', component: DesignsPageComponent },
  { path: 'algorithms', component: AlgorithmsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'music', component: MusicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

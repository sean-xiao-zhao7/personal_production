import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

// angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

// custom
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlgorithmsComponent } from './pages/algorithms/algorithms.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DesignsPageComponent } from './pages/designs/designs.component';
import { HomePageComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MusicComponent } from './pages/music/music.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { ProjectsPageComponent } from './pages/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LayoutComponent,
    AlgorithmsComponent,
    PhotosComponent,
    BlogComponent,
    MusicComponent,
    ProjectsPageComponent,
    DesignsPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

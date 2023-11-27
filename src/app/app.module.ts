import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AlgorithmsComponent } from './pages/algorithms/algorithms.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MusicComponent } from './pages/music/music.component';
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

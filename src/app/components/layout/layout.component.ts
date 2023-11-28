import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  currentPage: string = 'Home';
  doShrink: boolean = true;
  headerNormalHeight: number = 250;
  headerShrunkHeight: number = 100;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  setCurrentPage(
    newPage: string,
    backgroundImage: string,
    backgroundPosition: string,
    fontColor?: string
  ) {
    this.currentPage = newPage;
    const header = <HTMLElement>document.querySelector('#top-container');
    if (header) {
      header.style.backgroundImage = `url(${backgroundImage})`;
      header.style.backgroundPosition = backgroundPosition;
      if (fontColor) {
        const title = <HTMLElement>document.querySelector('#top-title');
        title.style.color = fontColor;
      }
    }
  }

  onScroll(event: Event) {
    if (event.target) {
      const currentTop = (event.target as HTMLElement).scrollTop;
      if (currentTop > 90) {
        const header = <HTMLElement>document.querySelector('#top-container');
        const contentContainer = <HTMLElement>(
          document.querySelector('#main-content-container')
        );
        header.style.height = '100px';
        contentContainer.style.marginTop = '260px';
        this.doShrink = false;
      } else if (currentTop < 100) {
        const header = <HTMLElement>document.querySelector('#top-container');

        const contentContainer = <HTMLElement>(
          document.querySelector('#main-content-container')
        );
        header.style.height = '250px';
        contentContainer.style.marginTop = '250px';
      }
    }
  }
}

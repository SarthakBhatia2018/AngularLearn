import {Component} from '@angular/core';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoader = false;

  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {
      switch (true) {
        case routerEvent instanceof NavigationStart: {
          this.showLoader = true;
          break;
        }
        case routerEvent instanceof NavigationEnd:
        case routerEvent instanceof NavigationCancel:
        case routerEvent instanceof NavigationError: {
          this.showLoader = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  let rep;
  loadingRequest: boolean;
  theme = 'black-theme';
  production = environment.production;

  constructor(
    private overlayContainer: OverlayContainer
  ) {
  }

  ngOnInit() {
    this.loadingRequest = true;

    // Ajout theme
    this.overlayContainer.getContainerElement().classList.add(this.theme);

    if (this.production) {
      console.log(`Running in production`);
    } else {
      console.log(`Running in development`);
    }
    this.loadingRequest = false;
  }

  changeTheme(theme: string) {
    this.theme = theme;
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(theme);
  }
 
  swipeLeft() {
    rep=false;
    this.store.dispatch(new appActions.SwipeLeft());
  }
 
  swipeRight() {
	rep=true;
    this.store.dispatch(new appActions.SwipeRight());
  }
}

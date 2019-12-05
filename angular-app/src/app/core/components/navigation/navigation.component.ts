import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output() changeTheme: EventEmitter<string> = new EventEmitter();

  constructor(
    private auth: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  onTheme(theme: string) {
    this.changeTheme.emit(theme);
  }

  onNavigate(route: string[]) {
    this.router.navigate(route);
  }

  onSignOut() {
    this.auth.logout();
    this.router.navigate(['./welcome']);
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
}

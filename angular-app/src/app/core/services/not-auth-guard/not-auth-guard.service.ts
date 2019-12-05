import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuardService implements CanActivate {

  constructor(
    private auth: AuthenticationService,
    private router: Router) {
  }

  canActivate() {
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/blogs');
      return false;
    }
    return true;
  }
}

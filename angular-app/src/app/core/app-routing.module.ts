import {NgModule} from '@angular/core';

import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { NotAuthGuardService } from './services/not-auth-guard/not-auth-guard.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


export const APP_ROUTES: Routes = [
  {
    path: 'auth/signup',
    component: SignupComponent,
    canActivate: [NotAuthGuardService],
    data: {title: 'Inscription'}
  },
  {
    path: 'auth/signin',
    component: SigninComponent,
    canActivate: [NotAuthGuardService],
    data: {title: 'Connexion'}
  },
  {
    path: 'blogs',
    redirectTo: '/blogs',
    pathMatch: 'full',
    canActivate: [NotAuthGuardService],
  },
  {
    path: 'welcome',
    component: LandingPageComponent,
    canActivate: [NotAuthGuardService],
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

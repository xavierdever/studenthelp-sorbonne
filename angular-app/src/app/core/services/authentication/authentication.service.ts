import {Injectable} from '@angular/core';
import {UserDetails} from '../../../shared/class/User';
import {ApiHelperService} from '../api-helper/api-helper.service';

export interface Token {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: string;

  constructor(private api: ApiHelperService) {
  }

  /**
   * Connexion
   */
  public login({email, password}: { email: string, password: string }): Promise<boolean> {
    const param = this.api.buildHttpParams(email, password);

    return this.api.requestApi({
      action: '/uaa/oauth/token',
      method: 'POST',
      // api: '',
      headers: this.api.buildHttpHeaders(),
      data: param
    })
      .then((res: Token) => {
        if (!res.access_token) {
          return false;
        } else {
          this.saveToken(res.access_token);
          return true;
        }
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  /**
   * Inscription
   */
  // TODO : implement signup
  public register({email, password}: { email: string, password: string }): Promise<boolean> {
    const data = {
      email,
      password
    };

    return this.api.requestApi({action: '/signup', method: 'POST', data})
      .then((res) => {
        if (!res.token) {
          return false;
        } else {
          this.saveToken(res.token);
          return true;
        }
      })
      .catch(err => {
        throw new Error('Erreur inscription');
      });
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      if (user.exp > Date.now() / 1000) {
        return true;
      } else {
        this.logout();
        return false;
      }
    } else {
      return false;
    }
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
  }
}


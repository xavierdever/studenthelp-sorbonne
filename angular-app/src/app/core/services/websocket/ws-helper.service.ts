import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../authentication/authentication.service';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WsHelperService {
  ws: WebSocket;
  socketIsOpen = 1;

  constructor(private auth: AuthenticationService) {
  }

  createObservableSocket(idBuilding: string): Observable<any> {
    return new Observable(observer => {
      this.ws = new WebSocket(environment.ws, [this.auth.getToken()]);

      this.ws.onopen = (event) => this.ws.send(idBuilding);
      this.ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        observer.next(data);
      };
      this.ws.onerror = (event) => {
        observer.error(event);
      };
      this.ws.onclose = (event) => observer.complete();

      return () => {
        this.ws.close(1000, 'The user disconnected');
      };
    });
  }

  sendMessage(idBuilding: string): boolean {
    if (this.ws.readyState === this.socketIsOpen) {
      this.ws.send(idBuilding);
      return true;
    } else {
      return false;
    }
  }
}

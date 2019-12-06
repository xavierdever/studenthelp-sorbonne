import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  private readonly _url: string;

  constructor(private http: HttpClient) {
    this._url = 'http://localhost:';
  }

  requestApi(
    {
      action,
      method = 'GET',
      port = '8760',
      api = '/api',
      type = 'json',
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      data = {}
    }: { action: string, method?: string, port?: string, api?: string, type?: string, headers?: HttpHeaders, data?: any }
  ): Promise<any> {
    const methodWanted = method.toLowerCase();
    const urlToUse = this.url + port + api + action;

    const httpOptions = {
      headers,
      responseType: type as 'json'
    };

    let req = null;

    if (methodWanted === 'post') {
      req = this.http.post(urlToUse, data, httpOptions);
    } else if (methodWanted === 'put') {
      req = this.http.put(urlToUse, data, httpOptions);
    } else if (methodWanted === 'delete') {
      req = this.http.delete(urlToUse, httpOptions);
    } else {
      req = this.http.get(urlToUse, httpOptions);
    }

    return req
      .toPromise()
      .then((data) => {
        console.log(JSON.stringify(data));
        return data;
      })
      .catch(err => {
        console.log(JSON.stringify(err));
        throw new Error(err);
      });
  }

  get url(): string {
    return this._url;
  }

  buildHttpParams(username: string, password: string): HttpParams {
    return new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('client_id', 'spring-setup')
      .set('grant_type', 'password');
  }

  buildHttpHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: 'Basic ' + btoa('spring-setup:spring-secret')
    });
  }
}

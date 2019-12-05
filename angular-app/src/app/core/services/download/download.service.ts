import {Injectable} from '@angular/core';
import {ApiHelperService} from '../api-helper/api-helper.service';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private api: ApiHelperService) {
  }

  downloadCV(): Promise<Blob> {
    return this.api.requestApi({port: '9003', api: 'welcome', action: '/download', type: 'blob', method: 'GET'})
      .then((res: any) => {
        if (!res) {
          throw new Error('Error download CV');
        }
        return res;
      });
  }
}

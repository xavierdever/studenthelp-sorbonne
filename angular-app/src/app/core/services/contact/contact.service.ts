import {Injectable} from '@angular/core';
import {ApiHelperService} from 'src/app/core/services/api-helper/api-helper.service';
import {ContactInterface} from 'src/app/shared/class/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private api: ApiHelperService) {
  }

  sendContact(contact: ContactInterface): Promise<boolean> {
    return this.api.requestApi({port: '9003', api: 'welcome', action: '/contact', method: 'POST', data: contact})
      .then(res => {
        if (!res) {
          throw new Error('Error send contact');
        }
        return res;
      });
  }
}

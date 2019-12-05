import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  public get({key}: { key: string }): Promise<string> {
    return new Promise((resolve) => {
      if (isPlatformBrowser(this.platformId)) {
        resolve(window.localStorage.getItem(key));
      }
    });
  }

  public set({key, value}: { key: string, value: string }): Promise<boolean> {
    return new Promise((resolve) => {
      window.localStorage.setItem(key, value);
      resolve(true);
    });
  }
}

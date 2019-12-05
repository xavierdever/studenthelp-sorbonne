import { TestBed } from '@angular/core/testing';

import { WsHelperService } from './ws-helper.service';

describe('WsHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WsHelperService = TestBed.get(WsHelperService);
    expect(service).toBeTruthy();
  });
});

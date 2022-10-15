import { TestBed } from '@angular/core/testing';

import { FrontendAngulerService } from './frontend-anguler.service';

describe('FrontendAngulerService', () => {
  let service: FrontendAngulerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontendAngulerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

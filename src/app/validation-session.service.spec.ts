import { TestBed } from '@angular/core/testing';

import { ValidationSessionService } from './validation-session.service';

describe('ValidationSessionService', () => {
  let service: ValidationSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

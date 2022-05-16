import { TestBed } from '@angular/core/testing';

import { LanguagecodeService } from './languagecode.service';

describe('LanguagecodeService', () => {
  let service: LanguagecodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguagecodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LlamadaService } from './llamada.service';

describe('LlamadaService', () => {
  let service: LlamadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlamadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

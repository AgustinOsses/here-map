/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetMapaService } from './get-mapa.service';

describe('Service: GetMapa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMapaService]
    });
  });

  it('should ...', inject([GetMapaService], (service: GetMapaService) => {
    expect(service).toBeTruthy();
  }));
});

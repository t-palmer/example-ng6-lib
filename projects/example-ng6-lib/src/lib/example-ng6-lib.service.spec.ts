import { TestBed, inject } from '@angular/core/testing';

import { ExampleNg6LibService } from './example-ng6-lib.service';

describe('ExampleNg6LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleNg6LibService]
    });
  });

  it('should be created', inject([ExampleNg6LibService], (service: ExampleNg6LibService) => {
    expect(service).toBeTruthy();
  }));
});

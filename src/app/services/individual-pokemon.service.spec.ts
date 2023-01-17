import { TestBed } from '@angular/core/testing';

import { IndividualPokemonService } from './individual-pokemon.service';

describe('IndividualPokemonService', () => {
  let service: IndividualPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

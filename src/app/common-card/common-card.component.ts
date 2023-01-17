import { Component, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.scss']
})
export class CommonCardComponent {

  public getAllPokemons: any;

  constructor(public pokemonService: PokemonService){}

  ngOnInit() : void {
    this.pokemonService.loadPokemons.subscribe(res => {
      this.getAllPokemons = res.results;
      console.log(this.getAllPokemons);
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon?limit=500&offset=0/';

  constructor(private httpClient: HttpClient) {
  }

  public get loadPokemons():Observable<any>{
    return this.httpClient.get<any>(this.url).pipe(
      tap(
        res => res
      ),
      tap( res => {
        res.results.map( (resPokemons: any) => {
          this.getPokemonStatus(resPokemons.url).subscribe(
              res => resPokemons.status = res
            )
        } )
      })
    )
  }

  public getPokemonStatus(url : string):Observable<any> {
    return this.httpClient.get<any>(url).pipe(
      map(
        res => res
      ))
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResult } from '../models/pokemonResult';
import { Observable, Subject, forkJoin, map } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _defaultUrl : string = 'https://pokeapi.co/api/v2/pokemon/';

  private _$pkmList : Subject<Pokemon[]> = new Subject<Pokemon[]>;
  $pkmList : Observable<Pokemon[]> = this._$pkmList.asObservable();

  private _$pkmResult : Subject<PokemonResult> = new Subject<PokemonResult>;
  $pkmResult : Observable<PokemonResult> = this._$pkmResult.asObservable();

  private _$currentPkm : Subject<Pokemon | undefined> = new Subject<Pokemon | undefined>();
  $currentPkm : Observable<Pokemon | undefined> = this._$currentPkm.asObservable();

  constructor(private _httpClient : HttpClient) { }

  getAll(url : string = this._defaultUrl) : void  {
    this._httpClient.get<PokemonResult>(url)
        .subscribe(
          { next : (res) => {
            this._$pkmResult.next(res);     

            let obs : Observable<Pokemon>[] = []
            res.results.forEach(p => 
              obs.push(this.getOne(p.url)));
              
              forkJoin(obs).subscribe({
              next : (value) => {
              this._$pkmList.next(value);
              
            }
          })
        }
      })    
  }

  getFlavText(id: number) : Observable<any>{
    return this._httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon-species/${id}`).pipe(map(value => ({ flav : value.flavor_text_entries.find((flav : any) => flav.language.name === 'fr').flavor_text, frName : value.names.find((name : any) => name.language.name === 'fr').name })))
  }

  getOne(url : string) : Observable<Pokemon>{
    return this._httpClient.get<Pokemon>(url);
  }

  changeCurrent(pokemon : Pokemon | undefined) : void {
    this._$currentPkm.next(pokemon);
  }
}

import { Component, OnInit } from '@angular/core';
import { PokemonResult } from '../models/pokemonResult';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  // pkmList! : PokemonResult;
  pkmResult! : PokemonResult;
  pkmList : Pokemon[] = [];
  selectedId : number = 0;
  min : number = 0;
  max : number = 5;
  
  loading : boolean = false;

  constructor(private _pkmService : PokemonService) {

  }

  ngOnInit(): void {
    this._pkmService.$pkmResult.subscribe(res => this.pkmResult = res);
    this.loading = true;
    this._pkmService.$pkmList.subscribe(res => {  
      
      this.pkmList = res;
      this.pkmList.forEach(pkm => {
        this._pkmService.getFlavText(pkm.id)
            .subscribe( {
              next : (res) => {                
                    pkm.frenchName = res.frName;                     
              } ,
              complete : () => {
                setTimeout(() => {
                  this.loading = false;
                }, 1000)
               }
            })
      })
      
     });
      this._pkmService.getAll();
  }

  getAll(url : string) : void { 
    this.loading = true;   
    this._pkmService.getAll(url);
  }

  changePkm(pokemon : Pokemon) : void {
    this.selectedId = pokemon.id;
    this._pkmService.changeCurrent(pokemon);
  }

  minus() : void {
    if(this.min == 0 && this.pkmResult.previous) {
      this.getAll(this.pkmResult.previous);
      this.min = 20;
      this.max = 25;
    }
    this.min -= 5;
    this.max -= 5;
  }

  plus() : void {
    if(this.max == 20 && this.pkmResult.next) {
      this.getAll(this.pkmResult.next);
      this.max = 0;
      this.min = -5;
    }
    this.min += 5;
    this.max += 5;
  }

}

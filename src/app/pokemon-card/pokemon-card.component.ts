import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  pokemon : Pokemon | undefined;
  flavText : string = '';
  flip : boolean = false;
  popimg : boolean = false;
  test : boolean = true;

  pkmTypes : any = {
        normal: 'Normal',
        fire: 'Feu',
        water: 'Eau',
        electric: 'Électrique',
        grass: 'Plante',
        ice: 'Glace',
        fighting: 'Combat',
        poison: 'Poison',
        ground: 'Sol',
        flying: 'Vol',
        psychic: 'Psy',
        bug: 'Insecte',
        rock: 'Roche',
        ghost: 'Spectre',
        dragon: 'Dragon',
        dark: 'Tenêbre',
        steel: 'Métal',
        fairy: 'Fée',
  }


  constructor(private _pkmService : PokemonService) {

  }

  ngOnInit(): void {
      this._pkmService.$currentPkm.subscribe( {
        next : (pkm) => {         

          if(pkm) {
            this.flip = true;
            this.popimg = true;
            this.test = false;
            setTimeout(() => { this.flip = false; this.popimg = false; this.test = true; }, 1000);

            this._pkmService.getFlavText(pkm.id)
            .subscribe( {
              next : (res) => {
                console.log(pkm);
                setTimeout(() => {
                  this.pokemon = pkm;
                  if(this.pokemon) {
                    this.pokemon.frenchName = res.frName;
                    this.pokemon.flav = res.flav.replaceAll('\n', ' ').replaceAll('\u000c', ' ');
                  }
                }, 500)  
              } ,
              complete : () => { }
            })
          } else {
            this.pokemon = pkm;
          }
          

        } 
      });
  }
}

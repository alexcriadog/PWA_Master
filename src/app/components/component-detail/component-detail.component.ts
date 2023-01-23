import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonDetail } from 'src/app/models/pokemon-detail.interface';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { Pokemons } from 'src/app/models/pokemons.interface';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css'],
})
export class ComponentDetailComponent {
  pokemon: PokemonDetail = {
    height: 0,
    name: '',
    weight: 0,
    sprites: null,
    img: '',
    imgshiny: '',
    stats: null,
  };

  constructor(
    private pokemonService: ComponentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.getPokemonById(id).subscribe((pk) => {
        console.log(pk);
        this.pokemon = pk;
        this.pokemon.name = this.capitalizeFirst(this.pokemon.name);
        this.pokemon.img = pk.sprites?.other['official-artwork'].front_default;
        this.pokemon.imgshiny =
          pk.sprites?.other['official-artwork'].front_shiny;
        console.log(this.pokemon);
      });
    }
  }

  capitalizeFirst(word: string): string {
    const firstLetter = word.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1);

    return firstLetterCap + remainingLetters;
  }
}

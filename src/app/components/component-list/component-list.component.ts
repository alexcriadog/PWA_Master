import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { Pokemons } from 'src/app/models/pokemons.interface';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
})
export class ComponentListComponent {
  pokemons: Array<Pokemon> = [];
  grid: boolean = false;
  card: boolean = true;

  constructor(private pokemonService: ComponentService) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons.results;
      this.pokemons.map((pk) => {
        var arr = pk.url.split('/');
        var id = arr[arr.length - 2];
        pk.id = id;
        pk.name = this.capitalizeFirst(pk.name);

        this.pokemonService.getPokemonById(id).subscribe((pk2) => {
          console.log(pk);
          pk.img = pk2.sprites?.other['official-artwork'].front_default;
          pk.imgshiny = pk2.sprites?.other['official-artwork'].front_shiny;
        });
      });
    });
  }

  capitalizeFirst(word: string): string {
    const firstLetter = word.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1);

    return firstLetterCap + remainingLetters;
  }

  toggleDisplay(str: string) {
    if (str == 'grid') {
      this.card = false;
      this.grid = true;
    } else if (str == 'card') {
      this.card = true;
      this.grid = false;
    }
  }
}

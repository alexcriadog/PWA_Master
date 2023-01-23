import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { Pokemons } from 'src/app/models/pokemons.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() pokemons!: Array<Pokemon>;
}

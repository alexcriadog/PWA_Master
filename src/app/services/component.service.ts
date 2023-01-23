import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemons } from '../models/pokemons.interface';
import { Pokemon } from '../models/pokemon.interface';
import { PokemonDetail } from '../models/pokemon-detail.interface';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<Pokemons> {
    return this.http.get<Pokemons>(
      `https://pokeapi.co/api/v2/pokemon/?limit=50`
    );
  }

  getPokemonById(id: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(
      `https://pokeapi.co/api/v2/pokemon/` + id
    );
  }
}

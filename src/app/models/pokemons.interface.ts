import { Pokemon } from "./pokemon.interface";

export interface Pokemons {
    count: number;
    next: string;
    previous: string;
    results: Array<Pokemon>;
}

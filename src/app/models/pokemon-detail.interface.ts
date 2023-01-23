interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

interface Other {
  'official-artwork': OfficialArtwork;
}

interface Sprites {
  other: Other;
}

interface Stat {
  name: string;
}

interface Stats {
  base_stat: number;
  stat: Stat;
}

export interface PokemonDetail {
  name: string;
  height: number;
  weight: number;
  sprites: Sprites | null;
  img: string | undefined;
  imgshiny: string | undefined;
  stats: Array<Stats> | null;
}

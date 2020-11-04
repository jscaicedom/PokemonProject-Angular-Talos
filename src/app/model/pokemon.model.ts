export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprite;
  height: number;
  weight: number;
  types: Types[];
  abilities: Abilities[];
  stats: Stat[];
  isFavorite: false;
}

export interface GeneralInfo {
  flavor_text_entries: Description[];
  gender_rate: number;
}

export interface Sprite {
  front_default: string;
}

export interface Description {
  flavor_text: string;
}

export interface Types {
  type: Type;
}

export interface Abilities {
  ability: Type;
}

export interface Type {
  name: string;
}

export interface Stat {
  base_stat: number;
  stat: Type;
}

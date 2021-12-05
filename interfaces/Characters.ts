export type CharacterItem = {
  character: Character
};

export type Characters = {
  characters: {
    results: Character[];
    info: Info;
  };
};

export type EpisodeItem = {
  episode: Episode;
};

type Episode = {
  id: number;
  name: string;
  episode: string;
  air_date: string;
  characters: Character[];
};

type Location = {
  name: string;
  dimension: string;
};

type Info = {
  next: number;
};

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: Location;
  location: Location;
  episode: Episode[];
  image: string;
};

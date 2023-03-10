export interface PokemonListResponse {
	count: number;
	next?: string;
	previous?: string;
	results: SmallPokemon[];
}

export interface SmallPokemon {
	name: string;
	url: string;
	id: number;
	img: string;
}

export interface Sprites {
	back_default: string;
	back_female?: any;
	back_shiny: string;
	back_shiny_female?: any;
	front_default: string;
	front_female?: any;
	front_shiny: string;
	front_shiny_female?: any;
}

export interface PokemonDataI {
	id: string;
	name: string;
	img: string;
	weight: number;
	sprites: Sprites;
}

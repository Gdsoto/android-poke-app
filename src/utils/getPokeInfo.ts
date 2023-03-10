import { Pokemon } from '../interfaces/pokemonFull';
import pokeApi from '../services/api';

export const getPokeInfo = async (nameId: string) => {
	const { data } = await pokeApi.get<Pokemon>(`pokemon/${nameId}`);

	return {
		id: data.id,
		name: data.name,
		sprites: data.sprites,
	};
};

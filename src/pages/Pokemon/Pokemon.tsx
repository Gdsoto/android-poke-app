import { IonPage } from '@ionic/react';
import Container from '../../components/shared/Container';
import { RouteComponentProps } from 'react-router';
import { useEffect, useState } from 'react';
import pokeApi from '../../services/api';
import { PokemonDataI } from '../../interfaces/pokemonList';
import PokemonDetai from './components/PokemonDetai';
import PokemonSprites from './components/PokemonSprites';

interface PokemonProps
	extends RouteComponentProps<{
		id: string;
	}> {}

const Pokemon: React.FC<PokemonProps> = ({ match }) => {
	const pokemonId = match.params.id;

	const DEFAULT_VALUES = {
		id: '',
		name: '',
		img: '',
		weight: 0,
		sprites: {
			back_default: '',
			back_female: null,
			back_shiny: '',
			back_shiny_female: null,
			front_default: '',
			front_female: null,
			front_shiny: '',
			front_shiny_female: null,
		},
	};

	const [pokemon, setPokemon] = useState<PokemonDataI>(DEFAULT_VALUES);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getPokemons = async () => {
			setLoading(true);
			const { data } = await pokeApi.get(`/pokemon/${pokemonId}`);

			const pokemonData: PokemonDataI = {
				id: pokemonId,
				name: data.name,
				img: data.sprites.front_default,
				weight: data.weight,
				sprites: data.sprites,
			};

			setPokemon(pokemonData);
			setLoading(false);
		};

		getPokemons();

		return () => {
			setPokemon(DEFAULT_VALUES);
		};
	}, [pokemonId]);

	return (
		<IonPage>
			<Container>
				<>
					{!loading && (
						<>
							<PokemonDetai pokemon={pokemon} />
							<PokemonSprites pokemon={pokemon} />
						</>
					)}
				</>
			</Container>
		</IonPage>
	);
};

export default Pokemon;

// Libs
import { useEffect, useState } from 'react';
import { IonCol, IonGrid, IonPage, IonRow } from '@ionic/react';

// Components
import Container from '../../components/shared/Container';

// Styles
import './Home.css';
import pokeApi from '../../services/api';
import {
	PokemonListResponse,
	SmallPokemon,
} from '../../interfaces/pokemonList';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const Home: React.FC = () => {
	const [pokemons, setpokemons] = useState<SmallPokemon[]>([]);

	useEffect(() => {
		const getPokemons = async () => {
			const { data } = await pokeApi.get<PokemonListResponse>(
				'/pokemon?limit=151'
			);

			const pokemons: SmallPokemon[] = data.results.map((pokemon, id) => {
				const pokeId: number = id + 1;
				return {
					...pokemon,
					id: pokeId,
					img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`,
				};
			});

			setpokemons(pokemons);
		};

		getPokemons();
	}, []);

	return (
		<IonPage>
			<Container>
				<IonGrid fixed={true}>
					<IonRow>
						{pokemons ? (
							<IonCol>
								{pokemons.map((pokemon) => (
									<PokemonCard pokemon={pokemon} key={pokemon.id} />
								))}
							</IonCol>
						) : (
							<p>Cargando</p>
						)}
					</IonRow>
				</IonGrid>
			</Container>
		</IonPage>
	);
};

export default Home;

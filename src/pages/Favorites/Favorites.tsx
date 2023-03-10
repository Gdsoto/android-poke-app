import { IonCard, IonCardHeader, IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import Container from '../../components/shared/Container';
import { localFavorites } from '../../utils';
import { useHistory } from 'react-router';

const Favorites: React.FC = () => {
	const history = useHistory();
	const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

	useEffect(() => {
		setFavoritePokemons(localFavorites.pokemons);
	}, []);

	const onClick = (pokemon: number) => {
		history.push(`/pokemon/${pokemon}`);
	};

	return (
		<IonPage>
			<Container>
				{favoritePokemons.length > 0 ? (
					<>
						{favoritePokemons.map((pokemon) => (
							<IonCard onClick={() => onClick(pokemon)}>
								<IonCardHeader>
									<img
										src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`}
										alt="pokemon"
										width={150}
										height={150}
									/>
								</IonCardHeader>
							</IonCard>
						))}
					</>
				) : (
					<p>No hay favoritos</p>
				)}
			</Container>
		</IonPage>
	);
};

export default Favorites;

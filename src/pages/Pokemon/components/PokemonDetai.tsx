import React, { useState } from 'react';
import { PokemonDataI } from '../../../interfaces/pokemonList';
import {
	IonButton,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonIcon,
	useIonAlert,
} from '@ionic/react';

import { star } from 'ionicons/icons';
import { localFavorites } from '../../../utils';

interface Props {
	pokemon: PokemonDataI;
}

const PokemonDetai: React.FC<Props> = ({ pokemon }) => {
	const [presentAlert] = useIonAlert();
	const [isInfavorites, setIsInfavorites] = useState(
		localFavorites.existInFavorites(parseInt(pokemon.id))
	);

	const onClick = () => {
		try {
			localFavorites.toggleFavorite(parseInt(pokemon.id));
			setIsInfavorites(!isInfavorites);
			if (isInfavorites) return;
			presentAlert({
				header: 'Pokémon',
				subHeader: 'Agregado exitosamente',
				message: 'Encuentralo en favoritos!',
				buttons: ['OK'],
			});
		} catch (error) {
			presentAlert({
				header: 'Pokémon',
				subHeader: 'Error al agregar',
				message: 'Intente de nuevo mas tarde',
				buttons: ['OK'],
			});
		}
	};

	return (
		<IonCard>
			<IonCardHeader>
				<IonCardTitle>
					<h1>{pokemon?.name}</h1>
				</IonCardTitle>
				<img alt="pokemon-img" src={pokemon?.img} width={200} height={200} />
				<IonCardSubtitle>
					<h2># {pokemon?.id}</h2>
				</IonCardSubtitle>
				<IonCardSubtitle>
					<b>Peso: </b>
					{pokemon?.weight}
				</IonCardSubtitle>
			</IonCardHeader>
			<IonButton expand="block" color="success" onClick={onClick}>
				<IonIcon slot="start" icon={star}></IonIcon>
				{isInfavorites ? 'Eliminar de favoritos' : 'Guardar en favoritos'}
			</IonButton>
		</IonCard>
	);
};

export default PokemonDetai;

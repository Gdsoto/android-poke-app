import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonItem,
	IonLabel,
	IonList,
	IonThumbnail,
} from '@ionic/react';
import { PokemonDataI } from '../../../interfaces/pokemonList';

interface Props {
	pokemon: PokemonDataI;
}

const PokemonSprites: React.FC<Props> = ({ pokemon }) => {
	return (
		<IonCard>
			<IonCardHeader>
				<IonCardTitle>Imágenes</IonCardTitle>
				<IonCardSubtitle>Detalles del pokémon</IonCardSubtitle>
			</IonCardHeader>
			<IonCardContent>
				<IonList>
					<IonItem>
						<IonThumbnail slot="start">
							<img alt="pokemon-img" src={pokemon.sprites.back_default} />
						</IonThumbnail>
						<IonLabel>Parte Trasera</IonLabel>
					</IonItem>
					<IonItem>
						<IonThumbnail slot="start">
							<img alt="pokemon-img" src={pokemon.sprites.front_default} />
						</IonThumbnail>
						<IonLabel>Parte Frontal</IonLabel>
					</IonItem>
					<IonItem>
						<IonThumbnail slot="start">
							<img alt="pokemon-img" src={pokemon.sprites.back_shiny} />
						</IonThumbnail>
						<IonLabel>Parte Trasera Alternativa</IonLabel>
					</IonItem>
					<IonItem>
						<IonThumbnail slot="start">
							<img alt="pokemon-img" src={pokemon.sprites.front_shiny} />
						</IonThumbnail>
						<IonLabel>Parte Frontal Alternativa</IonLabel>
					</IonItem>
				</IonList>
			</IonCardContent>
		</IonCard>
	);
};

export default PokemonSprites;

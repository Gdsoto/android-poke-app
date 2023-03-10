import {
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
} from '@ionic/react';

// Interfaces
import { SmallPokemon } from '../../interfaces/pokemonList';

// Styles
import './PokemonCard.css';
import { useHistory } from 'react-router';

interface Props {
	pokemon: SmallPokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
	const history = useHistory();

	const onClick = () => {
		history.push(`/pokemon/${pokemon.id}`);
	};

	return (
		<IonCard onClick={onClick}>
			<IonCardHeader>
				<img
					alt="Silhouette of mountains"
					src={pokemon.img}
					width={150}
					height={150}
				/>
				<IonCardTitle>{pokemon.name}</IonCardTitle>
				<IonCardSubtitle># {pokemon.id}</IonCardSubtitle>
			</IonCardHeader>
		</IonCard>
	);
};

export default PokemonCard;

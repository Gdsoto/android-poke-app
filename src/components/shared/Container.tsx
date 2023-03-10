import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const Container = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Pokedex</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Pokedex</IonTitle>
					</IonToolbar>
				</IonHeader>
				<div>{children}</div>
			</IonContent>
		</>
	);
};

export default Container;

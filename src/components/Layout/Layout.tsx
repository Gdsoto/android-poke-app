import {
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';

import { heart, home } from 'ionicons/icons';

import Home from '../../pages/Home/Home';
import Favorites from '../../pages/Favorites/Favorites';
import Pokemon from '../../pages/Pokemon/Pokemon';

const Layout = () => {
	return (
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Redirect exact path="/" to="/home" />
					<Route path="/home" render={() => <Home />} exact={true} />
					<Route path="/favorites" render={() => <Favorites />} exact={true} />
					<Route path="/pokemon/:id" component={Pokemon} exact={true} />
				</IonRouterOutlet>

				<IonTabBar slot="bottom">
					<IonTabButton tab="home" href="/home">
						<IonIcon icon={home} />
						<IonLabel>Inicio</IonLabel>
					</IonTabButton>

					<IonTabButton tab="favorites" href="/favorites">
						<IonIcon icon={heart} />
						<IonLabel>Favoritos</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	);
};

export default Layout;

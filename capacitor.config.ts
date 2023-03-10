import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.example.app',
	appName: 'pokeAppIonic',
	webDir: 'build',
	bundledWebRuntime: false,
	server: {
		androidScheme: 'http',
		allowNavigation: ['https://pokeapi.co/api/v2'],
	},
};

export default config;

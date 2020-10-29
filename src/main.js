import App from './App.svelte';
import locations from '../data.json';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		locations: locations.locations,
	}
});

export default app;
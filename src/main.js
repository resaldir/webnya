import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Guys'
	}
});

export default app;
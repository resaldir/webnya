<script>
	import 'bulma/css/bulma.css'
	import { Button } from 'svelma'
	
  	import 'bulma/css/bulma.css'
  	import '@fortawesome/fontawesome-free/css/all.css'

	export let name;

	import { Collapse } from 'svelma'
</script>

<main>
	<h1>Hello {name}!</h1>
	<p><b>Saldi</b> disini, dan ini adalah web personal saya.</p>
</main>

<center>
<Collapse>
	<button class="button is-primary" slot="trigger">
		Hayuu
	</button>
	<div class="notification">
    <div class="content">
      <h3>Meluncur</h3>
      <p>mamang</p>
    </div>
  </div>
</Collapse>
</center>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
<script>
	import "../app.scss";
    import Header from './Header.svelte';
    import './styles.css';
</script>

<div class="app">

	<main>
		<slot></slot>
	</main>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
        background-color:transparent;
	}

</style>

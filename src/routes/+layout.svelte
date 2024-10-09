<script>
	import "../app.scss";
    import './styles.css';
    import { inject } from '@vercel/analytics'
</script>

<div class="app">

	<main>
		<slot></slot>
	</main>

</div>

<style>
	.app {
		display: flex;
		flex-direction: row;
		min-height: 100vh;
        background-color:transparent;
        backdrop-filter:blur(8px);
	}
        .app::-webkit-scrollbar {display: none;}

	main {
		padding: 0rem;
		width: 100%;
		min-width: 100%;
		margin: 0 0;
        backdrop-filter:blur(8px);
	}
    main::-webkit-scrollbar {display: none;}

</style>

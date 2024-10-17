<script>
    import "../app.scss";
    import './styles.css';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';

    inject({ mode: dev ? 'development' : 'production' });

</script>

<div class="app">

	<main class="">
		<slot></slot>
	</main>

</div>

<style>
	.app {
		min-height: 100vh;
        background-color:transparent;
        backdrop-filter:blur(8px);
	}
        .app::-webkit-scrollbar {display: none;}

	main {
		padding: 0rem;
		min-width: 97%;
		margin: 0 0;
        backdrop-filter:blur(8px);
        overflow:hidden;
	}
    main::-webkit-scrollbar {display: none;}

</style>

<script>
    import "../../app.scss";
</script>

<div class="app">

	<main class="main2">
		<slot></slot>
	</main>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.main2 {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0rem;
		width: 100%;
		max-width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
        background-color:transparent;
	}

</style>

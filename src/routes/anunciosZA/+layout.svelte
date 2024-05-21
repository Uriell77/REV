<script>
    import "../../app.scss";
</script>

<div class="app p-0 m-0">

	<main class="main2 p-0 m-0">
		<slot></slot>
	</main>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}

	.main2 {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0rem;
		width: 100%;
		max-width: 100%;
		min-height: 100vh;
		margin: 0 auto;
		box-sizing: border-box;
        background-color:transparent;
	}

</style>

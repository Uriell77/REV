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
		height: 100vh;
	}

	.main2 {
		padding: 0rem;
		width: 100%;
		max-width: 100%;
		height: 100vh;
		margin: 0 auto;
        background-color:transparent;
	}

</style>

<script>
    import "../../app.scss";
    import '../styles.css';
</script>

<div class="app">

	<level class="main2">
		<slot></slot>
	</level>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
        background-color: rgba(23,56,23,.9);
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

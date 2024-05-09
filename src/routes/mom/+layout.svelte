<script>
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import "../../app.scss";
    import '../styles.css';

</script>

<div class="app" >

	<div class="main3" >
		<slot></slot>
	</div>

</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: rgba(2,5,20,1);
        background: hsla(141, 54%, 86%, 1);

        background: radial-gradient(circle, hsla(141, 54%, 86%, 1) 0%, hsla(333, 73%, 85%, 1) 50%, hsla(211, 58%, 79%, 1) 100%);

        background: -moz-radial-gradient(circle, hsla(141, 54%, 86%, 1) 0%, hsla(333, 73%, 85%, 1) 50%, hsla(211, 58%, 79%, 1) 100%);

        background: -webkit-radial-gradient(circle, hsla(141, 54%, 86%, 1) 0%, hsla(333, 73%, 85%, 1) 50%, hsla(211, 58%, 79%, 1) 100%);

    }

	.main3 {
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

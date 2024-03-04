<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
    let valor =0;
    let dato;
    function valorar(){
        console.log(valor.value)
    }
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<div class="level">
    <div class="esfera box">
        <div class="ojoD">
            <div class="irisD">
            </div>
        </div>
        <div class="ojoI">
            <div class="irisI">
            </div>
        </div>
        <div class="boca"></div>
    </div>

    <input class="desliz" type="range" bind:value={valor} on:change={valorar} min=-100 max=100 list="markers"/>
    <datalist id="markers">
  <option value="-25"></option>
  <option value="-50"></option>
  <option value="-75"></option>
  <option value="-100"></option>
  <option value="0"></option>
  <option value="25"></option>
  <option value="50"></option>
  <option value="75"></option>
  <option value="100"></option>
</datalist>
    {valor}
</div>


<style>

    .desliz::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        height:4px;
        width:3px;
        border-radius:50%;
    }

    .desliz{
        width:60%;
    }

    .level{
		flex: 1;
		align-items: center;
		justify-content: center;
        background-color:blue;
		display: flex;
		flex-direction: column;
    }


    .esfera{
        width:20rem;
        height:20rem;
        background-color:white;
        border-radius:50%;
        border-color:green;
        border-style:solid;
        position:relative;
        border-radius: 50%;
background: linear-gradient(145deg, #f0f0f0, #cacaca);
box-shadow:  7px 7px 14px #233512,
             -7px -7px 14px #346789;

    }

    .boca{
        border-bottom-style:solid;
        position:absolute;
        left:27%;
        top:30%;
        border-radius:0%;
        width:9rem;
        height:9rem;
        border-color:#464c67;


    }

    .ojoD{
        border-style:solid;
        position:absolute;
        right:25%;
        top:20%;
        border-radius:50%;
        width:3rem;
        height:5rem;
        border-color:#464c67;
    }

    .irisD{
        border-style:solid;
        position:absolute;
        right:12%;
        top:39%;
        border-radius:50%;
        width:2rem;
        height:3rem;
        background-color:#464c67;
    }


    .ojoI{
        border-style:solid;
        position:absolute;
        left:22%;
        top:20%;
        border-radius:50%;
        width:3rem;
        height:5rem;
        border-color:#464c67;
    }


    .irisI{
        border-style:solid;
        position:absolute;
        right:12%;
        top:39%;
        border-radius:50%;
        width:2rem;
        height:3rem;
        background-color:#464c67;
    }

</style>

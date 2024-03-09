<script>
    import Counter from './Counter.svelte';
    import welcome from '$lib/images/svelte-welcome.webp';
    import welcome_fallback from '$lib/images/svelte-welcome.png';
    import { spring } from 'svelte/motion';
    let valor = 0;
    //valor.stiffness = 0.3;
    //valor.damping = 0.4;
    //valor.precision = 0.005;
    let dato;
    $: animo = spring("boca");

    function valorar(){
        if(valor > 10){
            animo = "boca-feliz";
        }else{animo = "boca"}
    }

</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>


<div class="level">

    <!--
    <section class="container">
                <svg width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <g transform="scale(0.521)">
                        <path style="fill:#C2B170;stroke:#545454;stroke-width:6;" d="m 96,8 a 88 88 1 1 0 0.1,0 z"/>
            {#key valor}
            {#if valor <= 20 }
                        <path style="fill:none;stroke:#545454;stroke-width:6;" d="m 67,132 58,0"/>
                    {:else if valor <= 60}
                        <path style="fill:none;stroke:#545454;stroke-width:6;" d="m 30,120 q 66,40 132,0"/>
                    {:else if valor <= 100}
                         <path style="fill:#FFF;stroke:#545454;stroke-width:6;" d="m 30,120 q 66,80 132,0 z"/>
                    {:else if valor < 0}
                         <path style="fill:none;stroke:#545454;stroke-width:6;" d="m 30,120 c 40,40 92 -40 132,0"/>
                    {:else if valor <= -50}
                         <path style="fill:none;stroke:#545454;stroke-width:6;" d="m 30,130 q 66,-40 132,0"/>


            {/if}
        {/key}
                        <circle style="fill:#FFF;stroke:#545454;stroke-width:6;" cx="50" cy="60" r="20"/>
                        <circle style="fill:#FFF;stroke:#545454;stroke-width:6;" cx="142" cy="60" r="20"/>
                        <circle style="fill:#545454;stroke-width:6;" cx="50" cy="70" r="10"/>
                        <circle style="fill:#545454;stroke-width:6;" cx="142" cy="70" r="10"/>
                    </g>
                </svg>

    </section>
    -->

    <div class="section">
        <div class="esfera  ">
            <div class="ojoD">
                <div class="irisD">
                </div>
            </div>
            <div class="ojoI">
                <div class="irisI">
                </div>
            </div>

            <div
                class="{valor<0 ? "is-hidden":
                valor < 20 ? "boca":
                valor < 60 ? "boca-semifeliz":
                valor <= 100 ? "boca-feliz":""
                }"
            ></div>
            <div
                class="{valor>-1 ? "is-hidden":
                valor > -20 ? "boca2":
                valor > -60 ? "boca-semitriste":
                valor >= -100 ? "boca-triste":""
                }"
            ></div>

        </div>
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

    .level{
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color:blue;
    display: flex;
    flex-direction: column;
    }


    .esfera{
    width:17rem;
    height:17rem;
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
    left:24%;
    top:30%;
    border-radius:0%;
    border-width:4px;
    width:9rem;
    height:9rem;
    border-color:#464c67;
    transition: all 0.4s ease;


    }
    .boca2{
    border-top-style:solid;
    position:absolute;
    left:24%;
    top:82.7%;
    border-radius:0%;
    border-width:4px;
    width:9rem;
    height:9rem;
    border-color:#464c67;
    transition: all 0.4s ease;
    }

    .boca-feliz{
    border-bottom-style:solid;
    position:absolute;
    left:22%;
    top:36%;
    border-radius:50%;
    border-width:9px;
    width:9.5rem;
    height:9rem;
    border-color:#464c67;
    transition: all 0.4s ease;

    }

    .boca-semifeliz{
    border-bottom-style:solid;
    position:absolute;
    left:23%;
    top:36%;
    border-radius:30%;
    border-width:9px;
    width:9.5rem;
    height:9rem;
    border-color:#464c67;
    transition: all 0.4s ease;

    }


    .boca-semitriste{
    border-top-style:solid;
    position:absolute;
    left:24%;
    top:76%;
    border-radius:20%;
    border-width:9px;
    width:9.5rem;
    height:9rem;
    border-color:#464c67;
    transition: all 0.4s ease;

    }

    .boca-triste{
    border-top-style:solid;
    position:absolute;
    left:21%;
    top:72%;
    border-radius:50%;
    border-width:9px;
    width:9.5rem;
    height:9rem;
    border-color:#464c67;
    transition: all 0.4s ease;

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
    background: linear-gradient(14deg, #464c67, #464c32);
    box-shadow:  1px 1px 1px #233512,
    -1px -1px 1px #346789;
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
    background: linear-gradient(14deg, #464c67, #464c32);
    box-shadow:  1px 1px 1px #233512,
    -1px -1px 1px #346789;
    }

    input[type=range] {
    -webkit-appearance: none;
    background:transparent;
    margin: 10px 0;
    width: 90%;
    }
    input[type=range]:focus {
    outline: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 21px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #6D4EB6;
    border-radius: 25px;
    border: 1px solid #8A8A8A;
    }
    input[type=range]::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #828282;
    border: 1px solid #8A8A8A;
    height: 31px;
    width: 50px;
    border-radius: 12px;
    background: #1ADA21;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
    background: #6D4EB6;
    }
    input[type=range]::-moz-range-track {
    width: 100%;
    height: 21px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #6D4EB6;
    border-radius: 25px;
    border: 1px solid #8A8A8A;
    }
    input[type=range]::-moz-range-thumb {
    box-shadow: 1px 1px 1px #828282;
    border: 1px solid #8A8A8A;
    height: 31px;
    width: 50px;
    border-radius: 12px;
    background: #1ADA21;
    cursor: pointer;
    }
    input[type=range]::-ms-track {
    width: 100%;
    height: 21px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent ;
    border-color: transparent;
    color: transparent;
    }
    input[type=range]::-ms-fill-lower {
    background: #6D4EB6;
    border: 1px solid #8A8A8A;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000;
    }
    input[type=range]::-ms-fill-upper {
    background: #6D4EB6;
    border: 1px solid #8A8A8A;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000;
    }
    input[type=range]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 1px 1px 1px #828282;
    border: 1px solid #8A8A8A;
    height: 31px;
    width: 50px;
    border-radius: 12px;
    background: #1ADA21;
    cursor: pointer;
    }
    input[type=range]:focus::-ms-fill-lower {
    background: #6D4EB6;
    }
    input[type=range]:focus::-ms-fill-upper {
    background: #6D4EB6;
    }


</style>

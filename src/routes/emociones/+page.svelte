<script>
    import { spring } from 'svelte/motion';
    import { fade, fly } from 'svelte/transition';

    $: valor = 0;
    //valor.stiffness = 0.3;
    //valor.damping = 0.4;
    //valor.precision = 0.005;
    let dato;
    $: animo = spring("boca");
    $: animo = spring("cejaI");
    let espab = true;
    let cerr = false;
    $: emocion = "Indiferente";

    function espabilo(){
        espab = !espab;
        cerr = !cerr
        setTimeout(()=>{espab = !espab; cerr = !cerr},100)
    }


    setInterval(espabilo,7600);
    
    let modal = false;
    function modalcontrol(){
        modal = !modal;
    }


</script>

<svelte:head>
    <title>Como te Sientes Hoy?</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>


{#key emocion}
    <div class="level pt-0 mt-0 {valor <= -60 ? "tormenta":
        valor <= -40 && valor >= -59  ? "molesto":
        valor <= -20 && valor > -40  ? "fustracion":
        valor < 0 && valor < 20 ? "level":
        valor > 21 && valor <= 40 ? "emocionado":
        valor >= 41 && valor <= 75 ? "confiado":
        valor >= 76 && valor <= 100 ? "shine":""
        }">
        <div class="impacto emocion2 section mt-0 pt-0 mb-0 pb-0 has-text-centered ">
            ¿Como te sientes Hoy?
        </div>


        <div class="section">
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="esfera  " on:click={modalcontrol} on:keyup={modalcontrol}>
                {#key emocion}
                <div class="cejaI {valor < -60 ? "cejaI-T":
                    valor < -20 ? "cejaI-SemT":
                    valor < 20 ? "":
                    valor < 60 ? "cejaI-SemF":
                    valor <= 75 ? "cejaI-confiado":
                    valor <= 100 ? "cejaI-F":""
                    }"
                >
                </div>
            {/key}
                {#key emocion}
                <div class="cejaD {valor < -60 ? "cejaD-T":
                    valor < -20 ? "cejaD-SemT":
                    valor < 20 ? "":
                    valor <= 60 ? "cejaD-SemF":
                    valor <= 75 ? "cejaD-confiado":
                    valor <= 100 ? "cejaD-F":""
                    }
                    ">
                </div>
            {/key}

                <div class="cerradoD {cerr ? "": "is-none"}"></div>
                <div class="ojoD {espab ? "": "is-none"}">
                    <div class="irisD {espab ? "": "is-none"}">
                    </div>
                </div>
                <div class="cerradoI {cerr ? "": "is-none"}"></div>
                <div class="ojoI {espab ? "": "is-none"}">
                    <div class="irisI">
                    </div>
                </div>

                {#key emocion}
                <div
                    class="{valor < 0 ? "is-hidden":
                    valor < 20 ? "boca":
                    valor < 60 ? "boca-semifeliz":
                    valor <= 75 ? "boca-confiado":
                    valor <= 100 ? "boca-feliz":""
                    }"
                >
                </div>
            {/key}
                {#key emocion}
                <div
                    class="{valor>-1 ? "is-hidden":
                    valor > -20 ? "boca2":
                    valor > -60 ? "boca-semitriste":
                    valor >= -100 ? "boca-triste":""
                    }"
                >
                </div>
            {/key}

            </div>
        </div>
        <div class="emocion3 is-fullwidth is-flex mt-0">
        {#if valor >= -100 && valor <= -61}
            {@const emocion = "Triste"}
            {#key emocion}
                <div class="emocion impacto has-text-centered">
                    {emocion}
                </div>
            {/key}
        {:else if valor >= -60 && valor <= -41}
            {@const emocion = "Molesto"}
            {#key emocion}
                <div class="emocion impacto has-text-centered">
                    {emocion}
                </div>
            {/key}
        {:else if valor >= -40 && valor <= -21}
            {@const emocion = "Frustrado"}
            {#key emocion}
                <div class="emocion impacto has-text-centered">
                    {emocion}
                </div>
            {/key}
        {:else if valor >= -20 && valor <= 20}
            {@const emocion = "Indiferente"}
            {#key emocion}
                <div class="emocion impacto has-text-centered">
                    {emocion}
                </div>
            {/key}
        {:else if valor >= 21 && valor <= 40}
            {@const emocion = "Emocionado"}
            {#key emocion}
                <div class="emocion impacto has-text-centered">
                    {emocion}
                </div>
            {/key}
        {:else if valor >= 41 && valor <= 75}
            {@const emocion = "Confiado"}
            {#key emocion}
                <div class="emocion impacto has-text-centered">
                    {emocion}
                </div>
            {/key}
        {:else if valor >= 76 && valor <= 100}
            {@const emocion = "Feliz"}
            {#key emocion}
                <div class="emocion impacto has-text-centered" >
                    {emocion}
                </div>
            {/key}
        {/if}
        </div>

        <input class="desliz mt-5" type="range" bind:value={valor}  min=-100 max=100/>


{#key modal}
<div class="modal mt-0 {modal ? "is-active":""}" transition:fly={{duration: 2000,x:0, y: 700, opacity: 0}}>
  <div class="modal-background"></div>
  <div class="modal-content">
    <!-- Any other Bulma elements you want -->
  </div>
  <button class="modal-close is-large" aria-label="close" on:click={modalcontrol}></button>
</div>
{/key}
    </div>
{/key}

<style>

    .emocion2{
        font-size:40px;
        color:rgba(40,30,65,.9);
        text-shadow: 2px 2px 2px rgba(255,255,255,.9);
        background-color: rgba(200,200,200, .0);
        filter-function:blur(8px);
        border-radius: 20px;
    }

    .emocion{
        padding:6px;
        font-size:32px;
        color:white;
        text-shadow: 2px 2px 2px rgba(37,186,92,.9);
        background-color: rgba(1,1,1,0);
        filter-function:blur(8px);
        border-radius: 20px;
        width:100%;
    }
    .emocion3{
        padding:6px;
        font-size:20px;
        color:#6D4EB6;
        text-shadow: 0px 0px 9px rgba(27,186,82,1);
        background-color: rgba(250,230,250, .0);
        filter-function:blur(8px);
        border-radius: 20px;
    }

    .is-none{
        display:none;
    }

    .cerradoD{
        border-style:solid;
        position:absolute;
        right:25%;
        top:35%;
        border-radius:50%;
        width:3rem;
        height:0rem;
        border-color:#464c67;
    }
    .cerradoI{
        border-style:solid;
        position:absolute;
        left:22%;
        top:35%;
        border-radius:50%;
        width:3rem;
        height:0rem;
        border-color:#464c67;
    }

    .cejaI,.cejaD{
        border-style:solid;
        border-width:2px 0px 0px 0px;
        width:18%;
        height:18%;
        border-color:#464c67;
        position:absolute;
        top: 20%;
        transition: all 0.4s ease;
        will-change:transform;
    }

    .cejaI{
        left:22%;
        transition: all 0.4s ease;
    }
    .cejaD{
        right:25%;
        transition: all 0.4s ease;
    }

    .cejaI-SemT{
        transform:translateY(-10px);
        transition: all 0.4s ease;
        border-radius:8px;
    }
    .cejaI-T{
        transform:translateY(1px);
        transform:rotate(-30deg);
        border-radius: 0%;
        transition: all 0.4s ease;
    }

    .cejaI-SemF{
        transform:translateY(-10px);
        transition: all 0.4s ease;
        border-radius:8px;
            width: 24% !important;
    }
    .cejaI-F{
        width: 24%;
        transform:translateY(-25px);
        border-radius: 50%;
        transition: all 0.4s ease;
    }


    .cejaD-SemT{
        transform:translateY(-10px);
        transition: all 0.4s ease;
        border-radius:8px;
    }
    .cejaD-T{
        transform:translateY(1px);
        transform:rotate(30deg);
        border-radius: 0%;
        transition: all 0.4s ease;
    }

    .cejaD-SemF{
        transform:translateY(-10px);
        transition: all 0.4s ease;
        border-radius:8px;
            width: 24%;
    }
    .cejaI-confiado{
            width: 24% !important;
    }
    .cejaD-confiado{
            width: 24% !important;
    }
    .cejaD-F{
        width: 24%;
        transform:translateY(-25px);
        border-radius: 50%;
        transition: all 0.4s ease;
    }

    .level{
        flex: 1;
        align-items: center;
        justify-content: center;
        background-color:rgba(25, 16, 45, 1);
        display: flex;
        flex-direction: column;
        transition: all .5s ease;
        will-change:transform;
    }


    .esfera{
        width:17rem;
        height:17rem;
        background-color:white;
        border-radius:50%;
        border-color:green;
        border-style:none;
        position:relative;
        border-radius: 50%;
        background: linear-gradient(145deg, #f0f0f0, #cacaca);
        box-shadow:  2px 2px 10px #233512,
        -2px -2px 10px #346789;

    }

    .boca{
        border-bottom-style:solid;
        position:absolute;
        left:34%;
        top:30%;
        border-radius:0%;
        border-width:4px;
        width:5rem;
        height:9rem;
        border-color:#464c67;
        transition: all 0.4s ease;
        will-change:transform;


    }
    .boca2{
        border-top-style:solid;
        position:absolute;
        left:34%;
        top:82.0%;
        border-radius:0%;
        border-width:4px;
        width:5rem;
        height:9rem;
        border-color:#464c67;
        transition: all 0.4s ease;
    }

    .boca-feliz{
        border-bottom-style:solid;
        position:absolute;
        left:22% !important;
        top:36% !important;
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
        left:22%;
        top:36%;
        border-radius:30%;
        border-width:9px;
        width:9.5rem;
        height:9rem;
        border-color:#464c67;
        transition: all 0.4s ease;

    }
    .boca-confiado{
            transform:rotate(-35deg) !important;
            transform:translate(54px, 70px) !important;
            border-radius:100% 1% !important;
            width:100px !important;
            height:30px !important;
        border-bottom-style:solid;
        position:absolute;
        left:22%;
        top:36%;
        border-width:9px;
        border-color:#464c67;
        transition: all 0.4s ease;

    }


    .boca-semitriste{
        border-top-style:solid;
        position:absolute;
        left:23%;
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
        height: 51px;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #6D4EB6;
        border-radius: 45px;
        border: 1px solid #8A8A8A;
    }
    input[type=range]::-webkit-slider-thumb {
        border: 1px solid #8A8A8A;
        height: 61px;
        width: 50px;
        border-radius: 12px;
        background: rgba(27,186,82,.9);
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
        height: 61px;
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

    .irisI,.irisD{
        will-change:transform;
        animation: mirada 7s linear infinite ;

    }

    @keyframes mirada {
        10%{
            transform:translateY(-14px)
        }
        50%{
            transform:translateY(-14px)
        }
        70%{
            transform:translateY(-14px);
            transform:translateX(-5px)
        }
        75%{
            transform:translateY(-14px);
            transform:translateX(-5px)
        }
        85%{
            transform:translateY(-14px);
            transform:translateX(5px)
        }
        95%{
            transform:translateY(-14px);
            transform:translateX(5px)
        }
        100%{
            transform:translateY(0px)
        }
    }

    .tormenta{
        background: rgba(1,1,1,1);  /* fallback for old browsers */
    }
    .molesto{
        background: rgba(250,10,10,1);  /* fallback for old browsers */
    }

    .fustracion{
        background: rgba(100,12,120,1);  /* fallback for old browsers */
    }

    .emocionado{
        background: rgba(100,250,200,1);  /* fallback for old browsers */

    }
    .confiado{
        background: rgba(170,230,210,1);  /* fallback for old browsers */

    }

    .shine{
        background: rgba(230,230,255,1);  /* fallback for old browsers */
    }


    .molesto{
        & .cejaD{
            transform:rotate(-30deg);
            border-radius:0%;
        }
        & .cejaI{
            transform:rotate(30deg);
            border-radius:0%;
        }
        & .boca-semitriste{
            border-radius:100% 30%;
            width:70px;
            height:30px;

        }
    }


    .confiado{
        & .cejaD{
            width: 24% !important;
            border-radius: 50% !important;
            transform:translateY(-25px) !important;
            transform:rotate(0deg) !important;
        }
        & .cejaI{
            transform:translateY(14px) !important;
            transform:rotate(30deg) !important;
            border-radius:0% !important;
        }
        & .boca-semifeliz{
            transform:rotate(-35deg) !important;
            transform:translate(54px, 70px) !important;
            border-radius:100% 1% !important;
            width:100px !important;
            height:30px !important;

        }
    }


</style>

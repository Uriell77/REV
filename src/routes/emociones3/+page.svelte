<script>
    import { spring } from 'svelte/motion';
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { quintOut } from 'svelte/easing';
    $:estados = "triste";
    $:valor = 0;


    /*FUNCION CAMBIO DE ESTADO*/
    function changeState(){
        if(valor <= -80 && valor >=-100){
            estados = "triste";
        }else if(valor <= -60 && valor >=-79){
            estados = "frustrado";
        }else if(valor <= 20 && valor >= -20)
            estados = "indiferente"
    }

</script>

<svelte:head>
    <title>Como te Sientes Hoy?</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>


    <div class="level pt-0 mt-0 {valor <= -60 ? "tormenta":
        valor <= -40 && valor >= -59  ? "molesto":
        valor <= -20 && valor > -40  ? "fustracion":
        valor < 0 && valor < 20 ? "level":
        valor > 21 && valor <= 40 ? "emocionado":
        valor >= 41 && valor <= 75 ? "confiado":
        valor >= 76 && valor <= 100 ? "shine":""
        }">
        <div class="box">
        <div class="impacto emocion2 mt-0 pt-0 mb-0 pb-0 has-text-centered ">
            ¿Como te sientes Hoy?
        </div>
        </div>


        <div class="section ">
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="esfera3 {estados} ">

                <div class="cejaI"></div>
                <div class="cejaD"></div>
                <div class="ojoI"></div>
                <div class="ojoD"></div>
                {#key estado}
                <div class="boca"></div>
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
                {@const emocion = "Enojado"}
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

        <input class="desliz mt-5" type="range" bind:value={valor}
            on:change={changeState} on:input={changeState} min=-100 max=100/>

    </div>



<style>

    .modal-background{
    background-color: rgba(1,1,1,1) !important;
    }

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


    .level{
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color:rgba(25, 16, 45, 1);
    display: flex;
    flex-direction: column;
    transition: all .5s ease;
    will-change:transform;
    height:100%;
    }

    .esfera3{
    width:17rem;
    height:17rem;
    background-color:white;
    border-radius:50%;
    border-color:green;
    border-style:none;
    position:relative;
    border-radius: 50%;
    background: linear-gradient(145deg, rgba(120,142,140,1), #cacaca);
    box-shadow:  2px 2px 10px #233512,
    -2px -2px 10px #346789;
    z-index:0;

    }


    .indiferente{
         & .ojoI{
            width:50px;
            height:90px;
            background-color:white;
            position:absolute;
            border-radius:50%;
            z-index:1;
            top:3rem;
            left:3rem;
            
        }
         & .ojoD{
            width:50px;
            height:90px;
            background-color:white;
            position:absolute;
            border-radius:50%;
            z-index:1;
            top:3rem;
            right:3rem; 
        }
        & .boca{
            width:100px;
            height:1px;
            position:absolute;
            top:13rem;
            left:5.5rem;
            border-style:solid;
            background-color:transparent;
            z-index:2;
            border-radius:20px;
            transition: all 1s ease;
        }
    }


    .frustrado{
         & .ojoI{
            width:50px;
            height:90px;
            background-color:white;
            position:absolute;
            border-radius:50%;
            z-index:1;
            top:3rem;
            left:3rem;
            
        }
         & .ojoD{
            width:50px;
            height:90px;
            background-color:white;
            position:absolute;
            border-radius:50%;
            z-index:1;
            top:3rem;
            right:3rem; 
        }
        & .boca{
            width:40px;
            height:40px;
            position:absolute;
            transform:rotate(-45deg);
            top:13rem;
            left:7rem;
            border-style:solid;
            border-width: 1px 1px 0px 0px;
            background-color:transparent;
            z-index:2;
            transition: all 1s ease;
        }
    }

    .triste{
         & .ojoI{
            width:50px;
            height:90px;
            background-color:white;
            position:absolute;
            border-radius:50%;
            z-index:1;
            top:3rem;
            left:3rem;
            
        }
         & .ojoD{
            width:50px;
            height:90px;
            background-color:white;
            position:absolute;
            border-radius:50%;
            z-index:1;
            top:3rem;
            right:3rem; 
        }
        & .boca{
            width:40px;
            height:40px;
            position:absolute;
            transform:rotate(-45deg);
            top:13rem;
            left:7rem;
            border-style:solid;
            border-width: 1px 1px 0px 0px;
            border-radius:50%;
            background-color:transparent;
            z-index:2;
            transition: all 1s ease;
        }
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

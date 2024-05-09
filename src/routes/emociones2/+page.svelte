
<svelte:head>
    <title>Como te Sientes Hoy?</title>
    <meta name="description" content="Svelte demo app" />
    {#each preloadImage as image}
    <link rel="preload" as="image" href={image} />
  {/each}
</svelte:head>
<svelte:window use:domhandler />

{#if dom}

    <div class="{estado}">
        <div class="container pt-5" >

            <!--TITULO-->
                <div class="py-0 has-text-centered pb-0 mb-0 px-5">
                <p class="title tema impacto box mb-0">Como te Sientes Hoy?</p>
            </div>

            <div class="section pt-0 mt-0 mx-0">
                <div class="container has-text-centered mb-0 pt-6 mt-5 subtitle
                    txt-emotive has-text-black has-text-weight-bold">
                    <p class="title has-text-black is-uppercase txt-emot ">
                        {estado}
                    </p>
                </div>

                <audio src="{Pim}" bind:this="{audiopim}" >
                    Your browser does not support the <code>audio</code> element.
                </audio>

                <div class="box noob is-shadowless p-0 m-0">
                    {#if estado == "indiferente"}
                    <figure class="image p-0 m-0 is-128x128"
                    >
                        <img class="p-0 m-0" alt="ter1" src="{Indif}" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                            on:load={sound}
                        />
                    </figure>
                    <div class="sombra" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                    ></div>
                {:else if estado == "decepcionado"}
                    <figure class="image is-128x128"
                    >
                        <img alt="ter2" src="{Decep}" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                            on:load={sound}
                        />
                    </figure>
                    <div class="sombra" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                    ></div>
                {:else if estado == "enojado"}
                    <figure class="image is-128x128">
                        <img alt="ter3" src="{Enoj}" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                            on:load={sound}
                        />
                    </figure>
                    <div class="sombra" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                    ></div>
                {:else if estado == "frustrado"}
                    <figure class="image is-128x128">
                        <img alt="ter4" src="{Frust}" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                            on:load={sound}
                        />
                    </figure>
                    <div class="sombra" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                    ></div>
                {:else if estado == "triste"}
                    <figure class="image is-128x128">
                        <img alt="ter5" src="{Trist}"
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                            on:load={sound}
                        />
                    </figure>
                    <div class="sombra" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                    ></div>
                {:else if estado == "satisfecho"}
                    <figure class="image is-128x128">
                        <img alt="ter6" src="{Satisf}" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                            on:load={sound}
                        />
                    </figure>
                    <div class="sombra" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                    ></div>
                {:else if estado == "confiado"}
                    <figure class="image is-128x128">
                        <img alt="ter7" src="{Confiad}" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                            on:load={sound}
                        />
                    </figure>
                    <div class="sombra" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                    ></div>
                {:else if estado == "divertido"}
                    <figure class="image is-128x128">
                        <img alt="ter8" src="{Divert}" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                            on:load={sound}
                        />
                    </figure>
                    <div class="sombra" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                    ></div>
                {:else if estado == "feliz"}
                    <figure class="image is-128x128">
                        <img alt="ter9" src="{Fel}" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                            on:load={sound}
                        />
                    </figure>
                    <div class="sombra" 
                            in:scale={{duration:600,
                            opacity:0, start:0.5, easing:quintInOut}}
                            out:fade={{duration:200}}
                    ></div>
                {/if}
            </div>
        </div>

    </div>

</div>

    <!--RANGE-->
    <div class="section rango px-0 is-fullwidth">
        <input class="is-fullwidth" type="range" bind:value="{val}" on:input={changeState}
            on:change="{activado}"
            min=-100 max=100 />
    </div>


    {#key flag2}
    <div class="modal {flag2 ? "is-active": ""}"
        out:fly={{duration:2000, delay:600, x:0, y:900, opacity: 1,
        easing:quintInOut}}>
        <div class="modal-background"></div>
        <div class="modal-content has-text-centered">
            <div class="form px-6">
                <label class="label" for="">
                    <input bind:this="{texto}" class="input is-rounded is-link" type="text"
                        placeholder="Dinos tu Nombre"
                    />
                </label>
                <div class="is-rounded is-link button submit"
                    on:click={activado2}>Enviar</div>
            </div>
        </div>
    </div>
{/key}


    {#key flag}
        <div class="modal {flag ? "is-active":""}"
            transition:fly={{duration:2000, delay:600, x:0, y:900, opacity: 1,
            easing:quintInOut}}>
            <div class="modal-background"></div>
            <div class="modal-content has-text-centered">
                <div class="title">
                    Asi que estas
                    {estado}
                    {nombre.value}
                </div>
                

                <article class="message mx-4">
                    Elit minima dolorum nihil beatae suscipit. Iste totam dicta alias a veniam! Reiciendis dignissimos tenetur corrupti culpa quae. Libero ipsum.
                </article>

            </div>
            <button class="modal-close is-large" aria-label="close"
                on:click={activado}></button>
        </div>
    {/key}

    {:else}
        <div class="modal is-active"
            transition:fly={{duration:2000, delay:600, x:0, y:900, opacity: 1,
            easing:quintInOut}}>
            <div class="modal-background"></div>
            <div class="modal-content has-text-centered px-6">
                <img src="{Preload}" alt="pre">
            </div>
        </div>

{/if}

<script>
    import { spring } from 'svelte/motion';
    import { fade, fly, scale } from 'svelte/transition';
    import { onMount,afterUpdate,beforeUpdate } from 'svelte';
    import { draw } from 'svelte/transition';
    import { quintIn, quintInOut } from 'svelte/easing';
    import Widget from '$lib/components/Widget.svelte';
    import Indif from '$lib/images/Expressionless Face.png';
    import Decep from  '$lib/images/Disappointed Face.png';
    import  Enoj from '$lib/images/Angry Face.png';
    import Frust from '$lib/images/Confounded Face.png';
    import Trist from '$lib/images/Loudly Crying Face.png';
    import Satisf from '$lib/images/Relieved Face.png';
    import Confiad from '$lib/images/Smiling Face with Sunglasses.png';
    import Divert from '$lib/images/Rolling on the Floor Laughing.png';
    import Fel from '$lib/images/Beaming Face with Smiling Eyes.png';
    import Pim from '$lib/images/sonidos/glup.wav';
    import Preload from '$lib/images/preload.gif';

    $: preloadImage =
    [Indif,Decep,Enoj,Frust,Trist,Satisf,Confiad,Divert,Fel]


    /*VALOR DEL RANGE*/
    $: val = 0;
    let captura;
    $: flag = false;
    $: flag2 = true;
    $: nombre= "Amigo";
    let texto;

    /*ESTADOS*/
    $$: estado = "indiferente";

    /*VARIABLES EMOCIONES*/
    $: face = "indiferente";


    /*VARIABLE DE AUDIO*/
    let audiopim;
    let  s;
    onMount(async()=>{
    })

    function sound(){
            audiopim.volume = 0.2;
            audiopim.play();
    }



    /*CAMBIO DE ESTADOS*/
    function changeState(){
        if(val <=-80){
            estado = "triste";
        }else if(val <=-60){
            estado = "frustrado";
        }else if(val <=-40){
            estado = "enojado";
        }else if(val <=-20){
            estado = "decepcionado";
        }else if(val <=0 && val <= 20){
            estado = "indiferente";
        }else if(val <= 40){
            estado = "satisfecho";
        }else if(val <= 60){
            estado = "confiado";
        }else if(val <= 80){
            estado = "divertido";
        }else if(val <= 100){
            estado = "feliz";
        }
    }



    function activado(){
        flag = !flag;
    }
    function activado2(){
        flag2 = !flag2;
        nombre = texto;
        
    }



    $: dom = false;

    function domhandler(){
        dom = true;
    }

</script>




<style>



    .fondo{
    background-image:url('/fondo1.jpg');
    background-color: #969292;
    background-position: center;
    background-size: cover;
    background-repeat:none;
    z-index:-1;
    }

    .modal-background{
    background-color: rgba(1,1,1,1);
    }


    figure{
    position:absolute;
    top:50%;
    left: 50%;
    transform:translate(-50%, -50%);
    width:13rem !important;
    }
    .tema{
    filter:drop-shadow(0px 10px 2px rgba(1,1,1,.3)) !important;
    color:#282371;
    border-radius: 50px;
background: #e0e0e0;
box-shadow: inset 20px 20px 60px #bebebe,
            inset -20px -20px 60px #ffffff;
    }

    .txt-emot{
    filter:drop-shadow(0px 10px 2px rgba(1,1,1,.3)) !important;
    }
    .noob{
    width:50%;
    height: 30%;
    position:absolute;
    top:50%;
    left: 50%;
    transform:translate(-50%, -50%);
    background-color:rgba(1,1,1,0);
    }

    .sombra{
    border-radius:50%;
    width:50%;
    height:40%;
    position:absolute;
    top:97%;
    left: 25%;
    transform:translate(-50%, -50%);
    background-color:rgba(1,1,1,.3);
    filter:blur(20px);
    z-index:2;
    transform:rotateX(-80deg);
    }



    /*ESTADO INDIFERENTE*/
    .indiferente,p{
    color:black;
    height:100%;
    width:100%;
    & .container{ 
    background-color: rgba(180, 183, 178, 1);
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    z-index: 0;
    }
    & .box{
    }
    }


    /*ESTADO ENOJADO*/
    .enojado,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: rgba(220,70,70,1);
    backdrop-filter:opacity(10%);
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    }
    }


    /*ESTADO TRISTE*/

    .triste,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: rgba(80,80,200,1);
    backdrop-filter:opacity(10%);
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    }
    }



    /*ESTADO FRUSTRADO*/

    .frustrado,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: #8B41AE;
    backdrop-filter:opacity(10%);
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    }
    }



    /*ESTADO DESEPCIONADO*/

    .decepcionado,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: rgba(80,200,80,1);
    backdrop-filter:opacity(10%);
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    }
    }



    /*ESTADO SATISFECHO*/

    .satisfecho,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: #F7B4BC;
    backdrop-filter:opacity(10%);
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    }
    }




    /*ESTADO CONFIADO*/

    .confiado,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: #70DAED;
    backdrop-filter:opacity(10%);
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    }
    }



    /*ESTADO DIVERTIDO*/

    .divertido,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: #F19300;
    backdrop-filter:opacity(10%);
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    }
    }




    /*ESTADO FELIZ*/

    .feliz,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: rgba(250, 245, 144,1);
    backdrop-filter:opacity(10%);
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    }
    }

    .rango{
    position:absolute;
    top:80%;
    left:55%;
    transform:translate(-50%, -50%);
    width:90%;
    }


    /*********** Baseline, reset styles ***********/
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
    background: #282371;
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
    background: #282371;
    }

    input[type=range]::-moz-range-track {
    width: 100%;
    height: 21px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #282371;
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
</style>

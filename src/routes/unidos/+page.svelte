<script>
    import {onMount,afterUpdate } from "svelte";
    import { spring } from 'svelte/motion';
    import {blur,fade} from "svelte/transition";
    import novia from "$lib/images/novia.webp";
    import novio from "$lib/images/novio.webp";
    import flyer from "$lib/images/flyer.jpg";
    import anillos from "$lib/images/anillos.jpg";
    import Feliz from "$lib/images/sonidos/serfeliz.mp3";

    let texto = [
        "Hoy Dios tiene una palabra para tu  matrimonio",
        "Por tanto el hombre dejará a su padre y a su madre y se unirá a su mujer, y serán una sola carne <br> <h5>Génesis 2:24</h5>",
        "Por lo demás, cada uno de vosotros ame también a su mujer como a sí mismo; y la mujer respete a su marido. <br> <h5>Efesios 5:33</h5>",
        "Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.<br><h5>Colosenses 3:14</h5>",
        "Y si alguno prevaleciere contra uno, dos le resistirán; y cordón de tres dobleces no se rompe pronto.<br><h5>Eclesiastés 4:12</h5>",
        "Les estoy dando un mandamiento nuevo: que se amen los unos a los otros. Ámense tal como yo los amé <br><h5>Juan 13:34</h5>",
        "Así que no son ya más dos, sino una sola carne; por tanto, lo que Dios juntó, no lo separe el hombre.<br><h5>Mateo 19:6</h5>"

    ]

    let sound;


    let openform = false;
    let radio = spring(0)
    radio.stifness = 1;
    radio.damping = 1;
    radio.presition = 0.003;

    let radiosom = spring(3);
    radiosom.stifness = 0.5;
    radiosom.damping = 0.5;
    radiosom.presition = 0.003;

    let passer = 0
    let screen;
    let scroller;
    let content = "plano1";

    $: flager = false;
    $: flagger = false;

    function pass(){
        passer += 1;
        if(passer == 6){
            flager = true;
            flagger = true;
        }
    }


    let multiplo = 5.1;
    afterUpdate(()=>{
        if(passer == 1){
        sound.play();
        sound.volume = 0.2;
        }
    })
</script>


<svelte:head>
    <link rel="preload" as="image" href={novia}/>
    <link rel="preload" as="image" href={novio}/>
    <link rel="preload" as="image" href={flyer}/>
    <link rel="preload" as="image" href={anillos}/>
    <link rel="shortcut icon" href="https://rev-psi.vercel.app/anillos.jpg" type="image/x-icon"/>
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Invitacion Congreso de Matrinomio" />
    <meta property="og:description" content="Te invitamos a nuestra iglesia para recibir palabra de Dios para tu matrimonio" />
    <meta property="og:image" content="https://rev-psi.vercel.app/anillos.jpg" />
    <meta property="og:url" content="https://rev-psi.vercel.app/unidos" />
    <meta property="og:site_name" content="Unidos" />
    <meta property="fb:app_id" content="928977633900253" />
</svelte:head>

<svelte:window bind:innerHeight={screen}/>
<div class="fondo p-0" bind:this={scroller} >

    {#key passer}
        <section class="section ter" >
            <img src="{novia}" alt="" class="novia" style:left="{passer*multiplo}%" transition:fade|global="{{duration:2000}}">
            <img src="{novio}" alt="" class="novio" style:right="{passer*multiplo}%" transition:fade|global="{{duration:2000}}">
            <div class="sombranovia" style:left="{passer*multiplo}%" transition:fade|global="{{duration:2000}}"></div>
            <div class="sombranovio" style:right="{passer*multiplo}%" transition:fade|global="{{duration:2000}}"></div>
        </section>
    {/key}
    <section class="section tar">
        <div class="container sevillana-font has-text-weight-bold is-size-4">
            {#key passer}
                <div in:fade={{duration:2000, delay:2000}}>
                    {@html texto[passer]}
                </div>
            {/key}
        </div>


        {#if flagger}
            <div></div>
        {:else}
            {#key passer}
            <button class="siguiente button is-rounded is-link is-light" on:click="{pass}" in:fade={{duration:2000, delay:5000}}>
                Siguiente
            </button>
            {/key}
        {/if}


    </section>

    <audio src="{Feliz}" type="audio/mpeg" bind:this={sound} autoplay></audio>

    </div>




    <!-- Modal -->
    {#key flager}
        <div class="modal {flager ? "is-active":""}" in:fade={{duration:900, delay:8000}} out:fade={{duration:900}}>
            <div class="modal-background p-0"></div>


            <div class="modal-content p-5">

            {#if openform}

                <section class="section">

                    <form action="" class="">

                        <div class="fleld m-5">
                                Nombre Completo del Esposo
                            <p class="control">
                                    <input class="input is-rounded" type="text">
                            </p>
                        </div>

                        <div class="fleld m-5">
                                Nombre Completo de la Esposa
                            <p class="control">
                                    <input class="input is-rounded" type="text">
                            </p>
                        </div>

                        <div class="fleld m-5">
                            Numero de Transferencia
                            <p class="control">
                                    <input class="input is-rounded" type="text">
                            </p>
                        </div>

                        <section class="section has-text-centered">
                        <button class="mt-4 button is-rounded is-link is-light">
                            Reportar mi Asistencia
                        </button>
                        </section>
                    </form>

                </section>

                {:else}
                <figure class="image is-3by4">
                    <img src="{flyer}" alt="im"/>
                </figure>

                <section class="section has-text-centered">
                    <button class="button is-rounded is-link is-light" on:click={()=>{openform = true}}>
                        Asistire
                    </button>
                </section>

            {/if}
            </div>

        </div>
    {/key}


<style>

    .modal-content{
        scroll:none;
        width:100% !important;
        height:100% !important;
    }

    .modal-background{
        background: hsla(277, 79%, 84%, 1) !important;

        background: linear-gradient(90deg, hsla(277, 79%, 84%, 1) 0%, hsla(204, 95%, 77%, 1) 100%) !important;

        background: -moz-linear-gradient(90deg, hsla(277, 79%, 84%, 1) 0%, hsla(204, 95%, 77%, 1) 100%) !important;

        background: -webkit-linear-gradient(90deg, hsla(277, 79%, 84%, 1) 0%, hsla(204, 95%, 77%, 1) 100%) !important;
    }


    .novia,.novio,.sombranovio,.sombranovia{
        position: absolute;
        z-index:20;
    }

    .novia{
        height: 30%;
        width: 30%;
        top:40px;
    }
    .novio{
        height: 31%;
        width: 20%;
        top:26px;
    }

    .sombranovia{
        top: 30%;
        width: 30%;
        height:10%;
        background-color: black;
        border-radius:50%;
        transform:rotatex(50deg);
        z-index:10;
        filter:blur(40px);
    }
    .sombranovio{
        top: 30%;
        width: 30%;
        height:10%;
        background-color: black;
        border-radius:50%;
        transform:rotatex(50deg);
        z-index:10;
        filter:blur(40px);
    }


    .siguiente{
        position:absolute;
        bottom:10%;
        left:50%; 
        transform: translate(-50%, -50%)

    }

    .ter{
        height: 45% !important;
        text-align:center;
        width:100%;
        margin:0 auto;
    }
    .tar{
        height: 45% !important;
        text-align:center;
        width:100%;
        margin:0 auto;
    }


    .fondo{
        background-color:white;
        height:100vh;
        overflow-y:scroll;
        scroll-snap-type: y mandatory;
        background: hsla(277, 79%, 84%, 1);

        background: linear-gradient(90deg, hsla(277, 79%, 84%, 1) 0%, hsla(204, 95%, 77%, 1) 100%);

        background: -moz-linear-gradient(90deg, hsla(277, 79%, 84%, 1) 0%, hsla(204, 95%, 77%, 1) 100%);

        background: -webkit-linear-gradient(90deg, hsla(277, 79%, 84%, 1) 0%, hsla(204, 95%, 77%, 1) 100%);
        transition: all 3s;
    }


    @media screen and (min-width: 600px) {
        .ter {
            text-align:center;
            width:50%;
            margin:0 auto;
        }

        .tar {
            text-align:center;
            width:50%;
            margin:0 auto;
        }

    }


</style>

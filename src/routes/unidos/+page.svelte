<script>
    import {onMount,afterUpdate } from "svelte";
    import { spring } from 'svelte/motion';
    import {blur,fade, scale} from "svelte/transition";
    import { quintOut } from 'svelte/easing';
    import zalogo from "$lib/images/zalogo2.png";
    import novia from "$lib/images/novia.webp";
    import novio from "$lib/images/novio.webp";
    import flyer from "$lib/images/flyer.jpg";
    import anillos from "$lib/images/anillos.jpg";
    import Feliz from "$lib/images/sonidos/serfeliz.mp3";
    import NavZar from "$lib/components/navZar.svelte";
    /** @type {import('./$types').ActionData} */
    export let form;

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
            sound.volume = 0.1;
        }
    })


    function pause(){
        sound.pause();
    }


    onMount(()=>{
        if(form?.regAnswer == "Registro exitoso"){
        pause();
        }
    })


    let trans = false;

    let qrcode = false;


</script>


<svelte:head>
    <title>Congreso de Matrimonio</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Invitacion Congreso de Matrinomio" />
    <meta property="og:description" content="Te invitamos a nuestra iglesia para recibir palabra de Dios para tu matrimonio" />
    <meta property="og:image" content="https://rev-psi.vercel.app/social.jpg" />
    <meta property="og:url" content="https://rev-psi.vercel.app/unidos" />
    <meta property="og:site_name" content="Unidos" />
    <meta property="fb:app_id" content="hermoso77" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:creator" content="@Uriell77" />
    <meta property="twitter:title" content="Invitacion Congreso de Matrimonio" />
    <meta property="twitter:url" content="https://rev-psi.vercel.app/unidos">
        <meta property="twitter:image" content="https://rev-psi.vercel.app/social.jpg" />
        <meta property="twitter:description" content="Te invitamos a nuestra iglesia para recibir palabra de Dios para tu matrimonio" />


        <link rel="preload" as="image" href={novia}/>
        <link rel="preload" as="image" href={novio}/>
        <link rel="preload" as="image" href={flyer}/>
        <link rel="preload" as="image" href={anillos}/>
        <link rel="icon" href="https://rev-psi.vercel.app/social.jpg" />
    </svelte:head>

    <svelte:window bind:innerHeight={screen}/>


    <div class="fondo p-0" bind:this={scroller} >

        <NavZar />

        {#if form?.regAnswer == "Registro exitoso"}

            <section class="section centrado has-text-centered" in:fade={{duration:2000}}>
                <img src="/check2.png"
                    alt="succ"
                    class="succ is-rounded"
                    width="83rem"
                    height="83rem"
                />
                <article class="container is-size-5 block has-text-weight-bold">
                    Registro Exitoso<br>
                    Dios te Bendiga<br>
                </article>
    </section>
    <section class="section centrado2">
                    <p class="fleld mt-5 ibm-plex-serif-extralight has-text-weight-bold is-size-7">
                        Compartir
                    </p>
                {#if qrcode}

                    <section class="section has-text-centered qrmodal p-0 m-0" in:fade={{duration:2000}}>
                    <img src="/qrcode.jpg" alt="im" height="400"/>
                    <button class="button is-rounded is-link is-light" on:click="{()=>{qrcode =!qrcode}}">Atras</button>
                    </section>
                    {:else}
                    <div class="tabs is-centered" in:fade={{duration:2000}}>
                        <ul>
                            <a class="" href="whatsapp://send?text=https://rev-psi.vercel.app/unidos"><img src="/logo-whatsapp.svg" alt="wa" width="42px"/>
                            </a>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://rev-psi.vercel.app/unidos"><img src="/logo-facebook.svg" alt="face" width="42px"/>
                            </a>
                            <a href="https://t.me/share/url?url=https://rev-psi.vercel.app/unidos&text=Congreso de Matimonio Zarza Ardiendo"><img src="/paper-plane-outline.svg" alt="tme" width="42px"/>
                            </a>
                            <a href="mailto:?subject=Invitacion&body=https://rev-psi.vercel.app/unidos"><img src="/mail-outline.svg" alt="mail" width="42px"/>
                            </a>
                            <a href="#"><img src="/qr-code-outline.svg" alt="mail" width="42px" on:click="{()=>{qrcode =!qrcode}}"/>
                            </a>
                        </ul>
                    </div>
                {/if}
    </section>

        {:else}
            {#key passer}
                <section class="section ter" >
                    <img src="{novia}" alt="" class="novia" style:left="{passer*multiplo}%" transition:fade|global="{{duration:2000}}" />
                    <img src="{novio}" alt="" class="novio" style:right="{passer*multiplo}%" transition:fade|global="{{duration:2000}}" />
                    <div class="sombranovia" style:left="{passer*multiplo}%" transition:fade|global="{{duration:2000}}"></div>
                    <div class="sombranovio" style:right="{passer*multiplo}%" transition:fade|global="{{duration:2000}}"></div>
                </section>
            {/key}
            <section class="section  mt-0 pt-0 has-text-centered">
                <div class="container indie-flower-regular has-text-weight-bold is-size-4">
                    {#key passer}
                        <div in:fade={{duration:2000, delay:2000}}>
                            {@html texto[passer]}
                        </div>
                    {/key}
                </div>

            </section>

                {#if flagger}
                    <div></div>
                {:else}
                    {#key passer}
                        <section class="tar section has-text-centered mt-0 pt-0">
                        <button class="siguiente button is-rounded is-link is-light" on:click="{pass}" in:fade={{duration:2000, delay:5000}}>
                            Siguiente
                        </button>
                        </section>
                    {/key}
                {/if}



            <audio src="{Feliz}" type="audio/mpeg" bind:this={sound} ></audio>





        <!-- Modal -->
        {#key flager}
            <div class="modal {flager ? "is-active":""}" in:fade={{duration:900, delay:8000}} out:fade={{duration:900}}>
                <div class="modal-background">

                <div class="modal-content ml-0">

                    <NavZar/>

                    {#if openform}

                        <section class="section">

                            <form class="" method="POST">

                                <div class="fleld m-5 ibm-plex-serif-extralight has-text-weight-bold is-size-7">
                                    Nombre Completo del Esposo
                                    <p class="control pt-1">
                                        <input class="input is-rounded" type="text" name="esposo" />
                                    </p>
                                </div>

                                <div class="fleld m-5 ibm-plex-serif-extralight has-text-weight-bold is-size-7">
                                    Nombre Completo de la Esposa
                                    <p class="control pt-1">
                                        <input class="input is-rounded" type="text" name="esposa" />
                                    </p>
                                </div>

                                <div class="fleld m-5 ibm-plex-serif-extralight has-text-weight-bold is-size-7">
                                    Iglesia
                                    <p class="control pt-1">
                                        <input class="input is-rounded" type="text" name="iglesia" />
                                    </p>
                                </div>

                                <div class="fleld m-5 ibm-plex-serif-extralight has-text-weight-bold is-size-7">
                                    Metodo de Pago
                                    <div class="control pt-1">
                                        <div class="select">
                                            <select name="{trans=="Efectivo"? "ref": ""}" bind:value="{trans}">
                                                <option></option>
                                                <option>Efectivo</option>
                                                <option>Transferencia</option>
                                            </select>
                                        </div>
                                        {#if trans=="Transferencia" }
                                            <br>
                                            <p class="fleld mt-5 ibm-plex-serif-extralight has-text-weight-bold is-size-7">
                                            Referencia Bancaria
                                            </p>
                                        <input class="input is-rounded" type="text" name="ref" />
                                    {/if}
                                    </div>
                                </div>

                                <section class="section has-text-centered">
                                    <button class="mt-4 button is-rounded is-link is-light">
                                        Reportar mi Asistencia
                                    </button>
                                </section>
                            </form>

                        </section>

                    {:else}
                        <p class="section has-text-centered mt-0">
                            <img src="{flyer}" alt="im"/>
                            <button  class="button is-rounded is-link is-light" on:click={()=>{openform = true}}>
                                Asistiré
                            </button>
                        </p>


                    {/if}
                </div>

                </div>
            </div>
        {/key}

    {/if}







    </div>


<style>

    .centrado,.qrmodal{
        position:absolute;
        top:40%;
        left:50%;
        transform:translate(-50%, -50%);
    }
    .centrado2{
        position:absolute;
        top:70%;
        left:50%;
        width:100%;
        transform:translate(-50%, -50%);
    }

    .modal-content{
    width:100% !important;
    min-height:100% !important;
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
    top:120px;
    }
    .novio{
    height: 31%;
    width: 20%;
    top:106px;
    }

    .sombranovia{
    top: 40%;
    width: 30%;
    height:10%;
    background-color: black;
    border-radius:50%;
    transform:rotatex(50deg);
    z-index:10;
    filter:blur(40px);
    }
    .sombranovio{
    top: 40%;
    width: 30%;
    height:10%;
    background-color: black;
    border-radius:50%;
    transform:rotatex(50deg);
    z-index:10;
    filter:blur(40px);
    }



    .ter{
    height: 45% !important;
    text-align:center;
    width:100%;
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
    overflow-y:hidden;
    background: hsla(277, 79%, 84%, 1);

    background: linear-gradient(90deg, hsla(277, 79%, 84%, 1) 0%, hsla(204, 95%, 77%, 1) 100%);

    background: -moz-linear-gradient(90deg, hsla(277, 79%, 84%, 1) 0%, hsla(204, 95%, 77%, 1) 100%);

    background: -webkit-linear-gradient(90deg, hsla(277, 79%, 84%, 1) 0%, hsla(204, 95%, 77%, 1) 100%);
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

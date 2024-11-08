<script>
    import {onMount} from "svelte";
    import NavZar from "$lib/components/navZar.svelte";
    import Timer from "$lib/components/Timer.svelte";
    import an from "$lib/images/anillosentrelazados.webp";
    import LogoC from "$lib/components/LogoCongreso.svelte";
    import Cardp from "$lib/components/CardPonentes.svelte";
    import Formulario from "$lib/components/Formulario.svelte";
    export let form;



    let dias;
    let horas;
    let minutos;
    let segundos;
    let evento = new Date("Nov 8, 2024 18:00:00").getTime();
    let ahora = new Date().getTime();
    let res;
    let bandera = false;

    let ponentes = [
        {
            name: "Obispo Carlos y Dra. Maria Pirona",
            psi: "Directores de la Red Global Restauración Iglesia Metodista de Venezuela ",
            img: "/pirona.png"
        },
        {
            name: "Rev. Filemon y Francisca Barrera",
            psi: "Pastor y Conferencista Ministerio Internacional Impulsadores de Gracia",
            img: "/barrera.png"
        },
    ]

    let Anfitriones = [
        {
            name: "Eliel y Merari Navarro",
            psi: "Pastores de la Iglesia Evangelica Pentecostal Zarza Ardiendo, San Fernando de Apure",
            img: "/navarro.png"
        },
        {
            name: "Jhonny y Zoli Hurtado",
            psi: "Lideres de la Red de Matrimonio en la Iglesia Evangelica Pentecostal Zarza Ardiendo, San Fernando de Apure",
            img: "/hurtado.png"
        },
        {
            name: "Alexis y Maria Mendoza",
            psi: "Lideres de la Red de Matrimonio en la Iglesia Evangelica Pentecostal Zarza Ardiendo, San Fernando de Apure",
            img: "/mendoza.png"
        },
    ]


    onMount(()=>{
        setInterval(()=>{
            ahora = new Date().getTime();
            res = evento - ahora;
            dias = Math.floor(res /(1000 * 60 * 60  * 24));
            horas = Math.floor((res % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutos = Math.floor((res % (1000 * 60 * 60)) / (1000 * 60));
            segundos = Math.floor((res % (1000 * 60)) / 1000);
            1000})
    })

</script>




<svelte:head>
    <title>Congreso de Matrimonio</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Invitacion Congreso de Matrinomio" />
    <meta property="og:description" content="Te invitamos a nuestra iglesia para recibir palabra de Dios para tu matrimonio" />
    <meta property="og:image" content="https://rev-psi.vercel.app/social.jpg" />
    <meta property="og:url" content="https://rev-psi.vercel.app/congreso" />
    <meta property="og:site_name" content="Congreso" />
    <meta property="fb:app_id" content="hermoso77" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:creator" content="@Uriell77" />
    <meta property="twitter:title" content="Invitacion Congreso de Matrimonio" />
    <meta property="twitter:url" content="https://rev-psi.vercel.app/congreso">
        <meta property="twitter:image" content="https://rev-psi.vercel.app/social.jpg" />
        <meta property="twitter:description" content="Te invitamos a nuestra iglesia para recibir palabra de Dios para tu matrimonio" />

        <meta property="description" content="Invitacion" />
        <link rel="icon" href="https://rev-psi.vercel.app/social.jpg" />
    </svelte:head>

    <div>
        <section class="section px-0 py-0 base">
            <div class="container p-0">

                <div class="columns is-centered is-multiline back mb-0">
                    <div class="column is-half-desktop is-full-mobile p-2"></div>
                    <section class="congreso mx-2">
                        <NavZar theme="is-transparent" red="Red de Matrimonios"/>
                        <LogoC></LogoC>

                        <br>
                        <br>


                        <div class="block container has-text-centered">
                            <p class="is-size-4 titan-one-regular faltan mb-0">Faltan</p>
                        </div>
                        <section class="section has-text-centered container mt-1">
                            {#if ahora >= evento }
                            <h1 class="has-text-white concert-one-regular is-size-1 p-0 m-0">Es Hoy</h1>
                            {:else}
                            <div class="columns is-centered is-gapless is-mobile">
                                <div class="column">
                                    <Timer name="Dias" value="{dias<10?`0${dias}`:dias}" ></Timer>
                                </div>
                                <div class="column">
                                    <Timer name="Horas" value="{horas<10?`0${horas}`:horas}"></Timer>
                                </div>
                                <div class="column">
                                    <Timer  name="Minutos" value="{minutos<10?`0${minutos}`:minutos}"></Timer>
                                </div>
                                <div class="column">
                                    <Timer name="Segundos" value="{segundos<10?`0${segundos}`:segundos}"></Timer>
                                </div>
                            </div>
                        {/if}


                            <p class="has-text-white block is-size-4">
                                ¡Tú y tu pareja están invitados!
                            </p>

                            <div class="block is-size-6 has-text-white">
                                Al Congreso Familiar <p class="has-text-warning">"Matrimonio, Diseño y Propósito"</p>
                            </div>

                            <div class="block has-text-white">
                                ¿Buscas fortalecer los lazos de tu matrimonio y descubrir el maravilloso plan de Dios para tu vida en pareja? ¡Te invitamos a nuestro congreso de matrimonio!
                            </div>
                            <div class="block has-text-white">
                                ¿Cuándo?:  <p class="has-text-warning">08 y 09 de Noviembre</p><br>
                                ¿Dónde?: <p class="has-text-warning">Iglesia Evangélica Pentecostal "Zarza Ardiendo" - Av. Miranda, San Fernando de Apure.</p>
                            </div>

                            <div class="block has-text-white">
                                ¡Un fin de semana lleno de:

                                Conferencias inspiradoras sobre el amor, la comunicación y la intimidad.
                                Talleres prácticos para mejorar tu relación.
                                Alabanza y adoración.
                                Tiempo de compartir con otras parejas.
                            </div>
                            <div class="block has-text-warning is-size-4">
                                Inversión: $7.00 por pareja.
                            </div>

                            <div class="block has-text-white">
                                ¡No te lo pierdas! Este congreso es una oportunidad única para invertir en tu matrimonio y construir un futuro juntos.

                                ¡Inscríbete ya! Comunícate con nosotros <p class="has-text-warning">Numero: 0414-4575516.</p>

                            </div>

                            <div class="block is-size-4 has-text-warning">
                                ¡Te esperamos!
                            </div>

                        </section>



                        <hr  class="has-text-white">
                        <level class="p-3 mb-2 has-text-white">Ponentes</level>
                        <block class="block ">
                            <div class="columns is-centered is-mobile px-3">
                                {#each ponentes as pon}
                                    <div class="column is-half-mobile is-4-desktop pt-5">
                                        <Cardp imag="{pon.img}" nombre={pon.name} psinopsis={pon.psi}/>
                                    </div>
                                {/each}
                            </div>
                        </block>



                        <hr  class="has-text-white">
                        <level class="p-3 mb-2 has-text-white">Anfitriones</level>
                        <block class="block ">
                            <div class="columns is-mobile is-multiline px-3">
                                {#each Anfitriones as anf}
                                    <div class="column is-half-mobile is-4-desktop mb-6 pt-5">
                                        <Cardp imag="{anf.img}" nombre={anf.name} psinopsis={anf.psi}/>
                                    </div>
                                {/each}
                            </div>
                        </block>



                        <br/>
                        <br/>
                        <br/>

                        <br/>
                        <br/>
                        <br/>




                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div class="button is-link is-light voy has-text-centered container pt-2 is-pulled-right" on:click="{()=>{bandera = !bandera}}"> Registrarme</div>
                        <Formulario  bind:flag="{bandera}" registro={form?.regAnswer}/>


                    </section>


                    <br/>
                    <br/>
                    <br/>

                    <br/>
                    <br/>
                    <br/>



                </div>

                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>
                <div class="firefly"></div>




            </div>





        </section>
    </div>



<style>

    .voy{
    width:120px;;
    height:40px;
    border-radius:50px;
    position:sticky !important;
    bottom:45px;
    z-index:130;
    }


    .faltan{
    position:absolute;
    top:-0rem;
    left:50%;
    transform:translate(-50%,-50%);
    }

    .back{

    overflow-y:scroll;
    height:100vh;
    background: hsla(220, 21%, 5%, 1) !important;

    background: linear-gradient(180deg, hsla(220, 21%, 5%, 1) 6%, hsla(219, 26%, 31%, 1) 75%, hsla(202, 5%, 60%, 1) 97%, hsla(65, 14%, 83%, 1) 100%) !important;

    background: -moz-linear-gradient(180deg, hsla(220, 21%, 5%, 1) 6%, hsla(219, 26%, 31%, 1) 75%, hsla(202, 5%, 60%, 1) 97%, hsla(65, 14%, 83%, 1) 100%) !important;

    background: -webkit-linear-gradient(270deg, hsla(220, 21%, 5%, 1) 6%, hsla(219, 26%, 31%, 1) 75%, hsla(202, 5%, 60%, 1) 97%, hsla(65, 14%, 83%, 1) 100%) !important;

    }
    .back::-webkit-scrollbar {display: none;}

    .congreso{
    width:95%;
    height:100dvh;
    background: rgba(1,1,1,0) !important;
    }
    .congreso::-webkit-scrollbar {display: none;}


    .base{
    overflow:hidden;

    }


</style>

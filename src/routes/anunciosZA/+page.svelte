<script>
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { quintOut } from 'svelte/easing';
    import Dia from '$lib/components/Day.svelte';
    import Found from '$lib/images/za.jpg';
    import ZaLogo from '$lib/images/zalogo.png';
    import {voz, MonologoMadre} from '$lib/function/Def.svelte';
    $:ter = false;
    let dias =[];
    let content=[];
    $: predica = MonologoMadre;


    function retard(){
        ter = true;
    dias =[
        'Lunes 22/04/24','Martes 23/04/24','Miercoles 24/04/24','Jueves 25/04/24','Viernes 26/04/24','Domingo 28/04/24'
    ];
    content = [
        "<li>Participación en la casa de oración hora 9:00 am</li> <li>Oración por parte de la dependencia de Intercesores. Líder Zuleima de García y Dexi Artahona de Bolivar. Hora 10:00</li>",
        "<li>Servicio de Oración y milagros hora 5:30 pm.</li> <li>Discipulado</li>",
        "<li>Consejeria matrimonial líderes Jhonny y Zoli de Hurtado, Alexis y María de Mendoza</li><li>Ensayo de la dependencia de Adoración y Alabanza</li>",
        "<li>Actividades en los diferentes Refugios llevando el mensaje de Salvación y vida eterna</li> ",
        "<li>Servicio por la red Niños y la Dependencia de Intercesión</li>",
        "<li>Academia de liderazgo. Nuevos y Rezagados. Hora. 8:00 am</li><li>Servicio Dominical</li>"
    ];
    }

    onMount(()=>{
        setTimeout(retard(), 6000)
    })


    $: preloadImage = [Found,ZaLogo];

</script>

<svelte:head>
    <title>Anuncios</title>
    <meta name="description" content="Svelte demo app" />
    {#each preloadImage as image}
    <link rel="preload" as="image" href={image} />
      {/each}
</svelte:head>

        <section class="hero is-fullheight" style="background-image:url({Found})">
            <div class="hero-head mb-0 pb-0">
                <div class="container">
                    {#if ter}
                    <figure class="image is-128x128 is-fullwidth" transition:fade={{duration:1000}}>
                        <img src="{ZaLogo}" alt="logo" class="is-rounded">
                    </figure>
                {/if}
                </div>
            </div>
            <div class="hero-body mt-0 pt-0" >
                <div class="columns is-desktop is-centered is-multiline">
                        {#each dias as dia,index}
                            <Dia hoy={dia} contenido={content[index]} variable={index}/>
                        {/each}
                </div>
            </div>
        </section>




<style>



    .hero{
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height:100%;
    }





</style>

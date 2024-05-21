<script>
    import { crossfade, scale } from 'svelte/transition';
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


<div class="container2 m-0 p-0" style="background-image:url({Found})">
        <div class="columns heros" >
            <div class="column">
                    {#if ter}
                    <figure class="image is-128x128 is-fullwidth" transition:fade={{duration:1000}}>
                        <img src="{ZaLogo}" alt="logo" class="is-rounded">
                    </figure>
                {/if}
            </div>
            <div class="column pt-6 px-4">
                        {#each dias as dia,index}
                            <Dia hoy={dia} contenido={content[index]} variable={index}/>
                        {/each}
            </div>
        </div>
    </div>





<style>



    .container2{
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height:100vh;
    zoom:100%;
    }





</style>

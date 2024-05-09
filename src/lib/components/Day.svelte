<script>
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { quintOut } from 'svelte/easing';
    export let hoy;
    export let contenido;
    export let variable;
    let mostrarinfo = false;
    function ampliar(){
        mostrarinfo = !mostrarinfo;
    }


</script>

<div class="column is-full-mobile is-half-desktop is-offset-5-desktop my-0
    py-0 " >
    <div class="my-1 py-2 is-clickable px-2 {mostrarinfo ? "amplio" : "card"}" 
        transition:fade={{duration:1000, delay:1000 * (variable + 1) }}
        on:click={ampliar}>
        <div class="card-content p-0 is-flex is-flex-direction-column
            is-align-items-left">

            <div class="media-content  p-0 m-0">
                <div class="content p-0 m-0">
                <p class="subtitle has-text-white impacto p-0 m-0 ">{hoy}</p>
                </div>
                
            </div>

            <div class="media-content p-0 m-0 is-align-self-auto ">
                <div class="content ml-2 is-size-6 ">
                    {@html contenido}
                </div>
            </div>

        </div>
    </div>
</div>



<style>
    .card{
        background-color: rgba(255,255,255,.1);
        backdrop-filter:blur(10px);
        color:white;
        transition: all 2s ease;

    }

    p{
        overflow:hidden;
    }

    .amplio{
        position:absolute;
          z-index: 40;
        transform-style: preserve-3d;
        transform-origin: center;
        transform:translate(-50%,-0%);
        background-color: rgba(255,255,255,1);
        transition: all 2s ease;
    }

    .column{
        transition: all 2s ease;
    }



</style>

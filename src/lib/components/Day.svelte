<script>
    import {flip} from 'svelte/animate';
    import { beforeUpdate, tick } from 'svelte';
    import { crossfade, scale } from 'svelte/transition';
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { quintOut } from 'svelte/easing';
    export let hoy;
    export let contenido;
    export let variable;
    let mostrarinfo = false;

    async function ampliar(){
        await tick();
        mostrarinfo = !mostrarinfo;
    }


    const [send, receive] = crossfade({
        duration: 800,
        easing: quintOut,
    });
</script>

    {#if !mostrarinfo}
    
    <div class="my-1 py-2 is-clickable px-3 card" 
        on:click={ampliar}
        in:receive={{}}
        out:send={{}}
    >
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
    {:else}
<div class="modal is-active m-0 p-0"
>
    <div class="modal-background" 
        on:click={ampliar}
        in:receive={{}}
        out:send={{}}
    >
      <div class="container p-auto m-auto">
            Any other Bulma elements you want
      </div>
    </div>
  <button class="modal-close is-large" aria-label="close" 
        on:click={ampliar}
  ></button>
</div>
{/if}




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


    .modal-background{
        background-color:rgba(1,1,1,1);
    }

    .container{
        background-color:red;
    }



</style>

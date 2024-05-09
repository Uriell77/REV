<script>
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import {voz, MonologoMadre} from '$lib/function/Def.svelte';
    $: predica = MonologoMadre;
    $: works = -1;
    $: back = 1;
    let song;
    let flag = false;
    let momname;
    let name = "Madre";

    function flagcontrol(){
        flag = !flag;
        point();
        pointback();
        volumen();
        if(momname.value == ""){
            name = "Madre";
        }else{
        name = momname.value;
        }
    }


    function point(){
        let intervId = setInterval(()=>{works += 1;
            if(works == predica.length){
                works = 62;
                clearInterval(intervId);
            }
        },5000)
    }

    function pointback(){
        let intervIdtwo = setInterval(()=>{back += 1;
            if(works == 62 && back > predica.length/2){
                back = 34;
                clearInterval(intervIdtwo);
                song.pause();
            }
        },10000)
    }


    function volumen(){
        song.play();
       song.volume=.2;
    }

</script>




<div class="section">
    <div class=" foundback py-auto my-auto mx-auto"
    >
        {#key back}
            <figure class="image is-128x128-mobile  is-square found" 
                in:fade={{duration:3000}}
                out:fade={{duration:1000}}
            >
                <img class="is-rounded bordesblur p-4" src="/mom/mom{back}.jpeg" alt="back"/>
            </figure>
        {/key}
    </div>



    <div class="py-auto my-auto mx-auto">

        {#if works < 0 || works > predica.length-1}
            {''}
        {:else}
            {#key works}
                <div
                    class="fuente title has-text-centered impacto has-text-white"
                    in:fade={{duration:1000}}
                    out:fade={{duration:1000}}

                >
                    {#if works == 0}
                        hola  {name}
                        {:else if works == 50 }
                            recibe mis bendiciones {name}
                        {:else if works == 62 }
                            <p class="txt-latin">{predica[works]}</p>
                            <cite class="txt-latin">Prov 31:19</cite>
                        {:else}
                            {predica[works]}
                    {/if}
                </div>
            {/key}
        {/if}
    </div>

    </div>

    {#key flag}
        <div class="modal px-6 {flag ? "":"is-active"}"
            out:fade={{duration:1000}}
        >
            <div class="modal-background" ></div>
            <div class="modal-content px-3 pt-0">

                <div class="container">
                    <label for="input" class="px-3 txt-primary"><p class="mb-0 is-size-4">Dime tu nombre</p><hr class="mt-0">
                        <input class="input is-rounded" type="text" bind:this="{momname}" placeholder="Nombre" required/>
                    </label>
                    <div class="container mt-4 px-6">
                        <button class="button is-rounded is-fullwidth is-link is-light" on:click={flagcontrol}>Enviar</button>
                    </div>

                </div>

            </div>
    </div>
        {/key}

    <audio src="/mom/momsong.mp3" bind:this={song} on:load="{volumen}" loop></audio>





<style>
    .bordesblur{
        box-shadow: inset 2px 2px 40px 50px rgba(255,255,255,.3);
    }

    .found{
        width:100%;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        animation: all 2s ease;
        will-change:auto;
    }

    .foundback{
        width:90vw;
        height:100%;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        animation: all 2s ease;
        overflow:hidden;
        will-change:auto;
    }

    .fuente{
        position:absolute;
        top:60%;
        left:50%;
        transform:translate(-50%, -50%);
        animation: all 2s ease;
        text-shadow: 1px 1px 5px black;
        will-change:auto;
        color: rgba(233,63,235,1) !important;
        width:100vw;
    }


    @media only screen and (min-width: 800px) {
        .foundback {
            width:150vw;
            height: 78%;
            zoom:23%;
            will-change:auto;
        }
    }


    .modal-background{
        background-color: rgba(2,5,20,1);
        background: hsla(141, 54%, 86%, 1);

        background: radial-gradient(circle, hsla(141, 54%, 86%, 1) 0%, hsla(333, 73%, 85%, 1) 50%, hsla(211, 58%, 79%, 1) 100%);

        background: -moz-radial-gradient(circle, hsla(141, 54%, 86%, 1) 0%, hsla(333, 73%, 85%, 1) 50%, hsla(211, 58%, 79%, 1) 100%);

        background: -webkit-radial-gradient(circle, hsla(141, 54%, 86%, 1) 0%, hsla(333, 73%, 85%, 1) 50%, hsla(211, 58%, 79%, 1) 100%);
    }

</style>

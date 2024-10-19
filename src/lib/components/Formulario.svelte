<script>
    import {onMount} from "svelte";
    import {fly} from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    let trans=false;
    export let flag = false; 
    export let registro=false;

    onMount(()=>{
        if(registro == "Registro exitoso"){
            setTimeout(()=>{
                registro = false;
            },1000)
        }
    })



</script>

{#if registro == "Registro exitoso"}
    <div class="notification is-success " transition:fly={{delay:1000, duration:1000, x:500, y:0, opacity:0.5, easing:quintOut}}>
        Registro Exitoso
    </div>
    {:else}
{#key flag}
<div class="deslizador {flag? "" : "is-hidden"}" transition:fly={{duration:1000, x:0, y:800, opacity:0.5, easing:quintOut}}>

    <div class="centro">
        <fieldset class="p-0">
            <legend class="p-0">Reporta tu asistencia</legend>

            <section class=" mt-0 p-0">

                                <div class="container is-fullhd has-text-centered mt-0 p-1 mb-0 pb-0">
                                    <div class="is-size-5 has-text-weight-bold py-0 has-text-white">
                                        <p class="has-text-weight-bold">Banco del Caribe</p>
                                        <p class="has-text-weight-bold">0114</p>
                                        <p class="has-text-weight-bold">Tlf: 04145893695</p>
                                        <p class="has-text-weight-bold">C.I.: 4669076</p>
                                    </div>
                                </div>
                <form class=" mb-6" method="POST" >

                    <div class="fleld m-5 ibm-plex-serif-extralight has-text-weight-bold is-size-7">
                        Nombre Completo del Esposo
                        <p class="control pt-1">
                            <input class="input is-rounded" type="text" name="esposo" required/>
                        </p>
                    </div>

                    <div class="fleld m-5 ibm-plex-serif-extralight has-text-weight-bold is-size-7">
                        Nombre Completo de la Esposa
                        <p class="control pt-1">
                            <input class="input is-rounded" type="text" name="esposa" required/>
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
                                    <option>Efectivo</option>
                                    <option>Transferencia</option>
                                </select>
                            </div>
                            {#if trans=="Transferencia" }
                                <br>
                                <p class="fleld mt-5 ibm-plex-serif-extralight has-text-weight-bold is-size-7">
                                    Referencia Bancaria
                                </p>
                                <input class="input is-rounded" type="text" name="ref" required/>
                            {/if}
                        </div>
                    </div>

                    <div class=" field is-grouped mt-6">
                        <div class="control">
                            <button class="mt-4 button is-rounded is-link is-light"  >
                                Reportar mi Asistencia
                            </button>
                        </div>
                        <div class="control">
                            <button class="mt-4 button is-rounded is-link is-light" type="reset" on:click={()=>{flag = !flag}}>
                                Volver
                            </button>
                        </div>
                    </div>
                </form>

            </section>

        </fieldset>
    </div>

</div>

{/key}
{/if}

<style>

    .notification{
        position:absolute;
        top:10px;
        right:5px;
        z-index:150;

    }

    .centro{
        width:70%;
        height:70%;
        position:relative;
        top:40%;
        left:50%;
        transform: translate(-50%, -50%);
    }

    .deslizador{

        width:100%;
        height:100%;
        position:absolute;
        top:100px;
        left:13%;
        z-index: 200;
        transform:translate(-13%, -0%);
        border-radius: 20px 20px 0px 0px;
        background: hsla(220, 21%, 5%, 1) !important;

        background: linear-gradient(180deg, hsla(220, 21%, 5%, 1) 6%, hsla(219, 26%, 31%, 1) 75%, hsla(202, 5%, 60%, 1) 97%, hsla(65, 14%, 83%, 1) 100%) !important;

        background: -moz-linear-gradient(180deg, hsla(220, 21%, 5%, 1) 6%, hsla(219, 26%, 31%, 1) 75%, hsla(202, 5%, 60%, 1) 97%, hsla(65, 14%, 83%, 1) 100%) !important;

        background: -webkit-linear-gradient(270deg, hsla(220, 21%, 5%, 1) 6%, hsla(219, 26%, 31%, 1) 75%, hsla(202, 5%, 60%, 1) 97%, hsla(65, 14%, 83%, 1) 100%) !important;
    }




</style>

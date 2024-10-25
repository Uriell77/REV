<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  let trans = false;
  export let flag = false;
  export let registro = false;

  onMount(() => {
    if (registro == "Registro exitoso") {
      setTimeout(() => {
        registro = false;
      }, 1000);
    }
  });
</script>

{#if registro == "Registro exitoso"}
  <div
    class="notification is-success"
    transition:fly={{
      delay: 1000,
      duration: 1000,
      x: 500,
      y: 0,
      opacity: 0.5,
      easing: quintOut,
    }}
  >
    Registro Exitoso
  </div>
{:else}
  {#key flag}
    <div
      class="deslizador {flag ? '' : 'is-hidden'}"
      transition:fly={{
        duration: 1000,
        x: 0,
        y: 800,
        opacity: 0.5,
        easing: quintOut,
      }}
    >
      <div class="columns is-centered is-gapless">
        <div class="column is-9-desktop is-full-mobile">
          <div class="">
              <legend class="p-0">Reporta tu asistencia</legend>

              <section class=" mt-0 p-0">
                <div
                  class="container is-fullhd has-text-centered mt-0 p-1 mb-0 pb-0"
                >
                  <div
                    class="is-size-5 has-text-weight-bold py-0 has-text-white"
                  >
                    <p class="has-text-weight-bold">Banco del Caribe</p>
                    <p class="has-text-weight-bold">0114</p>
                    <p class="has-text-weight-bold">Tlf: 04145893695</p>
                    <p class="has-text-weight-bold">C.I.: 4669076</p>
                  </div>
                </div>






                <form class=" mb-6 has-text-white" method="POST">
                  
                    <div class="columns is-centered is-multiline is-desktop is-gapless">
                    
                    
                    
                    <div class="column is-half-desktop is-full-mobile p-0">
                      <div class="fleld m-5 ibm-plex-serif-extralight has-text-weight-bold is-size-7 p-0">
                        Nombre Completo del Esposo
                        <p class="control pt-1">
                          <input
                            class="input is-rounded is-small"
                            type="text"
                            name="esposo"
                            required
                          />
                        </p>
                      </div>
                   </div> 
                    
                    
                    
                    
                    <div class="column is-half-desktop is-full-mobile p-0">
                      <div
                        class="fleld m-5 ibm-plex-serif-extralight has-text-weight-bold is-size-7 p-0"
                      >
                        Nombre Completo de la Esposa
                        <p class="control pt-1">
                          <input
                            class="input is-rounded is-small"
                            type="text"
                            name="esposa"
                            required
                          />
                        </p>
                      </div>
                    </div>
                    
                    
                    
                    
                    
                    <div class="column is-full-desktop is-full-mobile p-0 m-0">
                      <div
                        class="fleld m-5 ibm-plex-serif-extralight has-text-weight-bold is-size-7 p-0"
                      >
                        Iglesia <small class="has-text-warning">(En blanco si no perteneces a una Iglesia)</small>
                        <p class="control pt-1">
                          <input
                            class="input is-rounded is-small"
                            type="text"
                            name="iglesia"
                          />
                        </p>
                      </div>
                    </div>
                    
                    
                    
                    
                    <div class="column is-full">


                        <div class="columns is-centered is-mobile is-gapless">
                            <div class="column is-half px-0 ">
                        <div
                            class="fleld m-5 ibm-plex-serif-extralight has-text-weight-bold is-size-7 p-0 "
                        >
                            Metodo de Pago
                            <div class="control pt-1">
                                <div class="select is-small">
                                    <select
                                        name={trans == "Efectivo" ? "ref" : ""}
                                        bind:value={trans}
                                    >
                                        <option>Efectivo</option>
                                        <option>Transferencia</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                            </div>
                            <div class="column is-half px-0">
                        <div class="is-half-desktop is-half-mobile is-half-tablet {trans =="Transferencia"? "is-active": "is-hidden"}">
                            <div class="fleld m-5 ibm-plex-serif-extralight has-text-weight-bold is-size-7 p-0">
                                Referencia Bancaria
                                <input
                                    class="input is-rounded is-small"
                                    type="text"
                                    name="ref"
                                    /> 
                            </div>
                        </div>
                            </div>
                        </div>


                    </div>





                
                        
                        
                    <div class="column is-full-desktop is-full-mobile has-text-centered">
                      <div class=" field is-grouped mt-0 p-0 is-grouped-centered">
                        <p class="control">
                          <button
                            class="mt-4 button is-rounded is-link is-light"
                          >
                            Reportar mi Asistencia
                          </button>
                        </p>
                        <p class="control">
                          <button
                            class="mt-4 button is-rounded is-link is-light"
                            type="reset"
                            on:click={() => {
                              flag = !flag;
                            }}
                          >
                            Volver
                          </button>
                        </p>
                      </div>
                    </div>
                    
                    </div>
                  
                </form>










            </section>
          </div>
        </div>
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
  {/key}
{/if}

<style>
  .notification {
    position: absolute;
    top: 10px;
    right: 5px;
    z-index: 150;
  }


  .deslizador {
    width: 100%;
    height: 90%;
    position: absolute;
    top: 100px;
    left: 13%;
    z-index: 200;
    transform: translate(-13%, -6%);
    border-radius: 20px 20px 0px 0px;
    background: hsla(220, 21%, 5%, 1) !important;

    background: linear-gradient(
      180deg,
      hsla(220, 21%, 5%, 1) 6%,
      hsla(219, 26%, 31%, 1) 75%,
      hsla(202, 5%, 60%, 1) 97%,
      hsla(65, 14%, 83%, 1) 100%
    ) !important;

    background: -moz-linear-gradient(
      180deg,
      hsla(220, 21%, 5%, 1) 6%,
      hsla(219, 26%, 31%, 1) 75%,
      hsla(202, 5%, 60%, 1) 97%,
      hsla(65, 14%, 83%, 1) 100%
    ) !important;

    background: -webkit-linear-gradient(
      270deg,
      hsla(220, 21%, 5%, 1) 6%,
      hsla(219, 26%, 31%, 1) 75%,
      hsla(202, 5%, 60%, 1) 97%,
      hsla(65, 14%, 83%, 1) 100%
    ) !important;
  }

</style>

<script>
  import { flip } from "svelte/animate";
  import { beforeUpdate, tick } from "svelte";
  import { crossfade, scale } from "svelte/transition";
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import { quintOut, elasticInOut } from "svelte/easing";
  export let hoy;
  export let contenido;
  export let variable;
  let mostrarinfo = false;
  $: loaded="ter";
  console.log(loaded)
  let map = 
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63235.42970470151!2d-67.50562336769423!3d7.872625190156096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e78812d0469f7b5%3A0x9f2752ab80a1cd1e!2sSan%20Fernando%20de%20Apure%207001%2C%20Apure!5e0!3m2!1ses!2sve!4v1716819845166!5m2!1ses!2sve";

  function ampliar() {
    tick((mostrarinfo = !mostrarinfo));
  }

  const [send, receive] = crossfade({
    duration: 800,
    easing: quintOut,
  });
</script>

{#if !mostrarinfo}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="my-1 py-2 is-clickable px-1 card"
    on:click={ampliar}
    in:receive={{ mostrarinfo }}
    out:send={{ mostrarinfo }}
  >
    <div
      class="card-content p-0 is-flex is-flex-direction-column
            is-align-items-left"
    >
      <div class="media-content p-0 m-0">
        <div class="content p-0 m-0">
          <p class="subtitle has-text-white impacto p-0 mb-1">{hoy}</p>
        </div>
      </div>

      <div class="media-content p-0 m-0 is-align-self-auto">
        <div class="content ml-2 is-size-7">
          {@html contenido}
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="modal is-active m-0">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="modal-background p-1"
      on:click={ampliar}
      in:receive={{ mostrarinfo }}
      out:send={{ mostrarinfo }}
    >
      <div class="modal-content p-auto m-auto">
        <div class="hero is-large">
          <p class="subtitle has-text-black impacto p-0 m-0">{hoy}</p>

          <section class="section">
            {@html contenido}
          </section>
          <section class="section">
            Ipsum sit amet vel porro similique officia aliquam. Tempora sunt
            iste facilis fugit molestiae repellat Dolor suscipit nostrum
            doloribus facere Lorem dolor at minus necessitatibus non itaque,
            soluta. Ad quo voluptate rem dolores debitis Harum qui amet fuga
            ducimus harum temporibus. Nobis iusto commodi qui totam quos
            inventore minus magni qui. Qui nisi iste ab incidunt quasi? Enim
            debitis sequi officia blanditiis nemo. Adipisci libero ullam earum
            magni rem error.
          </section>

          {#if hoy.includes("Jueves ")}
            <section class="section mapa mt-0">
              {#if loaded}
                <!-- svelte-ignore a11y-missing-attribute -->
                <iframe
                  class="has-ratio"
                  src={map}
                  width="450"
                  height="500"
                  style="border:0;"
                  allowfullscreen="true"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  bind:this={loaded}
                >
                </iframe>
              {:else}
                <figure class="image">
                  <img src="/static/loading.gif" alt="load" />
                </figure>
              {/if}
            </section>
          {/if}
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" on:click={ampliar}
    ></button>
  </div>
{/if}

<style>
  .card {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    color: white;
    animation: all 2s ease-in-out !important;
  }

  p,
  .mapa {
    overflow: hidden;
  }

  .modal-background {
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    color: black;
    overflow: hidden;
  }

  .modal-content {
    top: 5%;
    left: 0%;
  }

  .modal {
    animation: all 2s ease-in-out !important;
  }
</style>

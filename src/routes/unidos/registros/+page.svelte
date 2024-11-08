<script>
    import { enhance } from '$app/forms';
    import {onMount,afterUpdate} from "svelte";
    export let data;
    let search ="";
    $: completo = data.unidos;
    let result;
    let cancelados;
    let sel;

    onMount(async ()=>{
        cancelados = await completo.filter((item)=>item.estado == "Cancelado") 

        cancelados = cancelados.length;
    })

    function ter(){
        console.log("ter")
    }

   

</script>


<div class="box">
    Numero de Registros:
    {data.unidos.length}
    Cancelado:
    {cancelados}

</div>

<div class="block container px-6">
        <input class="input is-rounded" type="search"  bind:value="{search}"/>
    </div>



  <ul class="px-3">
      {#if search == ""}
      {#each completo as registrados,index}
          <li class="box m-1 {registrados.estado == "Cancelado" ? "is-success":""}">
              <div class="is-size-7 m-0 p-0">
                  N` de Registro:
                  {index+1}<br>
                  Fecha de Registro:
                  {registrados.created_at}
                  </div><hr class="m-1">
              <div class="level m-0">
                  Nombre del Esposo:
                  {registrados.esposo}<br>
              </div>
              <div class="level m-0">
                  Nombre de la Esposa:
                  {registrados.esposa}<br>
              </div>
              <div class="level m-0">
                  Iglesia:
                  {registrados.iglesia}<br>
              </div>
              <div class="level m-0">
                  Ref. Pago:
                  {registrados.transferencia}
              </div>
              <div class="level">
                  Estado:
                  {registrados.estado}
              </div>

              {#if registrados.estado == "Cancelado"}
              <div class="is-hidden"></div>
                  {:else}
                      <form  method="POST" use:enhance>
                          <input class="is-hidden" type="text" value="{registrados.esposo}" name="nombre"/>
                          <input class="input is-small is-link is-rounded" type="text" value="Efectivo" name="ref" on:focus={(event)=>{event.target.select()}} bind:this="{sel}"/>
                          <input class="is-hidden" type="text" value="Cancelado" name="pagado"/>
                          <button class="button" type="submit">Pago</button>
                      </form>
              {/if}
          </li>
      {/each}
      {:else}
          {#each completo.filter(registro => registro.esposo.toUpperCase().includes(search.toUpperCase())
              || registro.esposa.toUpperCase().includes(search.toUpperCase())) as registrados,index}
          <li class="box m-1 {registrados.estado == "Cancelado" ? "is-success":""}">
              <div class="is-size-7 m-0 p-0">
                  N` de Registro:
                  {index+1}<br>
                  Fecha de Registro:
                  {registrados.created_at}
                  </div><hr class="m-1">
              <div class="level m-0">
                  Nombre del Esposo:
                  {registrados.esposo}<br>
              </div>
              <div class="level m-0">
                  Nombre de la Esposa:
                  {registrados.esposa}<br>
              </div>
              <div class="level m-0">
                  Iglesia:
                  {registrados.iglesia}<br>
              </div>
              <div class="level m-0">
                  Ref. Pago:
                  {registrados.transferencia}
              </div>
              <div class="level">
                  Estado:
                  {registrados.estado}
              </div>
              {#if registrados.estado == "Cancelado"}
              <div class="is-hidden"></div>
                  {:else}
                      <form  method="POST" use:enhance>
                          <input class="is-hidden" type="text" value="{registrados.esposo}" name="nombre"/>
                          <input class="input is-small is-link is-rounded" type="text" value="Efectivo" name="ref"/>
                          <input class="is-hidden" type="text" value="Cancelado" name="pagado"/>
                          <button class="button" type="submit">Pago</button>
                      </form>
              {/if}
          </li>
      {/each}
  {/if}
  </ul>



  <style>
      .is-success{
      background-color: rgba(18, 84, 4, 1);
      color:white;
      }



      .box{
      background-color:linear-gradient(black 80%, transparent);
      }
  </style>

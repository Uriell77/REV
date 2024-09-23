<script>
    export let data;
  </script>

  <ul>
      {#each data.unidos as registrados}
          <li class="box m-1">
              <div class="is-size-7 m-0 p-0">N` de Registro:
                  {registrados.id}<br>Fecha de Registro:
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
              <div class="level">
                  Ref. Pago:
                  {registrados.transferencia}
              </div>
          </li>
      {/each}
  </ul>

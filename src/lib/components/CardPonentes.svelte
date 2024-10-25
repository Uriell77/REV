<script>
  export let imag = "https://bulma.io/assets/images/placeholders/1280x960.png";
  export let nombre = "nombre";
  export let psinopsis = "psinopsis";
</script>

    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img src={imag} alt="Placeholder image" loading="lazy"/>
        </figure>
      </div>
      <div class="card-content">
        <div class="media m-1">
          <div class="media-content">
            <p class=" is-size-6 mt-3 has-text-weight-bold">{nombre}</p>
          </div>
        </div>

        <div class="content is-size-7 mt-0">
          {psinopsis}
        </div>
      </div>
      <div class="fondoimg"></div>
    </div>


<style>
  .fondoimg {
    position: absolute;
    top: 0px;
    transition: all 1s;
    background-color: white;
    width: 100%;
    height: 100%;
    z-index: 9;
    border-radius: 20px !important;
  }

  .card {
    position: relative;
    overflow: visible;
    border-radius: 20px 20px 20px 20px !important;
  }

  .card-content {
    position: absolute;
    top: 0px;
    transition: all 1s;
    display: hidden;
    color: rgba(1, 1, 1, 0);
    animation-fill-mode: backwards;
    border-radius: 0px 0px 20px 20px !important;
  }

  .card-image {
    z-index: 10;
  }

  .card:hover .card-content {
    top: 87%;
    background-color: white;
    display: block;
    color: rgb(1, 1, 1);
    z-index:100;
  }

  .card:hover {
    overflow: visible;
  }

  .card:hover .image {
    position: relative;
    transform: scale(116%) translate(0%, -7%);
    transition: all 1s;
    animation-fill-mode: forwards;
  }

  .image {
    transition: all 1s;
  }
</style>

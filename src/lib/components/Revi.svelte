<script>

    let resalt = 256;

    export let imagen;

</script>


    <div class="scroller mt-4 px-0 has-text-centered has-item-align-center">
        <div class="px-0 is-flex has-text-centered py-4 mb-6 ">
            <div class="columns is-centered is-flex">
            {#each imagen as im}
                <a data-sveltekit-reload href="/{im}" class="has-text-centered">
                <div class="column">
                    <figure class="image is-64x64 is-square">
                    <img
                        class="mx-4 mb-1 bordeado has-reflect"
                        src="/{im}.jpg"
                        alt=""
                    />
                    </figure>
                </div>
                </a>
            {/each}
            </div>
        </div>
    </div>


<style>

    img{
        border-style:solid;
        border-width:6px;
        border-color:rgba(255,255,255,.4);
        height: 4rem;
        pointer-events:none;
    }

        img::-webkit-scrollbar {display: none;}


        .scroller{
        overflow:auto;
        background: -webkit-linear-gradient(90deg, rgba(1,1,1,.1) 0%, rgba(255,255,255,.1) 43%, rgba(255,255,255,.0) 100%);

        }
    .scroller::-webkit-scrollbar {display: none;}


    .container::-webkit-scrollbar {display: none;}
    .container{
        width:90%;
    }

</style>

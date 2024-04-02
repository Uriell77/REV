<script>
    import Card from '$lib/components/Card.svelte';
    import Revi from '$lib/components/Revi.svelte';
    import Nav from '$lib/components/Nav.svelte';
    import Tonera from '$lib/components/Tonera.svelte';

    let publicaciones = ["emociones", "toma"]
    let desc = ["que dice la biblia acerca de nuestras emociones", "toma"]



</script>




<Nav />

<div class="container px-2 py-5">


    <div class="columns is-multiline is-centered is-desktop">


        <div class=" column is-full is-centered pt-4 mt-6 mx-2">
            <Revi imagen={publicaciones}/>
        </div>



        <div class="column is-full px-4 mx-3 py-0">
            <div class="tabs is-centered">
                <ul>
                    <li class="is-active">
                        <a class="has-text-white">Pictures</a>
                    </li>
                    <li><a class="has-text-white">Music</a></li>
                    <li><a class="has-text-white">Videos</a></li>
                    <li><a class="has-text-white">Documents</a></li>
                </ul>
            </div>
        </div>




        <div class="column is-full">
            <div class="columns is-multiline">
                {#if publicaciones}
                    {#each publicaciones as pub,index}
                        <Card publi="{pub}" indice="{index}" description={desc}/>
                    {/each}
                {:else}
                    <div class="box">
                        no
                    </div>
                {/if}
            </div>
        </div>



        <div class="column is-full">

        </div>


    </div>

</div>


<style>



    .container::-webkit-scrollbar {display: none;}


    /*
    .backgroundImage{
    background-image: url('/tree.jpg');
    background-attachment: fixed;
    height:100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter:blur(8px);
    }
     */




</style>

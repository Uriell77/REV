<script>
    export let publi;
    export let indice;
    export let description;

    let ter;

</script>


<div class="column is-gapless p-0 is-full-mobile is-one-third-desktop is-full-tablet ">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class=" has-text-centered card-inf has-text-justified is-justify-content-center"
    >
        <a data-sveltekit-reload href="/{publi}" class="has-text-centered">


            <div class="container py-2 mx-0 px-4 ">
                <div class="box blured is-fullwidth is-flex  has-text-white "
                    
                >

                    <div class="">
                        <figure class="image is-128x128 py-0">
                            <img src="/{publi}.jpg" class="bordeado" alt="pic"/>
                        </figure>
                    </div>

                        <div class="has-text-centered container">
                        <p class="block title is-4 has-text-centered has-text-white txt-primary ">{publi}</p>
                            <div class="block has-text-centered impacto is-size-7 has-text-justify px-2">
                                {description[indice]}
                            </div>
                        </div>

                </div>
            </div>



        </a>

    </div>
</div>

<style>




    img{
        pointer-events: none;
    }



    @keyframes resalt{
        0%{
        box-shadow:0px -5px 14px rgba(255,255,255, .6);
        }
        25%{
        box-shadow:5px 0px 14px rgba(255,255,255, .6);
        }
        50%{
        box-shadow:0px 5px 14px rgba(255,255,255, .6);
        }
        75%{
        box-shadow:-5px 0px 14px rgba(255,255,255, .6);
        }
        100%{
        box-shadow:0px -5px 14px rgba(255,255,255, .6);
        }

    }

    .box{
    }

    .box:hover{
        animation: resalt 1.5s ease infinite;
    }

</style>

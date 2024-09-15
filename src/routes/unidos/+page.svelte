<script>
    import { spring } from 'svelte/motion';
    import {blur,fade} from "svelte/transition";

    let texto = [
        "Por tanto el hombre dejará a su padre y a su madre y se unirá a su mujer, y serán una sola carne <br> Génesis 2:24",
        "Por lo demás, cada uno de vosotros ame también a su mujer como a sí mismo; y la mujer respete a su marido. <br> Efesios 5:33",
        "Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.<br>Colosenses 3:14",
        "Y si alguno prevaleciere contra uno, dos le resistirán; y cordón de tres dobleces no se rompe pronto.<br>Eclesiastés 4:12",
        "Les estoy dando un mandamiento nuevo: que se amen los unos a los otros. Ámense tal como yo los amé <br>Juan 13:34",
        "Así que no son ya más dos, sino una sola carne; por tanto, lo que Dios juntó, no lo separe el hombre.<br>Mateo 19:6"

    ]

    let radio = spring(0)
    radio.stifness = 1;
    radio.damping = 1;
    radio.presition = 0.003;

    let radiosom = spring(3);
    radiosom.stifness = 0.5;
    radiosom.damping = 0.5;
    radiosom.presition = 0.003;

    let screen;
    let scroller;
    let content = "plano1";

    $: flager = false;

    function flag(){
        flager = true;
    }

    function dat(e){
        //console.log(e.target.scrollTop);
        scroller = e.target.scrollTop;
        screen = e.target.scrollHeight;
        //console.log(Math.trunc((scroller * 100)/screen))
        if(Math.trunc((scroller * 100)/screen) == 0){
            content = "plano1";
            radio.set(0);
        }
        else if(Math.trunc((scroller * 100)/screen) == 16){
            content = "plano2";
            radio.set(6.2);
        }
        else if(Math.trunc((scroller * 100)/screen) == 33){
            content = "plano3";
            radio.set(12.4);
        }
        else if(Math.trunc((scroller * 100)/screen) == 50){
            content = "plano4";
            radio.set(18.6);
        }
        else if(Math.trunc((scroller * 100)/screen) == 66){
            content = "plano5";
            radio.set(24.8);
        }
        else if(Math.trunc((scroller * 100)/screen) == 83){
            content = "plano6"
            radio.set(31);
            flag();
        }

        if($radio == 31){
            radio = 31;
        }
    }


</script>

<svelte:window bind:innerHeight={screen}/>
<div class="fondo " bind:this={scroller} on:scroll={dat}>

    <div class="ter">
        <div class="section mat has-text-centered p-0">
            {#key content}

                <div class="novia p-0 m-0" style="left:{$radio}%" transition:fade={{duration:900}}>
                    <div class="sombranovia"  ></div>
                    <img src="/novia.webp" alt="novia" class="nov"  />
                </div>

                <div class="novio p-0 m-0" style="right:{$radio}%" transition:fade={{duration:900}}>
                    <div class="sombranovio"  ></div>
                    <img src="/novio.webp" alt="novio" class="novo"/>
                </div>

            {/key}
        </div>

        <div class="section plano1 sevillana-font is-size-3">
            <div class="container has-text-centered has-text-weight-bold">
                {#key content}
                    <div class="container {content == "plano1" ? "" : "is-hidden"}" transition:fade={{duration:900}}>
                        {@html texto[0]}
                    </div> 
                {/key}
            </div>
        </div>
        <div class="section plano2 sevillana-font is-size-3">
            <div class="container has-text-centered has-text-weight-bold">
                {#key content}
                    <div class="container {content == "plano2" ? "": "is-hidden"}" transition:fade={{duration:900}}>
                        {@html texto[1]}
                    </div>
                {/key}
            </div>
        </div>
        <div class="section plano3 sevillana-font is-size-3">
            <div class="container has-text-centered has-text-weight-bold">
                {#key content}
                    <div class="container {content == "plano3" ? "": "is-hidden"}" transition:fade={{duration:900}}>

                        {@html texto[2]}

                    </div>
                {/key}
            </div>
        </div>
        <div class="section plano4 sevillana-font is-size-3">
            <div class="container has-text-centered has-text-weight-bold">
                {#key content}
                    <div class="container {content == "plano4" ? "": "is-hidden"}" transition:fade={{duration:900}}>

                        {@html texto[3]}

                    </div>
                {/key}
            </div>
        </div>
        <div class="section plano5 sevillana-font is-size-3">
            <div class="container has-text-centered has-text-weight-bold">
                {#key content}
                    <div class="container {content == "plano5" ? "": "is-hidden"}" transition:fade={{duration:900}}>

                        {@html texto[4]}

                    </div>
                {/key}
            </div>
        </div>
        <div class="section plano6 sevillana-font is-size-3">
            <div class="container has-text-centered has-text-weight-bold">
                {#key content}
                    <div class="container {content == "plano6" ? "": "is-hidden"}" transition:fade={{duration:900}}>

                        {@html texto[5]}

                    </div>
                {/key}
            </div>
        </div>

    </div>

</div>


    <!-- Modal -->
    {#key flager}
    <div class="modal {flager ? "is-active":""}" in:fade={{duration:900, delay:8000}} out:fade={{duration:900}}>
        <div class="modal-background"></div>
        <div class="modal-content">
            <!-- Any other Bulma elements you want -->
        </div>
        <button class="modal-close is-large" aria-label="close" on:click="{()=>{flager = false}}"></button>
    </div>
{/key}


<style>


    .nov{
        position:relative;
        z-index:50;
        width:100%;
        height:100%;
        top:-10%;
    }
    .novo{
        position:relative;
        z-index:50;
        width:83%;
        height:108%;
        top:-16%;
    }

    .sombranovia,.sombranovio{
        width:100px;
        height:40px;
        border-radius:50%;
        background-color:black;
        position:relative;
        transform:rotatex(50deg);
        filter:blur(20px);
    }

    .sombranovia{
        width:130px;
        left:4%;
        top:97%;
        z-index: 30;
        transition: all 3s;
    }
    .sombranovio{
        right:-10%;
        top:97%;
        z-index: 20;
        transition: all 3s;
    }

    .novia{
        position:absolute;
        top:13px;
        width:25%;
        height:80%;
        z-index:20;
    }
    .novio{
        position:absolute;
        top:13px;
        width:25%;
        height:80%;
        z-index:20;
    }

    .novio{
        transition: all 3s;
    }
    .novia{
        transition: all 3s;
    }

    .mat{
        position:fixed;
        top:0%;
        background-color: rgba(255,255,255,.9);
        width:100%;
        height:40%;
        z-index:10;
        background: hsla(204, 95%, 77%, 1);

        background: linear-gradient(90deg, hsla(204, 95%, 77%, 0) 29%, hsla(277, 79%, 84%, 1) 52%, hsla(204, 95%, 77%, 1) 100%);

        background: -moz-linear-gradient(90deg, hsla(204, 95%, 77%, 0) 29%, hsla(277, 79%, 84%, 1) 52%, hsla(204, 95%, 77%, 1) 100%);

        background: -webkit-linear-gradient(90deg, hsla(204, 95%, 77%, 0) 29%, hsla(277, 79%, 84%, 1) 52%, hsla(204, 95%, 77%, 1) 100%);
    }


    .fondo{
        background-color:white;
        height:100vh;
        overflow-y:scroll;
        scroll-snap-type: y mandatory;
        background: hsla(277, 79%, 84%, 1);

        background: linear-gradient(90deg, hsla(277, 79%, 84%, 1) 0%, hsla(204, 95%, 77%, 1) 100%);

        background: -moz-linear-gradient(90deg, hsla(277, 79%, 84%, 1) 0%, hsla(204, 95%, 77%, 1) 100%);

        background: -webkit-linear-gradient(90deg, hsla(277, 79%, 84%, 1) 0%, hsla(204, 95%, 77%, 1) 100%);
        transition: all 3s;
    }
    .plano1,.plano2,.plano3,.plano4,.plano5,.plano6{
        height:100vh;
        scroll-snap-align: start;
        transition: all 3s;
        
    }

    .container{
        position:relative;
        top:55%;

    }

    @media screen and (min-width: 600px) {
        .ter {
            text-align:center;
            width:50%;
            margin:0 auto;
        }

        .mat{
            position:absolute;
            width:50%;
        }

    }


</style>

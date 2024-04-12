<script>
    import { spring } from 'svelte/motion';
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { draw } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import Widget from '$lib/components/Widget.svelte';


    /*VALOR DEL RANGE*/
    $: val = 0;
    let captura;
    $: flag = false;

    /*ESTADOS*/
    $$: estado = "indiferente";

    /*VARIABLES EMOCIONES*/
    $: face = "indiferente";



    /*CAMBIO DE ESTADOS*/
    function changeState(){
        if(val <=-80){
            estado = "triste";
        }else if(val <=-60){
            estado = "frustrado";
        }else if(val <=-40){
            estado = "enojado";
        }else if(val <=-20){
            estado = "decepcionado";
        }else if(val <=0 && val <= 20){
            estado = "indiferente";
        }else if(val <= 40){
            estado = "satisfecho";
        }else if(val <= 60){
            estado = "confiado";
        }else if(val <= 80){
            estado = "divertido";
        }else if(val <= 100){
            estado = "feliz";
        }
    }


    function activado(){
        flag = !flag;
    }



</script>

<svelte:head>
    <title>Como te Sientes Hoy?</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>


<div class="{estado}">
    <div class="container pt-5 ">

        <!--TITULO-->
        <div class=" py-0 has-text-centered pb-0 mb-0">
            <p class="title tema impacto box mb-0">Como te Sientes Hoy?</p>
        </div>


        <div class="section pt-0 mt-0 mx-0">
        <div class="container has-text-centered mb-0 pt-6 mt-5 subtitle
            txt-emotive has-text-black has-text-weight-bold">
            <p class="title has-text-black is-uppercase txt-emot ">
                {estado}
            </p>
        </div>


            {#if estado == "indiferente"}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                    viewBox="0 0 24 24">
                    <defs>
                        <style>
                            .b{fill:#864e20}.c{fill:#e7c930}
                        </style>
                    </defs>
                    <rect
                        x="1"
                        y="1"
                        width="22"
                        height="22"
                        rx="7.656"
                        style="fill:#f8de40"/>
                    <path
                        class="b"
                        d="M7.055 7.313A1.747 1.747 0 1 0 8.8 9.059a1.747 1.747 0 0 0-1.745-1.746zM16.958 7.313A1.747 1.747 0 1 0 18.7 9.059a1.747 1.747 0 0 0-1.742-1.746z"/>
                    <path
                        class="c"
                        d="M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z"/>
                    <ellipse
                        class="b"
                        cx="12"
                        cy="13.375"
                        rx="5.479"
                        ry=".297"/>
                    <ellipse
                        class="c"
                        cx="12"
                        cy="14.646"
                        rx="1.969"
                        ry=".229"/>
                </svg>
            {:else if estado == "decepcionado"}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                    viewBox="0 0 24 24">
                    <defs>
                        <style>
                            .c{fill:#864e20}
                </style>
        </defs>
        <rect
            x="1"
            y="1"
            width="22"
            height="22"
            rx="7.656"
            style="fill:#f8de40"/>
        <path
            d="M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z"
            style="fill:#e7c930"/>
        <path 
            class="c"
            d="M9.6 8.833 9.021 8.6a22.797 22.797 0 0 0-2.138-.774 18.44
            18.44 0 0 0-1.1-.3h-.012a.246.246 0 0
            0-.186.448l.01.006c.325.2.656.392.991.573q.281.15.564.291a.245.245
            0 0 1 0
            .439q-.285.141-.564.292c-.335.18-.667.369-.992.573l-.016.01a.246.246
            0 0 0 .187.447h.018c.374-.088.741-.19 1.105-.3s.723-.234
            1.079-.362c.179-.064.355-.134.532-.2l.526-.213.573-.232a.246.246
            0 0 0 .002-.465zM14.405 8.833l.574-.235a22.797 22.797 0 0 1
            2.138-.774 18.44 18.44 0 0 1 1.1-.3h.012a.246.246 0 0 1
            .186.448l-.01.006c-.325.2-.656.392-.991.573q-.28.15-.564.291a.245.245
            0 0 0 0
            .439q.285.141.564.292c.335.18.667.369.992.573l.016.01a.246.246
            0 0
            1-.187.447h-.018c-.374-.088-.741-.19-1.105-.3s-.723-.234-1.079-.362c-.179-.064-.355-.134-.532-.2l-.526-.213-.573-.232a.246.246
            0 0 1 .003-.463zM14 13.937a.318.318 0 0 1-.313-.326 2.105 2.105
            0 0 0-.5-1.331A1.6 1.6 0 0 0 12 11.847a1.6 1.6 0 0 0-1.187.43
            2.092 2.092 0 0 0-.5 1.335.32.32 0 0 1-.64.012 2.715 2.715 0 0
            1 .679-1.792A2.211 2.211 0 0 1 12 11.207a2.211 2.211 0 0 1
            1.647.625 2.721 2.721 0 0 1 .679 1.792.321.321 0 0
            1-.326.313z"/>
    </svg>
            {:else if estado == "enojado"}
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><defs><style>.c{fill:#10192d}</style></defs><rect x="1" y="1" width="22" height="22" rx="7.656" style="fill:#e7253e"/><path d="M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z" style="fill:#b51f36"/><path class="c" d="M9.565 8.513A16.121 16.121 0 0 1 5.63 6.328a.52.52 0 0 0-.832.4c-.048 1.583.151 4.483 2.258 4.483A2.6 2.6 0 0 0 9.9 9.1a.517.517 0 0 0-.335-.587zM19.2 6.731a.521.521 0 0 0-.832-.4 16.121 16.121 0 0 1-3.935 2.185.517.517 0 0 0-.333.584 2.6 2.6 0 0 0 2.84 2.11c2.111.004 2.31-2.896 2.26-4.479zM14 13.937a.318.318 0 0 1-.313-.326 2.105 2.105 0 0 0-.5-1.331A1.6 1.6 0 0 0 12 11.847a1.6 1.6 0 0 0-1.187.43 2.092 2.092 0 0 0-.5 1.335.32.32 0 0 1-.64.012 2.715 2.715 0 0 1 .679-1.792A2.211 2.211 0 0 1 12 11.207a2.211 2.211 0 0 1 1.647.625 2.721 2.721 0 0 1 .679 1.792.321.321 0 0 1-.326.313z"/></svg>
            {:else if estado == "frustrado"}
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><defs><style>.b{fill:#864e20}</style></defs><rect x="1" y="1" width="22" height="22" rx="7.656" style="fill:#f8de40"/><path class="b" d="M7.055 7.313A1.747 1.747 0 1 0 8.8 9.059a1.747 1.747 0 0 0-1.745-1.746zM16.958 7.313A1.747 1.747 0 1 0 18.7 9.059a1.747 1.747 0 0 0-1.742-1.746z"/><path d="M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z" style="fill:#e7c930"/><path class="b" d="M17.051 12.78c-.139.122-.276.247-.418.366-.28.241-.566.476-.852.708a.218.218 0 0 1-.245.019l-.034-.019a50.552 50.552 0 0 1-.951-.564c-.2-.119-.394-.241-.59-.364a.218.218 0 0 0-.243.009l-.134.1c-.149.109-.3.214-.449.321-.3.215-.6.423-.9.633l-.106.074a.217.217 0 0 1-.248 0l-.106-.074c-.3-.21-.606-.417-.9-.632-.15-.107-.3-.212-.449-.321l-.134-.1a.218.218 0 0 0-.243-.008c-.2.122-.391.244-.589.363-.157.1-.316.19-.474.285s-.319.186-.478.279l-.033.019a.214.214 0 0 1-.245-.019 35.584 35.584 0 0 1-.853-.709c-.141-.119-.278-.244-.418-.366s-.275-.249-.41-.377c.168.08.335.161.5.247s.33.169.492.258c.228.121.453.247.677.374a.217.217 0 0 0 .242-.02l.2-.16c.145-.113.289-.228.436-.339.291-.225.587-.446.882-.665l.074-.055a.217.217 0 0 1 .246-.009l.1.064.464.3.461.3c.19.124.377.25.565.377a.217.217 0 0 0 .243 0c.187-.127.374-.254.564-.377.154-.1.306-.2.462-.3l.464-.3.1-.062a.215.215 0 0 1 .246.008l.074.054a60.924 60.924 0 0 1 1.52 1.166.215.215 0 0 0 .241.019c.225-.127.451-.253.68-.376.162-.089.328-.171.492-.258s.331-.167.5-.247c-.147.129-.283.256-.423.378z"/></svg>
            {:else if estado == "triste"}
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><defs><style>.b{fill:#e7c930}.c{fill:#864e20}.d{fill:#26a9e0}</style></defs><rect x="1" y="1" width="22" height="22" rx="7.656" style="fill:#f8de40"/><path class="b" d="M23 13.938a14.688 14.688 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z"/><path class="c" d="M17.2 12.746c-1.221-1.647-3.789-2.231-5.2-2.231s-3.984.584-5.2 2.231-.188 3.4 1.128 3.293 3.546-.364 4.077-.364 2.762.258 4.077.364 2.345-1.647 1.118-3.293z"/><path class="b" d="M14.505 17.022A12.492 12.492 0 0 0 12 16.638a12.457 12.457 0 0 0-2.5.384c-.376.076-.39.384 0 .332s2.5-.166 2.5-.166 2.119.115 2.505.166.375-.254 0-.332z"/><path class="c" d="M8.907 9.844a.182.182 0 0 1-.331.1 2.016 2.016 0 0 0-.569-.567 1.731 1.731 0 0 0-1.915 0 2.016 2.016 0 0 0-.571.569.182.182 0 0 1-.331-.1 1.632 1.632 0 0 1 .346-1.023 1.927 1.927 0 0 1 3.026 0 1.64 1.64 0 0 1 .345 1.021zM18.81 9.844a.182.182 0 0 1-.331.1 2.026 2.026 0 0 0-.568-.567 1.732 1.732 0 0 0-1.916 0 2.016 2.016 0 0 0-.571.569.182.182 0 0 1-.331-.1 1.632 1.632 0 0 1 .346-1.023 1.927 1.927 0 0 1 3.026 0 1.64 1.64 0 0 1 .345 1.021z"/><path class="d" d="M8.576 9.946a2.016 2.016 0 0 0-.569-.567 1.731 1.731 0 0 0-1.915 0 2.016 2.016 0 0 0-.571.569.175.175 0 0 1-.214.063v11.24A1.747 1.747 0 0 0 7.054 23 1.748 1.748 0 0 0 8.8 21.253V10.005a.176.176 0 0 1-.224-.059zM18.473 9.946a2.026 2.026 0 0 0-.568-.567 1.732 1.732 0 0 0-1.916 0 2.016 2.016 0 0 0-.571.569.175.175 0 0 1-.214.063v11.24A1.748 1.748 0 0 0 16.952 23a1.747 1.747 0 0 0 1.748-1.747V10.005a.176.176 0 0 1-.227-.059z"/></svg>
            {:else if estado == "satisfecho"}
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><defs><style>.b{fill:#864e20}.c{fill:#e7c930}</style></defs><rect x="1" y="1" width="22" height="22" rx="7.656" style="fill:#f8de40"/><path class="b" d="M8.907 8.275a.182.182 0 0 0-.331-.1 2.016 2.016 0 0 1-.569.567 1.728 1.728 0 0 1-1.915 0 2.029 2.029 0 0 1-.571-.569.182.182 0 0 0-.331.1 1.63 1.63 0 0 0 .346 1.022 1.926 1.926 0 0 0 3.026 0 1.636 1.636 0 0 0 .345-1.02zM18.81 8.275a.182.182 0 0 0-.331-.1 2.026 2.026 0 0 1-.568.567 1.73 1.73 0 0 1-1.916 0 2.029 2.029 0 0 1-.571-.569.182.182 0 0 0-.331.1 1.63 1.63 0 0 0 .346 1.022 1.926 1.926 0 0 0 3.026 0 1.636 1.636 0 0 0 .345-1.02z"/><path class="c" d="M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z"/><path class="b" d="M15.633 12.993A7.322 7.322 0 0 1 12 14.044a7.322 7.322 0 0 1-3.633-1.051c-.363-.241-.478-.215-.478-.129 0 1.056 2.055 1.708 4.111 1.708s4.111-.652 4.111-1.708c0-.086-.111-.112-.478.129z"/><path class="c" d="M13.136 15.183a2.262 2.262 0 0 1-2.272 0c-.268-.2-.252.381.341.536a2.786 2.786 0 0 0 .8.172 2.786 2.786 0 0 0 .8-.172c.583-.155.595-.739.331-.536z"/></svg>
            {:else if estado == "confiado"}
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><rect x="1" y="1" width="22" height="22" rx="7.656" style="fill:#f8de40"/><path d="M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z" style="fill:#e7c930"/><path d="M16.53 12.324a8.617 8.617 0 0 1-.494.726 5.59 5.59 0 0 1-1.029 1.058 4.794 4.794 0 0 1-.6.412 1.6 1.6 0 0 1-.162.091c-.055.028-.109.061-.164.09-.115.051-.226.115-.346.163-.26.119-.533.223-.819.329a.231.231 0 0 0 .055.446 3.783 3.783 0 0 0 .979-.022 3.484 3.484 0 0 0 .878-.25 3.718 3.718 0 0 0 .409-.205l.012-.007a4.1 4.1 0 0 0 .379-.26 3.51 3.51 0 0 0 1.1-1.465 3.381 3.381 0 0 0 .222-.871c0-.031.006-.061.009-.092a.231.231 0 0 0-.429-.143z" style="fill:#864e20"/><path d="M21.554 5.693c-.063-.289-2.888-.829-4.871-.829a5.584 5.584 0 0 0-3.3.7A3.125 3.125 0 0 1 12 5.919a3.125 3.125 0 0 1-1.381-.352 5.584 5.584 0 0 0-3.3-.7c-1.983 0-4.808.54-4.871.829s-.113 1.217.088 1.381.439.025.477.6.477 2.976 1.808 3.767 3.741.163 4.6-.365A4.3 4.3 0 0 0 11.3 8.568c.138-.892.351-1.507.7-1.507s.565.615.7 1.507a4.3 4.3 0 0 0 1.883 2.51c.854.528 3.264 1.155 4.6.365s1.77-3.189 1.808-3.767.276-.439.477-.6.149-1.095.086-1.383z" style="fill:#101820"/></svg>
            {:else if estado == "divertido"}
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><defs><style>.c{fill:#864e20}</style></defs><rect x="1" y="1" width="22" height="22" rx="7.656" style="fill:#f8de40"/><path d="M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z" style="fill:#e7c930"/><path class="c" d="M16.666 12.583H7.334a.493.493 0 0 0-.492.544c.123 1.175.875 3.842 5.158 3.842s5.035-2.667 5.158-3.842a.493.493 0 0 0-.492-.544z"/><path d="M15.405 15.136a2.463 2.463 0 0 0-1.655-1.87c-1.344-.3-1.75.109-1.75.109s-.406-.406-1.75-.109a2.463 2.463 0 0 0-1.65 1.87 8.449 8.449 0 0 0 0 2.723c.264 1.172 1.061 1.61 3.4 1.61s3.141-.438 3.4-1.61a8.449 8.449 0 0 0 .005-2.723z" style="fill:#f06880"/><path d="M12.188 15.688a5.582 5.582 0 0 1 .624-2.529 1.228 1.228 0 0 0-.812.216 1.228 1.228 0 0 0-.812-.216 5.582 5.582 0 0 1 .624 2.529C11.771 17 12 17 12 17s.229 0 .188-1.312z" style="fill:#cd4b68"/><path class="c" d="M9.6 8.833 9.021 8.6a22.797 22.797 0 0 0-2.138-.774 18.44 18.44 0 0 0-1.1-.3h-.012a.246.246 0 0 0-.186.448l.01.006c.325.2.656.392.991.573q.281.15.564.291a.245.245 0 0 1 0 .439q-.285.141-.564.292c-.335.18-.667.369-.992.573l-.016.01a.246.246 0 0 0 .187.447h.018c.374-.088.741-.19 1.105-.3s.723-.234 1.079-.362c.179-.064.355-.134.532-.2l.526-.213.573-.232a.246.246 0 0 0 .002-.465zM14.405 8.833l.574-.235a22.797 22.797 0 0 1 2.138-.774 18.44 18.44 0 0 1 1.1-.3h.012a.246.246 0 0 1 .186.448l-.01.006c-.325.2-.656.392-.991.573q-.28.15-.564.291a.245.245 0 0 0 0 .439q.285.141.564.292c.335.18.667.369.992.573l.016.01a.246.246 0 0 1-.187.447h-.018c-.374-.088-.741-.19-1.105-.3s-.723-.234-1.079-.362c-.179-.064-.355-.134-.532-.2l-.526-.213-.573-.232a.246.246 0 0 1 .003-.463z"/></svg>
            {:else if estado == "feliz"}
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><defs><style>.b{fill:#864e20}</style></defs><rect x="1" y="1" width="22" height="22" rx="7.656" style="fill:#f8de40"/><path class="b" d="M8.907 9.844a.182.182 0 0 1-.331.1 2.016 2.016 0 0 0-.569-.567 1.731 1.731 0 0 0-1.915 0 2.016 2.016 0 0 0-.571.569.182.182 0 0 1-.331-.1 1.632 1.632 0 0 1 .346-1.023 1.927 1.927 0 0 1 3.026 0 1.64 1.64 0 0 1 .345 1.021zM18.81 9.844a.182.182 0 0 1-.331.1 2.026 2.026 0 0 0-.568-.567 1.732 1.732 0 0 0-1.916 0 2.016 2.016 0 0 0-.571.569.182.182 0 0 1-.331-.1 1.632 1.632 0 0 1 .346-1.023 1.927 1.927 0 0 1 3.026 0 1.64 1.64 0 0 1 .345 1.021z"/><path d="M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z" style="fill:#e7c930"/><path class="b" d="M16.666 12.583H7.334a.493.493 0 0 0-.492.544c.123 1.175.875 3.842 5.158 3.842s5.035-2.667 5.158-3.842a.493.493 0 0 0-.492-.544z"/><path d="M12 16.969a6.538 6.538 0 0 0 2.959-.6 1.979 1.979 0 0 0-1.209-.853c-1.344-.3-1.75.109-1.75.109s-.406-.406-1.75-.109a1.979 1.979 0 0 0-1.209.853 6.538 6.538 0 0 0 2.959.6z" style="fill:#f06880"/></svg>
            {/if}
        </div>

    </div>

</div>


    <!--RANGE-->
    <div class="section rango px-0">
        <input type="range" bind:value="{val}" on:input={changeState}
            on:change="{activado}"
            min=-100 max=100 step=0.5/>
    </div>


    {#key flag}
    <div class="modal {flag ? "is-active":""}"
        transition:fly={{duration:2000, x:0, y:900, opacity: 1,
        easing:quintOut}}>
        <div class="modal-background"></div>
        <div class="modal-content">

            <article class="message mx-4">
                    Elit minima dolorum nihil beatae suscipit. Iste totam dicta alias a veniam! Reiciendis dignissimos tenetur corrupti culpa quae. Libero ipsum.
            </article>

        </div>
        <button class="modal-close is-large" aria-label="close"
            on:click={activado}></button>
    </div>
{/key}


<style>

    .modal-background{
    background-color: rgba(1,1,1,1) !important;
    }


    svg{
    filter:drop-shadow(0px 10px 2px rgba(1,1,1,.3)) !important;
    position:absolute;
    top:50%;
    left: 50%;
    transform:translate(-50%, -50%);
    }
   .tema{
    filter:drop-shadow(0px 10px 2px rgba(1,1,1,.3)) !important;
    color:#282371;
    }

    .txt-emot{
    filter:drop-shadow(0px 10px 2px rgba(1,1,1,.3)) !important;
    }
    .box{
    }



    /*ESTADO INDIFERENTE*/
    .indiferente,p{
    color:black;
    height:100%;
    width:100%;
    & .container{ background-color: #b4b7b2;
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    transition: all .3s ease;
    }
    }


    /*ESTADO ENOJADO*/
    .enojado,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: rgba(220,70,70,1);
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    transition: all .3s ease;
    }
    }


    /*ESTADO TRISTE*/

    .triste,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: rgba(80,80,200,1);
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    transition: all .3s ease;
    }
    }



    /*ESTADO FRUSTRADO*/

    .frustrado,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: #8B41AE;
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    transition: all .3s ease;
    }
    }



    /*ESTADO DESEPCIONADO*/

    .decepcionado,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: rgba(80,200,80,1);
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    transition: all .3s ease;
    }
    }



    /*ESTADO SATISFECHO*/

    .satisfecho,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: #F7B4BC;
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    transition: all .3s ease;
    }
    }




    /*ESTADO CONFIADO*/

    .confiado,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: #70DAED;
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    transition: all .3s ease;
    }
    }



    /*ESTADO DIVERTIDO*/

    .divertido,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: #F19300;
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    transition: all .3s ease;
    }
    }




    /*ESTADO FELIZ*/

    .feliz,p{
    color:white;
    height:100%;
    width:100%;
    & .container{
    background-color: rgba(250, 245, 144,1);
    background-position: center;
    background-size: cover;
    background-repeat:none;
    height:100%;
    width:100%;
    transition: all .3s ease;
    }
    }

    .rango{
    position:absolute;
    top:80%;
    left:50%;
    transform:translate(-50%, -50%);
    }


    /*********** Baseline, reset styles ***********/
    input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 24rem;
    }

    /* Removes default focus */
    input[type="range"]:focus {
    outline: none;
    }

    /******** Chrome, Safari, Opera and Edge Chromium styles ********/
    /* slider track */
    input[type="range"]::-webkit-slider-runnable-track {
    background-color: #add8e6;
    border-radius: 0.5rem;
    height: .5rem;
    }

    /* slider thumb */
    input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -12px; /* Centers thumb on the track */
    background-color: #282371;
    border-radius: 0.5rem;
    height: 3rem;
    width: 3.5rem;
    }

    input[type="range"]:focus::-webkit-slider-thumb {
    outline: 3px solid #282371;
    outline-offset: 0.125rem;
    }

    /*********** Firefox styles ***********/
    /* slider track */
    input[type="range"]::-moz-range-track {
    background-color: #add8e6;
    border-radius: 0.5rem;
    height: 2rem;
    }

    /* slider thumb */
    input[type="range"]::-moz-range-thumb {
    background-color: #282371;
    border: none; /*Removes extra border that FF applies*/
    border-radius: 0.5rem;
    height: 3rem;
    width: 1.5rem;
    }

    input[type="range"]:focus::-moz-range-thumb{
    outline: 3px solid #282371;
    outline-offset: 0.125rem;
    }
</style>

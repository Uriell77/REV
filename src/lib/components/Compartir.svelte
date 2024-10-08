<script>
    import {blur,fade, scale} from "svelte/transition";
    import { quintOut } from 'svelte/easing';
    export let qrcode2;
</script>

    <p class="fleld mt-5 ibm-plex-serif-extralight has-text-weight-bold is-size-7">
        Compartir
    </p>
        <div class="tabs is-centered" in:fade={{duration:2000}}>
            <ul>
    {#if qrcode2}

        <li>
        <section class="section has-text-centered qrmodal p-0 m-0" in:fade={{duration:2000}}>
            <img src="/qrcode.jpg" alt="im" height="400"/>
        </section>
        </li><br>
            <button class="button is-rounded is-link is-light atras" on:click="{()=>{qrcode2 =!qrcode2}}">Atras</button><br>
    {:else}
                <a class="" href="whatsapp://send?text=https://rev-psi.vercel.app/unidos"><img src="/logo-whatsapp.svg" alt="wa" width="42px"/>
                </a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://rev-psi.vercel.app/unidos"><img src="/logo-facebook.svg" alt="face" width="42px"/>
                </a>
                <a href="https://t.me/share/url?url=https://rev-psi.vercel.app/unidos&text=Congreso de Matimonio Zarza Ardiendo"><img src="/paper-plane-outline.svg" alt="tme" width="42px"/>
                </a>
                <a href="mailto:?subject=Invitacion&body=https://rev-psi.vercel.app/unidos"><img src="/mail-outline.svg" alt="mail" width="42px"/>
                </a>
                <a href="#"><img src="/qr-code-outline.svg" alt="mail" width="42px" on:click="{()=>{qrcode2 =!qrcode2}}"/>
                </a>
    {/if}
            </ul>
        </div>

<style>

    .atras{
        position:absolute;
        top:12rem;
    }

    .qrmodal{
    position:absolute;
    top:40%;
    left:50%;
    transform:translate(-50%, -50%);
    }
</style>

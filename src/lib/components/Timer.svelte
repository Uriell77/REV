<script>
    import {onMount} from 'svelte';
    export let name = "name";
    export let value;
    export let size = 350;



</script>


<div class="container">



    {#if value}
    <div class="columns is-centered is-mobile">
        <div class="column is-half-desktop is-full-mobile p-0 m-0">
            <div class="tag  content has-text-centered py-0" >
                <h1 class="has-text-white has-text-centered concert-one-regular" style:font-size="{size}%">{value}</h1>
                <div class="tag head has-text-centered">{name}</div>
            </div>
        </div>
    </div>
{:else}
    <figure class="image is-64x64">
        <img src="/loading.gif" alt="load">
    </figure>
{/if}






</div>


   





<style>

    .content{ 
        --name: unset;
        position:relative;
        min-height: 5rem;
        min-width: 5rem;
        background-color:rgba(1,5,10,.4);
        color: white;
        border-radius:30px;
        z-index:100;
    }



    .head{ 
        content: var(--name);
        z-index:10;
        position:absolute; 
        top:-40px;
        left:-18px;
        width: 7rem;
        height: 3rem;
        background-color:rgba(1,5,10,0);
        color: white;
        border-radius: 30px;
        font-size:15px;
        padding-top:10px;
    }





</style>

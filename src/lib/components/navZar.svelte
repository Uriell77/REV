<script>
    import zalogo from "$lib/images/zalogo2.png";
    export let theme = "is-original";
    export let red ="";
</script>

        <nav class="navbar has-text-centered {theme}">
            <div class="navbar-brand has-text-centered">
                <figure class="image is-96x96">
                    <img src="{zalogo}"
                        alt="zalogo"
                        class="succ is-rounded"
                        width="83rem"
                        height="83rem"
                    />
                </figure>
                <div class="navbar-item has-text-centered ">
                    <div class="has-text-centered container">
                        <small>
                            Iglesia Evangelica Pentecostal<br>
                        </small>
                        <big class="has-text-white has-text-weight-bold">
                            La Zarza Ardiendo<br>
                        </big>
                        <small class="is-size-7 has-text-white">
                            Un Refugio para la Familia<br>
                            {red}
                        </small>
                    </div>
                </div>

            </div>
        </nav>

<style>
    .is-original{
    background-image: linear-gradient( 179deg,  rgba(0,0,0,1) 9.2%, rgba(127,16,16,1) 209.9% );
    mask-image: linear-gradient(black 90%,transparent);
    }

    .is-transparent{
    background-color:rgba(1,1,1,0) !important;
    }

    .navbar-item {
    position:relative;
    left:30%;
    transform:translate(-50%);
        
    }

</style>

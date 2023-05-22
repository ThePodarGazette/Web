<script>
    //TODO: Find a way to fix anims
    // import { blur } from 'svelte/transition'
    import Back from "$lib/Back.svelte";
    import Navigation from "./Navigation.svelte";
    
    // let transitioning = false;

</script>

<!-- {#if !transitioning} -->
    <Back/>
    <div class="page" >
    <!-- transition:blur> -->
        <slot/>
        <Navigation/>
        <!-- on:transition={ transitioning = true } -->
    </div>
<!-- {/if} -->

<style>
    .page{
        background-color: var(--base2);
        border-radius: 5px;
        padding: 5vw;
        width: 80vw;
        margin: 5vw;
        margin-top: 12vw;
        opacity: 0;
        transition: 180ms opacity;
    }
    .page{
        opacity: 1;
    }
</style>
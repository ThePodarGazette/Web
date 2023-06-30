<script>
    //TODO: Find a way to fix anims
    // import { blur } from 'svelte/transition'
    import Back from "$lib/Back.svelte";
    import Navigation from "./Navigation.svelte";
    import { strOnPage, strIssueMonth } from "./stores";
    // let transitioning = false;
    let issueMonth
    strIssueMonth.subscribe(value => {
        issueMonth = value
    })
    export let Page = 0
    export let title = ""
    strOnPage.set(Page)
</script>

<svelte:head>
    <title>The Podar Gazette | {issueMonth} | {title}</title>
</svelte:head>
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
        width: 80vws;
        margin: 5vw;
        margin-top: 12vw;
        opacity: 0;
        transition: 180ms opacity;
    }
    .page{
        opacity: 1;
    }
</style>
<script>
    import { page } from '$app/stores';
    console.log($page.error.message);
</script>
<div class="message">Well this is concerning.</div>
<div class="errormessage">
    <div class="errorcode">
        {#if $page.error.message === "Not Found"}
            <h1>404</h1>
        {:else}
            <h1>oh no</h1>
        {/if}
        {#if $page.error.message === "Not Found"}
            <h3 style="font-size: large;">Go <a href="/">home</a>?</h3>
            {/if}
        </div>
    </div>
<style>
    .message{
        font-size: larger;
        margin: 1vw;
        color: var(--base3);
        position: fixed;
    }
    .errormessage .errorcode{
        margin: auto;
    }
    .errormessage{
        background-color: var(--base);
        background-image: url("/PatternDark.svg") !important;
        background-position: 78vw;
        background-repeat: no-repeat;
        background-size: 14vh;

        display: flex;
        flex-direction: column;
        font-size: xx-large;
        text-align: center;
        width: 100vw;
        height: 100vh;
        /* margin: 18vh calc(62vw - 10rem); */
    }

    @media (prefers-color-scheme: light) {
        .errormessage{
            background-image: url("/PatternLight.svg") !important;
        }
    }
    @media (min-width: 719px) {
        .errormessage{
            background-position: 85vw;
        }
    }

    @media (min-width: 900px) {
        .errormessage{
            background-position: 89vw;
        }
    }
</style>
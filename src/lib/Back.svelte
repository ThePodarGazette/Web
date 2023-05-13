<script>
    import { createEventDispatcher } from 'svelte';

    const transition = createEventDispatcher();

    const delay = ms => new Promise(res => setTimeout(res, ms));

</script>


<button class="back" on:click={() => {
        delay(180)
        location.href = "/"
    }}>
    <div>
        ←
    </div>
</button>

<style>
    .back{
        font-family: "Roboto Slab", sans-serif;
        background-color: var(--base3);
        color: var(--text);
        text-decoration: none;
        width: 2.3em;
        height: 2.3em;
        display: flex;
        border-radius: 5px;
        margin: 5vw 5vw;
        margin-bottom: -8vw;
        /* position: fixed; */
        user-select: none;
        opacity: 1;
        transition: opacity var(--animSpeed);
        box-shadow: 0px 5px 40px -3px var(--base);
    }
    .back:hover{
        opacity: 0.9;
    }
    .back div{
        margin:auto;
    }
</style>
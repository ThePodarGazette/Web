<script>

    import Back from "./Back.svelte";

</script>

<Back/>
<div class="page">
    <slot/>
</div>

<style>
    .page{
        box-shadow: 0px 5px 40px -3px var(--base);
        background-color: var(--base2);
        border-radius: 5px;
        padding: 5vw;
        width: 80vw;
        margin: 5vw;
        margin-top: 12vw;
    }
</style>
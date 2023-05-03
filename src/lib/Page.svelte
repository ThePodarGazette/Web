<script>
    import Back from "$lib/Back.svelte";
</script>

<Back/>
<div class="page">
    <slot/>
</div>

<style>
    .page{
        background-color: var(--base2);
        border-radius: 5px;
        padding: 5vw;
        width: 80vw;
        margin: 5vw;
        margin-top: 12vw;
    }
</style>
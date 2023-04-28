<script lang=ts>
    export let issueName:string
    export let isNew:boolean = false
    import Image from "./Image.svelte";
</script>

<a href="/Issues/{ issueName }" title="{ issueName }">
    <Image disableAnims src="IssuePrevs/{ issueName }.jpg" alt="poster"/>
    <div class="description" class:new={isNew}>
        { issueName }
    </div>
</a>

<style>
    a{
        margin: 2vw auto;
        display: flex;
        flex-direction: column;
        background-color: var(--base2);
        border-radius: 10px;
        padding: 1em;
        padding-bottom: 0.3em;
        text-decoration: none !important;
        opacity: 1;
        transition: opacity 260ms;
    }
    a:hover{
        opacity: 0.9;
    }

    .description{
        margin: 1em auto;
        color: var(--text);
    }

    .new::before{
        content: "• ";
        color: var(--accent);
        font-size: large;
    }
</style>
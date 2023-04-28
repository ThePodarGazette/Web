<script lang="ts">
    export let src:string
    export let alt:string
    export let isLeft:boolean = false
    import Image from "./Image.svelte";
    console.log(isLeft)
</script>

<div class="inlineImg" class:isLeft={isLeft}>
    <Image src={ src } alt={ alt } />
    <div>
        <slot>

        </slot>
    </div>
</div>

<style>
    .inlineImg{
        display: flex;
        flex-direction: row;
    }
    .isLeft{
        flex-direction: row-reverse;
    }
    .inlineImg div{
        margin: 0em 1em;
    }
</style>
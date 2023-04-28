<script lang=ts>
    export let src:string
    export let alt:string
    export let disableAnims:boolean = false
</script>

<img src="{ src }" alt="{ alt }" class:disableAnims={disableAnims}>

<style>
    .disableAnims:hover{
        filter: brightness(1) !important;
    }
    img{
        max-width: 40vw;
        user-select: none;
        border-radius: 5px;
        transition: filter 260ms;
        object-fit: cover;
    }
    img:hover{
        filter: brightness(0.9);
    }
    img:active{
        object-fit: scale-down;
    }
</style>

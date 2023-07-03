<script lang=ts>
    export let src:string
    export let alt:string = "This image failed to load"
    export let disableAnims:boolean = false
</script>

<img src="{ src }" alt="{ alt }" class:disableAnims={disableAnims}>

<style>
    .disableAnims:hover{
        filter: brightness(1);
    }

    img{
        background-color: var(--base);
        max-width: 40vw;
        user-select: none;
        border-radius: 5px;
        transition: filter var(--animSpeed);
        object-fit: cover;
    }

    img:hover{
        filter: brightness(1.1);
    }
    
    img:active{
        object-fit: scale-down;
    }
</style>

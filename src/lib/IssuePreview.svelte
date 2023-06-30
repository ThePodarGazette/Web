<script lang=ts>
    export let issueName:string
    export let issueMonth:string
    export let isNew:boolean = false
    import Image from "./Image.svelte";
</script>

<a href="/Issues/{ issueMonth }" title="{ issueMonth }">
    <!-- Hardcoded poster name + location to ensure consistency -->
    <Image disableAnims src="Issues/{ issueMonth }/1.jpg" alt="A poster of the { issueMonth } Issue"/>
    <div class="description">
        <div class="name">
            { issueName }
        </div>
        <div class="month" class:new={ isNew }>
            { issueMonth }
        </div>
    </div>
</a>

<style>
    .name{
        font-size: small;
        text-align: center;
    }
    .month{
        margin-top: 0.2em;
        font-size: x-small;
        text-align: center;
        color: var(--subtext);
    }

    a{
        margin: 2vw auto;
        display: flex;
        flex-direction: column;
        background-color: var(--base2);
        border-radius: 5px;
        padding: max(2vw, 1em);
        padding-bottom: 2vw;
        width: 20vw;
        text-decoration: none;
        transition: filter var(--animSpeed);
    }
    
    a:hover{
        filter: brightness(1.1);
    }

    .description{
        margin: 2vw;
        color: var(--text);
        margin-bottom: 0.5vw;
    }

    .new::after{
        margin-left: 2px;
        content: "• ";
        color: var(--accent);
        font-size: large;
    }
    
    .new{
        margin-top: -0.3ch;
        margin-left: calc(1.2ch + 2px);
    }
</style>
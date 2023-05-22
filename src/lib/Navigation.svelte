<script>
    import { strContents, strOnPage, strIssueMonth } from "./stores.js";    
    
    let contents, onPage, issueMonth

    strContents.subscribe((value) => contents = value)
    strOnPage.subscribe((value) => onPage = value)
    strIssueMonth.subscribe((value) => {issueMonth = value})
    
    let nav = []

    for (let i = 0; i < contents.length; i++) {
        let type
        switch (i - 1) {
            case 0:  
                type = "The Writers Labyrinth"
                break;
            case 1:
                type = "Artsy Nook"
                break;
            case 2:
                type = "Melodys Mirage"
                break;
            case 3:
                type = "Your Fellow Bibliophile"
                break;
            case 4:
                type = "Ads"
                break;
            default:
                break;
        }
        for (let f = 0; f < contents[i].length; f++) {
            nav.push(`${type}/${f + 1}`)
        }
    }
    
    import { createEventDispatcher } from 'svelte';

	const transition = createEventDispatcher();

    // i am running out of names
    function transitionTime(){
        transition('transition');
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));
</script>

<div class="navigation">
    <button href={`/I${issueMonth}/${nav[onPage - 1]}`} disabled={onPage == 0} class="back" on:click={()=>{
        strOnPage.set(onPage-1)
        transitionTime()
        delay(180)
        location.href = `/Issues/${issueMonth}/${nav[onPage]}`
     }}>
        <div>
            ←
        </div>
    </button>
    <div class="currentpage">
        <div>
            {onPage}/3
        </div>
    </div>
    <button disabled={onPage == nav.length} class="next" on:click={()=>{
            strOnPage.set(onPage+ 1)
            transitionTime()
            delay(180)
            location.href = `/Issues/${issueMonth}/${nav[onPage]}`
         }}>
        <div>
            →
        </div> 
    </button>
</div>

<style>
    .navigation{
        margin-top: 2em;
        display: flex;
        flex-direction: row;
        width: auto;
        justify-content: space-between;
        background-color: var(--base3);
        padding: 1vw;
        border-radius: 5px;
    }
    .currentpage{
        font-family: "Roboto Slab", sans-serif;
        background-color: var(--base3);
        color: var(--text);
        display: flex;
        border-radius: 5px;
        user-select: none;
        padding: 0em 2em;
        opacity: 1;
    }
    .currentpage div{
        margin: auto;
        font-size: small;
    }
    button{
        transition: 180ms filter;
    }
    button:hover{
        filter: brightness(1.2);
    }
    button:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }
    button:disabled:hover{
        filter: none;
    }
</style>
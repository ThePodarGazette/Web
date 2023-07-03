<script>
    import { strContents, strOnPage, strIssueMonth, strIssueArticlesTypes } from "$lib/stores.js";    
    
    let contents = []
    let onPage = 0
    let issueMonth = ""
    let issueArticleTypes = []
    
    let url

    strContents.subscribe(value => {
        contents = value;
    })
    strOnPage.subscribe(value => {
        onPage = value;
    })
    strIssueMonth.subscribe(value => {
        issueMonth = value;
    })
    strIssueArticlesTypes.subscribe(value => {
        issueArticleTypes = value;
    })
    
    function generateNavList(issueMonth ,contents, issueArticleTypes) {
        let navigationList = []
        for (let i = 0; i < issueArticleTypes.length; i++) {
    
            let topics = issueArticleTypes[i];
    
            for (let o = 0; o < contents[i].length; o++) {
                navigationList.push(`/Issues/${issueMonth}/${topics}/${o + 1}`);
            }
        }
        return navigationList
    }

    const nav = generateNavList(issueMonth ,contents, issueArticleTypes)
</script>

<div class="navigation">
    <button disabled={onPage === 0} on:click={()=>{
        if (onPage === 1) {
            url = "/Issues/" + issueMonth
        }
        else{
            url = nav[onPage - 2]
        }
        onPage--
    }}>
        <a href="{url}">
            ←
        </a>
    </button>
    <div class="currentpage">
        <div>
            {onPage}/{nav.length}
        </div>
    </div>
    <button disabled={onPage === nav.length} on:click={()=>{
        onPage++
        url = nav[onPage - 1]
    }}>
        <a href="{url}">
            →
        </a> 
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

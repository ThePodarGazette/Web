<script>

    import { strContents, strIssueMonth, strIssueArticlesTypes } from "$lib/stores.js";
    
    let content = [""] 
    let issueArticleTypes
    let issueMonth = ""

    strContents.subscribe(value => { content = value })
    strIssueArticlesTypes.subscribe(value => { issueArticleTypes = value })
    strIssueMonth.subscribe(value => { issueMonth = value })
</script>

<h1>Contents.</h1>
<dl>
    {#each issueArticleTypes as topic, i}
        <dt>
            { topic }
        </dt>
        {#each content[i] as contents, o}
            <dd>
                <a href="/Issues/{ issueMonth }/{ topic }/{ o + 1 }">
                    { contents }
                </a>
            </dd>
        {/each}
    {/each}
</dl>

<style>
    a::before{
        content: "• ";
    }
    a{
        text-decoration: none;
    }
    dl{
        margin-left: 5vw;
    }
</style>
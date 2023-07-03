<script lang="ts">

    import { strContents, strIssueMonth } from "$lib/stores";
    
    let content = [""], issueMonth:string

    strContents.subscribe(value => { content = value })
    strIssueMonth.subscribe(value => { issueMonth = value })
</script>

<h1>Contents.</h1>
<dl>
    <dt>
        The Writers Labyrinth
    </dt>
    {#each content[0] as i, a}
        <dd>
            <a href="/Issues/{ issueMonth }/The Writers Labyrinth/{ a + 1 }">
                { i }
            </a>
        </dd>
    {/each}
    <dt>
        The Artsy Nook
    </dt>
    {#each content[1] as i, a}
        <dd>
            <a href="/Issues/{ issueMonth }/Artsy Nook/{ a + 1 }">
                { i }
            </a>
        </dd>
    {/each}
    <dt>
        The Melody's Mirage
    </dt>
    {#each content[2] as i, a}
        <dd>
            <a href="/Issues/{ issueMonth }/Melodys Mirage/{ a + 1 }">
                { i }
            </a>
        </dd>
    {/each}
    <dt>
        Your Fellow Bibliophile
    </dt>
    {#each content[3] as i, a}
        <dd>
            <a href="/Issues/{ issueMonth }/Your Fellow Bibliophile/{ a + 1 }">
                { i }
            </a>
        </dd>
    {/each}
    <dt>
        Hidden Hobbies
    </dt>
    {#each content[4] as i, a}
        <dd>
            <a href="/Issues/{ issueMonth }/Hidden Hobbies/{ a + 1 }">
                { i }
            </a>
        </dd>
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
<script lang="ts">

    import { strContents, strIssueMonth } from "../stores";
    
    let content = { 
        // The Writers Labyrinth
        TWL: [""],
        // Artsy Nook
        AN: [""],
        // Melodys Mirage
        MM: [""],
        // Your Fellow Bibliophile
        YFB: [""],
        // Hidden Hobbies
        ADS: [""]
    }
    let issueMonth = ""

    strContents.subscribe(value => {
        content = value
    })
    strIssueMonth.subscribe(value => {
        issueMonth = value
    })
</script>

<h1>Contents.</h1>
<dl>
    <dt>
        The Writers Labyrinth
    </dt>
    {#each content.TWL as i, n}
        <dd>
            <a href="/Issues/{ issueMonth }/The Writers Labyrinth/{ n + 1 }">
                { i }
            </a>
        </dd>
    {/each}
    <dt>
        The Artsy Nook
    </dt>
    {#each content.AN as i, n}
        <dd>
            <a href="/Issues/{ issueMonth }/Artsy Nook/{ n + 1 }">
                { i }
            </a>
        </dd>
    {/each}
    <dt>
        The Melody's Mirage
    </dt>
    {#each content.MM as i, n}
        <dd>
            <a href="/Issues/{ issueMonth }/Melody's Mirage/{ n + 1 }">
                { i }
            </a>
        </dd>
    {/each}
    <dt>
        Your Fellow Bibliophile
    </dt>
    {#each content.YFB as i, n}
        <dd>
            <a href="/Issues/{ issueMonth }/Your Fellow Bibliophile/{ n + 1 }">
                { i }
            </a>
        </dd>
    {/each}
    <dt>
        Hidden Hobbies
    </dt>
    {#each content.ADS as i, n}
        <dd>
            <a href="/Issues/{ issueMonth }/Hidden Hobbies/{ n + 1 }">
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
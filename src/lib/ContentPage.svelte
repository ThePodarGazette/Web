<script>
    import Page from "./Page.svelte";
    import ContentList from "./ContentList.svelte";
    import { strIssueMonth, strIssueName, strOnPage } from "$lib/stores.js";

    let issueMonth, issueName

    strIssueMonth.subscribe(value => { issueMonth = value })
    strIssueName.subscribe(value => { issueName = value })
    strOnPage.set(0)
</script>

<Page>
    <div class="content">
        <h1>{ issueMonth } 2023.</h1>
        <h3>{ issueName }</h3>
        <ContentList/>
    </div>
</Page>
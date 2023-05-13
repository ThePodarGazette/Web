<script lang="ts">
    import Page from "./Page.svelte";
    import ContentList from "./ContentList.svelte";
    import { strIssueMonth, strIssueName } from "../stores";

    let issueMonth:string, issueName:string

    strIssueMonth.subscribe(value => { issueMonth = value })
    strIssueName.subscribe(value => { issueName = value })
</script>

<Page pageNo=0>
    <div class="content">
        <h1>{ issueMonth } 2023.</h1>
        <h3>{ issueName }</h3>
        <ContentList/>
    </div>
</Page>
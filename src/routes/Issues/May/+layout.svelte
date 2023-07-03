<script>
    import { strContents, strIssueMonth, strIssueName, strOnPage, strIssueArticlesTypes } from "$lib/stores.js";
    strIssueArticlesTypes.set([
        "Start here",
        "Announcements",
        "Dear diary",
        "Shimmering summers",
        "Book review",
        "Heritage segment",
        "STEM segment",
        "Artsy nook",
        "Writer's labyrinth",
        "Melody's mirage",
        "Acheivers",
        "Ads",
        "Puzzles",
        "Comics",
        "Credits"
    ]);
    strContents.set(
    [
        ["Coverpage", "April Special"],
        ["Note from our beloved Principal"],
        ["Its the last day of April.."],
        ["Romanticising Summer", "The Lonely Side of Summer"],
        ["Midsummer Mysteries Book Review"],
        ["Ek Achaar ki Barni"],
        ["Chat GPT - A Tech Revolution"],
        ["May submissions"],
        ["Serenity in nature", "100 Days on an Island (Part 1)"],
        ["May Submissions"],
        ["Acheivers page"],
        ["Exiled Stars by Anushka darda"],
        ["Summer Crossword 1","Summer Crossword 2"],
        ["May Page 1","May Page 2"],
        ["A Generous thank you to all contributors"]
    ])
    strOnPage.set(0)
    strIssueMonth.set("May")
    strIssueName.set("Shimmering simmering summer")
</script>

<slot>
</slot>

<style>

</style>

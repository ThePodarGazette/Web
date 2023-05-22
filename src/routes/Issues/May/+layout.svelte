<script>
    import { strContents, strIssueMonth, strIssueName, strOnPage } from "$lib/stores.js";
    strContents.set([
            // The Writers Labyrinth
            ["NO IDEA"],
            // Artsy Nook
            ["HUGE NERD STUFF"],
            // Melodys Mirage
            ["WHERE ARE THE COMICS??"],
            // Your Fellow Bibliophile
            ["hjgsfjsgdjhsgdfhjgjs"],
            // Hidden Hobbies
            ["BORING!!","also i wanted to test", "if you could put multiple things here"]
    ])
    strOnPage.set(0)
    strIssueMonth.set("May")
    strIssueName.set("Shimmering simmering summer")
</script>

<slot>
</slot>

<style>

</style>
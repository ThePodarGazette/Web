<script>
    import IssuePreview from "$lib/IssuePreview.svelte";
</script>
<body>
    <div class="newsStand">
        <IssuePreview issueName="May" isNew/>
    </div>

    <div class="welcome">
        <h1>Welcome to the podar gazette homepage</h1>
        <h3>We're a monthly student run newspaper</h3>
        To get started click on one of the articles on the left.
        <svg class="arrow" viewBox="0 0 200 200">
            <defs id="defs1979" />
            <sodipodi:namedview
                id="namedview1977"/>
                <g
                    id="g1981"
                    transform="matrix(3.7795276,0,0,3.7795276,-1177.382,-927.86019)">
                    <path
                        style="fill:none;stroke:var(--base3);stroke-width:0.833502;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:2.50051, 2.50051;stroke-dashoffset:0"
                        d="m 328.57947,245.91309 c 0,8.3322 -2.30741,17.13139 -16.63202,17.03856"
                        id="path1207"/>
                    <path
                        style="fill:none;stroke:var(--base3);stroke-width:1;stroke-linecap:round;stroke-linejoin:round"
                        d="m 314.49942,260.30664 -2.4838,2.58749 2.87332,2.14668"
                        id="path1419">
                    </path>
                </g>
        </svg>
    </div>
</body>

<style>
    body{
        background-color: var(--base);
        color: var(--text);
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .newsStand::-webkit-scrollbar {
        display: none;
    }
    .newsStand{
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        height: 100vh;
        width: 50vw;
        background-color: var(--base);
    }
    .arrow{
        margin-top: 0.2em;
    }
    .welcome{
        /* color: var(--base); */
        margin-top: 5vw;
    }
</style>

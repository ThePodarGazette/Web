<script>
    import IssuePreview from "$lib/IssuePreview.svelte";
</script>

<div class="body"> <!-- i know this is funny but sveltekit for some reason ignores changes to body across pages leading to weird breakages -->
    <div class="newsStand">
        <IssuePreview isNew issueMonth="May" issueName="Simmering Shimmering Summers"/>
    </div>

    <div class="welcome">
        <h1>Welcome to the podar gazette homepage.</h1>
        <h3>We're a monthly <br/> student-run newspaper</h3>
        <div class="getStarted">
            To get started click on one of the articles on the left.
            <svg class="arrow" viewBox="0 0 200 200">
                <g
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
        <div class="design">
        </div>
    </div>
</div>

<style>
    .body{
        background-color: var(--base);
        background-image: url("/PatternDark.svg") !important;
        background-position: 78vw;
        background-repeat: no-repeat;
        background-size: 14vh;
        color: var(--text);
        display: grid;
        grid-template-columns: 2fr 3fr;
    }
    
    @media (prefers-color-scheme: light) {
        .body{
            background-image: url("/PatternLight.svg") !important;
        }
    }

    @media (min-width: 719px) {
        .body{
            background-position: 85vw;
        }
    }

    @media (min-width: 900px) {
        .body{
            background-position: 89vw;
        }
    }
    
    .welcome{
        display: flex;
        flex-direction: column;
        margin-top: 5vw;
        width: 42vw;
    }

    .getStarted{
        text-align: justify;
        font-size: small;
        color: var(--base3);
        font-weight: bold;
        user-select: none;
        width: 20ch;
    }

    .getStarted:hover{
        filter: brightness(1.1);
    }

    .arrow{
        margin-top: 0.1em;
        margin-bottom: -8vh;
    }

    .newsStand::-webkit-scrollbar {
        display: none;
    }

    /* :global(.newsStand div){
        margin-top: 5vw;
    } */

    .newsStand{
        margin-left: 5vw;

        /* Hide Scrollbar */
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        width: fit-content;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        height: 100vh;
        /* width: 50vw; */
        background-color: var(--base);
    }

</style>

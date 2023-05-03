//@ts-check
import { writable } from 'svelte/store';

export const strIssueMonth = writable("");
export const strIssueName = writable("")
export const strContents = writable({ 
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
});
export const strOnPage = writable(0);
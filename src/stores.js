//@ts-check
import { writable } from 'svelte/store';

export const strIssueMonth = writable("");
export const strIssueName = writable("")
export const strContents = writable([""]);
export const strOnPage = writable(0);
import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";
import { documentationNote } from "./docs";
import { apiNote } from "./api";
import { releaseNote } from "./release";

/* =================== locale: en-US ======================= */

export const enNotes = defineNotesConfig({
	dir: "docs",
	link: "/",
	notes: [documentationNote, apiNote, releaseNote],
});


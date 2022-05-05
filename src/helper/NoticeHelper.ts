import { Notice } from "obsidian";
import GoogleCalendarPlugin from "src/GoogleCalendarPlugin";

export function createNotice(
	plugin: GoogleCalendarPlugin,
	text: string,
	showNotice: boolean = true
) {
	if (plugin.settings.showNotice && showNotice) {
		new Notice(text);
	}
}
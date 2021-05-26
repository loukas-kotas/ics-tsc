export declare class ICS {
    private filename;
    private dtstamp;
    private dtstart;
    private dtend;
    private summary;
    private location;
    private description;
    private dtstampStr;
    private dtstartStr;
    private dtendStr;
    constructor(filename?: string, dtstamp?: number, dtstart?: number, dtend?: number, summary?: string, description?: string);
    exportIcs(): void;
    exportIcsWithTimezone(): void;
    private putIcsExtension;
    private formatDate;
    private formatDateWithTimezone;
    private formatDateBuilder;
    private setMonthIcsIndex;
    private setUtcTimezone;
    private forceTwoDigits;
    private getTimeZone;
    private constructIcsEvent;
    private constructIcsWithTimezone;
}

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
    getIcs(): void;
    getIcsWithTimezone(): void;
    private putIcsExtension();
    private formatDate(dateUTC);
    private formatDateWithTimezone(dateUTC);
    private formatDateBuilder(dateUTC);
    private setMonthIcsIndex(month);
    private setUtcTimezone(hours);
    private forceTwoDigits(dateItem);
    private getTimeZone();
    private constructIcsEvent();
    private constructIcsWithTimezone();
}

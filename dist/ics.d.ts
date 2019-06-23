export declare class ICS {
    filename: string;
    dtstamp: any;
    dtstart: any;
    dtend: any;
    summary: string;
    location: string;
    description: string;
    dtstampStr: string;
    dtstartStr: string;
    dtendStr: string;
    constructor(filename: string, dtstamp: number, dtstart: number, dtend: number, summary: string, location: string, description: string);
    getIcs(): void;
    putIcsExtension(): string;
    formatDate(dateUTC: any): string;
    setMonthIcsIndex(month: any): any;
    setUtcTimezone(hours: any): any;
    forceTwoDigits(dateItem: any): any;
    constructIcsEvent(): {
        _body: string;
    };
}

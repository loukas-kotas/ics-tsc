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
    constructor(filename?: string, dtstamp?: number, dtstart?: number, dtend?: number, summary?: string, description?: string);
    getIcs(): void;
    getIcsWithTimezone(): void;
    putIcsExtension(): string;
    formatDate(dateUTC: any): string;
    formatDateWithTimezone(dateUTC: any): string;
    formatDateGeneral(dateUTC: any): any[];
    setMonthIcsIndex(month: any): any;
    setUtcTimezone(hours: any): any;
    forceTwoDigits(dateItem: any): any;
    getTimeZone(): string;
    constructIcsEvent(): {
        _body: string;
    };
    constructIcsWithTimezone(): {
        _body: string;
    };
}

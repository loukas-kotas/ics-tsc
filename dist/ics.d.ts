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
    generateIcs(): void;
    getExample(): {
        _body: string;
    };
    constructIcsEvent(): {
        _body: string;
    };
    getIcs(): void;
    putIcsExtension(): void;
    formatDate(dateUTC: any): string;
    forceTwoDigits(dateItem: any): any;
}

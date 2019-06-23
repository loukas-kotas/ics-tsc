import { saveAs } from 'file-saver';


export class ICS {

    filename: string;
    dtstamp: any = {};
    dtstart: any = {};
    dtend: any = {};
    summary: string;
    location: string;
    description: string;

    dtstampStr: string;
    dtstartStr: string;
    dtendStr: string;

    constructor(
        filename?: string,
        dtstamp?: number,
        dtstart?: number,
        dtend?: number,
        summary?: string,
        location?: string,
        description?: string
    ) {
        this.filename = filename;
        this.dtstamp = dtstamp;
        this.dtstart = dtstart;
        this.dtend = dtend;
        this.summary = summary;
        this.location = location;
        this.description = description;
    }

    getIcs() {
        this.filename = this.putIcsExtension();
        this.dtstampStr = this.formatDate(this.dtstamp);
        this.dtstartStr = this.formatDate(this.dtstart);
        this.dtendStr   = this.formatDate(this.dtend);
        const response = this.constructIcsEvent();
        const blob = new Blob([response._body], { type: 'text/plain' });
        saveAs(blob, this.filename);
    }

    putIcsExtension() {
        const filename = `${this.filename}.ics`;
        return filename;
    }

    formatDate(dateUTC) {
        const datetime = new Date(dateUTC);
        const year = datetime.getFullYear();
        let month = this.setMonthIcsIndex(datetime.getMonth()); // first month: 0
        let day = datetime.getDate();
        let hours = this.setUtcTimezone(datetime.getHours()); 
        let minutes = datetime.getMinutes();
        let seconds = datetime.getSeconds();

        month     = this.forceTwoDigits(month);
        day       = this.forceTwoDigits(day);
        hours     = this.forceTwoDigits(hours);
        minutes   = this.forceTwoDigits(minutes);
        seconds   = this.forceTwoDigits(seconds);
        const result = `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
        return result;
    }

    setMonthIcsIndex(month) {
        return month + 1;
    } 

    setUtcTimezone(hours) {
        const offset = new Date().getTimezoneOffset() / 60;
        return hours + offset;
    }

    forceTwoDigits(dateItem) {
        if (dateItem.toString().length === 1) {
            return `0${dateItem}`;
        }
        return dateItem.toString();
    }

    constructIcsEvent() {
        const response = {
            _body:
           `BEGIN:VCALENDAR
VERSION:2.0
PRODID:http://www.icalmaker.com
BEGIN:VEVENT
UID:http://www.icalmaker.com/event/ed803b69-b846-49c4-a321-ccfc0ba55272
DTSTAMP:${this.dtstampStr}
DTSTART:${this.dtstartStr}
DTEND:${this.dtendStr}
SUMMARY:${this.summary}
LOCATION:${this.location}
DESCRIPTION:${this.description}
END:VEVENT
END:VCALENDAR`  
        };
        return response;
    }

}

// ----- EXAMPLE ------
// BEGIN:VCALENDAR
// VERSION:2.0
// PRODID:http://www.icalmaker.com
// BEGIN:VEVENT
// UID:http://www.icalmaker.com/event/ed803b69-b846-49c4-a321-ccfc0ba55272
// DTSTAMP:20190608T204202Z
// DTSTART:20190609T052000Z
// DTEND:20190610T063500Z
// SUMMARY:test 1
// LOCATION:Thessaloniki
// DESCRIPTION:test 1 description
// END:VEVENT
// END:VCALENDAR
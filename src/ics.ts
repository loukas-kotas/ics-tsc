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
        filename: string,
        dtstamp: number,
        dtstart: number,
        dtend: number,
        summary: string,
        location: string,
        description: string
    ) {
        this.dtstamp = {
            value: dtstamp,
            get string() {
                const result =  this.dtstamp.toString();
                return result;
            }
        }
        this.dtstart = {
            value: dtstamp,
            get string() {
                const result =  dtstamp.toString();
                return result;
            }
        }
        this.dtend = {
            value: dtstamp,
            get string() {
                const result =  dtstamp.toString();
                return result;
            }
        }

        this.filename = filename;
        this.dtstamp = dtstamp;
        this.dtstart = dtstart;
        this.dtend = dtend;
        this.summary = summary;
        this.location = location;
        this.description = description;
    }

    generateIcs() {

        const filename = 'sample-.ics';
        let response = this.getExample();
        response._body = response._body.trim();
        const blob = new Blob([response._body.trim()], { type: 'text/plain' });
        saveAs(blob, filename);    

    }

    getExample() {
        const response = {
            _body: `
            BEGIN:VCALENDAR
            VERSION:2.0
            PRODID:http://www.icalmaker.com
            BEGIN:VEVENT
            UID:http://www.icalmaker.com/event/ed803b69-b846-49c4-a321-ccfc0ba55272
            DTSTAMP:20190608T204202Z
            DTSTART: 20190609T052000Z
            DTEND: 20190610T063500Z
            SUMMARY:test 1
            LOCATION:Thessaloniki
            DESCRIPTION:test 1 description
            END:VEVENT
            END:VCALENDAR
            `
        };
        return response;
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
        // response._body = response._body.replace(/ /g,'');
        return response;
    }

    getIcs() {
        this.putIcsExtension();
        this.dtstampStr = this.formatDate(this.dtstamp);
        this.dtstartStr = this.formatDate(this.dtstart);
        this.dtendStr   = this.formatDate(this.dtend);
        const response = this.constructIcsEvent();
        const blob = new Blob([response._body], { type: 'text/plain' });
        saveAs(blob, this.filename);
    }

    putIcsExtension() {
        this.filename = `${this.filename}.ics`;
    }

    formatDate(dateUTC) {
        const datetime = new Date(dateUTC);
        const year = datetime.getFullYear();
        let month = datetime.getMonth();
        let day = datetime.getDate();
        let hours = datetime.getHours();
        let minutes = datetime.getMinutes();
        let seconds = datetime.getSeconds();

        month     = this.forceTwoDigits(month);
        day       = this.forceTwoDigits(day);
        hours     = this.forceTwoDigits(hours);
        minutes   = this.forceTwoDigits(minutes);
        seconds   = this.forceTwoDigits(seconds);
        
        // const result = datetime.toISOString().split('-').join('').split(':').join('').split('.').join('')
        const result = `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
        return result;
    }

    forceTwoDigits(dateItem) {
        if (dateItem.toString().length === 1) {
            return `0${dateItem}`;
        }
        return dateItem.toString();
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
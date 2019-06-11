import { saveAs } from 'file-saver';


export class ICS {
    constructor() {
    }

    generateIcs() {

        const filename = 'sample.ics';
        const response = this.getExample();
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
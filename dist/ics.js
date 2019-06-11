"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_saver_1 = require("file-saver");
var ICS = /** @class */ (function () {
    function ICS() {
    }
    ICS.prototype.generateIcs = function () {
        var filename = 'sample.ics';
        var response = this.getExample();
        var blob = new Blob([response._body.trim()], { type: 'text/plain' });
        file_saver_1.saveAs(blob, filename);
    };
    ICS.prototype.getExample = function () {
        var response = {
            _body: "\n            BEGIN:VCALENDAR\n            VERSION:2.0\n            PRODID:http://www.icalmaker.com\n            BEGIN:VEVENT\n            UID:http://www.icalmaker.com/event/ed803b69-b846-49c4-a321-ccfc0ba55272\n            DTSTAMP:20190608T204202Z\n            DTSTART: 20190609T052000Z\n            DTEND: 20190610T063500Z\n            SUMMARY:test 1\n            LOCATION:Thessaloniki\n            DESCRIPTION:test 1 description\n            END:VEVENT\n            END:VCALENDAR\n            "
        };
        return response;
    };
    return ICS;
}());
exports.ICS = ICS;
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

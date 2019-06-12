"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_saver_1 = require("file-saver");
var ICS = /** @class */ (function () {
    function ICS(filename, dtstamp, dtstart, dtend, summary, location, description) {
        this.dtstamp = {};
        this.dtstart = {};
        this.dtend = {};
        this.dtstamp = {
            value: dtstamp,
            get string() {
                var result = this.dtstamp.toString();
                return result;
            }
        };
        this.dtstart = {
            value: dtstamp,
            get string() {
                var result = dtstamp.toString();
                return result;
            }
        };
        this.dtend = {
            value: dtstamp,
            get string() {
                var result = dtstamp.toString();
                return result;
            }
        };
        this.filename = filename;
        this.dtstamp = dtstamp;
        this.dtstart = dtstart;
        this.dtend = dtend;
        this.summary = summary;
        this.location = location;
        this.description = description;
    }
    ICS.prototype.generateIcs = function () {
        var filename = 'sample-.ics';
        var response = this.getExample();
        response._body = response._body.trim();
        var blob = new Blob([response._body.trim()], { type: 'text/plain' });
        file_saver_1.saveAs(blob, filename);
    };
    ICS.prototype.getExample = function () {
        var response = {
            _body: "\n            BEGIN:VCALENDAR\n            VERSION:2.0\n            PRODID:http://www.icalmaker.com\n            BEGIN:VEVENT\n            UID:http://www.icalmaker.com/event/ed803b69-b846-49c4-a321-ccfc0ba55272\n            DTSTAMP:20190608T204202Z\n            DTSTART: 20190609T052000Z\n            DTEND: 20190610T063500Z\n            SUMMARY:test 1\n            LOCATION:Thessaloniki\n            DESCRIPTION:test 1 description\n            END:VEVENT\n            END:VCALENDAR\n            "
        };
        return response;
    };
    ICS.prototype.constructIcsEvent = function () {
        var response = {
            _body: "BEGIN:VCALENDAR\n            VERSION:2.0\n            PRODID:http://www.icalmaker.com\n            BEGIN:VEVENT\n            UID:http://www.icalmaker.com/event/ed803b69-b846-49c4-a321-ccfc0ba55272\n            DTSTAMP:" + this.dtstampStr + "\n            DTSTART:" + this.dtstartStr + "\n            DTEND:" + this.dtendStr + "\n            SUMMARY:" + this.summary + "\n            LOCATION:" + this.location + "\n            DESCRIPTION:" + this.description + "\n            END:VEVENT\n            END:VCALENDAR"
        };
        // response._body = response._body.replace(/ /g,'');
        return response;
    };
    ICS.prototype.getIcs = function () {
        this.putIcsExtension();
        this.dtstampStr = this.formatDate(this.dtstamp);
        this.dtstartStr = this.formatDate(this.dtstart);
        this.dtendStr = this.formatDate(this.dtend);
        var response = this.constructIcsEvent();
        var blob = new Blob([response._body], { type: 'text/plain' });
        file_saver_1.saveAs(blob, this.filename);
    };
    ICS.prototype.putIcsExtension = function () {
        this.filename = this.filename + ".ics";
    };
    ICS.prototype.formatDate = function (dateUTC) {
        var datetime = new Date(dateUTC);
        var year = datetime.getFullYear();
        var month = datetime.getMonth();
        var day = datetime.getDate();
        var hours = datetime.getHours();
        var minutes = datetime.getMinutes();
        var seconds = datetime.getSeconds();
        month = this.forceTwoDigits(month);
        day = this.forceTwoDigits(day);
        hours = this.forceTwoDigits(hours);
        minutes = this.forceTwoDigits(minutes);
        seconds = this.forceTwoDigits(seconds);
        // const result = datetime.toISOString().split('-').join('').split(':').join('').split('.').join('')
        var result = "" + year + month + day + "T" + hours + minutes + seconds + "Z";
        return result;
    };
    ICS.prototype.forceTwoDigits = function (dateItem) {
        if (dateItem.toString().length === 1) {
            return "0" + dateItem;
        }
        return dateItem.toString();
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

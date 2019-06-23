"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_saver_1 = require("file-saver");
var ICS = (function () {
    function ICS(filename, dtstamp, dtstart, dtend, summary, description, location) {
        this.dtstamp = {};
        this.dtstart = {};
        this.dtend = {};
        this.filename = filename;
        this.dtstamp = dtstamp;
        this.dtstart = dtstart;
        this.dtend = dtend;
        this.summary = summary;
        this.description = description;
        this.location = location;
    }
    ICS.prototype.getIcs = function () {
        this.filename = this.putIcsExtension();
        this.dtstampStr = this.formatDate(this.dtstamp);
        this.dtstartStr = this.formatDate(this.dtstart);
        this.dtendStr = this.formatDate(this.dtend);
        var response = this.constructIcsEvent();
        var blob = new Blob([response._body], { type: 'text/plain' });
        file_saver_1.saveAs(blob, this.filename);
    };
    ICS.prototype.putIcsExtension = function () {
        var filename = this.filename + ".ics";
        return filename;
    };
    ICS.prototype.formatDate = function (dateUTC) {
        var datetime = new Date(dateUTC);
        var year = datetime.getFullYear();
        var month = this.setMonthIcsIndex(datetime.getMonth()); // first month: 0
        var day = datetime.getDate();
        var hours = this.setUtcTimezone(datetime.getHours());
        var minutes = datetime.getMinutes();
        var seconds = datetime.getSeconds();
        month = this.forceTwoDigits(month);
        day = this.forceTwoDigits(day);
        hours = this.forceTwoDigits(hours);
        minutes = this.forceTwoDigits(minutes);
        seconds = this.forceTwoDigits(seconds);
        var result = "" + year + month + day + "T" + hours + minutes + seconds + "Z";
        return result;
    };
    ICS.prototype.setMonthIcsIndex = function (month) {
        return month + 1;
    };
    ICS.prototype.setUtcTimezone = function (hours) {
        var offset = new Date().getTimezoneOffset() / 60;
        return hours + offset;
    };
    ICS.prototype.forceTwoDigits = function (dateItem) {
        if (dateItem.toString().length === 1) {
            return "0" + dateItem;
        }
        return dateItem.toString();
    };
    ICS.prototype.constructIcsEvent = function () {
        var response = {
            _body: "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:http://www.icalmaker.com\nBEGIN:VEVENT\nUID:http://www.icalmaker.com/event/ed803b69-b846-49c4-a321-ccfc0ba55272\nDTSTAMP:" + this.dtstampStr + "\nDTSTART:" + this.dtstartStr + "\nDTEND:" + this.dtendStr + "\nSUMMARY:" + this.summary + "\nLOCATION:" + this.location + "\nDESCRIPTION:" + this.description + "\nEND:VEVENT\nEND:VCALENDAR"
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

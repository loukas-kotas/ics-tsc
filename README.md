# ICS-TSC

## General
A library, written in Typescript, that exports ICS (icalendar) event files based on RFC5545.
Event files are being exported in UTC time format, so there are no timezone compatibility issues.
Deviation from UTC time is being calculated according to the timezone offset of the current browser time.


## Compatibility

* Google Calendar 
* Calendar (MacOS)
* Microsoft Outlook

## Paremeters

    * filename    (string) : name of your ics file
    * dtstamp     (number) : timestamp of event creation
    * dtstart     (number) : date of when event begins 
    * dtend       (number) : date of when event ends 
    * summary     (string) : title of the event
    * description (string) : description of the event 
    * location    (string) : location of the event [optional]
    
## Instrcutions

1) Create new Date
2) Get UTC timestamp of the Date
3) Create new ICS class instancef
4) export ICS using exportICS()

### Example 
``` javascript
    const datetimeStart = new Date('2019-06-30T16:00:00Z');
    const datetimeEnd   = new Date('2019-06-30T18:00:00Z');
    const filename = 'event';
    const dtstamp = new Date().getTime();
    const dtstart = datetimeStart.getTime();
    const dtend = datetimeEnd.getTime();
    const summary = 'Title of the event';
    const description = 'Description of the event';

    const ics = new ICS(filename, dtstamp, dtstart, dtend, summary, description);
    ics.getIcs();

```



    
## Authors

* **Loukas Kotas** 

## Licence
This project is licensed under the MIT License. Read the LICENSE file for further details.

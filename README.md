# ICS-TSC

## Usage

1) Re-format all your dates to UTC format
    * e.g '2019-06-23T18:30:38.100Z' --> '1561314638100';

2) Create a new ICS instance
    * new ICS(filename, dtstamp, dtstart, dtend, summary, description, location)



## Paremeters

    * filename    (string) : name of your ics file
    * dtstamp     (number) : timestamp of event creation
    * dtstart     (number) : date of when event begins 
    * dtend       (number) : date of when event ends 
    * summary     (string) : title of the event
    * description (string) : description of the event 
    * location    (string) : location of the event [optional]
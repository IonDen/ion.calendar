![ion.calendar](_tmp/logo-ion-calendar.png)

> English description | <a href="readme.ru.md">Описание на русском</a>

jQuery-calendar and datepicker, based on powerful library to work with time - Moment.js

***

* Version: 2.0.2
* <a href="http://ionden.com/a/plugins/ion.calendar/en.html">Project page and demos</a>
* <a href="http://ionden.com/a/plugins/ion.calendar/ion.calendar-2.0.2.zip">Download ZIP</a>

## Description
* Ion.Calendar based on powerful library to work with time - Moment.js.
* Supports all languages, date formats and parsing abilities as Moment.js.
* Calendar and datepicker in one.
* Is fully customizable via CSS.
* Calendar is flexible, can be placed in any content.
* Supports multiple working calendars at one page.
* Crossbrowser: Google Chrome, Mozilla Firefox, Opera, Safari, IE(8.0+)
* Ion.Calendar supports touch-devices (iPhone, iPad, etc.).
* Ion.Calendar is freely distributed under terms of <a href="http://ionden.com/a/plugins/licence-en.html" target="_blank">MIT licence</a>.

## Dependencies
* <a href="http://jquery.com/" target="_blank">jQuery 1.9+</a>
* <a href="http://momentjs.com/" target="_blank">Moment.js 2.1+</a>

## Using script

Import this libraries:
* jQuery
* moment-with-locales.min.js
* ion.calendar.min.js

And CSS:
* normalize.min.css - desirable if you have not yet connected one
* ion.calendar.css


Prepare base block:
```html
<div class="myCalendar" id="myCalendar-1"></div>
```

Initialize calendar:
```javascript
$("#myCalendar-1").ionCalendar();
```

Or initialize calendar with custom settings:
```javascript
$("#myCalendar-1").ionCalendar({
    lang: "ru",                     // language
    sundayFirst: false,             // first week day
    years: "80",                    // years diapason
    format: "DD.MM.YYYY",           // date format
    onClick: function(date){        // click on day returns date
        console.log(date);
    }
});
```

## Making datepicker

Prepare base input field:
```html
<input class="myInput" id="myDatePicker-1" data-lang="ru" data-years="1995-2013" data-sundayfirst="false" />
```

Initialize datepicker:
```javascript
$("#myDatePicker-1").ionDatePicker();
```


## Settings

<table class="options">
    <thead>
        <tr>
            <th>Property</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>lang</td>
            <td>"en"</td>
            <td>An optional parameter that allows you to set the language of the calendar. Each additional language requires <a href="https://github.com/timrwood/moment/tree/develop/min/lang" target="_blank">its own localization file</a></td>
        </tr>
        <tr>
            <td>sundayFirst</td>
            <td>true</td>
            <td>An optional parameter that allows you to choose the first day of the week in the calendar. (For example in the U.S. week starts on Sunday in Russia on Monday). If <code>true</code> - then the first day will be Sunday, if <code>false</code> - it will be Monday.</td>
        </tr>
        <tr>
            <td>years</td>
            <td>"80"</td>
            <td>An optional parameter that specifies the years range, for calendar to operate with. It may take 1 or 2 values separated by a hyphen. The values must be integers. A single value, such as "80" means that years range is: 80 years ago - the present year. Values separated by a hyphen, such as "1900-2000" sets the exact diapason from 1900, until the year 2000.</td>
        </tr>
        <tr>
            <td>format</td>
            <td>—</td>
            <td>An optional parameter that specifies the format of the returned date. Basic values: empty - will return date in ISO8601 format; "moment" - will return moment() object; "<a href="http://momentjs.com/docs/#/displaying/format/" target="_blank">string formed by the rules of Moment.js</a>" - will return date in that format. For example "YYYY-MM-DD" - will return "2013-07-15".</td>
        </tr>
        <tr>
            <td>clickable</td>
            <td>true</td>
            <td>An optional parameter, if set to <code>false</code> - clicks on the days will do nothing.</td>
        </tr>
        <tr>
            <td>hideArrows</td>
            <td>false</td>
            <td>An optional parameter, hides prev and next arrows.</td>
        </tr>
        <tr>
            <td>startDate</td>
            <td>—</td>
            <td>An optional parameter, allows to show selected date in calendar field (datepicker use it).</td>
        </tr>
        <tr>
            <td>onClick</td>
            <td>—</td>
            <td>Callback function. Returns selected date as string or moment() object.</td>
        </tr>
        <tr>
            <td>onReady</td>
            <td>—</td>
            <td>Callback function. Returns current date then calendar is ready.</td>
        </tr>
    </tbody>
</table>



### <a href="history.md">Update history</a>

***

#### Support Ion-series plugins development:

* Donate through Pledgie service: [![](https://pledgie.com/campaigns/25694.png?skin_name=chrome)](https://pledgie.com/campaigns/25694)

* Donate direct to my Paypal account: https://www.paypal.me/IonDen

* Donate direct to my Yandex.Money account: http://yasobe.ru/na/razrabotku

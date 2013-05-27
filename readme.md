# Ion.Calendar 1.1

Easy and powerfull calendar. <a href="http://ionden.com/a/plugins/ion.calendar/">Project page</a>

Download: <a href="http://ionden.com/a/plugins/ion.calendar/ion.calendar-1.1.zip">ion.calendar-1.1.zip</a>

***

## Description
ion.calendar — easy and powerfull calendar, based on awesome jQuery plugin to work with date - "Moment.js". Calendar supports events and can work as datepicker. Calendar can be fully modified with CSS.<br />
There are no unnecessary controls. Arrow left and right switch month. Click on a date allows to change year.<br />
ion.calendar is freely distributed under <a href="http://ionden.com/a/licence-en.html">MIT licence</a>.

## Dependencies
* <a href="http://jquery.com/" target="_blank">jQuery 1.7.2+</a>
* <a href="http://momentjs.com/" target="_blank">Moment.js 2.0+</a>


## Using script

Import this libraries:
* jQuery
* moment.min.js
* moment.ru.js
* ion.calendar.js

And CSS:
* normalize.min.css - desirable if you have not yet connected one
* ion.calendar.css

Initialize calendar:
<pre><code>$("#calendar_container").ionCalendar();</code></pre>

Or initialize calendar with custom settings:
<pre><code>$("#calendar_container").ionCalendar({
    lang: "ru",                     // calendar language
    format: "LL",                   // date format
    start: "15.12.1981",            // calendar start date
    onUpdate: function(date){       // callback-function, on month change
        console.log(date);
    },
    onClick: function(date){        // callback-function, on day click
        console.log(date);
    }
});
</code></pre>


## Settings

<table>
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
            <td>"ru"</td>
            <td>Optional property. Requires an additional lib to include: <code>moment.ru.js</code>. More about other localization languages you can read at <a href="http://momentjs.com/docs/#/i18n/changing-language/">Moment.js website</a></td>
        </tr>
        <tr>
            <td>format</td>
            <td>D.M.YYYY</td>
            <td>Optional property. Returning date format, example: <code>"DD.MM.YYYY"</code> or <code>"YYYY-MM-DD"</code>. More about syntax you can read at <a href="http://momentjs.com/docs/#/displaying/format/">Moment.js website</a></td>
        </tr>
        <tr>
            <td>start</td>
            <td>"none"</td>
            <td>Optional property. Sets the starting date of calendar.</td>
        </tr>
        <tr>
            <td>onUpdate</td>
            <td>-</td>
            <td>Optional property. Callback-function on every month change. Returns date.</td>
        </tr>
        <tr>
            <td>onClick</td>
            <td>-</td>
            <td>Optional property. Switch calendar to datepicker mode. All days now clickable. Returns date on click.</td>
        </tr>
    </tbody>
</table>

## Update history
* 27.05.2013 - new feature to set calendar start date
* 27.05.2013 - new feature to set calendar settings through data-* attributes of base tag
* 16.05.2013 - year changing mechanism redesigned

<br />
<br />
***
<br />
<br />

> Описание на русском

Удобный легкий календарь <a href="http://ionden.com/a/plugins/ion.calendar/">Страница проекта</a>

Скачать: <a href="http://ionden.com/a/plugins/ion.calendar/ion.calendar-1.1.zip">ion.calendar-1.1.zip</a>

***

## Описание
ion.calendar — красивый, удобный и легко настраиваемый календарь, основанный на мощной библиотеке для работы со временем "Moment.js". Календарь поддерживает разнообразные события и может работать как datepicker. Кроме того внешний вид календаря полностью настраивается через CSS.<br />
Календарь лишен избыточных элементов управления. Стрелочки влево/вправо переключают месяц. Клик по текущей дате, позволяет выбрать другой год.<br />
Календарь свободно распространяется на условиях <a href="http://ionden.com/a/licence.html">лицензии MIT</a>.

## Зависимости
* <a href="http://jquery.com/" target="_blank">jQuery 1.7.2+</a>
* <a href="http://momentjs.com/" target="_blank">Moment.js 2.0+</a>


## Подключение

Подключаем библиотеки:
* jQuery
* moment.min.js
* moment.ru.js
* ion.calendar.js

И CSS:
* normalize.min.css - желательно, если он у вас еще не подключен
* ion.calendar.css

Инициализируем календарь:
<pre><code>$("#calendar_container").ionCalendar();</code></pre>

Или инициализируем календарь с параметрами:
<pre><code>$("#calendar_container").ionCalendar({
    lang: "ru",                     // язык календаря
    format: "LL",                   // формат возвращаемой даты
    start: "15.12.1981",            // начальная дата календаря
    onUpdate: function(date){       // callback функция, вызывается при каждой смене месяца
        console.log(date);
    },
    onClick: function(date){        // callback функция, вызывается при каждом клике по дню
        console.log(date);
    }
});
</code></pre>


## Настройка

<table>
    <thead>
        <tr>
            <th>Атрибут</th>
            <th>По умолчанию</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>lang</td>
            <td>"ru"</td>
            <td>Не обязательный параметр. Требует подключения дополнительной языковой библиотеки. <code>moment.ru.js</code> включена в дистрибутив. Подробнее о других языках локализации вы можете узнать на <a href="http://momentjs.com/docs/#/i18n/changing-language/">вебсайте библиотеки Moment.js</a></td>
        </tr>
        <tr>
            <td>format</td>
            <td>D.M.YYYY</td>
            <td>Не обязательный параметр. Позволяет задать формат возвращаемой даты, например <code>"DD.MM.YYYY"</code> или <code>"YYYY-MM-DD"</code>. Подробнее о других форматах возвращаемой даты, вы можете узнать на <a href="http://momentjs.com/docs/#/displaying/format/">вебсайте библиотеки Moment.js</a></td>
        </tr>
        <tr>
            <td>start</td>
            <td>"none"</td>
            <td>Не обязательный параметр, задает начальную дату календаря.</td>
        </tr>
        <tr>
            <td>onUpdate</td>
            <td>-</td>
            <td>Не обязательный параметр. Вызывается каждый раз при смене года или месяца. Возвращает полученную дату.</td>
        </tr>
        <tr>
            <td>onClick</td>
            <td>-</td>
            <td>Не обязательный параметр. Переводит календарь в режим datepicker. Все дни месяца становятся кликабельными. При клике на любой из дней, возвращает дату.</td>
        </tr>
    </tbody>
</table>

## История обновлений
* 27.05.2013 - добавлена возможность задавать стартовую дату
* 27.05.2013 - параметры календаря можно устанавливать через атрибуты data-*
* 16.05.2013 - переработан механизм изменения года
![ion.calendar](_tmp/logo-ion-calendar.png)

> <a href="readme.md">English description</a> | Описание на русском

jQuery-календарь и датапикер, основанный на библиотеке работы со временем - Moment.js

***

* Версия: 2.0.2
* <a href="http://ionden.com/a/plugins/ion.calendar/index.html">Страница проекта и демо</a>
* <a href="http://ionden.com/a/plugins/ion.calendar/ion.calendar-2.0.2.zip">Скачать ZIP-архив</a>

## Описание
* Ion.Calendar основан на мощной библиотеке для работы со временем - Moment.js.
* Поддерживает все языки, форматы дат и возможности парсинга, что и Moment.js.
* Календарь и датапикер в одном.
* Может быть полностью видоизменен через CSS.
* Календарь резиновый, может быть растянут под любой контейнер.
* Поддерживает несколько независимо работающих календарей на одной странице.
* Кроссбраузерная поддержка: Google Chrome, Mozilla Firefox, Opera, Safari, IE(8.0+)
* Плагин поддерживает устройства с touch-экраном (iPhone, iPad, etc.).
* Плагин свободно распространяется на условиях <a href="http://ionden.com/a/plugins/licence.html" target="_blank">лицензии MIT</a>.

## Зависимости
* <a href="http://jquery.com/" target="_blank">jQuery 1.9+</a>
* <a href="http://momentjs.com/" target="_blank">Moment.js 2.1+</a>

## Подключение

Подключаем библиотеки:
* jQuery
* moment-with-locales.min.js
* ion.calendar.min.js

And CSS:
* normalize.min.css - желательно, если он у вас еще не подключен
* ion.calendar.css


Создаем базовый контейнер:
```html
<div class="myCalendar" id="myCalendar-1"></div>
```

Инициализируем календарь:
```javascript
$("#myCalendar-1").ionCalendar();
```

Или инициализируем календарь с параметрами:
```javascript
$("#myCalendar-1").ionCalendar({
    lang: "ru",                     // язык календаря
    sundayFirst: false,             // первый день недели
    years: "80",                    // диапазон лет
    format: "DD.MM.YYYY",           // формат возвращаемой даты
    onClick: function(date){        // клик по дням вернет сюда дату
        console.log(date);
    }
});
```

## Создание датапикера

Создаем базовое поле ввода:
```html
<input class="myInput" id="myDatePicker-1" data-lang="ru" data-years="1995-2013" data-sundayfirst="false" />
```

Инициализируем датапикер:
```javascript
$("#myDatePicker-1").ionDatePicker();
```


## Настройки

<table class="options">
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
            <td>"en"</td>
            <td>Необязательный параметр, позволяет выбрать язык календаря. Каждый дополнительный язык требует <a href="https://github.com/timrwood/moment/tree/develop/min/lang" target="_blank">своего файла локализации</a></td>
        </tr>
        <tr>
            <td>sundayFirst</td>
            <td>true</td>
            <td>Необязательный параметр, позволяет выбрать первый день недели в календаре. (Например в США неделя начинается с воскресенья, в России с понедельника). Если <code>true</code> - то первый день будет воскресенье, если <code>false</code> - то понедельник.</td>
        </tr>
        <tr>
            <td>years</td>
            <td>"80"</td>
            <td>Необязательный параметр, определяет дипазон лет, которым будет оперировать календарь. Может принимать 1 или 2 значения через дефис. Значения должны быть целыми числами. Одиночное значение, например "80", означает, что дипазон календаря: 80 лет назад - сегодняшний год. Двойное значение же, например "1900-2000" задает точный диапазон от 1900-го до 2000-го года.</td>
        </tr>
        <tr>
            <td>format</td>
            <td>—</td>
            <td>Необязательный параметр, задает формат возвращаемой даты. Основные значения: пустой - вернет дату в формате ISO8601; "moment" - вернет объект moment(); "<a href="http://momentjs.com/docs/#/displaying/format/" target="_blank">строка сформированная по правилам Moment.js</a>" - вернет дату в выбранном формате. Например строка "DD.MM.YYYY" - вернет "15.07.2013".</td>
        </tr>
        <tr>
            <td>clickable</td>
            <td>true</td>
            <td>Необязательный параметр, если установить <code>false</code>, то клики по дням больше не будут возвращать дату.</td>
        </tr>
        <tr>
            <td>hideArrows</td>
            <td>false</td>
            <td>Необязательный параметр, прячет стрелки переключения месяцев.</td>
        </tr>
        <tr>
            <td>startDate</td>
            <td>—</td>
            <td>Необязательный параметр, позволяет отметить на календаре выбранную дату (имеет смысл для датапикера).</td>
        </tr>
        <tr>
            <td>onClick</td>
            <td>—</td>
            <td>Функция возвращает выбранную дату при клике по дням. Возвращаемое значение может быть строкой или объектом moment().</td>
        </tr>
        <tr>
            <td>onReady</td>
            <td>—</td>
            <td>Функция возвращает текущую дату при готовоности календаря. В том же формате что и onClick</td>
        </tr>
    </tbody>
</table>



### <a href="history.md">История обновлений</a>

***

#### Поддержите разработку плагинов серии Ion:

* Пожертвовать через сервис Pledgie: [![](https://pledgie.com/campaigns/25694.png?skin_name=chrome)](https://pledgie.com/campaigns/25694)

* Пожертвовать напрямую через Paypal: https://www.paypal.me/IonDen

* Пожертвовать напрямую через Яндекс.Деньги: http://yasobe.ru/na/razrabotku

# Ion.Calendar 1.0
Удобный легкий календарь <a href="http://ionden.com/a/plugins/ion.calendar/">Страница проекта</a>

***

## Описание
ion.calendar — красивый, удобный и легко настраиваемый календарь, основанный на мощной библиотеке для работы со временем "Moment.js". Календарь поддерживает разнообразные события и может работать как datepicker. Кроме того внешний вид календаря полностью настраивается через CSS.
Календарь лишен избыточных элементов управления. Стрелочки влево/вправо переключают месяц. Клик по текущей дате, позволяет выбрать другой год.
Календарь свободно распространяется на условиях <a href="http://ionden.com/a/licence.html">лицензии MIT</a>.

## Зависимости
* <a href="http://jquery.com/" target="_blank">jQuery 1.7.2+</a>
* <a href="http://momentjs.com/" target="_blank">Moment.js 1.7+</a>


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
    onUpdate: function(date){       // callback функция, вызывается при каждой смене месяца
        console.log(date);
    },
    onClick: function(date){        // callback функция, вызывается при каждом клике по дню
        console.log(date);
    }
});
</code></pre>


## Настройка

* <code>lang: "ru"</code> - не обязательнй параметр, по умолчанию <code>ru</code>. Требует подключения дополнительной языковой библиотеки. <code>moment.ru.js</code> включена в дистрибутив. Подробнее о других языках локализации вы можете узнать на <a href="http://momentjs.com/docs/#/i18n/changing-language/">вебсайте библиотеки Moment.js</a>.
* <code>format: "LL"</code> - не обязательный параметр, по умолчанию <code>D.M.YYYY</code>. Позволяет задать формат возвращаемой даты, например <code>"DD.MM.YYYY"</code> или <code>"YYYY-MM-DD"</code>. Подробнее о других форматах возвращаемой даты, вы можете узнать на <a href="http://momentjs.com/docs/#/displaying/format/">вебсайте библиотеки Moment.js</a>
* <code>onUpdate</code> - не обазательный параметр. По умолчанию осутствует. Вызывается каждый раз при смене года или месяца. Возвращает полученную дату.
* <code>onClick</code> - не обазательный параметр. По умолчанию осутствует. Переводит календарь в режим datepicker. Все дни месяца становятся кликабельными. При клике на любой из дней, возвращает дату.
// Ion Calendar
// version 1.0.45
// © 2013 Denis Ineshin | IonDen.com
//
// Website:
// http://ionden.com/a/plugins/ion.calendar/
// GitHub:
// https://github.com/IonDen/ion.calendar
//
// Released under MIT licence:
// http://ionden.com/a/licence.html
// =====================================================================================================================

(function($){
    $.fn.ionCalendar = function(options){
        var calendar = this;
        var settings = $.extend({
            lang: "ru",
            format: "D.M.YYYY",
            onUpdate: null,
            onClick: null
        }, options);

        moment.lang(settings.lang);

        var baseHTML =  '<div class="ion_calendar_head">';
            baseHTML += '<div class="ion_calendar_top_date">loading</div>';
            baseHTML += '<div class="ion_arr ion_arr_prev">&lt;</div>';
            baseHTML += '<div class="ion_arr ion_arr_next">&gt;</div>';
            baseHTML += '<input class="ion_set_year" type="text" maxlength="4" value="" />';
            baseHTML += '</div>';
            baseHTML += '<div class="ion_week"></div>';
            baseHTML += '<div class="ion_month"></div>';

        var langDate = moment();
        var weekHTML =  '<table class="ion_table_week"><tr>';
            weekHTML += '<td>' + langDate.day(1).format("dd") + '</td>';
            weekHTML += '<td>' + langDate.day(2).format("dd") + '</td>';
            weekHTML += '<td>' + langDate.day(3).format("dd") + '</td>';
            weekHTML += '<td>' + langDate.day(4).format("dd") + '</td>';
            weekHTML += '<td>' + langDate.day(5).format("dd") + '</td>';
            weekHTML += '<td>' + langDate.day(6).format("dd") + '</td>';
            weekHTML += '<td>' + langDate.day(0).format("dd") + '</td>';
            weekHTML += '</tr></table>';

        var func = {
            init: function(){
                var self = this;

                calendar.addClass("ion_calendar");
                calendar.html(baseHTML);

                this.field_year = calendar.find(".ion_calendar_top_date");
                this.input_year = calendar.find(".ion_set_year");
                this.btn_prev = calendar.find(".ion_arr_prev");
                this.btn_next = calendar.find(".ion_arr_next");
                this.week_content = calendar.find(".ion_week");
                this.days_content = calendar.find(".ion_month");

                this.baseDate = moment();
                this.currentDate = moment(this.baseDate);

                this.update();

                // bind actions
                this.btn_prev.on("mousedown", function(e){
                    e.preventDefault();
                    self.currentDate.subtract("months", 1);
                    self.update();
                });
                this.btn_next.on("mousedown", function(e){
                    e.preventDefault();
                    self.currentDate.add("months", 1);
                    self.update();
                });
                this.field_year.on("mousedown", function(e){
                    e.preventDefault();
                    self.openYear();
                });
                this.input_year.on("focusout", function(){
                    self.setYear("none");
                });
                this.input_year.on("keydown", function(e){
                    if(e.keyCode == 13) self.setYear($(this).val());
                });
            },
            openYear: function(){
                this.input_year.val(this.currentDate.format("YYYY"));
                this.input_year.css("display","block");
                this.input_year.focus();
            },
            setYear: function(year){
                var test = moment(this.currentDate);
                test.year(year);

                if(test.isValid()) {
                    this.currentDate.year(year);
                    this.update();
                }
                this.input_year.css("display","none");
            },
            update: function(){
                this.field_year.html(this.currentDate.format("MMMM YYYY"));
                this.input_year.val(this.currentDate.format("YYYY"));
                this.week_content.html(weekHTML);

                var workDate = moment(this.currentDate);

                var firstDay = moment(workDate.startOf("month"));
                var firstDayWeekNum = parseInt(firstDay.format("d"));
                if(firstDayWeekNum == 0) firstDayWeekNum = 7;

                var lastDay = moment(workDate.endOf("month"));
                var lastDayNum = parseInt(lastDay.format("D"));
                var lastDayWeekNum = parseInt(lastDay.format("d"));
                if(lastDayWeekNum == 0) lastDayWeekNum = 7;

                var day, td_num = (firstDayWeekNum - 1) + lastDayNum + (7 - lastDayWeekNum);

                // forming html table with days
                var html = '<table class="ion_table_days"><tr>';
                for(var i = 1; i <= td_num; i++){
                    day = i + 1 - firstDayWeekNum;
                    if(day <= 0 || day > lastDayNum) {
                        html += '<td class="ion_no_day">&nbsp;</td>';
                    } else {
                        if(this.currentDate.format("YYYY") == this.baseDate.format("YYYY") && this.currentDate.format("MM") == this.baseDate.format("MM") && day == this.baseDate.format("D")) {
                            html += '<td class="ion_day ion_current_day">' + day + '</td>';
                        } else {
                            html += '<td class="ion_day">' + day + '</td>';
                        }
                    }
                    if(i / 7 == Math.ceil(i / 7)) html += '</tr><tr>';
                }
                html += '</tr></table>';

                this.days_content.html(html);

                // trigger callback function
                if(typeof settings.onUpdate == "function") {
                    settings.onUpdate.call(this, this.currentDate.format(settings.format));
                }

                // check if onClick callback is here
                if(typeof settings.onClick == "function") {
                    this.datePick();
                }
            },
            datePick: function(){
                var self = this;
                calendar.addClass("ion_datepicker");
                this.days_content.find(".ion_day").on("click", function(){
                    var day = parseInt($(this).text());
                    var workDate = moment(self.currentDate);
                    workDate.date(day);

                    settings.onClick.call(self, workDate.format(settings.format));
                });
            }
        };

        func.init();
    };
})(jQuery);
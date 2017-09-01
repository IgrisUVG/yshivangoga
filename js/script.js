/*<![CDATA[*/
function makeScrollable(wrapper, scrollable) {
    // Получаем элементы jQuery
    var wrapper = $(wrapper), scrollable = $(scrollable);

    // Скрываем изображения, пока они не загружены
    scrollable.hide();
    var loading = $('<div class="loading">Загрузка...</div>').appendTo(wrapper);

    // Запускаем фукнцию, которая проверяет загрузку всех изображений
    var interval = setInterval(function () {
        var images = scrollable.find('img');
        var completed = 0;

        // Подсчитываем количество загруженных изображений
        images.each(function () {
            if (this.complete) completed++;
        });

        if (completed == images.length) {
            clearInterval(interval);
            // Таймаут добавлен для устранения проблем с Chrome
            setTimeout(function () {

                loading.hide();
                // Удаляем полоску прокрутки
                wrapper.css({overflow: 'hidden'});

                scrollable.slideDown('slow', function () {
                    enable();
                });
            }, 1000);
        }
    }, 100);

    function enable() {
        // Высота области вверху и внизу, в которой нет реакции на перtмещение курсора мыши
        var inactiveMargin = 99;
        // Кэшируем параметры для повышения производительности
        var wrapperWidth = wrapper.width();
        var wrapperHeight = wrapper.height();
        // Используем наружнeю высоту для включения отступов
        var scrollableHeight = scrollable.outerHeight() + 2 * inactiveMargin;
        // Не будем кэшировать wrapperOffset, так как она поменяется при измении окна просмотра
        // Можно использовать событие onresize, но овчинка не стоит выделки
        // var wrapperOffset = wrapper.offset();

        // Создаем невидимую подсказку
        var tooltip = $('<div class="sc_menu_tooltip"></div>')
            .css('opacity', 0)
            .appendTo(wrapper);

        // Сохраняем заголовки меню
        scrollable.find('a').each(function () {
            $(this).data('tooltipText', this.title);
        });

        // Удаляем подсказки по умолчанию
        scrollable.find('a').removeAttr('title');
        // Удаляем подсказки по умолчанию в IE
        scrollable.find('img').removeAttr('alt');

        var lastTarget;
        //Когда пользователь перемещает курсор мыши по меню
        wrapper.mousemove(function (e) {
            // Сохраняем цель
            lastTarget = e.target;

            var wrapperOffset = wrapper.offset();

            var tooltipLeft = e.pageX - wrapperOffset.left;
            // Не даем подсказке выходить за рамки меню.
            // Так как свойство overflow имеет значение hidden, мы не сможем их увидеть.
            tooltipLeft = Math.min(tooltipLeft, wrapperWidth - 75);

            var tooltipTop = e.pageY - wrapperOffset.top + wrapper.scrollTop() - 40;
            // Перемещаем подсказку под курсор мыши, когда мы находимся в верхней части меню
            if (e.pageY - wrapperOffset.top < wrapperHeight / 2) {
                tooltipTop += 80;
            }
            tooltip.css({top: tooltipTop, left: tooltipLeft});

            // Прокручиваем меню
            var top = (e.pageY - wrapperOffset.top) * (scrollableHeight - wrapperHeight) / wrapperHeight - inactiveMargin;
            if (top < 0) {
                top = 0;
            }
            wrapper.scrollTop(top);
        });

        // Устанавливаем интервал, который помогает решить проблему производительтности в IE
        var interval = setInterval(function () {
            if (!lastTarget) return;

            var currentText = tooltip.text();

            if (lastTarget.nodeName == 'IMG') {
                // Данные привязываются к ссылке, а не к изображению
                var newText = $(lastTarget).parent().data('tooltipText');

                // Выводим подсказку с новым текстом
                if (currentText != newText) {
                    tooltip
                        .stop(true)
                        .css('opacity', 0)
                        .text(newText)
                        .animate({opacity: 1}, 1000);
                }
            }
        }, 200);
        
        // Скрываем подсказку, когда курсор мыши покидает меню
        wrapper.mouseleave(function () {
            lastTarget = false;
            tooltip.stop(true).css('opacity', 0).text('');
        });

        /*
         //Использование события hover приводит к проблемам с производительностью
         scrollable.find('a').hover(function(){
         tooltip
         .stop()
         .css('opacity', 0)
         .text($(this).data('tooltipText'))
         .animate({opacity: 1}, 1000);

         }, function(){
         tooltip
         .stop()
         .animate({opacity: 0}, 300);
         });
         */
    }
}
/*]]>*/
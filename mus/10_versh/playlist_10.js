//<![CDATA[
$(document).ready(function () {
    
    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title: "Участники шоу",
            //free: true,
            mp3: "10_01.mp3"
        },
        {
            title: "Непутевая луна",
            //free: true,
            mp3: "10_02.mp3"
        },
        {
            title: "Пассажиры",
            //free: true,
            mp3: "10_03.mp3"
        },
        {
            title: "Флагман китайского флота",
            //free: true,
            mp3: "10_04.mp3"
        },
        {
            title: "Кардиобалет",
            //free: true,
            mp3: "10_05.mp3"
        },
        {
            title: "Роман с неизвестными",
            //free: true,
            mp3: "10_06.mp3"
        },
        {
            title: "Иная",
            //free: true,
            mp3: "10_07.mp3"
        },
        {
            title: "Внутренний дурак",
            //free: true,
            mp3: "10_08.mp3"
        },
        {
            title: "Танец бомжа",
            //free: true,
            mp3: "10_09.mp3"
        },
        {
            title: "Фройлен",
            //free: true,
            mp3: "10_10.mp3"
        },
        {
            title: "Вентиляторы",
            //free: true,
            mp3: "10_11.mp3"
        },
        {
            title: "Скребут",
            //free: true,
            mp3: "10_12.mp3"
        },
        {
            title: "Панковская новогодняя",
            //free: true,
            mp3: "10_13.mp3"
        }
    ], {
        swfPath: "js/jplayer",
        supplied: "oga, mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true
    });
});
//]]>
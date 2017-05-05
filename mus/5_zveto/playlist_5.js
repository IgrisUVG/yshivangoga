//<![CDATA[
$(document).ready(function () {
    
    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title: "Маленький",
            //free: true,
            mp3: "5_01.mp3"
        },
        {
            title: "Шоколадка (Если я к тебе приду...)",
            //free: true,
            mp3: "5_02.mp3"
        },
        {
            title: "Жизнь в венах (Палатки)",
            //free: true,
            mp3: "5_03.mp3"
        },
        {
            title: "Хомяк V",
            //free: true,
            mp3: "5_04.mp3"
        },
        {
            title: "Пить, пить, пить...",
            //free: true,
            mp3: "5_05.mp3"
        },
        {
            title: "Шапкасушами Снами",
            //free: true,
            mp3: "5_06.mp3"
        },
        {
            title: "ТУполев",
            //free: true,
            mp3: "5_07.mp3"
        },
        {
            title: "Ьтаволажоп орбод (Африка)",
            //free: true,
            mp3: "5_08.mp3"
        },
        {
            title: "Как Ос",
            //free: true,
            mp3: "5_09.mp3"
        },
        {
            title: "Венесуэла",
            //free: true,
            mp3: "5_10.mp3"
        },
        {
            title: "Не мешай",
            //free: true,
            mp3: "5_11.mp3"
        },
        {
            title: "PRESTO",
            //free: true,
            mp3: "5_12.mp3"
        },
        {
            title: "Эгоизм",
            //free: true,
            mp3: "5_13.mp3"
        },
        {
            title: "Маленький II",
            //free: true,
            mp3: "5_14.mp3"
        },
        {
            title: "До свидания",
            //free: true,
            mp3: "5_15.mp3"
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
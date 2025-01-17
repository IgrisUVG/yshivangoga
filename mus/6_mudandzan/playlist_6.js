//<![CDATA[
$(document).ready(function () {
    
    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title: "Odingatan",
            //free: true,
            mp3: "6_01.mp3"
        },
        {
            title: "Одиночество",
            //free: true,
            mp3: "6_02.mp3"
        },
        {
            title: "С ладони (Мы видели небо)",
            //free: true,
            mp3: "6_03.mp3"
        },
        {
            title: "Лестницы",
            //free: true,
            mp3: "6_04.mp3"
        },
        {
            title: "Бравшие Мудандзянь",
            //free: true,
            mp3: "6_05.mp3"
        },
        {
            title: "Тьфу",
            //free: true,
            mp3: "6_06.mp3"
        },
        {
            title: "Хомяк VI",
            //free: true,
            mp3: "6_07.mp3"
        },
        {
            title: "Танцевать",
            //free: true,
            mp3: "6_08.mp3"
        },
        {
            title: "Похлопали ручками",
            //free: true,
            mp3: "6_09.mp3"
        },
        {
            title: "Слушая Мамонова",
            //free: true,
            mp3: "6_10.mp3"
        },
        {
            title: "Точики",
            //free: true,
            mp3: "6_11.mp3"
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
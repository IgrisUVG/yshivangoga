//<![CDATA[
$(document).ready(function () {
    
    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title: "ЭКНЕКЛИКА",
            //free: true,
            mp3: "7_01.mp3"
        },
        {
            title: "ИНТЕЛЛИГЕНТЫ",
            //free: true,
            mp3: "7_02.mp3"
        },
        {
            title: "ПУРКА Ы",
            //free: true,
            mp3: "7_03.mp3"
        },
        {
            title: "МЫ СТОЯЛИ У ВОДЫ",
            //free: true,
            mp3: "7_04.mp3"
        },
        {
            title: "ГЛАВНЫЕ ТАПОЧКИ",
            //free: true,
            mp3: "7_05.mp3"
        },
        {
            title: "КАТЕРИНА",
            //free: true,
            mp3: "7_06.mp3"
        },
        {
            title: "ПОРОСЁНОК, ХОМЯЧОК И РЕДКАЯ ПТИЦА + ХОМЯК IIX",
            //free: true,
            mp3: "7_07.mp3"
        },
        {
            title: "ВЕЛИКИЙ БУДУ",
            //free: true,
            mp3: "7_08.mp3"
        },
        {
            title: "ШНУРКИ В СТАКАНЕ",
            //free: true,
            mp3: "7_09.mp3"
        },
        {
            title: "ВЕЗДЕССУЩИЕ КОТЫ",
            //free: true,
            mp3: "7_10.mp3"
        },
        {
            title: "РОМШТЕКС",
            //free: true,
            mp3: "7_11.mp3"
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
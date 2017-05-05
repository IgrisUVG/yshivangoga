//<![CDATA[
$(document).ready(function () {
    
    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title: "PEACE - PEACE",
            //free: true,
            mp3: "4_01.mp3"
        },
        {
            title: "МАНВАНТАРА",
            //free: true,
            mp3: "4_02.mp3"
        },
        {
            title: "ПАЧВАРА",
            //free: true,
            mp3: "4_03.mp3"
        },
        {
            title: "РАСТАРА (ЧУ-ЧУ)",
            //free: true,
            mp3: "4_04.mp3"
        },
        {
            title: "И. Г. РА",
            //free: true,
            mp3: "4_05.mp3"
        },
        {
            title: "БЯК - БЯК",
            //free: true,
            mp3: "4_06.mp3"
        },
        {
            title: "МЕТАСТАЗЫ КАРИЕСА",
            //free: true,
            mp3: "4_07.mp3"
        },
        {
            title: "БОТИНКИ - ПОЛУБОТИНКИ",
            //free: true,
            mp3: "4_08.mp3"
        },
        {
            title: "ХОМЯК IV",
            //free: true,
            mp3: "4_09.mp3"
        },
        {
            title: "О, УМ!",
            //free: true,
            mp3: "4_10.mp3"
        },
        {
            title: "ВЫШЕ - БЛИЖЕ...",
            //free: true,
            mp3: "4_11.mp3"
        },
        {
            title: "САКУРА БАТОКА ГАРЛАБАРА БАЛАСАКА",
            //free: true,
            mp3: "4_12.mp3"
        },
        {
            title: "НЕ ВИННЫЙ ГОРОД",
            //free: true,
            mp3: "4_13.mp3"
        },
        {
            title: "ОЙ, МАМА, Я ЛЕЧУ!",
            //free: true,
            mp3: "4_14.mp3"
        },
        {
            title: "ДАУН ДЕНС",
            //free: true,
            mp3: "4_15.mp3"
        },
        {
            title: "НАНИ - ХЭЙ",
            //free: true,
            mp3: "4_16.mp3"
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
//<![CDATA[
$(document).ready(function () {
    
    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title: "Доброхот",
            //free: true,
            mp3: "1_01.mp3"
        },
        {
            title: "Тигр с полосками вдоль",
            //free: true,
            mp3: "1_02.mp3"
        },
        {
            title: "Хомяк",
            //free: true,
            mp3: "1_03.mp3"
        },
        {
            title: "Полорогий Биф",
            //free: true,
            mp3: "1_04.mp3"
        },
        {
            title: "Ярость людей с севера",
            //free: true,
            mp3: "1_05.mp3"
        },
        {
            title: "Одночасье",
            //free: true,
            mp3: "1_06.mp3"
        },
        {
            title: "Викинг Варва",
            //free: true,
            mp3: "1_07.mp3"
        },
        {
            title: "Тумба Тумба",
            //free: true,
            mp3: "1_08.mp3"
        },
        {
            title: "Шёпотом (снюсь)",
            //free: true,
            mp3: "1_09.mp3"
        },
        {
            title: "Галимый скунс",
            //free: true,
            mp3: "1_10.mp3"
        },
        {
            title: "Кладенец",
            //free: true,
            mp3: "1_11.mp3"
        },
        {
            title: "Едут к нам",
            //free: true,
            mp3: "1_12.mp3"
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
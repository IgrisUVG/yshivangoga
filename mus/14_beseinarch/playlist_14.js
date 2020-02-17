//<![CDATA[
$(document).ready(function () {

    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title: "Архитектура сознания",
            //free: true,
            mp3: "14_01.mp3"
        },
        {
            title: "Какая сволочь?",
            //free: true,
            mp3: "14_02.mp3"
        },
        {
            title: "Гиппопотам",
            //free: true,
            mp3: "14_03.mp3"
        },
        {
            title: "Глобальный тантризм (Злыдень)",
            //free: true,
            mp3: "14_04.mp3"
        },
        {
            title: "Лезвие в спину",
            //free: true,
            mp3: "14_05.mp3"
        },
        {
            title: "Ослы только знают",
            //free: true,
            mp3: "14_06.mp3"
        },
        {
            title: "Маленькие девочки делают книксен",
            //free: true,
            mp3: "14_07.mp3"
        },
        {
            title: "Терминатор (Джон)",
            //free: true,
            mp3: "14_08.mp3"
        },
        {
            title: "Айфонс",
            //free: true,
            mp3: "14_09.mp3"
        },
        {
            title: "Сломанные приборы",
            //free: true,
            mp3: "14_10.mp3"
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
//<![CDATA[
$(document).ready(function () {

    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title: "ЛиверТВИСТ",
            //free: true,
            mp3: "13_01.mp3"
        },
        {
            title: "Весёлая дивизия",
            //free: true,
            mp3: "13_02.mp3"
        },
        {
            title: "Партизаны-фрики",
            //free: true,
            mp3: "13_03.mp3"
        },
        {
            title: "Онанизм",
            //free: true,
            mp3: "13_04.mp3"
        },
        {
            title: "Танец бомжа (джас)",
            //free: true,
            mp3: "13_05.mp3"
        },
        {
            title: "Мужики",
            //free: true,
            mp3: "13_06.mp3"
        },
        {
            title: "Белый-белый",
            //free: true,
            mp3: "13_07.mp3"
        },
        {
            title: "Март",
            //free: true,
            mp3: "13_08.mp3"
        },
        {
            title: "Патологоанатом",
            //free: true,
            mp3: "13_09.mp3"
        },
        {
            title: "Маленький (самый)",
            //free: true,
            mp3: "13_10.mp3"
        },
        {
            title: "Презервативы",
            //free: true,
            mp3: "13_11.mp3"
        },
        {
            title: "Нас здесь больше не будет...",
            //free: true,
            mp3: "13_12.mp3"
        },
        {
            title: "БОНУС: Белый-белый (минус)",
            //free: true,
            mp3: "13_13.mp3"
        },
        {
            title: "____________",
            //free: true,
            mp3: "13_14.mp3"
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
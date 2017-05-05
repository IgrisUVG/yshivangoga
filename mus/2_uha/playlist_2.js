//<![CDATA[
$(document).ready(function () {
    
    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title: "Прелюдия и фуга dur",
            //free: true,
            mp3: "2_01.mp3"
        },
        {
            title: "Маленький*",
            //free: true,
            mp3: "2_02.mp3"
        },
        {
            title: "Хомяк II",
            //free: true,
            mp3: "2_03.mp3"
        },
        {
            title: "Венесуэла",
            //free: true,
            mp3: "2_04.mp3"
        },
        {
            title: "Трубы торчащие",
            //free: true,
            mp3: "2_05.mp3"
        },
        {
            title: "ПАльцем руки",
            //free: true,
            mp3: "2_06.mp3"
        },
        {
            title: "Шапкпсушами Снами",
            //free: true,
            mp3: "2_07.mp3"
        },
        {
            title: "Вальс воробей",
            //free: true,
            mp3: "2_08.mp3"
        },
        {
            title: "Гиппопотам",
            //free: true,
            mp3: "2_09.mp3"
        },
        {
            title: "В среду мы",
            //free: true,
            mp3: "2_10.mp3"
        },
        {
            title: "Ту(полев)",
            //free: true,
            mp3: "2_11.mp3"
        },
        {
            title: "Шпиль Голдинга",
            //free: true,
            mp3: "2_12.mp3"
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
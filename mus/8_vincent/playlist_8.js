//<![CDATA[
$(document).ready(function () {
    
    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title: "Винсент",
            //free: true,
            mp3: "8_01.mp3"
        },
        {
            title: "Рашн фэшн",
            //free: true,
            mp3: "8_02.mp3"
        },
        {
            title: "Питерские барышни",
            //free: true,
            mp3: "8_03.mp3"
        },
        {
            title: "Фотомодель",
            //free: true,
            mp3: "8_04.mp3"
        },
        {
            title: "Иностранцы в своей стране",
            //free: true,
            mp3: "8_05.mp3"
        },
        {
            title: "Приступ сердца твоего",
            //free: true,
            mp3: "8_06.mp3"
        },
        {
            title: "Сексуальная игрушка",
            //free: true,
            mp3: "8_07.mp3"
        },
        {
            title: "Время медленных танцев",
            //free: true,
            mp3: "8_08.mp3"
        },
        {
            title: "Кислородная машина",
            //free: true,
            mp3: "8_09.mp3"
        },
        {
            title: "Когда горела пожарная часть",
            //free: true,
            mp3: "8_10.mp3"
        },
        {
            title: "Мне снилась музыка",
            //free: true,
            mp3: "8_11.mp3"
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
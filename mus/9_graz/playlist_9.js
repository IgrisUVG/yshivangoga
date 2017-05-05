//<![CDATA[
$(document).ready(function () {
    
    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title: "ДУРА",
            //free: true,
            mp3: "9_01.mp3"
        },
        {
            title: "АФРОДИЗИАК",
            //free: true,
            mp3: "9_02.mp3"
        },
        {
            title: "ТВОЁ НЕПОКОРНОЕ ТЕЛО",
            //free: true,
            mp3: "9_03.mp3"
        },
        {
            title: "ГРЯЗНЫЕ БУГИ",
            //free: true,
            mp3: "9_04.mp3"
        },
        {
            title: "РОМШТЕКС",
            //free: true,
            mp3: "9_05.mp3"
        },
        {
            title: "EPSом по PSD",
            //free: true,
            mp3: "9_06.mp3"
        },
        {
            title: "ТЬФУ",
            //free: true,
            mp3: "9_07.mp3"
        },
        {
            title: "ПАРКЕТ",
            //free: true,
            mp3: "9_08.mp3"
        },
        {
            title: "ПОПЛАВКИ",
            //free: true,
            mp3: "9_09.mp3"
        },
        {
            title: "СКИТАЛЕЦ СУНЬ ВЫНЬ",
            //free: true,
            mp3: "9_10.mp3"
        },
        {
            title: "ТУРИСТЫ",
            //free: true,
            mp3: "9_11.mp3"
        },
        {
            title: "РЕЗИНОВЫЕ ДРУЗЬЯ",
            //free: true,
            mp3: "9_12.mp3"
        },
        {
            title: "ЭНУРЕЗ",
            //free: true,
            mp3: "9_13.mp3"
        },
        {
            title: "ИБИЦА НОЧЬЮ",
            //free: true,
            mp3: "9_14.mp3"
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
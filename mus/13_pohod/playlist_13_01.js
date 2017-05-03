//<![CDATA[
$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			title:"ЛиверТВИСТ",
			mp3:"13_01.mp3",
			//oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
		},
		{
			title:"Весёлая дивизия",
			mp3:"13_02.mp3",
			//oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
		},
		{
			title:"Партизаны-фрики",
			mp3:"13_03.mp3",
			//oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
		},
		{
			title:"Онанизм",
			mp3:"13_04.mp3",
			//oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
		},
		{
			title:"Танец бомжа (джас)",
			mp3:"13_05.mp3",
			//oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
		},
		{
			title:"Мужики",
			free:true,
			mp3:"13_06.mp3",
			//oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
		},
		{
			title:"Белый-белый",
			mp3:"13_07.mp3",
			//oga:"http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
		},
		{
			title:"Март",
			mp3:"13_08.mp3",
			//oga:"http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg"
		},
		{
			title:"Патологоанатом",
			mp3:"13_09.mp3",
			//oga:"http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg"
		},
		{
			title:"Маленький (самый)",
			free:true,
			mp3:"13_10.mp3",
			//oga:"http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
		},
		{
			title:"Презервативы",
			mp3:"13_11.mp3",
			//oga:"http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg"
		},
		{
			title:"Нас здесь больше не будет...",
			free: true,
			mp3:"13_12.mp3",
			//oga:"http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg"
		},
		{
			title:"БОНУС: Белый-белый (минус)",
			mp3:"13_13.mp3",
			//oga:"http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg"
		},
		{
			title:"____________",
			mp3:"13_14.mp3",
			//oga:"http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg"
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
/*
 *  Этот файл поставляется в составе HTML5 плеера и разработан в рамках портала Radio-Tochka.com
 *  Copyright (C) 2013 Radio-Tochka.com <info@radio-tochka.com>
 *  Все права защищены. Не удаляйте этот копирайт.
*/

var RTPlayer = function( ch_id, default_volume, do_autoplay, host, format, stream, language ){
    //this.ch_id = ch_id; // Player unique channel id
    this.vol = default_volume;
    this.autoplay = do_autoplay;
    this.ready = false;
    this.timer_handle = false;
    this.timer_time = 0;
    this.host = host;
    this.format = format;
    this.stream = stream;
    this._init();
    this.stopped = false;
    if (language === 'ru'){
	this.loadingText = "Загрузка...";
	this.errorText = "Ошибка";
    }
    else{
    	this.loadingText = "Loading...";
	this.errorText = "Error";
    }
};

RTPlayer.prototype = {

    _formatTime:function(secs){
	var pad = function(n) {
    	    return (n < 10 ? "0" + n : n);
	};
	var h = Math.floor(secs / 3600);
	var m = Math.floor((secs / 3600) % 1 * 60);
	var s = secs % 60;
	return pad(h) +":"+ pad(m) +":"+ pad(s);
    },

    reconnect: function(){
	var $p = $("#rtJpID");
        this.timer_time = 0;
	clearInterval( this.timer_handle );
    	$p.jPlayer("stop");
    	$("#current_time").html(this.loadingText);
    	$p.jPlayer("clearMedia");
    	$p.jPlayer("play");
    },
    _init: function() {

	// Pointer to the current widget
	var w = this;
	$("#rtJpID").jPlayer({
    	    ready: function (e) {
    		$(this).jPlayer("setMedia", w.stream);
    		w.ready = true;
    		if( w.autoplay ){
		    if(!w.isMobile){
			$('#button_play_stop').trigger('click');
		    }
		}
    	    },
	    swfPath: w.host + "/media/static/swf", // path to Jplayer.swf
	    supplied: w.format,
	    wmode: "window",
	    preload: "none",
	    solution: 'html, flash',
	    play: function(e) {
		///console.log("play");
	    },
	    playing: function(e) {
		//console.log("Playing")
		$("#current_time").html('00:00:00');
    		clearInterval( w.timer_handle );
    		w.timer_handle = setInterval( function(){
    			w.timer_time += 1;
    			$("#current_time").html( w._formatTime( w.timer_time ) );
    		}, 1000 );
    		clearInterval( w.reconnect_timer_handle );
	    },
	    pause: function() {
				$(this).jPlayer("clearMedia");
	    },
	    error:function( event ){
				if( w.ready && event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
				    $(this).jPlayer("setMedia", w.stream).jPlayer("play");
				}
				else if( event.jPlayer.error.type == 'e_url' ){
				    $(this).jPlayer("setMedia", w.stream);
				}
				else if(w.ready){
				    $("#current_time").html(w.errorText);
				    clearInterval( w.timer_handle );
				}
	    }
	});

	// Mute
	$('#rtplmute').click( function(e){
	    e.preventDefault();
	    $('#rtplmaxvol').removeClass("active")
	    if( $('#rtplmute').hasClass("active") ){
		$('#rtplmute').removeClass("active")
		$("#rtJpID").jPlayer("unrtplmute");
		$("#rtplvolume").slider( "value", w.vol );
	    }
	    else{
		$('#rtplmute').addClass("active")
		$("#rtJpID").jPlayer("rtplmute");
		$("#rtplvolume").slider( "value", 0 );
	    }
	});

	// Max volume
	$('#rtplmaxvol').click( function(e){
	    e.preventDefault();
	    $('#rtplmute').removeClass("active")
	    // Fall back to default volume
	    if( $('#rtplmaxvol').hasClass("active") ){
		$('#rtplmaxvol').removeClass("active")
		$("#rtplvolume").slider( "value", w.vol );
	    }
	    else{
		$("#rtJpID").jPlayer("unrtplmute");
		$('#rtplmaxvol').addClass("active")
		$("#rtJpID").jPlayer("volume",1);
		$("#rtplvolume").slider( "value", 100 );
	    }
	});

	// Play/Stop
	$('#button_play_stop').click( function(e){
	    e.preventDefault();

	    if( !$(this).hasClass('active') ) {
		$("#rtJpID").jPlayer("play");
		$("#button_play_stop").addClass('active');
    		$("#current_time").html(w.loadingText);
    		w.stopped = true;
	    }
	    else {
    		$("#button_play_stop").removeClass('active');
    		clearInterval( w.timer_handle );
    		$("#rtJpID").jPlayer("stop");
    		$("#current_time").html('00:00:00');
    		w.timer_time = 0;
    		$("#rtJpID").jPlayer("clearMedia");
	    }
	});

	// Volume slider
        $( "#rtplvolume").slider({
            value: w.vol,
            orientation: "horizontal",
            range: "min",
            animate: true,
            change: function(e, ui){
        	if( ui.value == 0 ){
        	    if( !$('#rtplmute').hasClass("active") ){
        		$('#rtplmute').addClass("active")
        	    }
        	}
        	else if( ui.value == 100 ){
        	    if( !$('#rtplmaxvol').hasClass("active") ){
        		$('#rtplmaxvol').addClass("active")
        	    }
        	}
        	else{
        	    if( $('#rtplmute').hasClass("active") ){
        		$('#rtplmute').removeClass("active")
        	    }
        	    if( $('#rtplmaxvol').hasClass("active") ){
        		$('#rtplmaxvol').removeClass("active")
        	    }
        	}
        	$("#rtJpID").jPlayer("volume", ui.value/100.0 );
            }
        });
    }
};


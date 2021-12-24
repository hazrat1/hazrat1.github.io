//navigator.requestWakeLock('screen');
//navigator.requestWakeLock('cpu');
var _url = window.location.href;
var params = new URL(`${_url}`).searchParams;
var id = params.get('id');
var player = new Playerjs({
    id: "player"
});
if (document.documentElement.clientWidth == 240) {
    document.getElementById("wap").style.width = "294px";
    document.getElementById("wap").style.margin = "0px 0px 0px 0px";
    document.getElementById("wap").style.transform = "rotate(90deg)";
    document.getElementById("body_id").style.margin = "36.5px 0px 0px -27.5px";
}
if (document.documentElement.clientWidth == 294) {
    document.getElementById("wap").style.width = "294px";
    document.getElementById("body_id").style.margin = "10px 0px 0px 0px";
}
$(function() {
        player.api('play', `https://www.youtube.com/watch?v=${id}`);
        console.log(id)
        player.api('play');
})
var sound = 1;
var pList = 0;
var zoom = 0;
var back = 0;
var landscape = 1;
navigator.spatialNavigationEnabled = true;
const volume = navigator.volumeManager;
function handleKeyDown(evt) {
     varhandled = false;
     varnextFocus = null;
     switch (evt.key) {
        case 'Enter':
        case '5':
            player.api("toggle");
        break;
        case 'SoftRight':
        case 'Backspace':
                player.api("stop");
                window.history.back();
            evt.preventDefault();
            evt.stopPropagation();
        break;
        case 'ArrowDown':
        case '1':
            volume.requestDown();
            evt.preventDefault();
        break;
        case 'ArrowUp':
        case '3':
            volume.requestUp();
            evt.preventDefault();
        break;
        case '0':
            if (sound === 1) {
                player.api("mute");
                sound = 0;
            } else {
                player.api("unmute");
                sound = 1;
            }
        break;
        case '#':
            if (zoom == 0 && back == 0 && document.documentElement.clientWidth == 240) {
                zoom = 1;
                document.getElementById("wap").style.width = "400px";
                document.getElementById("body_id").style.margin = "10px 0px 0px -80px" 
            } else if (zoom == 1 && back == 0 && document.documentElement.clientWidth == 240) {
                zoom = 2;
                document.getElementById("wap").style.width =  "480px";
                document.getElementById("body_id").style.margin = "-20px 0px 0px -120px"
            } else if (zoom == 2 && back == 0 && document.documentElement.clientWidth == 240) {
                zoom = 3;
                document.getElementById("wap").style.width = "560px";
                document.getElementById("body_id").style.margin = "-50px 0px 0px -160px"
            } else if (zoom == 3 && back == 0 && document.documentElement.clientWidth == 240) {
                zoom = 0;
                document.getElementById("wap").style.width = "294px";
                document.getElementById("body_id").style.margin = "36.5px 0px 0px -27.5px"
            } else if (zoom == 0 && back == 1 && document.documentElement.clientWidth == 240) {
                zoom = 1;
                document.getElementById("wap").style.width = "400px";
                document.getElementById("body_id").style.margin = "40px 0px 0px -50px"
            } else if (zoom == 1 && back == 1 && document.documentElement.clientWidth == 240) {
                zoom = 2;
                document.getElementById("wap").style.width = "480px";
                document.getElementById("body_id").style.margin = "40px 0px 0px -60px"
            } else if(zoom == 2 && back == 1 && document.documentElement.clientWidth == 240) {
                zoom = 3;
                document.getElementById("wap").style.width = "560px";
                document.getElementById("body_id").style.margin = "40px 0px 0px -70px"
            } else if (zoom == 3 && back == 1 && document.documentElement.clientWidth == 240) {
                zoom = 0;
                document.getElementById("wap").style.width = "294px";
                document.getElementById("body_id").style.margin = "40px 0px 0px -40px"
            } else if (zoom == 0 && document.documentElement.clientWidth == 294) {
                zoom = 1;
                document.getElementById("wap").style.width = "400px";
                document.getElementById("body_id").style.margin = "-30px 0px 0px -40px"
            } else if (zoom == 1 && document.documentElement.clientWidth == 294) {
                zoom = 2;
                document.getElementById("wap").style.width = "480px";
                document.getElementById("body_id").style.margin = "-60px 0px 0px -80px"
            } else if (zoom == 2 && document.documentElement.clientWidth == 294) {
                zoom = 3;
                document.getElementById("wap").style.width = "560px";
                document.getElementById("body_id").style.margin = "-90px 0px 0px -120px"
            } else if (zoom == 3 && document.documentElement.clientWidth == 294) {
                zoom = 0;
                document.getElementById("wap").style.width = "294px";
                document.getElementById("body_id").style.margin = "10px 0px 0px 0px"
            }
        break;
        case '7':
            
        break;
        case 'ArrowRight':
        case '6':
            var seek = player.api("time");
            player.api("seek", seek+15);
            evt.preventDefault();        
        break;
        case 'ArrowLeft':
		case '4':
            var seek = player.api("time");
			player.api("seek", seek-15);
            evt.preventDefault();
		break;
	case '*':
            if (landscape == 1 && document.documentElement.clientWidth == 240) {
                landscape = 0;
                document.getElementById("wap").style.width = "240px";
                document.getElementById("wap").style.margin = "0px 0px 0px 0px";
                document.getElementById("wap").style.transform = "rotate(0deg)";
                document.getElementById("body_id").style.margin = "40px 0px 0px 0px";
            } else if (document.documentElement.clientWidth == 240) {
                landscape = 1;
                document.getElementById("wap").style.width = "294px";
                document.getElementById("wap").style.margin = "0px 0px 0px 0px";
                document.getElementById("wap").style.transform = "rotate(90deg)";
                document.getElementById("body_id").style.margin = "36.5px 0px 0px -27.5px";
            }
        break;
     }
}
document.addEventListener('keydown', handleKeyDown);

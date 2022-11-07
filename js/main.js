function overlay(){
    var btn = document.getElementById("overlay-start");
	var btnwrap = document.getElementById("btnwrap");
    var wrapper = document.getElementById("wrapper");
    btn.style.opacity = 0;
	btnwrap.style.visibility = "hidden";
    wrapper.style.visibility = "visible";
    mediaPlay();
}

function mediaPlay() {
    var audio = document.getElementById("audio");
    var video = document.getElementById("bgvid");
    audio.muted = !audio.muted;
    audio.volume = 1;
    audio.play()
    video.play()
}
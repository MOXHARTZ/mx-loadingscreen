  $(function() {
    let song = false
    audio = new Audio();
    audio.src = "song.mp3";
    audio.loop = true;
    audio.volume = 0.5; 

    $(".button").click(function(){
        ToggleSong()
        return;
    })
    
    function ToggleSong() {
        if (song == false){
            audio.play();
            song = true
            $(".button__text").text("Sesi Kapat!");
        }else if (song == true){
            audio.pause();
            song = false;
            $(".button__text").text("Sesi Aç!");
        }
    }
})
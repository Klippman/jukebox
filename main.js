function Jukebox(){
    this.music = [];
    this.jukebox = document.querySelector("#jukeBox")

    this.newSong = function(new_song){
        this.music.push(new_song);
    }

    this.playSong = function(){
        this.jukebox.play();
    }

    this.pauseSong = function(){
        this.jukebox.pause();

    }
    this.nextSong = function(){
        

    }
    this.setup = function(){
        document.querySelector("#play_track button").onclick = this.playSong.bind(this);
        document.querySelector("#pause_track button").onclick = this.pauseSong.bind(this);
        document.querySelector("#next_track button").onclick = this.nextSong.bind(this);
    }
}

// function Tracks(title, songLoc){
//     this.title = title;
//     this.songLoc = songLoc;
// }

var jam = new Jukebox();
jam.setup(); 

var songs = ["energy.mp3", "epic.mp3", "dubstep.mp3"]
    




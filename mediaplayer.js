
const musicContainer = document.querySelector(".music-container")
const playBtn = document.querySelector("#play")
const prevBtn = document.querySelector("#prev")
const nexBtn = document.querySelector("#next")
const audio = document.querySelector("#audio")
const progress = document.querySelector(".progress")
const progressContainer = document.querySelector(".progress-container")
const title = document.querySelector("#title")
const cover = document.querySelector("#cover")

// song Title //
const songs =['Anime', 'CraftRoom']

// Keep Track of songs //
let songIndex = 2
/*

// Initially load song info DOM //
loadSong(songs[songIndex])

// Update song details //
function loadSong(song){
    title.innerText = song
    audio.src = 'music/${song}.mp3'
    cover.src = 'images/${song}.jpg'
}
*/
function playSong() {
    musicContainer.classList.add("play")
    playBtn.querySelector("i.fas").classList.remove("fa-play")
    playBtn.querySelector("i.fas").classList.add("fa-pause")

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove("play")
    playBtn.querySelector("i.fas").classList.add("fa-play")
    playBtn.querySelector("i.fas").classList.remove("fa-pause")

    audio.pause();
}
function prevSong(){

}

function nexSong(){
    
}
 //Event listener //
 playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play")
    
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
 }) 

 //change song events
prevBtn.addEventListener("click", prevSong)
nexBtn.addEventListener("click", nexSong)
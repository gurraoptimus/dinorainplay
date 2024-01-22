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
const songs =["anime", "DansElectro", "DinoRainbowGirlMusic"]

// Keep Track of songs //
let songIndex = 2

// Anime load song info DOM //
loadSong(songs[songIndex])

// Update song details
function loadSong(song){
    title.innerText = song
    audio.src
}
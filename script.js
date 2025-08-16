// Song List Array
const hindi_songs = [
  {
    name: "Sahiba",
    singer: "",
    src: "https://koshalworld.com/files/download/id/47366",
    image: "https://pendujatt.com.se/uploads/album/sahiba-jasleen-royal.webp"
  },
{
    name: "Sajni",
    singer: "___",
    src: "https://koshalworld.com/files/download/id/32871",
    image: "https://koshalworld.com/siteuploads/thumb/sft66/32871_4.jpg" 
  },
{
    name: "Saiyaara (old)",
    singer: "___",
    src: "https://koshalworld.com/files/download/id/60443",
    image: "https://koshalworld.com/siteuploads/thumb/sft66/32871_4.jpg",
  },
{
    name: "Sanson Ki Mala",
    singer: "___",
    src: "https://koshalworld.com/files/download/id/60576",
    image: "https://koshalworld.com/siteuploads/thumb/sft122/60576_4.jpg"
  },

{
    name: "Shaky",
    singer: "",
    src: "https://koshalworld.com/files/download/id/59770",
    image: "https://pendujatt.com.se/uploads/album/shaky-sanju-rathod.webp"
  },
  {
  name: "Ishq Ve",
  singer: "",
  src: "https://koshalworld.com/files/download/id/53076",
  image: "https://koshalworld.com/siteuploads/thumb/sft107/53076_4.jpg"
},

{
  name: "Aksar Is dunia me",
  singer: "",
  src: "https://koshalworld.com/files/download/id/38482",
  image: "https://koshalworld.com/siteuploads/thumb/sft77/38482_4.jpg"
},
{
name: "Khabb",
  singer: "",
  src: "https://koshalworld.com/files/download/id/38308",
  image: "https://koshalworld.com/siteuploads/thumb/sft77/38308_4.jpg"
},

  
];

  const punjabi_songs = [
    { 
      name: "52bars",
  singer: "",
  src: "https://koshalworld.com/files/download/id/22067", // Place your audio file here
  image: "https://koshalworld.com/siteuploads/thumb/sft45/22067_4.jpg"
},
 {
   name: "Butterfly",
   singer: "",
   src: "https://pagalfree.com/download/128-Butterfly%20-%20Jass%20Manak%20128%20Kbps.mp3", // Place your audio file here
   image: "https://pagalnew.com/coverimages/Butterfly-Jass-Manak-500-500.jpg"
 },
  {
   name: "supreme",
   singer: "",
   src: "https://koshalworld.com/files/download/id/54957", // Place your audio file here
   image: "https://koshalworld.com/siteuploads/thumb/sft110/54957_4.jpg"
 },
  {
   name: "One Love",
   singer: "",
   src: "https://koshalworld.com/files/download/id/25664", // Place your audio file here
   image: "https://koshalworld.com/siteuploads/thumb/sft52/25664_4.jpg"
 },
  {
   name: "",
   singer: "",
   src: "https://koshalworld.com/files/download/id/22067", // Place your audio file here
   image: "https://koshalworld.com/siteuploads/thumb/sft45/22067_4.jpg"
 },
    
];
const bhojpuri = [
    {
      name: "Ve Kamleya",
      singer: "Arijit Singh",
      src: "/Ve Haaniyaan(KoshalWorld.Com).mp3", // Place your audio file here
      image: "/Ve Haaniyaan(KoshalWorld.Com).mp3"
    },
  ];
const bhakti = [
    {
      name: "Ve Kamleya",
      singer: "Arijit Singh",
      src: "/Ve Haaniyaan(KoshalWorld.Com).mp3", // Place your audio file here
      image: "/Ve Haaniyaan(KoshalWorld.Com).mp3"
    },
  ];
  
const hindibtn = document.querySelector(".HindiBtn");
hindibtn.addEventListener('click',()=>{
const detail=document.querySelector(".detail")
detail.innerHTML=""
hindi_songs.forEach(song=>{
  const img =document.createElement("img")
  img.classList.add("song_image")
  img.src=song.src
  const name=document.createElement("div")
  name.classList.add("song_name")
  name.innerHTML=song.name
  const singer=document.createElement("h4")
  singer.classList.add("singer");
  singer.innerHTML=song.singer;
  detail.appendChild(img)
  detail.appendChild(name)
  detail.appendChild(singer)
}
  
)
})


// Song Lists

// Controls and elements
const playBtn = document.querySelector('.controls img[alt="Play/Pause"]');
const nextBtn = document.querySelector('.controls img[alt="Next"]');
const prevBtn = document.querySelector('.controls img[alt="Previous"]');
const coverImage = document.querySelector('.cover');
const detailDiv = document.querySelector('.detail');
let audio = new Audio();

let currentIndex = 0;

// Load + play song
function loadSong_hindi(index) {
  let song = hindi_songs[index];
  audio.src = song.src;
  audio.play();
  coverImage.src = song.image;
  updateDetail(song);
  playBtn.src = "/play.png";
}

// Update .detail with now-playing info
function updateDetail(song) {
  detailDiv.innerHTML = `
    <h3>${song.name}</h3>
    <h5>${song.singer}</h5>
  `;
}

// Play/Pause
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.src = "/icons8-stop-circled-50.png";
  } else {
    audio.pause();
    playBtn.src = "/play.png";
  }
});

// Next
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % hindi_songs.length;
  loadSong_hindi(currentIndex);
});

// Previous
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + hindi_songs.length) % hindi_songs.length;
  loadSong_hindi(currentIndex);
});

// Auto-next
audio.addEventListener('ended', () => {
  nextBtn.click();
});

// Start playing when Hindi button clicked
document.querySelector('.HindiBtn').addEventListener('click', () => {
  currentIndex = 0;
  loadSong_hindi(currentIndex);
});

// Load first song initially
loadSong_hindi(currentIndex);
let newIndex=0;

function loadSong_punjabi(index) {
  let song = punjabi_songs[index];
  audio.src = song.src;
  audio.play();
  coverImage.src = song.image;
  updateDetail(song);
  playBtn.src = "/play.png";
}

// Update .detail with now-playing info
function updateDetail(song) {
  detailDiv.innerHTML = `
    <h3>${song.name}</h3>
    <h5>${song.singer}</h5>
  `;
}

// Play/Pause
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.src = "/icons8-stop-circled-50.png";
  } else {
    audio.pause();
    playBtn.src = "/play.png";
  }
});

// Next
nextBtn.addEventListener('click', () => {
  newIndex = (newIndex + 1) % hindi_songs.length;
  loadSong_punjabi(newIndex);
});

// Previous
prevBtn.addEventListener('click', () => {
  newIndex = (newIndex - 1 + hindi_songs.length) % hindi_songs.length;
  loadSong_punjabi(newIndex);
});

// Auto-next
audio.addEventListener('ended', () => {
  nextBtn.click();
});

// Start playing when Hindi button clicked
document.querySelector('.PunjabiBtn').addEventListener('click', () => {
  newIndex = 0;
  loadSong_punjabi(newIndex);
});

// Load first song initially
loadSong_punjabi(newIndex);

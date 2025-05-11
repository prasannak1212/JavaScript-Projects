// Song List in an array

const songList = [
    {
        id: 1,
        name: 'Gorila',
        artist: 'Alex_MakeMusic',
        img: 'https://cdn.pixabay.com/audio/2025/03/19/20-23-35-428_200x200.png',
        genre: 'pop',
        source: 'media/gorila-315977.mp3'
    },
    {
        id: 2,
        name: 'Experimental Cinematic Hip-Hop',
        artist: 'Rockot',
        img: 'https://cdn.pixabay.com/audio/2025/03/20/08-24-22-588_200x200.jpg',
        genre: 'hiphop',
        source: 'media/experimental-cinematic-hip-hop-315904.mp3'
    },
    {
        id: 3,
        name: 'Don`t Talk',
        artist: 'Cosmonkey',
        img: 'https://cdn.pixabay.com/audio/2025/03/18/11-45-34-728_200x200.png',
        genre: 'rock',
        source: 'media/dont-talk-315229.mp3'
    },
    {
        id: 4,
        name: 'So Fresh',
        artist: 'Cosmonkey',
        img: 'https://cdn.pixabay.com/audio/2025/03/18/12-30-22-395_200x200.png',
        genre: 'rock',
        source: 'media/so-fresh-315255.mp3'
    },
    {
        id: 5,
        name: 'Gardens - Stylish Chill',
        artist: 'penguinmusic',
        img: 'https://cdn.pixabay.com/audio/2025/02/19/22-25-20-336_200x200.png',
        genre: 'melody',
        source: 'media/gardens-stylish-chill-303261.mp3'
    },
    {
        id: 6,
        name: 'Kugelsicher by TremoxBeatz',
        artist: 'TremoxBeatz',
        img: 'https://cdn.pixabay.com/audio/2025/02/18/16-57-42-536_200x200.jpg',
        genre: 'pop',
        source: 'media/kugelsicher-by-tremoxbeatz-302838.mp3'
    }
]   

let body = document.querySelector('body');
let toggleBtn = document.getElementById('toggle');
let songListBlock = document.querySelector('#song-list');
let songFilter = document.querySelector('#song-filter')
let allSongsBlock = document.querySelector('#songs');
let songCard = document.querySelector('#song-card');
let songDetail = document.querySelector('#song-detail');
let songImage = document.querySelector('#song-image');
let songName = document.querySelector('#song-name');
let songAuthor = document.querySelector('#song-author');
let songSource = document.querySelector('#song-source');
let createPlaylistBtn = document.querySelector('#create-playlist');
let playlistName = document.querySelector('#playlist-input');
let allPlaylist = document.querySelector('#all-playlist');

toggleBtn.addEventListener('click', toggleTheme);
createPlaylistBtn.addEventListener('click', createPlaylist);

showSongs();

function toggleTheme() {
    toggleBtn.classList.toggle('dark');
    if(toggleBtn.classList.contains('dark')){
        toggleBtn.dataTheme = 'dark';
        body.style.backgroundColor = '#2e2e2e';
        body.style.color = '#eaeaea';
    } else {
        toggleBtn.dataTheme = 'light';
        body.style.backgroundColor = '#eaeaea';
        body.style.color = '#2e2e2e';
    }
}

function showSongs(){
    function createSongElement(songObj){
        let songDiv = document.createElement('div');
        songDiv.classList.add('song');
        songDiv.textContent = `${songObj.name} - ${songObj.artist}`;
        allSongsBlock.appendChild(songDiv);

        songDiv.addEventListener('click', ()=>{
            renderCurrentSong(songObj);
        })
    }
    for(let i of songList){
        createSongElement(i);
    }
    songFilter.addEventListener('change', ()=>{
        switch(songFilter.value.toLowerCase()){
            case 'all':
                allSongsBlock.textContent = '';
                for(let i of songList){
                    createSongElement(i);
                }
                break;

            case 'rock':
                allSongsBlock.textContent = '';
                for(let i of songList){
                    if(i.genre.toLowerCase() == 'rock'){
                        createSongElement(i);
                    }
                }
                break;

            case 'pop':
                allSongsBlock.textContent = '';
                for(let i of songList){
                    if(i.genre.toLowerCase() == 'pop'){
                        createSongElement(i);
                    }
                }
                break;

            case 'hiphop':
                allSongsBlock.textContent = '';
                for(let i of songList){
                    if(i.genre.toLowerCase() == 'hiphop'){
                        createSongElement(i);
                    }
                }
                break;
            case 'melody':
                allSongsBlock.textContent = '';
                for(let i of songList){
                    if(i.genre.toLowerCase() == 'melody'){
                        createSongElement(i);
                    }
                }
                break;
            default:
                allSongsBlock.textContent = '';
                for(let i of songList){
                    createSongElement(i);
                }
        }
    })
}

function renderCurrentSong(songObj) {
    songImage.src = songObj.img;
    songName.textContent = songObj.name;
    songAuthor.textContent = songObj.artist;
    songSource.src = songObj.source;
}

function createPlaylist() {
    let playList = document.createElement('div');
    playList.classList.add('playlist-block');
    playList.classList.add(playlistName.value);

    let playlistText = document.createElement('p');
    playlistText.classList.add('playlist-text');
    playlistText.textContent = playlistName.value;

    playList.appendChild(playlistText);
    allPlaylist.appendChild(playList);

    if(String(playlistName.value).length >= 30){
        playlistText.classList.add('playlist-long-text');
    }
}

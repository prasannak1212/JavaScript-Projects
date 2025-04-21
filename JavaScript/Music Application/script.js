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
        source: 'media\kugelsicher-by-tremoxbeatz-302838.mp3'
    }
]   

let toggleBtn = document.getElementById('toggle');
let body = document.querySelector('body')

toggleBtn.addEventListener('click', ()=>{
    toggleBtn.classList.toggle('dark');
    if(toggleBtn.classList.contains('dark')){
        body.style.backgroundColor = '#2e2e2e';
        body.style.color = '#eaeaea';
    } else {
        body.style.backgroundColor = '#eaeaea';
        body.style.color = '#2e2e2e';
    }
    
})

// let toggleSlider = document.querySelector('#toggle::before')
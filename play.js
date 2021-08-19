        const title = document.querySelector('.title');
        const prev = document.querySelector('.prev');
        const playPause = document.querySelector('.playPause');
        const next = document.querySelector('.next');
        const audio = document.querySelector('audio');

        const songList=[
            {
                path:"cuoithoi.mp3",
                songName:"Cưới thôi!!!",
            },
            
        ];

        let song_Playing = false;
        //play song
        function playSong(){
            song_Playing = true;
            audio.play();
            playPause.classList.add('active');
            playPause.innerHTML = '<ion-icon name="pause"></ion-icon>';
        }
        //pause song
        function pauseSong(){
            song_Playing = false;
            audio.pause();
            playPause.classList.remove('active');
            playPause.innerHTML = '<ion-icon name="play"></ion-icon>';
        }

        //play or pause
        playPause.addEventListener("click",() =>(song_Playing ? pauseSong():playSong())); 

        //load song
        function loadSong(songList){
            title.textContent = songList.songName;
            audio.src = songList.path;
        }

        //current song
        let i = 0;

        //on load - select first song from list
        loadSong(songList[i])

        function prevSong(){
            i--;
            if(i<0){
                i=songList.length-1;
            }
            loadSong(songList[i]);
            playSong();
        }
        prev.addEventListener("click",prevSong);

        function nextSong(){
            i++;
            if(i>songList.length-1){
                i=0;
            }
            loadSong(songList[i]);
            playSong();
        }
        next.addEventListener("click",nextSong);

        audio.addEventListener("ended",()=>{
            nextSong();
        });
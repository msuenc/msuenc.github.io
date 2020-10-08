var playlist = [
    {'title' : 'As Long As You Love Me',
    'author' : 'Backstreets Boys',
    'source' : 'as-long-as-you-love-me.mp3',
    },

    {'title' : 'Blinding Lights',
    'author' : 'The Weeknd',
    'source' : 'blinding-lights.mp3',
    },

    {'title' : 'Joli bébé',
    'author' : 'Naza, Niska',
    'source' : 'joli-bebe.mp3',
    },

    {'title' : 'Los Puti',
    'author' : 'Favian Lovo, Lele Pons, Lyanno',
    'source' : 'los-puti.mp3',
    },

    {'title' : 'Nights Like This',
    'author' : 'Kehlani feat. Ty Dolla $ign',
    'source' : 'nights-like-this.mp3',
    },

    {'title' : 'Put Your Records On',
    'author' : 'Ritt Momney',
    'source' : 'put-your-records-on.mp3',
    },

    {'title' : 'Regarde Moi',
    'author' : 'Moji x Sboy',
    'source' : 'regarde-moi.mp3',
    },

    {'title' : 'Take What You Want',
    'author' : 'Post Malone feat. Ozzy Osbourne & Travis Scott',
    'source' : 'take-what-you-want.mp3',
    },

    {'title' : 'The Man',
    'author' : 'Taylor Swift',
    'source' : 'the-man.mp3',
    },
];

// Variables
var player = document.getElementById('player');
var title = document.getElementById('song_name');
var author = document.getElementById('song_artist');
var volume = document.getElementById('volume');
var position = document.getElementById('position');
var currentTime = document.getElementById('currentTime');
var durationTime = document.getElementById('durationTime');

// Init
player.src = playlist[0].source;
player.volume = volume.value / 100;
position.value = player.currentTime;
title.innerText = playlist[0].title;
author.innerText = playlist[0].author;

console.log(player.src);

setInterval(function () {
    position.value = player.currentTime * (100 / player.duration);

    var currentMinutes = Math.floor(player.currentTime / 60); 
    var currentSeconds = Math.floor(player.currentTime - currentMinutes * 60); 
    var durationMinutes = Math.floor(player.duration / 60); 
    var durationSeconds = Math.floor(player.duration - durationMinutes * 60); 

    if (currentSeconds < 10) currentSeconds = "0" + currentSeconds; 
    if (durationSeconds < 10) durationSeconds = "0" + durationSeconds;
    if (currentMinutes < 10) currentMinutes = "0" + currentMinutes;
    if (durationMinutes < 10) durationMinutes = "0" + durationMinutes;

    currentTime.innerText = currentMinutes + ":" + currentSeconds;
    durationTime.innerText = durationMinutes + ":" + durationSeconds;
}, 1000);

function onPlay() {
    player.play();
}

function onPause() {
    player.pause();
}

function onPrev() {
    var currentIndex = playlist.findIndex(function(item) {                                            
        if(player.src.indexOf(item.source) != -1) return true;
        else return false;
    });

    if (currentIndex <= 0) {
        var song = playlist[playlist.length-1];
    } else {
        var song = playlist[--currentIndex];
    }

    player.src = song.source;
    title.innerText = song.title;
    author.innerText = song.author;

    player.play();
}

function onNext() {
    var currentIndex = playlist.findIndex(function(item) {
        if(player.src.indexOf(item.source) != -1) return true;
        else return false;
    });
    if (currentIndex >= playlist.length-1) {
        var song = playlist[0];
    } else {
        var song = playlist[++currentIndex];
    }

    player.src = song.source;
    title.innerText = song.title;
    author.innerText = song.author;

    player.play();
}

function onPosition(value) {
    var currentTime = player.duration * (value / 100);
    player.currentTime = currentTime;
}

function onVolume(value) {
    player.volume = value / 100;
}



$('#playNpause').click(function(){
    $('.play').toggle();
    $('.pause').toggle();
    $('ul').children().toggleClass('playEqualizer');
    $('.equalizer-btn').toggleClass('active');
});
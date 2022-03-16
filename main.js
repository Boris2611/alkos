const check_age = () => {
    if (document.getElementById('age').checked) {
    
        window.open("main.html","_self");
    } else {
        alert("Нисте потврдили да имате преко 18 година !");
    }
};



// -------- Kalkulator Alkohola -----

let brojac1 = 0;
let brojac2 = 0;
let brojac3 = 0;

const pokazi_piva = () => {
    brojac1 += 1;

    if(brojac1 % 2 == 0){
        document.getElementById("piva").style.display = "none";
    }
    else {
        document.getElementById("piva").style.display = "block";
    }
};

const pokazi_rakije = () => {
    brojac2 += 1;

    if(brojac2 % 2 == 0){
        document.getElementById("rakije").style.display = "none";
    }
    else {
        document.getElementById("rakije").style.display = "block";
    }
};

const pokazi_vina = () => {
    brojac3 += 1;

    if(brojac3 % 2 == 0){
        document.getElementById("vina").style.display = "none";
    }
    else {
        document.getElementById("vina").style.display = "block";
    }
};



// ------- Music Player ---------

// Songs

let song = new Audio('media/music/1.mp3')




const previous_song = () => {
    song.play();
};

let pause_counter = 1
const pause_song = () => {
    pause_counter += 1
    if(pause_counter % 2 != 0){
        song.pause();
    }
    else {
        song.play()
    }
    
};

const next_song = () => {
    song.pause();
    song = new Audio('media/music/2.mp3')
    song.play();
};

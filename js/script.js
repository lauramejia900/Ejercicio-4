let btn_play, btn_stop, sound;

window.onload = ()=>{
  
  sound = new Howl({
    src: ['https://res.cloudinary.com/dnsfbusax/video/upload/v1692662102/lading-page/jazzy-abstract-beat-11254_v2osri.mp3']
  });
  
 btn_play =  document.getElementById("play-button");
   btn_stop =  document.getElementById("btn_stop");
   btn_play.addEventListener("click",reproducir);
  
btn_stop.addEventListener("click",detener);
  
}

function reproducir(event){
 btn_play.classList.add("ocultar");
  btn_stop.classList.remove("ocultar");
  sound.play();
}

function detener(event){
  btn_play.classList.remove("ocultar");
  btn_stop.classList.add("ocultar");
  sound.pause();
}

var blue = anime({
  targets: '.blue',
  translateY: 200,
  autoplay: false
});

var redBlue = anime({
  targets: '.red, .blue',
  translateY: 200,
  autoplay: false
});

var even = anime({
  targets: '.square:nth-child(even)',
  translateY: 200,
  autoplay: false
});

document.querySelector('.play-blue').onclick = blue.restart;

document.querySelector('.play-red-blue').onclick = redBlue.restart;

document.querySelector('.play-even').onclick = even.restart;

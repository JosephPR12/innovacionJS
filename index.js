function moverPositionRandom(elem){
    elem.style.position = "absolute";
    elem.style.top = Math.random() * (window.innerHeight - elem.offsetHeight) + 'px';
    elem.style.left = Math.random() * (window.innerWidth - elem.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn-si");
let btnNo = document.getElementById("btn-no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e){moverPositionRandom(e.target)});

btnSi.addEventListener('click', function(e){
    alert('Sabía que dirias que sí. TE AMO!!!'); 

    divModoSexo.style.display = 'block';
    const cancion = new Audio('media/careless.mp3');
    cancion.play();
});
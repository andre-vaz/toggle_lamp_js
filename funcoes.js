function mudar(){
    if(btn.innerHTML == "ON"){
        img.src = "ligado.jpg";
        img.alt = "ON";
        btn.innerHTML = "OFF";
        body.style.backgroundColor = "lightyellow";
    }
    else{
        img.src = "desligado.jpg";
        img.alt = "OFF";
        btn.innerHTML = "ON";
        body.style.backgroundColor = "grey";
    }
}

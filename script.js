window.onload = function(){
  var sound1 = new Howl({
    src: ['assets/golden.ogg']
  });
  var sound2 = new Howl({
    src: ['assets/regular.ogg']
  });
  
  var body = document.querySelector('#main');
  body.addEventListener("click", function(evt){
    const random = Math.round(Math.random() * 10 + 1);
    console.log(random)
    var golden = false;

    if (random > 8) {
      golden = true;
    }

    var x = evt.clientX, y = evt.clientY;
    img = document.createElement("img");
    img.className = "card";
    if (golden) {
        img.src = "assets/golden.gif";
        sound1.play();
    } else {
        img.src = "assets/regular.png";
        sound2.play();
    };
    img.style.top = y - 197 + "px",
    img.style.left = x - 143 + "px";
    img.draggable = false,     
    img.ondragstart = function() {
      return false;
    }
    body.appendChild(img);
  });
};

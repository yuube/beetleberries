window.onload = function(){
  var goldSound = new Howl({
    src: ['assets/golden.ogg']
  });
  var regSound = new Howl({
    src: ['assets/regular.ogg']
  });

  var first = true
  var wasGolden = false
  
  var body = document.querySelector('#main');
  body.addEventListener("click", function(evt){
    const random = Math.round(Math.random() * 10);
    var golden = false;

    if (random > 7) {
      golden = true;
    }

    var x = evt.clientX, y = evt.clientY;

    img = document.createElement("img");
    img.className = "card";
    img.style.top = y - 197 + "px",
    img.style.left = x - 143 + "px";
    img.draggable = false,     
    img.ondragstart = function() {
      return false;
    }

    const useGolden = function() {
      img.src = 'assets/golden.gif'
      wasGolden = true
      goldSound.play()
      console.log('Golden (' + random.toString() + ')')
    }

    const useRegular = function() {
      img.src = 'assets/regular.png'
      wasGolden = false
      regSound.play()
      console.log('Regular (' + random.toString() + ')')
    }

    if (first) {
        useRegular()
        first = false
    } else if (wasGolden) {
        useRegular()
    } else if (golden) {
        useGolden()
    } else {
        useRegular()
    };

    body.appendChild(img);
  });
};

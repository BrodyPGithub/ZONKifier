function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    var coll = document.getElementsByClassName('collapsible');
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var content = document.getElementById('panel');
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    }
  });
  var gameValues = [];
  function generateBoard() {
          var zonks = parseInt(document.getElementById('zonks').value) || 0;
          var nI = parseInt(document.getElementById('nI').value) || 0;
          var nII = parseInt(document.getElementById('nII').value) || 0;
          var nIII = parseInt(document.getElementById('nIII').value) || 0;
          var nIV = parseInt(document.getElementById('nIV').value) || 0;
          var nV = parseInt(document.getElementById('nV').value) || 0;
      
          var total = zonks + nI + nII + nIII + nIV + nV
  
          if (!(total == 16)) {
              alert("All inputs must add up to 16");
          }
      
          var values = [];
          for (var i = 0; i < zonks; i++) {
              values.push("ZONK");
          }
          for (var i = 0; i < nI; i++) {
              values.push(100);
          }
          for (var i = 0; i < nII; i++) {
              values.push(200);
          }
          for (var i = 0; i < nIII; i++) {
              values.push(300);
          }
          for (var i = 0; i < nIV; i++) {
              values.push(400);
          }
          for (var i = 0; i < nV; i++) {
              values.push(500);
          }
  
          shuffle(values);
          gameValues = values;
      }
  function clickButton(number) {
      alert(gameValues[number - 1])
  }
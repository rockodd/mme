var WechselZeit = 2000; 

ImageArr = new Array()

ImageArr[ImageArr.length] = "pictures/startbild2.jpg ";
ImageArr[ImageArr.length] = "pictures/startbild.jpg ";


var xAnzahl = ImageArr.length;
var xCounter = -1

function Bildwechsel01() {
    xCounter = xCounter+1;
    if (xCounter < xAnzahl) {
        document.getElementById('Foto01').src = ImageArr[xCounter];
        setTimeout("Bildwechsel01()",WechselZeit);    
    }
    else {
        xCounter = -1;
        Bildwechsel01();
    }
} 
setTimeout('Bildwechsel01()',2000);


    function Pruefen(){

      if(document.Formular.Name.value == "")
      { 
        alert("Bitte Text eintragen!"); 
        document.Formular.Name.focus(); 
        return false;
      }

      if(document.Formular.Subtext.value == "")
      { 
        alert("Bitte Text eintragen!"); 
        document.Formular.Subtext.focus(); 
        return false;
      }

      if(new Date(document.Formular.Start.value) > new Date(document.Formular.Ende.value))
      {
        alert("falsch!"); 
        document.Formular.Start.focus(); 
        return false;

      }
    }

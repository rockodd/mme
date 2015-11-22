// Bildwechsel
var images = new Array();
images[0] = "pictures/startbild01.jpg ";
images[1] = "pictures/startbild02.jpg ";
setTimeout("Bildwechsel(0)", 3000);

function Bildwechsel(x) {
    document.getElementById("Foto01").src = images[x];
    timeoutId = setTimeout(function() {
        Bildwechsel((x + 1) % images.length).fadeIn();
    }, 3000);
}




// Einbindung von google Maps
    window.addEventListener('load',initialize);
    function initialize() {
      var mapProp = {
      center:new google.maps.LatLng(52.544516,13.354815),
      zoom:16,
      mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    



//Formulareingaben überprüfen
window.addEventListener("load",initialisiereFunktion,false);

function initialisiereFunktion(){
    submitBtn = document.getElementById("submitbtn");
    submitBtn.addEventListener('click', function(){
        return submitPruefen();
    });
}
function submitPruefen(){
    var f = document.Formular;
    var fehler = "";

    if(document.Formular.Name.value == "" || document.Formular.Name.value.length < 3 )
    {
        fehler += "-Bezeichnung\n";
        document.Formular.Name.focus();
    
    }

    if(document.Formular.Subtext.value == "" || document.Formular.Subtext.value.length < 3 )
    {
        fehler += "-Bemerkung\n";
        document.Formular.Subtext.focus();
    
    }

    if(document.Formular.Date.value == "")
    {
        fehler += "-Datum\n";
        document.Formular.Date.focus();
        
    }
    if(document.Formular.Start.value == "")
    {
        fehler += "-Start\n";
        document.Formular.Start.focus();
        
    }
    if(document.Formular.End.value == "")
    {
        fehler += "-Ende\n";
        document.Formular.End.focus();
        
    }
    if (fehler !="") {
        var fehlertext = "Die folgenden Felder wurden nicht vollstÃ¤ndig ausgefÃ¼llt:\n\n";
        fehlertext += fehler;
        alert(fehlertext + "\nBitte fuellen Sie die Informationen noch aus. Danke.");
        return false;
        }
        InfoFenster();
        }


        

// Prüfen der Eingabe für Beschreibung sonst ErrorLabel einblenden
n = document.getElementById("NameText");
n.addEventListener('change', function(){
    if(document.Formular.Name.value == "" || document.Formular.Name.value.length < 3 )
    {
        document.getElementById("bezLabel").innerHTML="min. 3 Zeichen";
    }
    else document.getElementById("bezLabel").innerHTML="";
});

// Prüfen der Eingabe für Bemerkung sonst ErrorLabel einblenden
s = document.getElementById("subtext");
s.addEventListener('change', function(){
    if(document.Formular.Subtext.value == "" || document.Formular.Subtext.value.length < 3 )
    {
        document.getElementById("subLabel").innerHTML="min. 3 Zeichen";
    }
    else document.getElementById("subLabel").innerHTML="";
});


//Navigationsleiste fährt durch mit scrollen mit
window.onscroll = function() {
    var menu = document.getElementById('menu');
    if( document.body.scrollTop+document.documentElement.scrollTop > 30)

        menu.className = "stuck";
    else menu.className = "";
};




function InfoFenster() {
    var overlay = document.getElementById('overlay');
    var specialBox = document.getElementById('Box');
    overlay.style.opacity = .8;
        overlay.style.display = "block";
        specialBox.style.display = "block";
}

c = document.getElementById('Close');
c.addEventListener('click', function(){
    var overlay = document.getElementById('overlay');
    var specialBox = document.getElementById('Box');
    overlay.style.display = "none";
    specialBox.style.display = "none";
});


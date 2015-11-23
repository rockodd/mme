

// Neuen Datensatz erstellen über Aside Menü
newdatabox = document.getElementById("pencil");
newdatabox.addEventListener('click', function(){
    InfoFenster();
});


// Bildwechsel
var images = new Array();
images[0] = "pictures/startbild01.jpg ";
images[1] = "pictures/startbild02.jpg ";
setTimeout("Bildwechsel(0)", 3000);

function Bildwechsel(x) {
    document.getElementById("Foto01").src = images[x];
    timeoutId = setTimeout(function() {
        Bildwechsel((x + 1) % images.length)
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
    var pattName = new RegExp("[A-Za-z]{3}")

    if(document.Formular.Name.value == "" || (!pattName.test(document.Formular.Name.value) ))
    {
        fehler += "-Bezeichnung\n";
        document.Formular.Name.focus();
    
    }

    if(document.Formular.Subtext.value == "" || (!pattName.test(document.Formular.Subtext.value)) )
    {
        fehler += "-Bemerkung\n";
        document.Formular.Subtext.focus();
    
    }

    if(document.Formular.Date.value == "" || document.Formular.Date.value.length > 10)
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
        var fehlertext = "Die folgenden Felder wurden nicht korrekt ausgefüllt:\n\n";
        fehlertext += fehler;
        /*alert(fehlertext + "\nBitte füllen Sie die Informationen noch aus. Danke.");*/
        document.getElementById("resultLabel").innerHTML="Bitte alle Felder ausfüllen";
        return false;
        }
        document.getElementById("resultLabel").innerHTML="Eingabe gespeichert";
        setTimeout(closeOverlay(),3000);

        }


        

// Prüfen der Eingabe für Beschreibung sonst ErrorLabel einblenden
n = document.getElementById("NameText");
n.addEventListener('change', function(){
    var patt = new RegExp("[A-Za-z]{3}");
    if(document.Formular.Name.value == "" || (!patt.test(document.Formular.Name.value) ))
    {
        document.getElementById("bezLabel").innerHTML="min. 3 Buchstaben verwenden";
    }
    else document.getElementById("bezLabel").innerHTML="";
});

// Prüfen der Eingabe für Bemerkung sonst ErrorLabel einblenden
s = document.getElementById("subtext");
s.addEventListener('change', function(){
    var patt = new RegExp("[A-Za-z]{3}")
    if(document.Formular.Subtext.value == "" || (!patt.test(document.Formular.Subtext.value) ))
    {
        document.getElementById("subLabel").innerHTML="min. 3 Buchstaben verwenden";
    }
    else document.getElementById("subLabel").innerHTML="";
});

// Prüfen der Eingabe für Date sonst ErrorLabel einblenden
dateID = document.getElementById("date");
dateID.addEventListener('change', function(){

    if(document.Formular.Date.value == "" || document.Formular.Date.value.length > 10)
    {
        document.getElementById("dateLabel").innerHTML="falsches Datumsformat";
    }
    else document.getElementById("dateLabel").innerHTML="";
});

// Prüfen der Eingabe für Startzeit sonst ErrorLabel einblenden
startID = document.getElementById("start");
startID.addEventListener('change', function(){

    if(document.Formular.Start.value == "")
    {
        document.getElementById("startLabel").innerHTML="falsche Zeitangabe";
    }
    else document.getElementById("startLabel").innerHTML="";
});

// Prüfen der Eingabe für Startzeit sonst ErrorLabel einblenden
endID = document.getElementById("end");
endID.addEventListener('change', function(){

    if(document.Formular.End.value == "")
    {
        document.getElementById("endLabel").innerHTML="falsche Zeitangabe";
    }
    else document.getElementById("endLabel").innerHTML="";
});


//Navigationsleiste führt durch mit scrollen mit
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
c.addEventListener('click', closeOverlay, false);

    function closeOverlay() {
        var overlay = document.getElementById('overlay');
        var specialBox = document.getElementById('Box');
        overlay.style.display = "none";
        specialBox.style.display = "none";
    };



var images = new Array();
images[0] = "pictures/startbild01.jpg ";
images[1] = "pictures/startbild02.jpg ";
setTimeout("Bildwechsel(0)", 3000);

function Bildwechsel(x) {
    document.getElementById("Foto01").src = images[x];
    timeoutId = setTimeout(function() {
        Bildwechsel((x + 1) % images.length);
    }, 3000);
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
        var fehlertext = "Die folgenden Felder wurden nicht vollständig ausgefuellt:\n\n";
        fehlertext += fehler;
        alert(fehlertext + "\nBitte fuellen Sie die Informationen noch aus. Danke.");
        return false;
        }
        return true;
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



window.onscroll = function() {
    var menu = document.getElementById('menu');
    if( document.body.scrollTop+document.documentElement.scrollTop > 30)

        menu.className = "stuck";
    else menu.className = "";
};
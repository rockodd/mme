
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

    if(document.Formular.Name.value == "" || document.Formular.Name.value.length < 3 )
    {
        alert("Bitte eine Bezeichnung eintragen!");
        document.Formular.Name.focus();
        return false;
    }

    if(document.Formular.Subtext.value == "" || document.Formular.Subtext.value.length < 3 )
    {
        alert("Bitte eine Bemerkung eintragen!");
        document.Formular.Subtext.focus();
        return false;
    }

    if(document.Formular.Date.value == "")
    {
        alert("Bitte ein Datum eintragen!");
        document.Formular.Date.focus();
        return false;
    }
    if(document.Formular.Start.value == "")
    {
        alert("Bitte eine Startzeit eintragen!");
        document.Formular.Start.focus();
        return false;
    }
    if(document.Formular.End.value == "")
    {
        alert("Bitte eine Endzeit eintragen!");
        document.Formular.End.focus();
        return false;
    }
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
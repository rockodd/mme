
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

    if(document.Formular.Date.value == "tt.mm.jjjj")
    {
        alert("falsch!");
        document.Formular.Start.focus();
        return false;

    }
}

n = document.getElementById("NameText");
// add event listener to table

n.addEventListener('change', function(){
    if(document.Formular.Name.value == "" || document.Formular.Name.value.length < 3 )
    {
        document.getElementById("bezLabel").innerHTML="min. 3 Zeichen";
    }
    else document.getElementById("bezLabel").innerHTML="";
});

s = document.getElementById("subtext");
// add event listener to table

s.addEventListener('change', function(){
    if(document.Formular.Name.value == "" || document.Formular.Name.value.length < 3 )
    {
        document.getElementById("bezLabel").innerHTML="min. 3 Zeichen";
    }
    else document.getElementById("bezLabel").innerHTML="";
});
/*
window.getElementById("subLabel").addEventListener("change",checkBez,false);
function checkBem(){

    if(document.Formular.Subtext.value == "" || document.Formular.Subtext.value.length < 3 )
    {
        document.getElementById("subLabel").innerHTML="min. 3 Zeichen";
    }
    else document.getElementById("subLabel").innerHTML="";

}*/

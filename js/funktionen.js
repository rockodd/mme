
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



window.addEventListener("change",checkBez,false);

function checkBez(){

    document.getElementById("bezLabel").innerHTML="min. 3 Zeichen";
}

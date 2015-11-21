function pruefen(){
var f = document.Formular;
var fehler = "";

if (f.subtext.value == ""){
fehler += "- deine eMail-Adresse\n";
}

if (fehler != ""){
var fehlertext = "Die folgenden Felder wurden nicht vollständig ausgefüllt:\n\n";
fehlertext += fehler;
alert(fehlertext + "\nBitte füll die Informationen noch aus. Danke.");
return false;
}
return true;
}

window.addEventListener("change",checkBez,false);

function checkBez(){

    document.getElementById("bezLabel").innerHTML="min. 3 Zeichen";
}

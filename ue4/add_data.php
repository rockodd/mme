<?php
/**
 * Created by PhpStorm.
 * User: Rocko
 * Date: 20.01.2016
 * Time: 18:05
 */
require_once "db_daten.php";

$host = htmlspecialchars($_SERVER["HTTP_HOST"]);
$uri  = rtrim(dirname(htmlspecialchars($_SERVER["PHP_SELF"])), "/\\");
$extra = "index.html";

$value = $_POST['Date'];
$value2 = $_POST['Name'];
$value3 = $_POST['Start'];
$value4 = $_POST['End'];
//Value 0 ist Gesamtzeit kann entfernt oder ver�ndert werden
$value0 = $value4-$value3;
$value5 = $_POST['Subtext'];
$value6 = $_POST['Location'];


$time_diff = strtotime('15:45:00') - strtotime('11:00:00');

// Testausgabe in der Konsole
echo "vergebene Zeiten: <br>";
echo "start: ".($value3)." ende: ".$value4."<br><br>";

echo "Zeitunterschied gerechnet: ".$time_diff/60/60 . "<br>";




$time1 = $value3;
$time2 = $value4;
$timelength = strtotime( $time2 ) - strtotime( $time1 );

$hours = intval( $timelength / 3600 );
$minutes = intval( ( $timelength % 3600 ) / 60 );
$seconds = $timelength % 60;

echo str_pad( $hours, 2, '0', STR_PAD_LEFT ) . ':' . str_pad( $minutes, 2, '0', STR_PAD_LEFT ) . ':' . str_pad( $seconds, 2, '0', STR_PAD_LEFT );
// SQL String um Daten in die DB zu schreiben
// value0 ist f�r Gesamtzeit.
$mysqli->query("INSERT INTO workload (id, Datum, Bezeichnung, Start, Ende, Gesamt, Bemerkung, Ort) VALUES (null, '$value', '$value2',
     '$value3', '$value4',str_pad( $hours, 2, '0', STR_PAD_LEFT ) . ':' . str_pad( $minutes, 2, '0', STR_PAD_LEFT ) . ':' . str_pad( $seconds, 2, '0', STR_PAD_LEFT ) , '$value5', '$value6')");


	$mysqli->close();
// Wieder kommentar entfernen um zur�ck zur index.html zu wechseln
//	header("Location: http://$host$uri/$extra");
?>

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
$value0 = $value4-$value3;
$value5 = $_POST['Subtext'];
$value6 = $_POST['Location'];



$time_diff = strtotime('12:45:00') - strtotime('11:00:00');
    echo $time_diff/60;

$mysqli->query("INSERT INTO workload (id, Datum, Bezeichnung, Start, Ende, Gesamt, Bemerkung, Ort) VALUES (null, '$value', '$value2',
     '$value3', '$value4','$value0' , '$value5', '$value6')");


	$mysqli->close();
	header("Location: http://$host$uri/$extra");
?>

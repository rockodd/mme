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



/*
	if(isset($_GET['action'])) $action = htmlspecialchars($_GET['action']);
	if(isset($_POST['action'])) {
        $action										= htmlspecialchars($_POST['action']);
        if(isset($_POST['id']))			$id			= htmlspecialchars($_POST['id']);
        if(isset($_POST['etappe']))		$etappe		= htmlspecialchars($_POST['etappe']);
        if(isset($_POST['region']))		$region		= htmlspecialchars($_POST['region']);
        if(isset($_POST['datum']))		$datum		= htmlspecialchars($_POST['datum']);
        if(isset($_POST['kommentar']))	$kommentar	= htmlspecialchars($_POST['kommentar']);
    }
*/

$mysqli->query("INSERT INTO workload (id, Datum, Bezeichnung, Start, Ende, Gesamt, Bemerkung, Ort) VALUES (null, '$value', '$value2',
     '$value3', '$value4','$value0' , '$value5', '$value6')");

/*
 * 	switch($action) {
        case "edit":
            $mysqli->query("UPDATE route SET etappe='$etappe', region='$region', datum='$datum', kommentar='$kommentar' WHERE id='$id'");
            break;

        case "delete":
            $id	= htmlspecialchars($_GET['id']);
            $mysqli->query("DELETE FROM route WHERE id = $id;");
            break;

        case "add":
            $mysqli->query("INSERT INTO route (id, etappe, region, datum, poi, kommentar) VALUES (NULL, '$etappe', '$region', '$datum', NULL, '$kommentar');");
            break;

        default:
            break;
    }
*/
	$mysqli->close();
	/*header("Location: http://$host$uri/$extra");*/
?>

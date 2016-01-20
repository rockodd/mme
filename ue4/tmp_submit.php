<?php
	require_once "db_daten.php";
	$host = htmlspecialchars($_SERVER["HTTP_HOST"]);
	$uri  = rtrim(dirname(htmlspecialchars($_SERVER["PHP_SELF"])), "/\\");
	$extra = "route_OnePage.php";
	
	if(isset($_GET['action'])) $action = htmlspecialchars($_GET['action']);
	if(isset($_POST['action'])) {
		$action										= htmlspecialchars($_POST['action']);
		if(isset($_POST['id']))			$id			= htmlspecialchars($_POST['id']);
		if(isset($_POST['etappe']))		$etappe		= htmlspecialchars($_POST['etappe']);
		if(isset($_POST['region']))		$region		= htmlspecialchars($_POST['region']);
		if(isset($_POST['datum']))		$datum		= htmlspecialchars($_POST['datum']);
		if(isset($_POST['kommentar']))	$kommentar	= htmlspecialchars($_POST['kommentar']);
	}
	

	switch($action) {
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
	$mysqli->close();
	header("Location: http://$host$uri/$extra");
?>

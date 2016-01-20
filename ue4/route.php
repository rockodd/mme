<!DOCTYPE html>
<html lang="de">

<head>
	<title>Tolle Tabelle</title>
	<meta charset="utf-8">
	<meta id="#" content="#">
	<link rel="stylesheet" href="css/merge.css">
	<script src=""></script>
</head>

<body>
<table border='1'>
	<tr>
		<th>ID:</th>
		<th>Datum:</th>
		<th>Bezeichnung:</th>
		<th>Start:</th>
		<th>Ende:</th>
		<th>Gesamt:</th>
		<th>Bezeichnung:</th>
		<th>Ort:</th>
	</tr>
	<?php
	require_once "db_daten.php"; 																						// Verbindungsdaten zur Datenbank
	$sql_abfrage = $mysqli->query("Select id, Datum, Bezeichnung, Start, Ende, Gesamt,Bemerkung, Ort FROM workload;"); 							// SQL-Abfrage
	while($datensatz = $sql_abfrage->fetch_array()) {
		echo "<tr>"
			. "<td>" . htmlspecialchars($datensatz['id']) . "</td>"
			. "<td>" . htmlspecialchars($datensatz['Datum']) . "</td>"
			. "<td>" . htmlspecialchars($datensatz['Bezeichnung']) . "</td>"
			. "<td>" . htmlspecialchars($datensatz['Start']) . "</td>"
			. "<td>" . htmlspecialchars($datensatz['Ende']) . "</td>"
			. "<td>" . htmlspecialchars($datensatz['Gesamt']) . "</td>"
			. "<td>" . htmlspecialchars($datensatz['Bemerkung']) . "</td>"
			. "<td>" . htmlspecialchars($datensatz['Ort']) . "</td>"
			. "<td>" . "<a href='bearbeiten.php?id=" . (int)htmlspecialchars($datensatz['id']) . "&action=edit" . "'>Bearbeiten</a>" . "</td>"
			. "<td>" . "<a href='tmp_submit.php?id=" . (int)htmlspecialchars($datensatz['id']) . "&action=delete" . "'>Löschen</a>" . "</td>"
			. "</tr>\n";
	}
	$sql_abfrage->close();
	$mysqli->close();
	?>
</table>
<a href="tmp_hinzufuegen.php?&action=add">Hinzufügen</a>
</body>
</html>
<?php
	require_once "db_daten.php";
?>
<!DOCTYPE html>
<html lang="de">
	<head>
		<title>Tolle Tabelle</title>
		<meta charset="utf-8">
		<meta id="#" content="#">
		<link rel="stylesheet" href="../../../Dropbox/Studium/Studium%20-%20Medieninformatik/!semester%2003/Multimedia_Engineering_I/Brainstorm/MME-Uebung-Tobias/Übung4/projekt4/css/merge.css">
		<script src=""></script>
	</head>
	<body>
		<table border='1'>
		<tr><th>Etappe:</th><th>Region:</th><th>Datum:</th><th>Kommentar:</th><th></th><th></th></tr>
		<?php
			require_once "db_daten.php"; 																						// Verbindungsdaten zur Datenbank
			$sql_abfrage = $mysqli->query("SELECT id, etappe, region, datum, kommentar FROM route;"); 							// SQL-Abfrage
					while($datensatz = $sql_abfrage->fetch_array()) {
						$id			= htmlspecialchars($datensatz['id']);
						$etappe		= htmlspecialchars($datensatz['etappe']);
						$region		= htmlspecialchars($datensatz['region']);
						$datum		= htmlspecialchars($datensatz['datum']);
						$kommentar	= htmlspecialchars($datensatz['kommentar']);
						echo "<tr>"
							 . "<td>" . $etappe		. "</td>"
							 . "<td>" . $region		. "</td>"
							 . "<td>" . $datum		. "</td>"
							 . "<td>" . $kommentar	. "</td>"
							 . "<td>" . "<a href='tmp_bearbeiten.php?id="	. (int)$id . "&action=edit"		. "'>Bearbeiten</a>"	. "</td>"
							 . "<td>" . "<a href='tmp_delete.php?id="		. (int)$id . "&action=delete"	. "'>Löschen</a>"	. "</td>"
							 . "</tr>\n";

					}
					$sql_abfrage->close();
					$mysqli->close();
			?>
		</table>
		<!--action="<?php// echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>"-->
		<form method="post" action="tmp_submit.php">
			<table border='1'>
				<tr>
					<td><input name="etappe" type='text' placeholder="Etappe"></td>
<!--					<td><input name="region" type='text'></td>-->
					<td>
						<select name="region">
							<?php
								$nordinsel	= array("Auckland", "Northland", "Coromandel Peninsula", "Waikato und King Country", "Bay Of Plenty", "East Coast", "Zentrale Hochebene",
												  "Taranaki", "Whanganui und Palmerston North", "Wellington");
								$suedinsel	= array("Marlborough und Nelson", "Christchurch und Canterbury", "Otago", "Fjordland und Southland",
												  "Queenstown", "West Coast");
					
								echo "<option value='' disabled selected hidden>Region</option>";	//Platzhalter
								echo "<optgroup label='Nordinsel'>";								// Unterteilung
								foreach($nordinsel as $element) {
									echo "<option value='$element'>$element</option>\n";
								}
								echo "</optgroup>";
								echo "<optgroup label='Südinsel'>";									// Unterteilung
								foreach($suedinsel as $element) {
									echo "<option value='$element'>$element</option>\n";
								}
								echo "</optgroup>";
							?>
						</select>
					</td>
					<td><input name="datum" type='text' placeholder="Datum"></td>
					<td><input name="kommentar" type='text' placeholder="Kommentar"></td>
					<td><input name="action" type='hidden' value="add"></td>
					<td><input type='submit' value='Okay'></td>
					<td><a href="../../../Dropbox/Studium/Studium%20-%20Medieninformatik/!semester%2003/Multimedia_Engineering_I/Brainstorm/MME-Uebung-Tobias/Übung4/projekt4/route.php">Abbrechen</a></td>
				</tr>
			</table>
		</form>
	</body>
</html>
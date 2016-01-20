<?php
	require_once "db_daten.php";
	if(isset($_GET["id"]) && isset($_GET["action"])) {
?>
<!DOCTYPE html>
<html lang="de">
	<head>
		<title>Tolle Tabelle</title>
		<meta charset="utf-8">
		<meta id="#" content="#">
		<link rel="stylesheet" href="css/meincss.css">
		<script src="js/meinjs.js"></script>
	</head>
	<body>
		<!--action="<?php// echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>"-->
		<form method="post" action="tmp_submit.php">
			<table border='1'>
			tr><th>ID:</th><th>Datum:</th><th>Bezeichnung:</th><th>Start:</th><th>Ende:</th><th>Gesamt:</th><th>Bezeichnung:</th><th>Ort:</th></tr>
			<?php
				require_once "db_daten.php"; 																						// Verbindungsdaten zur Datenbank
				$sql_abfrage = $mysqli->query("Select id, Datum, Bezeichnung, Start, Ende, Gesamt,Bemerkung, Ort kommentar FROM workload;"); 							// SQL-Abfrage
						while($datensatz = $sql_abfrage->fetch_array()) {
							$id			= htmlspecialchars($datensatz['id']);
							$Datum		= htmlspecialchars($datensatz['Datum']);
							$Bezeichnung		= htmlspecialchars($datensatz['Bezeichnung']);
							$Start		= htmlspecialchars($datensatz['Start']);
							$kommentar	= htmlspecialchars($datensatz['kommentar']);
							$kommentar	= htmlspecialchars($datensatz['kommentar']);
							$kommentar	= htmlspecialchars($datensatz['kommentar']);
							$kommentar	= htmlspecialchars($datensatz['kommentar']);
							$kommentar	= htmlspecialchars($datensatz['kommentar']);
							if($_GET["id"] == $id) {
								echo "<tr>"
									   ?> <input name="id" type='hidden' value="<?php echo $id;		?>")> <?php echo 
									   "<td>" ?> <input name="etappe" type='text' value="<?php echo $etappe;		?>")> <?php echo "</td>"
//									 . "<td>" ?> <input name="region" type='text' value="<?php echo $region;		?>")> <?php echo "</td>"
									 . "<td>" ?> .	<select name="region">
														<?php
															$nordinsel	= array("Auckland", "Northland", "Coromandel Peninsula", "Waikato und King Country", "Bay Of Plenty", "East Coast", "Zentrale Hochebene",
																			  "Taranaki", "Whanganui und Palmerston North", "Wellington");
															$suedinsel	= array("Marlborough und Nelson", "Christchurch und Canterbury", "Otago", "Fjordland und Southland",
																			  "Queenstown", "West Coast");

															//echo "<option selected>$region</option>";							//Platzhalter
															echo "<optgroup label='Nordinsel'>";								// Unterteilung
															foreach($nordinsel as $element) {
																if($element == $region) echo "<option value='$element' selected>$element</option>\n";
																else 					echo "<option value='$element'>			$element</option>\n";
															}
															echo "</optgroup>";
															echo "<optgroup label='Südinsel'>";									// Unterteilung
															foreach($suedinsel as $element) {
																if($element == $region) echo "<option value='$element' selected>$element</option>\n";
																else 					echo "<option value='$element'>			$element</option>\n";
															}
															echo "</optgroup>";
														?>
													</select> <?php echo "</td>"
									 . "<td>" ?> <input name="datum" type='text' value="<?php echo $datum;		?>")> <?php echo "</td>"
									 . "<td>" ?> <input name="kommentar" type='text' value="<?php echo $kommentar;	?>")> <?php echo "</td>"
									   ?> <input name="action" type='hidden' value="edit"> <?php echo 
									  "<td>" . "<input type='submit' value='Okay'>" . "</td>"
									 . "<td>" . "<a href='route.php'>Abbrechen</a>"	. "</td>"
									 . "</tr>\n";
							} else {
								echo "<tr>"
									 . "<td>" . $etappe		. "</td>"
									 . "<td>" . $region		. "</td>"
									 . "<td>" . $datum		. "</td>"
									 . "<td>" . $kommentar	. "</td>"
									 . "<td>" . "<a href='tmp_bearbeiten.php?id="	. (int)$id . "&action=edit"		. "'>Bearbeiten</a>"	. "</td>"
									 . "<td>" . "<a href='tmp_delete.php?id="		. (int)$id . "&action=delete"	. "'>Löschen</a>"	. "</td>"
									 . "</tr>\n";
							}
						}
						$sql_abfrage->close();
						$mysqli->close();
			?>
		</table>
		</form>
	</body>
</html>
<?php
	} // Schließende Klammer der if-Bedingung (Sicherheitsabfrage)
?>

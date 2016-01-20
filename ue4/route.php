<!--================================================================================================ 
2     BESCHREIBUNG 
3  
4     Datei: route.php 
5     Datum: 11.01.2016 
6     Autor: Tobi Wan 
7 =================================================================================================--> 
8 
 
9 <!DOCTYPE html> 
10 <html lang="de"> 
11 
 
12 <!--================================================================================================ 
13     Head     
14 =================================================================================================--> 
15 
 
16 	<head> 
17 		<title>Tolle Tabelle</title> 
18 		<meta charset="utf-8"> 
19 		<meta id="#" content="#"> 
20 		<link rel="stylesheet" href="css/merge.css"> 
21 		<script src=""></script> 
22 	</head> 
23 	 
24 <!--================================================================================================ 
25     Body    
26 =================================================================================================--> 
27 
 
28 	<body> 
29 		<table border='1'> 
30 			<tr><th>ID:</th><th>Datum:</th><th>Bezeichnung:</th><th>Start:</th><th>Ende:</th><th>Gesamt:</th><th>Bezeichnung:</th><th>Ort:</th></tr> 
31 			<?php 
 				require_once "db_daten.php"; 																						// Verbindungsdaten zur Datenbank 
 				$sql_abfrage = $mysqli->query("Select id, Datum, Bezeichnung, Start, Ende, Gesamt,Bemerkung, Ort kommentar FROM workload;"); 							// SQL-Abfrage 
 						while($datensatz = $sql_abfrage->fetch_array()) { 
 							echo	"<tr>" 
 									. "<td>" . htmlspecialchars($datensatz['id'])		. "</td>" 
 									. "<td>" . htmlspecialchars($datensatz['Datum'])		. "</td>" 
 									. "<td>" . htmlspecialchars($datensatz['Bezeichnung'])		. "</td>" 
 									. "<td>" . htmlspecialchars($datensatz['Start'])	. "</td>" 
 									. "<td>" . htmlspecialchars($datensatz['Ende'])	. "</td>" 
 									. "<td>" . htmlspecialchars($datensatz['Gesamt'])	. "</td>" 
 									. "<td>" . htmlspecialchars($datensatz['Bemerkung'])	. "</td>" 
 									. "<td>" . htmlspecialchars($datensatz['Ort'])	. "</td>" 
 									. "<td>" . "<a href='tmp_bearbeiten.php?id="	. (int)htmlspecialchars($datensatz['id']) . "&action=edit" . "'>Bearbeiten</a>"	. "</td>" 
 									. "<td>" . "<a href='tmp_submit.php?id="		. (int)htmlspecialchars($datensatz['id']) . "&action=delete" . "'>Löschen</a>"	. "</td>" 
									. "</tr>\n"; 
						} 
 						$sql_abfrage->close(); 
 						$mysqli->close(); 
 			?> 
 		</table> 
 		<a href="tmp_hinzufuegen.php?&action=add">Hinzufügen</a> 
 	</body> 
 </html> 
 
 
52 <!--================================================================================================ 
53      
54     E N D E 
55      
56 =================================================================================================--> 

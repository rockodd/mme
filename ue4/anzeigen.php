<!DOCTYPE html> 
2 <html> 
3  <head> 
4   <title>News verwalten</title> 
5   <meta charset="UTF-8" /> 
6   <style type="text/css"> 
7   body { font-size: 80%; font-family: sans-serif; } 
8   ul { width: 40em; } 
9   li { margin: 10px;} 
10   </style> 
11 </head> 
12 <body> 
13 <?php 
14 require_once "db_daten_aktuell.php"; 
15 if ($stmt = $mysqli->prepare("SELECT id, titel, text FROM aktuell")) { 
16   $stmt->execute(); 
17   $stmt->bind_result($id, $titel, $text); 
18   echo "<ul>\n"; 
19   while($stmt->fetch()) { 
20     echo "<li><strong>" 
21           . htmlspecialchars($titel) 
22           . "</strong>: " 
23 	  . htmlspecialchars($text) 
24 	  . "| <a href='bearbeiten.php?id=" 
25 	  . (int)$id 
26 	  . "'>bearbeiten</a> " 
27 	  . "| <a href='loeschen.php?id=" 
28 	  . (int)$id 
29 	  . "'>löschen</a>" 
30 	  . "</li>\n"; 
31   } 
32   echo "</ul>\n"; 
33   $stmt->close(); 
34   } 
35 $mysqli->close(); 
36 ?> 
37 <a href="neu.php">Neue Schlagzeile eintragen</a> 
38 </body> 
39 </html> 

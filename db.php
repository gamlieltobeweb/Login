<?
// ================= MODIFIER ================== ¥¥

$sql_hote = "rds-tobeweb-phplist.ckvjvsug45uq.eu-west-1.rds.amazonaws.com";      // Hote
$sql_login = "rdsTobewebPhp";     // Login
$sql_mdp = "tobeweb55";        // Mot de passe
$base = "DevTest";          // Base de donnee

// ============== NE PAS MODIFIER ============== ¥¥

$db_click = mysql_connect($sql_hote,$sql_login,$sql_mdp) or die("erreur de connexion la base de donnee.");
mysql_select_db($base, $db_click) or die("erreur de selection de la base de donnee.");

?>
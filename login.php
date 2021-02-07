<?php
$servername = "rds-tobeweb-phplist.ckvjvsug45uq.eu-west-1.rds.amazonaws.com";
$username = "rdsTobewebPhp";
$password = "tobeweb55";
$dbname = "DemoTest";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');



$Encodeddata = file_get_contents('php://input');
$Decodeddata = json_decode($Encodeddata,true);

$name = $Decodeddata['nom'];
$prenom = $Decodeddata['prenom'];
$email = $Decodeddata['email'];
$pass =   md5($Decodeddata['pass']);



$sql = "INSERT INTO client (nom, prenom, email,pass)VALUES('$name', '$prenom', '$email','$pass')" or die('failed query'.mysqli_connect_error());

echo $sql;
$R = mysqli_query($conn, $sql);
//mysqli_close($conn);
if ($R) {
	
	$message = "new row added";
	
   echo "new row added";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
$res =array("message"=>$message);
echo json_decode($res);


die();
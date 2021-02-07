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
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");



$Encodeddata = file_get_contents('php://input');
$Decodeddata = json_decode($Encodeddata,true);


$name = $Decodeddata['data']['nom'];
$prenom = $Decodeddata['data']['prenom'];
$email = $Decodeddata['data']['email'];
$pass =   md5($Decodeddata['data']['pass']);




$sql = "INSERT INTO client (nom, prenom, email,pass)VALUES('$name', '$prenom', '$email','$pass')" or die('failed query'.mysqli_connect_error());


$R = mysqli_query($conn, $sql);
//mysqli_close($conn);
if ($R) {
	
	//$message = "new row added";
	
   echo "new row added";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  //$message = "error serveur";
}
//$res[] = array("message"=>$message);
//echo json_encode($res);



?>
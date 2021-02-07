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
$pass = $Decodeddata['pass'];



$sql = "INSERT INTO client (nom, prenom, email,pass) VALUES ('$name', '$prenom', '$email','$pass')";

echo $sql;

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
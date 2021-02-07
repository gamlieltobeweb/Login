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




//$name = $_POST ['name'];
// $prenom = $Decodeddata['prenom'];
$email = $Decodeddata['data']['email'];
$pass =   md5($Decodeddata['data']['pass']);




//$name = stripslashes($name);
$email = stripslashes($email);
$pass = stripslashes($pass);

//$name = mysqli_real_escape_string($conn,$name);
$email = mysqli_real_escape_string($conn,$email);
$pass = mysqli_real_escape_string($conn,$pass);

$sql = "select * from client where email= '$email' and pass = '$pass' " or die('failed query'.mysqli_connect_error());


$R = mysqli_query($conn, $sql);
//mysqli_close($conn);

	
	if (mysqli_num_rows($R) > 0){
	
   echo "succesly entry";
} else {
  //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  echo "error serveur";
  //$message = "error serveur";
}
//$res[] = array("message"=>$message);
//echo json_encode($res);

mysqli_close($conn);
?>
<?php
define ("servername" , "rds-tobeweb-phplist.ckvjvsug45uq.eu-west-1.rds.amazonaws.com");
define ("username" , "rdsTobewebPhp");
define ("password" , "tobeweb55");
define ("dbname" , "DemoTest");

// Create connection
$conn = mysqli_connect(servername, username, password, dbname) or die("can not connect to database");
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}else{
	die( "Sucsses Connection: ");
	
};
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers');

header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000');
header('Content-Length: 0');
header('Content-Type: text/plain');
?>
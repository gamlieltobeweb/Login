<?php

$sql_hote = "rds-tobeweb-phplist.ckvjvsug45uq.eu-west-1.rds.amazonaws.com";      // Hote
$sql_login = "rdsTobewebPhp";     // Login
$sql_mdp = "tobeweb55";        // Mot de passe
$base = "DemoTest"; 

$link = mysqli_connect($sql_hote, $sql_login, $sql_mdp,$base)

    or die("Impossible de se connecter : " );
echo 'Connexion réussie \n';


$SL = "select fichier from media where id = 20";


$R = mysqli_query($link,$SL);

// if(!empty($R)){
//     echo "good";
// }else{
//     echo "dafouk";
// }


if (mysqli_num_rows($R) > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($R)) {
    // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    foreach($row as $results) {
        echo $results .'\n' ;'<br>';'\n';
    }
}
} else {
    echo "0 results";
}
// $results = substr_replace($results, '', 0, 2) ;

// echo $results . '\n' ;'<br>';
$a = "../medias ";
// echo "je suis la video \n". $a ;

// if ($results == $a)

$pic = "../picture/abc";

echo $pic;


?>
<!-- <img src='../picture/abc' height='200' width='200' alt='Image not Found'/> -->


<video width="100%" autoplay  controls>
  <source src="<?php echo $results ?>;" type="video/mp4">
</video>
<?php

echo '333333333333';
if ($R) {
    $Message = "cool";
}else{
    $Message = "bad";
}


echo $Message;

mysqli_close($link);
?>
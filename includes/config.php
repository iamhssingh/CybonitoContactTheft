<?php
//set timezone
date_default_timezone_set("Asia/Kolkata");

ob_start();
session_start();

//database credentials
define('DBHOST','localhost');
define('DBUSER','itiespnh_srm');
define('DBPASS','srm123_456');
define('DBNAME','itiespnh_srmmess');

//application address
define('DIR','http://anonymoous.ities.xyz/cybonito/');
define('SITEEMAIL','admin@ities.xyz');

try {

	//create PDO connection 
	$db = new PDO("mysql:host=".DBHOST.";port=3306;dbname=".DBNAME, DBUSER, DBPASS);
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch(PDOException $e) {
	//show error
    echo '<p class="bg-danger">'.$e->getMessage().'</p>';
    exit;
}

//include the user class, pass in the database connection
include('classes/user.php');
$user = new User($db);
?>
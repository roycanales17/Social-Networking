<?php

session_start();

if(isset($_SESSION['login']) & ($_SESSION['login'] == true)){

	include('../layouts/mainHeader.php');

}else{
	// redirect user to login page
	header("location: login");
}
if(isset($_SESSION['user']) & !empty($_SESSION['user'])){

}else{
	// redirect user to login page
	header("location: login");
}
if(isset($_SESSION['last_login']) & !empty($_SESSION['last_login'])){

	
}else{
	// redirect user to login page
	header("location: login");
}
?>
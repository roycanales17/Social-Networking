<?php

// Check the current page
// Echo basename($_SERVER['PHP_SELF']);
if( (basename($_SERVER['PHP_SELF']) == 'login.php') )
{
	if(isset($_SESSION['user']) & !empty($_SESSION['user']))
	{
		// redirect to home page
		header("location: home");
	}
}

?>
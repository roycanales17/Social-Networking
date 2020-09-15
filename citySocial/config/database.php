<?php

    //Our MySQL user account.
    define('MYSQL_USER', 'admin');
     
    //Our MySQL password.
    define('MYSQL_PASSWORD', 'canales1998');
     
    //The server that MySQL is located on.
    define('MYSQL_HOST', 'localhost');
     
    //The name of our database.
    define('MYSQL_DATABASE', 'citysocial');
     
    /**
     * PDO options / configuration details.
     * I'm going to set the error mode to "Exceptions".
     * I'm also going to turn off emulated prepared statements.
     */
    $pdoOptions = array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_EMULATE_PREPARES => false
    );
     
    /**
     * Connect to MySQL and instantiate the PDO object.
     */
    $pdo = new PDO(
        "mysql:host=" . MYSQL_HOST . ";dbname=" . MYSQL_DATABASE, //DSN
        MYSQL_USER, //Username
        MYSQL_PASSWORD, //Password
        $pdoOptions //Options
    );
	
    /**
     * MYSQLI options / configuration details.
     * I'm going to set the error mode to "Exceptions".
     * I'm also going to turn off emulated prepared statements.
     */   
    $conn = mysqli_connect("localhost","admin","canales1998","citysocial");
    
    /* check connection */
    if ( mysqli_connect_errno() ) 
    {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
?>
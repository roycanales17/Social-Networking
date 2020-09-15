<?php

	//Database
	include_once('../config/database.php');
	//
	//
	//
	// PDO = First one is, Here I’m using PHP PDO for connecting to database and for other database operations. PHP PDO helps to secure our 
	// application from SQL Injections.
	//
	// CSRF TOkens = Second one is, Using CSRF Tokens. CSRF Tokens helps us to protect form submissions, that is only the authentic and 
	// valid form submissions will only be accepted. Third party form submissions without CSRF Tokens won’t be accepted.
	//
	// Secure Session = And the third security measure is creating Secure Session by regenerating session id with regenerate_session_id PHP  // function. That means session id before login and after login are different.
	//
	// BRUTE FORCE ATTACK =  implementing an account lockout after several unsuccessful login attempts is ineffective as it makes your 
	// server easy prey for denial-of-service attacks. However, if performed with progressive delays and validate strong password, this 
	// method becomes much more effective.
	//
	//
	//
	//
	//
	//==================================== DISABLE TO VISIT SERVER =====================================//

	if (strpos($_SERVER['REQUEST_URI'], basename(__FILE__)) !== false){
		echo "NOT ALLOWED";
		exit();
	}

	//==================================== DISABLE TO VISIT SERVER =====================================//

	//================================ CSRF PAGE(Cross-site Request Forgery) ================================//

	/*
		if ($_SERVER['REQUEST_METHOD'] !== 'POST') {

			//Kill the page if the request is not POST.
			die();
		}
	*/

	//================================ CSRF PAGE(Cross-site Request Forgery) ================================//
	//
	//
	//
	//
	//
	//
	//
	//
	//================================== BRUTE FORCE ATTACK PREVENTION =================================//
	
	function getIpAddress()
	{
		if ( !empty($_SERVER['HTTP_CLIENT_IP']) ) 
		{
			$ipAddress = $_SERVER['HTTP_CLIENT_IP'];
		}
		elseif ( !empty($_SERVER['HTTP_X_FORWARDED_FOR']) )
		{
			$ipAddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
		} 
		else 
		{
			$ipAddress = $_SERVER['REMOTE_ADDR'];
		}

		return $ipAddress;
	}


	function updateIpaddressAttempt($ipaddress,$time){
		global $pdo;

		$statement = $pdo->prepare('
			INSERT INTO login_log 
			(ip_address, try_time)
		    VALUES 
		    (:ipAddress, :timeStarted)');

		$statement->execute([
		    'ipAddress' => $ipaddress,
		    'timeStarted' => $time,
		]);

	}


	function countAttempt($ipAddress,$time){
		$con = mysqli_connect("localhost","admin","canales1998","citysocial");
		$check_login_row = mysqli_fetch_assoc(mysqli_query($con, "select count(*) as total_count from login_log where try_time > $time and ip_address='$ipAddress'"));
		return $total_count = $check_login_row['total_count'];
	}


	function deleteIpAddress($ipAddress){
		$con = mysqli_connect("localhost","admin","canales1998","citysocial");
		mysqli_query($con, "delete from login_log where ip_address='$ipAddress'");
	}

	//================================== BRUTE FORCE ATTACK PREVENTION =================================//
	//
	//
	//
	//
	//
	//
	//
	//
	//================================= PREVENT XSS ATTACKS ESCAPE STRINGS ==============================//

	function _escape($string){
		return htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
	}

	//================================= PREVENT XSS ATTACKS ESCAPE STRINGS ==============================//
	//
	//
	//
	//
	//
	//
	//
	//
	//============================================== LOGIN ==============================================//

	if (isset($_POST['loginBtn'])) {

		// PHP Form Validations
	    if(empty($_POST['e-mail'])){ $errors[]="User Name / E-Mail field is Required. "; }
	    if(empty($_POST['password'])){ $errors[]="Password field is Required. "; }


	    // CSRF Token Validation
	    if(isset($_POST['csrf_token']))
	    {
	        if($_POST['csrf_token'] === $_SESSION['csrf_token'])
	        {
	        	//Do nothing
	        } else {

	            $errors[] = "Problem with CSRF Token Validation";
	            return false;
	        }
	    }


	    // CSRF Token Time Validation
	    $max_time = 60*60*24; // in seconds
	    if(isset($_SESSION['csrf_token_time']))
	    {
	        $token_time = $_SESSION['csrf_token_time'];

	        if(($token_time + $max_time) >= time() )
	        {
	        	//Do nothing
	        } else {

	            $errors[] = "CSRF Token Expired";
	            unset($_SESSION['csrf_token']);
	            unset($_SESSION['csrf_token_time']);
	        }
	    }


	    if(empty($errors)){

	    	//Get Address
	    	$ip_address = getIpAddress();

	    	//Set time to disable logged in.
	    	$selectTime = time()-60;
	    	
	    	if (countAttempt($ip_address,$selectTime) == 3) 
	    	{
	    		$errors[] = "Too many failed login attempts, please try again after 60sec ";

	    	} else {

	    		// Check the Login Credentials
		        $sql = "SELECT * FROM users WHERE ";
		        if(filter_var($_POST['e-mail'], FILTER_VALIDATE_EMAIL))
		        {
		            $sql .= "email=?";

		        } else {

		            $sql .= "username=?";
		        }

		        $result = $pdo->prepare($sql);
		        $result->execute(array($_POST['e-mail']));
		        $count = $result->rowCount();
		        $user = $result->fetch(PDO::FETCH_ASSOC);

		        if($count == 1)
		        {	
		            // Compare the password with password hash
		            if(password_verify($_POST['password'], $user['password']))
		            {	

		            	//Remove ip address attempts if successfully logged in
		            	deleteIpAddress($ip_address);

		                // regenerate session id
		                session_regenerate_id();
		                $_SESSION['login'] = true;
		                $_SESSION['user'] = getUserInformation($user['user_id']);
		                $_SESSION['last_login'] = time();

		                $messages[] = "Welcome Users";

		                // redirect the user to home page
		                header("location: home");

		            } else {

		            	//Increment every time you fail to log in.
		            	$countAttempt =  countAttempt($ip_address,$selectTime);
		            	$countAttempt++;

		            	$rem_attm = 3 - $countAttempt;

		            	if ($rem_attm == 0) 
		            	{
		            		$errors[] = "Too many failed login attempts, please try again after 60sec ";
		            	}
		            	else
		            	{
		            		$errors[] = "User Name / E-Mail & Password wrong combination. ";
		            		$errors[] = "<b>".$rem_attm."</b> attempts remaining.";
		            	}

		            	//Time seconds
		            	$try_time = time();

		            	//Insert ip address
		            	updateIpaddressAttempt($ip_address, $try_time);
		            }

		        } else {
		        	
		            //Increment every time you fail to log in.
	            	$countAttempt =  countAttempt($ip_address,$selectTime);
	            	$countAttempt++;

	            	$rem_attm = 3 - $countAttempt;

	            	if ($rem_attm == 0) 
	            	{
	            		$errors[] = "Too many failed login attempts, please try again after 60sec ";
	            	}
	            	else
	            	{
	            		$errors[] = "User Name / E-Mail & Password wrong combination. ";
	            		$errors[] = "<b>".$rem_attm."</b> attempts remaining.";
	            	}

	            	//Time seconds
	            	$try_time = time();

	            	//Insert ip address
	            	updateIpaddressAttempt($ip_address, $try_time);
		        }

	    	}

	    }
	}

	//============================================== LOGIN ==============================================//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//============================================= REGISTER ============================================//

	if (isset($_POST['registerBtn'])) {

		$date = date("F j, Y");   
		$time = date("h:i:s A");

		$birth_month = $_POST['birth_month'];
		$birth_day = $_POST['birth_day'];
		$birth_year = $_POST['birth_year'];
		$gender = $_POST['inlineRadioOptions'];

		// PHP Form Validations
	    if( empty($_POST['email']) )
	    { 
	    	$errors[]="User Name field is Required"; 

	    } else {

	        // Check Username is Unique with DB query
	        $sql = "SELECT * FROM users WHERE username=?";
	        $result = $pdo->prepare($sql);
	        $result->execute(array($_POST['email']));
	        $count = $result->rowCount();

	        if($count == 1){

	            $errors[] = "User Name already exists in database";

	        }

	    }

	    if( empty($_POST['email']) )
	    { 
	    		$errors[]="E-mail field is Required"; 

	    } else {

	        // Check Email is Unique with DB Query
	        $sql = "SELECT * FROM users WHERE email=?";
	        $result = $pdo->prepare($sql);
	        $result->execute(array($_POST['email']));
	        $count = $result->rowCount();

	        if($count == 1){

	            $errors[] = "E-Mail already exist in database";

	        }

	    }


	    if(empty($_POST['password']))
	    { 
	    	$errors[]= "Password field is required "; 

	    } else {

	        // check the repeat password
	        if( empty($_POST['passwordr']) )
	        	{ 
	        		$errors[]="Repeat Password field is Required"; 

	        	} else {

		            // compare both passwords, if they match. Generate the Password Hash
		            if($_POST['password'] == $_POST['passwordr'])
		            {
		                // create password hash
		                $pass_hash = password_hash($_POST['password'], PASSWORD_DEFAULT);

		            } else {

		                // Display Error Message
		                $errors[] = "Both Passwords Should Match";
		            }
	        	}
	    }

	    if (empty($birth_month) || empty($birth_day) || empty($birth_year || empty($$gender))) 
	    {
	    	// Display Error Message
		    $errors[] = "All fields must be filled.";
	    }


	    // CSRF Token Validation
	    if(isset($_POST['csrf_token']))
	    {
	        if( $_POST['csrf_token'] === $_SESSION['csrf_token'])
	        {

	        } else {

	            $errors[] = "Problem with CSRF Token Validation";
	        }
	    }


	    // CSRF Token Time Validation
	    $max_time = 60*60*24; // in seconds

	    if( isset($_SESSION['csrf_token_time']) )
	    {
	        $token_time = $_SESSION['csrf_token_time'];
	        if( ($token_time + $max_time) >= time() )
	        {
	        
	        } else {

	            $errors[] = "CSRF Token Expired";
	            unset($_SESSION['csrf_token']);
	            unset($_SESSION['csrf_token_time']);
	        }
	    }


	    // Given password
		$checkPassword = $_POST['passwordr'];

		// Validate password strength
		$uppercase = preg_match('@[A-Z]@', $checkPassword);
		$lowercase = preg_match('@[a-z]@', $checkPassword);
		$number    = preg_match('@[0-9]@', $checkPassword);
		//$specialChars = preg_match('@[^\w]@', $checkPassword);

		if( !$uppercase || !$lowercase || !$number || strlen($checkPassword) < 8 ) 
		{
		     $errors[] = 'Password should be at least 8 characters in length and should include at least one upper case letter and one number.';
		}


	    // If no Errors, Insert the Values into users table
	    if(empty($errors))
	    {	
	    	$timestamp = date("Y-m-d H:i:s");

	        $sql = "
	        INSERT INTO users 
	        (username, email, password, created, updated) 
	        VALUES 
	        (:username, :email, :password, :created, :updated)";

	        $result = $pdo->prepare($sql);
	        $values = array(':username'     => $_POST['email'],
	                        ':email'        => $_POST['email'],
	                        ':password'     => $pass_hash,
	                        ':created'      => $timestamp,
	                        ':updated'      => $timestamp
	                        );
	        $res = $result->execute($values);

	        if( $res )
	        {
	            $messages[] = "User Registered";
	            $mobile = 'none';

	            // get the id from last insert query and insert a new record into user_info table with mobile number
	            $userid = $pdo->lastInsertID();

	            $uisql = "
	            INSERT INTO user_info 
	            (`user_id`, `fname`, `lname`, `birth_month`, `birth_day`, `birth_year`, `gender`, `mobile`, `created`, `updated`) 
	            VALUES 
	            (:user_id, :fname, :lname, :b_month, :b_day, :b_year, :gender, :mobile, :created, :updated)";

	            $uiresult = $pdo->prepare($uisql);
	            $values = array(':user_id'      => $userid,
	                            ':fname'       	=> $_POST['fname'],
	                            ':lname'       	=> $_POST['lname'],
	                            'b_month'		=> $birth_month,
	                            'b_day'			=> $birth_day,
	                            'b_year'		=> $birth_year,
	                            'gender'		=> $gender,
	                            ':mobile'       => $mobile,
	                            ':created'		=> $timestamp,
	                            ':updated'		=> $timestamp
	                            );

	            $uires = $uiresult->execute($values) or die(print_r($result->errorInfo(), true));
	            
	            if( $uires )
	            {
	                $messages[] = "Added User Meta Information";
	            }

	            // regenerate session id
                session_regenerate_id();
                $_SESSION['login'] = true;
                $_SESSION['user'] = getUserInformation($userid);
                $_SESSION['last_login'] = time();

                // redirect the user to home page
		        header("location: home");
	        }
	    }
	}

	//============================================= REGISTER ============================================//
	//
	//
	//
	//
	//
	//
	//
	//============================================ GET USER ID ==========================================//

	function getUserInformation($id){
		global $pdo;

		$sql = "SELECT * FROM user_info WHERE user_id = :userid";

		$stmt = $pdo->prepare($sql);
		$stmt->execute(array(':userid' => $id ));
		$user = $stmt->fetch(PDO::FETCH_ASSOC);

		return $user;
	}

	//============================================ GET USER ID ==========================================//

?>







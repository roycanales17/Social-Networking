<?php
	
	

	// APP CONTROLLERS
	//
	//
	//
	// The use of encryption is important when you have sensitive information to protect. For example,
	// you may have a web store that collects customer's name, address and other personal information. Having this type of
	// data stolen from a database breach can have serious consequences.
	//
	// EncryptThis (FUNCTION)
	// This function encrypts the data passed into it and returns the cipher data with the IV embedded within it.
	// The initialization vector (IV) is appended to the cipher data with 
	//
	// DecryptThis (FUNCTION)
	// This function decrypts the cipher data (with the IV embedded within) passed into it and returns the clear text (unencrypted) data.
	// The initialization vector (IV) is appended to the cipher data by the EncryptThis function (see above). 
	//
	// INSTRUCTION: Specify your own key (password) and algorithm to use
	   $ENCRYPTION_KEY = 'your-long-complex-password-here!!!';
       $ENCRYPTION_ALGORITHM = 'AES-256-CBC';
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
	//
	//
	//
	//
	//====================================== SECURE YOUR DATA ======================================//

	function EncryptThis($ClearTextData) 
	{
	    // the use of two colons serve to delimited between the two.
	    global $ENCRYPTION_KEY;
	    global $ENCRYPTION_ALGORITHM;
	    $EncryptionKey = base64_decode($ENCRYPTION_KEY);
	    $InitializationVector  = openssl_random_pseudo_bytes(openssl_cipher_iv_length($ENCRYPTION_ALGORITHM));
	    $EncryptedText = openssl_encrypt($ClearTextData, $ENCRYPTION_ALGORITHM, $EncryptionKey, 0, $InitializationVector);
	    return base64_encode($EncryptedText . '::' . $InitializationVector);
	}

	function DecryptThis($CipherData) 
	{
	    // There are two colons that serve to delimited between the cipher data and the IV.
	    global $ENCRYPTION_KEY;
	    global $ENCRYPTION_ALGORITHM;
	    $EncryptionKey = base64_decode($ENCRYPTION_KEY);
	    list($Encrypted_Data, $InitializationVector ) = array_pad(explode('::', base64_decode($CipherData), 2), 2, null);
	    return openssl_decrypt($Encrypted_Data, $ENCRYPTION_ALGORITHM, $EncryptionKey, 0, $InitializationVector);
	}


	//Basic encrypt
	function numhash($n) {
	    return (((0x0000FFFF & $n) << 16) + ((0xFFFF0000 & $n) >> 16));
	}

	//Create randomString
	function generateRandomString()
	{	
		$length = 10;
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < $length; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }
	    return $randomString;
	}

	//====================================== SECURE YOUR DATA ======================================//
	//
	//
	//
	//
	//
	//
	//=========================================== STORE ============================================//

	function store($table,$sql) //$data_values should be an array
	{
		global $conn;
		
		$query = "INSERT INTO ".$table." ".$sql."";
		mysqli_query($conn, $query) or die(mysqli_error($conn));
		$last_id = mysqli_insert_id($conn);
		return $last_id;
	}

	//=========================================== STORE ============================================//
	//
	//
	//
	//
	//
	//
	//=========================================== VIEW =============================================//

	function view($sql)
	{
		global $conn;

		$result = mysqli_query($conn,$sql)or die(mysqli_error($conn));
		$rows = array();

		if($result->num_rows > 0)
		{
			while ( $row = mysqli_fetch_array($result) ) 
			{
				$rows[] = $row;
			}
		}

		return $rows;
	}

	//=========================================== VIEW =============================================//
	//
	//
	//
	//
	//
	//
	//====================================== REMOVE / DELETE =======================================//

	function remove($table,$sql_id,$data_id,$user_id)
	{
		global $pdo;

		// Check user if authorized
        $checkQuery = "SELECT * FROM users WHERE user_id=?";
        $result = $pdo->prepare($checkQuery);
        $result->execute( array($user_id) );
        $count = $result->rowCount();

        if($count == 1)
        {

            $removeQuery = "DELETE FROM ".$table." WHERE ".$sql_id." = ?";        
	    	$q = $pdo->prepare($removeQuery);
	    	$response = $q->execute( array($data_id) ); 

	    	$messages[] = "Successfully Removed.";

        } else {

 			$errors[] = "You are not authorized to remove this.";
        }

		
	}

	//====================================== REMOVE / DELETE =======================================//
	//
	//
	//
	//
	//
	//
	//======================================== ESCAPE STRING =======================================//

	function e($val){
		global $conn;
		return mysqli_real_escape_string($conn, trim($val));
	}

	//======================================== ESCAPE STRING =======================================//
	//
	//
	//
	//
	//
	//
?>
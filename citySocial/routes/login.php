
<?php
	
	session_start();

	//Authentication
	include('../config/authentication.php');

	//Check if already logged in
	require_once('../config/if-logged-in.php');

	//Encrypt the token
	$token = md5(uniqid(rand(), TRUE));
	$_SESSION['csrf_token'] = $token;
	$_SESSION['csrf_token_time'] = time();
	
	//Header
	include('../layouts/loginHeader.php');


?>

<!-- Content -->
<div class='container' style='padding: 30px;'>
    	
	<div class='row'>

		<!-- LEFT BAR -->
		<div class='col-md-7 left-bar'>
			
			<h2>Connect with friends and the world around you on citySocial.</h2>
			<br>

			<ul class='list-group loginList'>
				<li class='list-group-item'><i class='icons far fa-newspaper'></i><br class='breakLine'><b class='giveSpace'>See photos and updates</b> from friends in News Feed.</li>
				<li class='list-group-item'><i class='icons fa fa-desktop'></i><br class='breakLine'><b class='giveSpace'>Share what's new</b> in your life on your Timeline.</li>
				<li class='list-group-item'><i class='icons far fa-star'></i><br class='breakLine'><b class='giveSpace'>Find more</b> of what you're looking for with citySocial Search.</li>
			</ul>
			<hr class='breakLine'>
		</div>
		
		<!-- RIGHT BAR -->
		<div class='col-md-5 right-bar'>

			<h1>Sign Up</h1>
			<small class='signUpFormSmallTag'>It’s quick and easy.</small>

			<div style='clear: both;margin: 15px;'></div>

			<form action="login" role="form" method="POST">
				<input type="hidden" name="csrf_token" value="<?php echo $token; ?>">
				<fieldset>

					<div class='form-row'>
					    <div class='col'>
					      <input type='text' class='form-control' name="fname" placeholder='First name' autocomplete='off' required value="<?php if(isset($_POST['fname'])){ echo $_POST['fname']; } ?>">
					    </div>
					    <div class='col'>
					      <input type='text' class='form-control' name="lname" placeholder='Last name' autocomplete='off' required value="<?php if(isset($_POST['lname'])){ echo $_POST['lname']; } ?>">
					    </div>
					</div>
					<div class='form-group'>
				    	<input type='email' class='form-control' name="email" placeholder='Email' autocomplete='off' required value="<?php if(isset($_POST['email'])){ echo $_POST['email']; } ?>">
					</div>
					<div class='form-group'>
					    <input type='password' class='form-control' name="password" placeholder='Password' autocomplete='off' required>
					</div>
					<div class='form-group'>
					    <input type='password' class='form-control' name="passwordr" placeholder='Confirm Password' autocomplete='off' required>
					</div>
					<div class='form-group'>
					    <label class='formLabel'>Birthday</label><br>
					    <div class='form-inline'>
					    	<select id="month" name="birth_month" class='form-control form-control-sm selectorTag'>
				    		 	<option value="January">January</option>
						        <option value="February">February</option>
						        <option value="March">March</option>
						        <option value="April">April</option>
						        <option value="May">May</option>
						        <option value="June">June</option>
						        <option value="July">July</option>
						        <option value="August">August</option>
						        <option value="September">September</option>
						        <option value="October">October</option>
						        <option value="November">November</option>
						        <option value="December">December</option>
							</select>
							<select id="day" name="birth_day" class='form-control form-control-sm selectorTag'>
								<?php 
								  $start_date = 1;
								  $end_date   = 31;
								  for( $j=$start_date; $j<=$end_date; $j++ ) {
								    echo '<option value='.$j.'>'.$j.'</option>';
								  }
								?>
							</select>
							<select id="year" name="birth_year" class='form-control form-control-sm selectorTag'>
								<?php 
									$year = date('Y');
									$min = $year - 60;
									$max = $year;
									for( $i=$max; $i>=$min; $i-- ) {
										echo '<option value='.$i.'>'.$i.'</option>';
									}
						          ?>
							</select>
					    </div>
					 </div>
					 <div class='form-group'>
					    <label class='formLabel'>Gender</label><br>
					    <div class='form-check form-check-inline'>
						  	<input class='form-check-input' type='radio' name='inlineRadioOptions' id='inlineRadio1' value='Male'>
						  	<label class='form-check-label' for='inlineRadio1'>Male</label>
						</div>
					    <div class='form-check form-check-inline'>
					  		<input class='form-check-input' type='radio' name='inlineRadioOptions' id='inlineRadio2' value='Female'>
						  	<label class='form-check-label' for='inlineRadio2'>Female</label>
						</div>
					 </div>
					 <div class='form-group w-75'>
					 	<small class='agreeAndTerms'>By clicking Sign Up, you agree to our <a href=''>Terms</a>, <a href=''>Data Policy</a> and <a href=''>Cookies Policy</a> . You may receive SMS Notifications from us and can opt out any time.</small>
					 </div>
					 <div class='form-group'>
					 	<input type='submit' class='btn btn-success' value='Sign Up' name='registerBtn'>
					 </div>

				 </fieldset>
			</form>
		</div>
	</div>
	
</div>
<div id="alert-area" class="alert-area"></div>
<!-- Content -->

<?php 
	
	include('../layouts/loginFooter.php');

    if(!empty($errors)){
        echo "<script>";
        foreach ($errors as $error) {
            echo "alertError('".$error."');";
        }
        echo "</script>";
    }

    if(!empty($messages)){
        echo "<script>";
        foreach ($messages as $message) {
            echo "alertSuccess('".$message."');";
        }
        echo "</script>";
    }

    
?>
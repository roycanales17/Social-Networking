
<nav class="navbar navbar-expand-md">
	    <div class="container">
	        <a class="navbar-brand" href="/">City<b>Social</b></a>

	        <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	            <span class="navbar-toggler-icon"></span>
	        </button>

	        <div class="collapse navbar-collapse " id="navbarNav">

	            <div class="mr-auto"></div>
	            <ul class="navbar-nav">
	                <li class="nav-item" style="padding-top: 2px;">

	                	<form id="loginForm" action="login" role="form" method="POST">
							<input type="hidden" name="csrf_token" value="<?php echo $token; ?>">
							<fieldset>
	
								<label class="labelLogin" for="email">Email or Phone</label><br>
			                    <input type="text" class="form-control loginInput" placeholder="Username" name="e-mail" autofocus value="<?php if(isset($_POST['e-mail'])){ echo $_POST['e-mail']; } ?>">
			        </li>
			        <li class="nav-item">

			                	<label class="labelLogin" for="password">Password</label><br>
			                	<div class="form-inline">
			                		<input type="password" class="form-control loginInput" placeholder="Password" name="password">
			                		<button class="btn-sm loginBtn" name="loginBtn" type="submit">Log In</button><br>
			                	</div>

							</fieldset>
	                	</form>
	                	
	                    <small class="forgotAccount"><a href="">Forgot Account?</a></small>

	                </li>
	            </ul>
	        </div>
	    </div>
	</nav>

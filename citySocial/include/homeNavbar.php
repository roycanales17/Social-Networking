<nav class="navbar navbar-expand-md">
	    <div class="container">
	        <a class="navbar-brand" href="#">City<b>Social</b></a>

	        <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	            <span class="navbar-toggler-icon"></span>
	        </button>
			
	        <div class="collapse navbar-collapse " id="navbarNav">

	            <form class="form-inline ml-auto search-form">
	                <input type="text" class="form-control form-control-sm" placeholder="Search here...">
	            </form>

	            <div class="mr-auto"></div>
	            <ul class="navbar-nav">
	                <li class="nav-item">
	                    <a class="nav-link" href="home">Home <span class="sr-only">(current)</span></a>
	                </li>
	                <li class="nav-item">
	                    <a class="nav-link" href="#">Notification</a>
	                </li>
	                <li class="nav-item">
	                    <div class="dropdown">
	                        <a class="nav-link dropwdown-link" tabindex="-1" aria-disabled="true" data-toggle="dropdown">Account <span class="dropdown-toggle"></span></a>
	                        <div class="dropdown-menu dropdown-menu-right animate slideIn">
	                            <a class="dropdown-item" href="profile?=<?php echo urlencode(base64_encode($_SESSION['user']['fname'])) ?>" >Profile</a>
	                            <a class="dropdown-item" href="#">Activity Logs</a>
	                            <a class="dropdown-item" href="#">Setting</a>
	                            <div class="dropdown-divider"></div>
	                            <a class="dropdown-item" href="config/logout.php">Log out &nbsp;<span class="fa fa-sign-out" style="font-size: 17px;"></span></i></a>
	                        </div>
	                    </div>
	                </li>
	            </ul>
	        </div>
	    </div>
	</nav>
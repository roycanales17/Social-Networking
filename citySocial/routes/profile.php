<?php

	//Redirect to login page if user is not logged in.
	include_once('../config/check-login.php');

	//Profile Controllers 
	include_once('../post/profileControllers.php');

?>

	<!-- PROFILE CONTENT -->
	<div id="profile">
		
		<div class="row w-100 shadow-sm profile-header">
			
			<div class="container profile-banner">
				<input type="hidden" id="isdfjkasdfnka" value="<?php echo EncryptThis($_SESSION['user']['user_id']) ?>">
				<div class="cover-image">
					<img class="cover-image1" src="store/img/cover2.jpg" />			
				</div>

				<div class="cover-image2">
					<img class="rounded-circle" src="store/img/1.jpg"/>
					<?php
						//$dp = "SELECT * FROM users WHERE user_id='".$_SESSION['user']['user_id']."'";
						//$profile_dp = view($dp);

						//foreach ($profile_dp as $dp_profile) {
						//	echo '<img class="rounded-circle img-thumbnail cover-image2" src="data:image/jpeg;base64,'.base64_encode( $dp_profile['display_profile'] ).'"/>';	
						//}
					?>
					<h2 class="cover-profileName"><?php echo _escape($_SESSION['user']['fname']) .' '._escape($_SESSION['user']['lname'])  ?>&nbsp;<small>(Roy)</small></h2>
				</div>

			</div>

			<div class="profile-bio">
				<label>Dreamer</label><br>
				<a href="">Edit</a>
			</div>

			<div class="profile-navbar">
				<div class="profile-navigation">

					<button type="button" class="btn-nav btn1">Timeline</button>
					<button type="button" class="btn-nav btn2">About</button>
					<button type="button" class="btn-nav btn3">Friends<small>1520</small></button>
					<button type="button" class="btn-nav btn4">Photos</button>
					<button type="button" class="btn-nav btn5">Archive</button>
					<button type="button" class="btn-nav dropdown-toggle btn6" id="profileNavigation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</button>
					<div class="dropdown-menu" aria-labelledby="profileNavigation">
					    <a class="dropdown-item btn-link-nav1" href="#">About</a>
					    <a class="dropdown-item btn-link-nav2" href="#">Friends</a>
					    <a class="dropdown-item btn-link-nav3" href="#">Photos</a>
					    <a class="dropdown-item btn-link-nav4" href="#">Archive</a>
					    <a class="dropdown-item btn-link-nav5" href="#">Videos</a>
					    <a class="dropdown-item btn-link-nav6" href="#">Music</a>
					    <a class="dropdown-item btn-link-nav7" href="#">Sports</a>
					    <a class="dropdown-item btn-link-nav8" href="#">Likes</a>
					    <a class="dropdown-item btn-link-nav9" href="#">Groups</a>
					</div>

					<span class="profile-controller">
						<button class="profile-btn-controller"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Profile</button>
						<button class="profile-btn-controller"><i class="fa fa-eye" aria-hidden="true"></i></button>
						<button class="profile-btn-controller"><i class="fa fa-list" aria-hidden="true"></i></button>
						<button class="profile-btn-controller"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></button>
					</span>
				</div>
			</div>

		</div>
		

		<div class="container">
			<center>
				<div class="row align-items-start p-1" id="changeSize" style="width: 80%;">

					<div class="col-lg-5 p-1">
						
						<div class="shadow-sm rounded p-3 m-1 w-100 b-ground-white">

							<h4><b>Intro</b></h4>

							<div class="list-info text-align-left">
								<img class="info-image" src="store/img/location.png" /> Lives in <a href="">
								Taguma, Davao, Philippines</a>
							</div>

							<div class="list-info text-align-left">
								<img class="info-image" src="store/img/home.png" /> From <a href="">
								Davao City</a>
							</div>

							<div class="list-info text-align-left">
								<img class="info-image" src="store/img/heart.png" /> Single
							</div>
							
							<div class="list-info text-align-left">
								<img class="info-image" src="store/img/maps.png" /> <a href="">instagram.com/rob_canales1998</a>
							</div>
							
							<button class="btn btn-default btn-md w-100 text-align-left"><b>Edit Details</b></button>
							
							<center>
								<div class="row w-100">
									<div class="d-flex flex-row">
									    <div class="d-flex flex-column">
									        <img src="store/img/dp1.jpg" class="image-gallery">
									        <img src="store/img/dp2.jpg" class="image-gallery">
									        <img src="store/img/dp3.jpg" class="image-gallery">
									    </div>
									    <div class="d-flex flex-column">
									        <img src="store/img/dp4.jpg" class="image-gallery">
									        <img src="store/img/dp5.jpg" class="image-gallery">
									        <img src="store/img/dp6.jpg" class="image-gallery">
									    </div>
									    <div class="d-flex flex-column">
									        <img src="store/img/dp7.jpg" class="image-gallery">
									        <img src="store/img/cover1.jpg" class="image-gallery">
									        <img src="store/img/cover2.jpg" class="image-gallery">
									    </div>
								   </div>
								</div>
							</center>
							
							<button class="btn btn-default btn-md w-100 text-align-left"><b>Edit Featured</b></button>

						</div>
						
						<div class="shadow-sm rounded p-3 m-1 w-100 align-left b-ground-white">	

						</div>

					</div>
					<div class="col-lg-7 p-1" >

						<div class="shadow-sm rounded p-3 m-1 w-100 b-ground-white align-left post-margin">

							<div class="media">
								<div class="pull-left">
									<img class="img-thumbnail rounded-circle profile-image-post" src="store/img/1.jpg" />
								</div>
								<div class="media-body">
									<textarea  class="post_data" id="detectifFocues" placeholder="What's in your mind?"></textarea>
								</div>

							</div>

							<div class="w-100 m-2"></div>
							
							<div class="media">
								<div class="media-body" style="width: 100%;">

									<div class="profilePostSelectedImage" >
										
									</div>

								</div>

							</div>

							<div class="w-100 m-2"></div>

							<div class="media">
								<div class="media-body">
									<div class="post-buttons">
										<button class="btn profile-post-button btn-post1">
											<img class="profile-btn-img-post"src="store/img/player.png"><br class="inlineButton">Live Video</button>
										<input type="file" id="selectImagebtn" name="images[]" multiple style="display: none;" />
										<button class="btn profile-post-button btn-post2" id="selectImage">
											<img class="profile-btn-img-post"src="store/img/interface.png"><br class="inlineButton">Photo/Video</button>
										<button class="btn profile-post-button btn-post3">
											<img class="profile-btn-img-post"src="store/img/racing.png"><br class="inlineButton">Life Event</button>
									</div>
									<div class="post-button" style="padding: 0px;">
										<input type="submit" class="btn btn-primary w-100" value="ADD POST" id="submit_post">
									</div>
								</div>
							</div>

						</div>
						<div class="w-100"></div>

						<div id="post_view">
							
							<?php
								$user_id = $_SESSION['user']['user_id'];
								$postID = '';
								fetchPosted($user_id,$postID);
							?>
							
						</div>

					</div>

				</div>
			</center>
		</div>

	</div>
	<!-- PROFILE CONTENT -->
	
	<div class="costume_dropdown shadow-sm" id="viewChatBox" style="display: none;">

	<div class="chat-header">
		<h6 class="text-light">Contact</h6>
		<span><i class="fa fa-times backToFriendChatBox display-none" aria-hidden="true"></i></span>
	</div>

	<div class="chat-body">

		<ul class="chatFriendList">
		  	<li class="viewMessages">
		  		<img class="rounded-circle" src="store/img/dp1.jpg">
		  		Robroy Bustillo Canales
		  		<span><div class="online"></div></span>
			</li>
		  	<li class="viewMessages">
		  		<img class="rounded-circle" src="store/img/dp2.jpg">
		  		Joahna Krishna
		  		<span><div class="online"></div></span>
			</li>
		  	<li class="viewMessages">
		  		<img class="rounded-circle" src="store/img/dp3.jpg">
		  		Vincent John
		  		<span><div class="offline"></div></span>
			</li>
		</ul>

		<div class="chatMessage display-none">
			<div class="friend-chat">
				<img class="rounded-circle" src="store/img/dp1.jpg">
				<div class="friend-message">
					<label>sdasd</label>
					<label>sfewtadg fasf as fasd</label>
				</div>
			</div>
			<div class="my-chat">
				<label>Hello</label>
			</div>
		</div>

	</div>

	<div class="send-chat-message display-none">
		<input type="text" placeholder="Send message" name="">
		<input type="button" value="SEND" name="">
	</div>

	<div class="chat-search">
		<input type="text" placeholder="Search here" name="">
		<input type="button" value="SEARCH" name="">
	</div>

</div>

<div class="messanger" onclick="toggleChat();">
	<img class="rounded-circle" src="store/img/messageBox.png">
</div>

<?php
	//Footer
	include_once('../layouts/mainFooter.php');

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


<script type="text/javascript">
		
		//view the image before upload
		function previewImageBeforeUpload() {

		  //var $preview = $('.profilePostSelectedImage').empty();
		  var $preview = $('.profilePostSelectedImage');
		  if (this.files) $.each(this.files, readAndPreview);

		  //let lengths = this.files.length;

			function readAndPreview(i, file) 
			{
			    if (!/\.(jpe?g|png|gif)$/i.test(file.name)){
			      return alert(file.name +" is not an image");
			    }

			    var reader = new FileReader();
			    reader.readAsDataURL(file);

			    reader.fileName = file.name; // file came from a input file element. file = el.files[0];
				reader.onload = function(readerEvt) 
				{
					var idKey = "d2tEFIcI8Iu6" + i;
				    $preview.append('<div class="hover" id="'+i+'"><img src="'+this.result+'"><i class="fa fa-times styleHide " id="'+idKey+'" data-name="'+this.fileName+'" data-id="'+i+'"></i></div>');
				};

			}

		}

		//If you want to pick photos or videos selectImagebtn will trigger.
	    $(document).on('click', '#selectImage', function()
	    {
	    	document.getElementById("selectImagebtn").click();
	    });
	    
	    //If you want to cancel image
	    $(document).on('click', '.styleHide', function()
	    {	
	    	var imageID = $(this).data('id');
        	var imageFilename = $(this).data('name');
	    	var removeImg = document.getElementById(imageID);

	    	//console.log(imageFilename + " || " + imageID);
	    	document.getElementById('selectImagebtn').files[0].remove;
	    	removeImg.remove();

	    	//alert(document.getElementById('selectImagebtn').files[imageID].name);
	    });

	    //if the file button is clicked.
	    document.querySelector('#selectImagebtn').addEventListener("change", previewImageBeforeUpload);

</script>
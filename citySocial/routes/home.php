<?php
	
	//Redirect to login page if user is not logged in.
	include_once('../config/check-login.php');

	//Home Controllers 
	include_once('../post/homeControllers.php');

	//Chat controllers
	include_once('../post/chat.php');

?>

	<!-- Content -->
     <br>
		<div class="container">
			<div class="row align-items-start">
				
				<!-- HOME LEFT BAR -->
				<div class="col-md-3 remove-padding-margin add-margin-bottom adjustSpacing" style="position: sticky;top: 0px;">
					
					<!-- MINI PROFILE -->
					<div class="shadow-sm showShadow">
						<div class="row remove-padding-margin showDiv">
							<div class="col-md-3 remove-padding-margin">
								<a href="" data-toggle="modal" data-target="#updateProfilePicture">
									<div class="mini-profile-picture">
										<img class="rounded-circle" src="store/img/1.jpg"/>
										<?php
											//$dp = "SELECT * FROM users WHERE user_id='".$_SESSION['user']['user_id']."'";
											//$profile_dp = view($dp);

											//foreach ($profile_dp as $dp_profile) {
											//	echo '<img class="rounded-circle" src="data:image/jpeg;base64,'.base64_encode( $dp_profile['display_profile'] ).'"/>';	
											//}
										?>
									</div>
								</a>
							</div>
							<div class="col-md-9 remove-padding-margin">
								<div class="mini-profile-name">
									<input type="hidden" id="isdfjkasdfnka" value="<?php echo EncryptThis($_SESSION['user']['user_id']) ?>">
									<a href=""><label id="user-name"><?php echo _escape($_SESSION['user']['fname']) .' '._escape($_SESSION['user']['lname'])  ?></label></a>
								</div>
								<div class="mini-profile-birthdate">
									<small><?php echo _escape($_SESSION['user']['birth_month']).' '. _escape($_SESSION['user']['birth_day']).', '. _escape($_SESSION['user']['birth_year']) ?></small>
								</div>
							</div>
						</div>	
					</div>	
					<!-- MINI PROFILE -->
					
					<div style="margin: 10px;"></div>

					<!-- LEFT BAR MENU -->
					<div class="shadow-sm showShadow">
						<div class="row remove-padding-margin showDiv">

								<!-- MAIN MENU -->
								<a class="listMenu" href="">
									<img src="store/img/newsfeed.png">
									<label>News Feed</label>
								</a>
								<a class="listMenu" href="">
									<img src="store/img/messenger.png">
									<label>Messenger</label>
								</a>
								<a class="listMenu" href="">
									<img src="store/img/computer.png">
									<label>Watch</label>	
								</a>
								<!-- MAIN MENU -->
						

						<div class="hide-menu w-100">


							<hr class="breakLine separator">
							<div class="breakLine2"></div>		
			
								<!-- SHORTCUTS MENU -->
								<a class="listShortcutsHeader">
									<label>Shortcuts</label>
								</a>
								<a class="listMenu" href="" title="Musical artists">
									<img src="store/img/guitar.png">
									<label>Musical artists</label>	
								</a>
								<a class="listMenu" href="" title="DrieW CreW">
									<img src="store/img/group.png">
									<label>DrieW CreW</label>	
								</a>
								<a class="listMenu" href="" title="II- OL of Miracolous Medal (2012-2013)">
									<img src="store/img/bird.png">
									<label>II- OL of Miracolous Medal (2012-2013)</label>	
								</a>	
								<a class="seeMoreMenu" href="" title="Click to see more.">See More</a>
								<!-- SHORTCUTS MENU -->


							<hr class="breakLine separator">
							<div class="breakLine2"></div>		
						
								<!-- EXPLORE MENU -->
								<a class="listShortcutsHeader">
									<label>Explore</label>
								</a>
								<a class="listMenu" href="" title="Pages">
									<img src="store/img/danger.png">
									<label>Pages</label>	
								</a>
								<a class="listMenu" href="" title="Groups">
									<img src="store/img/groups.png">
									<label>Groups</label>	
								</a>
								<a class="listMenu" href="" title="Events">
									<img src="store/img/calendar.png">
									<label>Events</label>	
								</a>	
								<a class="seeMoreMenu" href="" title="Click to see more.">See More</a>
								<!-- EXPLORE MENU -->

						</div>
							
							<div class="row remove-padding-margin btn-show-more">
								<center>
									<input type="button" id="viewMore1" class="btn btn-primary btn-sm" value="SHOW MORE" name="">
									<input type="button" id="viewMore2" class="btn btn-primary btn-sm" value="SHOW LESS" name="">
								</center>
							</div>

						</div>
					</div>
					<!-- LEFT BAR MENU -->
				
				</div>
				<!-- HOME LEFT BAR -->
				
		
				<!-- HOME CENTER BAR -->
				<div class="col-md-6 add-margin-bottom">


					<!-- ADD POST -->
					<div class="row post-div">
						<div class="row remove-padding-margin post-div-header">
							<small>Create Post</small>
						</div>

						<form class="w-100" action="" method="POST" enctype="multipart/form-data">
							<div class="row remove-padding-margin">
								<div class="post-div-add-post">
									<div class="media">
										<div class="pull-left">
											<img class="rounded-circle" src="store/img/1.jpg"/>
											<?php
											//$dp = "SELECT * FROM users WHERE user_id='".$_SESSION['user']['user_id']."'";
											//$profile_dp = view($dp);

											//foreach ($profile_dp as $dp_profile) {
											//	echo '<img class="rounded-circle" src="data:image/jpeg;base64,'.base64_encode( $dp_profile['display_profile'] ).'"/>';	
											//}
										?>
										</div>
										<div class="media-body">
											<textarea class="home-post-textarea" id="detectifFocues" name="description" placeholder="What's in your mind, Robroy?"></textarea>
										</div>
									</div>
								</div>
							</div>
							<div class="row remove-padding-margin post-object">

								<div class="postItem">
									<!--
									<div class="hover">
										<img src="store/img/1.jpg">
										<i class="fa fa-times"></i>
									</div>
									<div class="hover">
										<img src="store/img/2.jpg">
										<i class="fa fa-times"></i>
									</div>
									<div class="hover">
										<img src="store/img/3.jpg">
										<i class="fa fa-times"></i>
									</div>
									<div class="hover">
										<img src="store/img/4.jpg">
										<i class="fa fa-times"></i>
									</div>
									<div class="hover">
										<img src="store/img/5.jpg">
										<i class="fa fa-times"></i>
									</div>

									-->
								</div>
								
							</div>

							<div class="separateDiv"></div>

							<div class="row remove-padding-margin post-div-button">

								<input type="file" id="theFile" style="display: none;" />
								<button type="button" class="home-btn-post1" onclick="performClick('theFile');"><img class="photo-video" src="store/img/gallery.png"> Photo/Video</button>

								<button type="button" class="home-btn-post2"><img class="tag-image"src="store/img/add-friend.png"> Tag Friends</button>
								<button type="button" class="home-btn-post3"><img class="tag-image"src="store/img/hungry.png"> Feeling/Activity</button>
								<button type="button" class="home-btn-post4" title="More"><img class="more-image"src="store/img/more.png"></button>
							</div>
							<div class="row remove-padding-margin post-button">
								<button class="btn btn-primary btn-sm">Post</button>
							</div>

						</form>

					</div>
					<!-- ADD POST -->
					
					<!-- Post with image -->
					<div class="row post-div">
						<div class="row remove-padding-margin profile-details-post">
							<img class="rounded-circle" src="store/img/dp6.jpg"/>
							<label class="profile_name">Kobe Laurence</label>
							<small>3 hrs <i class="fa fa-globe"></i></small>
							<i class="fa fa-cog edit-post"></i>
						</div>
						<div class="row remove-padding-margin post-description">
							<small>Beautiful image.</small>
						</div>
						<div class="row remove-padding-margin posted-item">
							<div class="row remove-padding-margin">
								<div class="col posted-item-top add-image-hover">
									<img class="object-cover" src="store/img/2.jpg" />
								</div>
								<div class="col posted-item-top add-image-hover">
									<img class="object-cover" src="store/img/3.jpg" />
								</div>
							</div>
							<div class="top-image-posted2">
								<div class="row remove-padding-margin">
								    <div class="col remove-padding-margin add-image-hover">
								     	<img class="object-cover" src="store/img/1.jpg" />
								    </div>
								    <div class="col remove-padding-margin add-image-hover">
								    	<img class="object-cover" src="store/img/4.jpg" />
								    </div>
								    <div class="col remove-padding-margin add-image-hover more-photo-hover">
								    	<img class="object-cover" src="store/img/5.jpg" />
								    	<small>+23</small>
								    </div>
								</div>
							</div>
						</div>

						<div class="row remove-padding-margin bottom-image">
							<div class="post-reaction">
								<label class="lbl1"><a href="">127 Likes</a></label>
								<label class="lbl2"><a href="">112 Comments</a><span><a href="">1 Share</a></span></label>
							</div>
							<div class="post-controller">
								<center>
									<button class="like-button" type="button"><img class="comment-button-image" src="store/img/like.png"> Like</button>
									<button class="comment-button" type="button"><img class="comment-button-image" src="store/img/comment.png"> Comments</button>
									<button class="share-button" type="button"><img class="comment-button-image" src="store/img/share.png"> Share</button>
								</center>
							</div>
						</div>
						

						<div class="row remove-padding-margin p-2 comment-box">
							
							<!-- USER COMMENT -->
							
								<div class="media">
									<div class="pull-left user-image-comment">
										<img class="img-thumbnail rounded-circle" src="store/img/dp1.jpg" />
									</div>
									<div class="media-body">

										<div class="user-comment">
											<label class="media-heading">Mark Slay Lamentez</label>
											<p>Nice!</p>
										</div>
										<div class="comment-controller">
											<input type="button" value="Like" class="" name="">
											<input type="button" value="Reply" class="" name="">
											<span>1w</span>
										</div>
									</div>
									<div class="pull-right ml-2">
										<img class="more-image2"src="store/img/more.png">
									</div>
								</div>

								<div class="w-100"></div>

								<div class="media repl-comment-section">
									<div class="pull-left user-image-comment">
										<img class="img-thumbnail rounded-circle" src="store/img/dp2.jpg" />
									</div>
									<div class="media-body">
										<div class="user-comment">
											<label class="media-heading">Lern naybarn</label>
											<p>correct.</p>
										</div>
										<div class="comment-controller">
											<input type="button" value="Like" class="" name="">
											<input type="button" value="Reply" class="" name="">
											<span>1w</span>
										</div>
									</div>
									<div class="pull-right ml-2">
										<img class="more-image2"src="store/img/more.png">
									</div>
								</div>

								<div class="w-100"></div>

								<div class="media">
									<div class="pull-left user-image-comment">
										<img class="img-thumbnail rounded-circle" src="store/img/dp4.jpg" />
									</div>
									<div class="media-body">
										<div class="user-comment">
											<label class="media-heading">Bonifacio Bustillo Jr</label>
											<p>pa copy sa image pre ha? hehehe</p>
										</div>
										<div class="comment-controller">
											<input type="button" value="Like" class="" name="">
											<input type="button" value="Reply" class="" name="">
											<span>1w</span>
										</div>
									</div>
									<div class="pull-right ml-2">
										<img class="more-image2"src="store/img/more.png">
									</div>

								</div>
							
							<!-- USER COMMENT -->


						</div>	


						<div class="row remove-padding-margin add-padding-slightly">
							<div class="w-100">
								<div class="media">
									<div class="pull-left user-image-comment">
										<img class="img-thumbnail rounded-circle" src="store/img/dp1.jpg" />
									</div>
									<div class="media-body">
										<input type="text" class="add-comment-textarea pull-left" placeholder="Write a comment." name="">
									</div>
								</div>
							</div>
						</div>

					</div>
					<!-- Post with image -->

				</div>

				<!-- HOME CENTER BAR -->
				

				<!-- HOME RIGHT BAR -->
				<div class="col-md-3 add-margin-bottom right-content" style="position: sticky;top: 0px;">
					
					<a class="birthday-routing" title="Joahna Krishna and 2 others" href="">
						<div class="row post-div remove-padding-margin shadow-sm birthday-box">
							<img class="comment-button-image" src="store/img/gift.png">
							<small class="birthday-label"><b>Joahna Krishna</b> and <span>2 others</span></small>
						</div>
					</a>

					<div class="row post-div remove-padding-margin shadow-sm">
						<div class="gaming-video-header">
							<img class="comment-button-image" src="store/img/puzzle.png">
							<label>Gaming Video</label>
							<span><a href=""><img class="comment-button-image" src="store/img/fullscreen.png"></a></span>
						</div>
						<div class="gaming-video-content">
							<div class="video-container">
								<button class="playVid"><i class="fa fa-play"></i></button>
								<video id="cam-video">
									<source src="store/video/demo.mp4" type="video/mp4">
								</video> 
							</div>
						</div>
						<div class="view-more-gaming">
							<label>Live Now in Popular Games</label>
						</div>	
						<div class="row remove-padding-margin more-games-box">
							<div class="col-sm-4 p-1">
								<a href="">
									<img class="image-games" src="store/img/warfare.png">	
								</a>
							</div>
							<div class="col-sm-4 p-1">
								<a href="">
									<img class="image-games" src="store/img/pubg.jpg">	
								</a>
							</div>
							<div class="col-sm-4 p-1">
								<a href="">
									<img class="image-games" src="store/img/madmax.jpg">	
								</a>
							</div>
						</div>
						<div class="row remove-padding-margin more-games-box">
							<div class="col-sm-4 p-1">
								<a href="">
									<img class="image-games" src="store/img/lfd2.jpg">	
								</a>
							</div>
							<div class="col-sm-4 p-1">
								<a href="">
									<img class="image-games" src="store/img/counterstrike.jpg">	
								</a>
							</div>
							<div class="col-sm-4 p-1">
								<a href="">
									<img class="image-games" src="store/img/coc.jpg">	
								</a>
							</div>
						</div>
					</div>
					
					<div class="row post-div remove-padding-margin shadow-sm p-2">
						<a href=""><label class="language-label">English (US)</label></a> - 
						<a href=""><label class="language-list">Bisaya</label></a> -
						<a href=""><label class="language-list">Filipino</label></a> -
						<a href=""><label class="language-list">Español</label></a> -
						<a href=""><label class="language-list">Português (Brasil)</label></a> -
						<a href="" class="add-language"><button type="button" class="btn btn-light btn-sm"><i class='fa fa-plus'></i></button></a>
					</div>

				</div>
				<!-- HOME RIGHT BAR -->


			</div>
		</div>

			<div class="costume_dropdown shadow-sm" id="viewChatBox" style="display: none;">

				<div class="chat-header">
					<h6 class="text-light">Contact</h6>
					<span><i class="fa fa-times backToFriendChatBox" style="display: none;" aria-hidden="true"></i></span>
				</div>

				<div class="chat-body">
			
					<ul class="chatFriendList">
					  	<?php fetchAllFriendListChat(); ?>
					</ul>

					<div class="chatMessage display-none">
						<center><small>Say hi to your new friend.</small></center>
					</div>
		
				</div>

				<div class="send-chat-message display-none">
					<input type="text" data-emojiable="true" data-emoji-input="unicode" id="message-data" placeholder="Send message" name="">
					<input type="button" id="send-message" value="SEND" name="">
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
	include('../layouts/mainFooter.php');

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

	//create a new WebSocket object.
	
	var wsUri = "ws://192.168.1.6:9000/websocket/server.php"; 

	//var wsUri = "ws://localhost:9000/websocket/server.php"; 	
	websocket = new WebSocket(wsUri); 
	
	websocket.onopen = function(ev) { // connection is open 
		//alert("Welcome to websocket!");
		//notify user
	}
	
	// Message received from server
	websocket.onmessage = function(ev) 
	{
		var response 		= JSON.parse(ev.data); //PHP sends Json data

		var res_type 		= response.type; //message type
		var user_message 	= response.message; //message text
		var user_name 		= response.name; //user name
		var msg_type 		= response.message_type; //Data type
		var display 		= response.receiverID; //Locate Receiver destination
		var display2		= response.senderID; //Locate Sender destination

		//alert(" res_type: "+res_type+" user_message: "+user_message+" user_name: "+user_name+" msg_type: "+msg_type+" userID: "+ sdoidjaklsd);

		if (!res_type || !user_message || !user_name || !msg_type) 
		{
			//alertError("Invalid.");
		}
		else
		{
			switch(res_type)
			{
				case 'usermsg':
					var location = "";
					var locate = '';

					if ($("."+display).data('sender') == display ) 
					{
						location = "."+display;
						locate = $(location).closest(location).attr("class");
						//alert(locate);
					}
					else
					{
						location = "."+display2;
						locate = $(location).closest(location).attr("class");
						//alert(locate);
					}

					if (user_name == $('#user-name').text()) 
					{	
						$("."+locate).append("<div class='my-chat'><label>" + user_message + "</label></div>");
					} 
					else 
					{
						$("."+locate).append("<div class='friend-chat'><img class='rounded-circle' src='store/img/dp8.jpg'><div class='friend-message'><label>" + user_message + "</label></div></div>");
				
						
					}		
	
					break;

				case 'system':

					alert(user_message);
					break;
			}
		}

	};
	
	websocket.onerror	= function(ev){ alert(ev.data); }; 
	websocket.onclose 	= function(ev){ alert("Connection Closed"); }; 

	//Message send button
	$('#send-message').click(function(){
		sendChatMessage();	
		send_message();
	});
	
	//User hits enter key 
	$( "#message-data" ).on( "keydown", function( event ) {
	  if(event.which==13){
	  	sendChatMessage();	
		send_message();
	  }
	});
	
	//Send message
	function send_message()
	{
		var message_input = $('#message-data'); //user message text
		var name_input = $('#user-name'); //user name
		var receiverID = $('#getReceiverID');
		var senderID = $('#getSenderID');

		alert("receiver id: "+ receiverID.length + " sender id: "+ senderID.length);

		if(message_input.val() == ""){ //emtpy message?
			alert("Enter Some message Please!");
			return;
		}

		//prepare json data
		var msg = {
			message: message_input.val(),
			name: name_input.text(),
			message_type : 'chatType',
			receiver_ID : receiverID.val(),
			sender_ID : senderID.val()
		};
		//convert and send data to server
		websocket.send(JSON.stringify(msg));	
		message_input.val(''); //reset message input
	}

	
	function sendChatMessage()
	{	
		var userMessage = $('#message-data').val();
		var userID = $('#displayChat').data('kudhksdhusywe');
		var myID = $('#isdfjkasdfnka').val();
		
		try 
	    {
	        if (userID && myID && userMessage) 
	        {
	          $.ajax({
	            url: 'post/chat.php',
	            method: 'POST',
	            data: {
	              'sendMessage': 1,
	              'uID': userID,
	              'mID': myID,
	              'uMessage': userMessage,
	            },
	            success: function(response)
	            {
	            },
	            error: function() 
	            {
	              alertError("Server is down.");
	            }
	          });
	        } else {
	          alertError("Invalid.");
	        }
	    }
	    catch(err) 
	    {
	        alertError(err.message);
	    }
		
	}


	$(document).on('click', '.viewMessages', function()
    {
        $(".chatFriendList").hide();
        $(".chatMessage").show();
        $(".chat-search").hide();
        $(".send-chat-message").show();
        $(".backToFriendChatBox").show();
        var friend_ID = $(this).attr('id');
        var myID = $('#isdfjkasdfnka').val();	
		try 
	    {
	        if (friend_ID) 
	        {
	          $.ajax({
	            url: 'post/chat.php',
	            method: 'POST',
	            data: {
	              'viewMessage': 1,
	              'mID': myID,
	              'uID': friend_ID,
	            },
	            success: function(response)
	            {
	            	$('.chatMessage').html(response);
	            },
	            error: function() 
	            {
	              alertError("Server is down.");
	            }
	          });
	        } else {
	          alertError("Invalid.");
	        }
	    }
	    catch(err) 
	    {
	        alertError(err.message);
	    }

    }); 

    $(document).on('click', '.backToFriendChatBox', function()
    {
    	$(".chatMessage").empty();
        $(".chatMessage").hide();
        $(".chatFriendList").show();
        $(".send-chat-message").hide();
        $(".chat-search").show();
        $(".backToFriendChatBox").hide();
    }); 

	function toggleChat() 
	{
	    var x = document.getElementById("viewChatBox");
	    if (x.style.display === "none") 
	    {
	        x.style.display = "block";
	    } 
	    else 
	    {
	        x.style.display = "none";
	    }
	}
</script>

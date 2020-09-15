    
    
<?php
	
 	include_once('../config/authentication.php');
 	include_once('../post/controllers.php');
	//
	//
	//
	//
	//
	//
	//
	// 
	//
	//
	//
	//
	//
	//
 	//================================================ ADD POST ================================================//

	if (isset($_POST['add_post'])) 
	{
		
		$table = e('post');
		$userID = e($_POST['sdafasdgdgadha']);
		$user_id = DecryptThis($userID);
		$description = e($_POST['post']);
		$privacy = e('public');
		$date = e(date('Y-m-d'));
		$time = e(date('H:i:s'));
		$like = '0';
		$comment = '0';
		$shares = '0';
		$timestamp = e(date("Y-m-d H:i:s"));

		$sql = "
		(user_id, description, privacy, IssueDate, IssueTime, post_like, post_comment, post_share, created_at)
		VALUES
		('$user_id', '$description', '$privacy', '$date', NOW(), '$like', '$comment', '$shares', '$timestamp')";

		$postID = store($table, $sql);

		fetchPosted($user_id,$postID);
	}
	
	//================================================ ADD POST ================================================//
	//
	//
	//
	//
	//
	//
	//
	// 
	//
	//
	//
	//================================================ REMOVE POST ================================================//

	if (isset($_POST['remove_post'])) 
	{
		try 
		{
			$post_attribute_id = e($_POST['p_Attid']);		
			$post_id = e($_POST['p_id']);
			$user_id = e($_POST['u_id']);
			$sql_id = e('post_id');

			$post_AttbributeID = DecryptThis($post_attribute_id);
			$post_id2 = DecryptThis($post_id);
			$user_id2 = DecryptThis($user_id);
			
			if ($post_id2 === $post_AttbributeID) 

			{	

				$getImgName = "SELECT * FROM post_image WHERE post_id = ".$post_id2."";
				$imageName = view($getImgName);

				foreach ($imageName as $imageSource) { 
					echo $imageSource['image_name'];
					unlink('../store/database_image/'.$imageSource['image_name']);
				}

				$table = e('post');
				remove($table,$sql_id,$post_id2,$user_id2);

				$tableComment = e('comments');
				remove($tableComment,$sql_id,$post_id2,$user_id2);

				$tableImage = e('post_image');
				remove($tableImage,$sql_id,$post_id2,$user_id2);

			} else {

				$errors[] = "Invalid";
				echo "Invalid";
			}
		} catch (Exception $e) {
		    echo 'Caught exception: ',  $e->getMessage(), "\n";
		}
	}

	//================================================ REMOVE POST ================================================//
	//
	//
	//
	//
	//
	//
	//
	// 
	//
	//
	//================================================ ADD COMMENT ================================================//

	if(isset($_POST['user_input']))
	{	
		$table = e('comments');
		$post_id = e($_POST['post_id']);
		$user_id = e($_POST['adasj']);
		$user_comment = e($_POST['userComment']);
		$date = e(date('Y-m-d'));
		$time = e(date('H:i:s'));
		$created_at =  e(date("Y-m-d H:i:s"));

		$post_id2 = DecryptThis($post_id);
		$user_id2 = DecryptThis($user_id);

		$sql = "
		(post_id, user_id, user_comment, IssueDate, IssueTime, CREATED_AT)
		VALUES
		('$post_id2', '$user_id2', '$user_comment', '$date', '$time', '$created_at')";

		store($table, $sql);

		//Fetch Comment Data
		$comments = "SELECT * FROM comments WHERE post_id = ".$post_id2." ORDER BY `CREATED_AT` ASC";
		$comment_information = view($comments);

		foreach ($comment_information as $comment) {

			echo '
				<div class="media">
					<div class="pull-left user-image-comment">
						<img class="img-thumbnail rounded-circle" src="store/img/dp1.jpg" />
					</div>
					<div class="media-body">

						<div class="user-comment text-align-left">
							<label class="media-heading">Robroy Bustillo Canales</label>
							<p>'.$comment['user_comment'].'</p>
						</div>
						<div class="comment-controller profile-comment-controller-adjust">
							<input type="button" value="Like" class="" name="">
							<input type="button" value="Reply" class="" name="">
							<span>1w</span>
						</div>
					</div>
					<div class="pull-right ml-2">
						<img class="more-image2"src="store/img/more.png">
					</div>
				</div>	
			';
		}
	}

	//================================================ ADD COMMENT ================================================//
	//
	//
	//
	//
	//
	//
	//
	// 
	//
	//
	//=============================================== POST FUNCTION ===============================================//

	function fetchPosted($userID,$postID)
	{	

		if (empty($postID)) {
			$post = "SELECT * FROM post WHERE user_id='".$userID."' ORDER BY `created_at` DESC";
		}else{
			$post = "SELECT * FROM post WHERE user_id='".$userID."' AND post_id = '".$postID."'";
		}

		$information = view($post);
		//Fetch Post Data
		foreach ($information as $data) {

			if (_escape($data['privacy']) == "public") 
			{
				$privacy = '<i class="fa fa-globe"></i>';

			} else {

				$privacy = '<i class="fa fa-users"></i>';
			}

			$time1 = _escape($data["IssueTime"]);
			$time2 = date('H:i:s', strtotime($time1));
			$data_id = EncryptThis($data['post_id']);
			$description = nl2br($data['description']);

			echo '<div class="shadow-sm rounded m-1 w-100 b-ground-white align-left post-margin latestPost" id="R'.$data_id.'">
						<div class="row remove-padding-margin profile-details-post">
							<img class="rounded-circle" src="store/img/dp1.jpg" />
							<label class="profile_name">Robroy Bustillo Canales</label>
							<small>'.$time2.' '.$privacy.'</small>
							<i class="fa fa-cog edit-post remove_post" id="'.EncryptThis($data['post_id']).'" data-id="'.$data_id.'"></i>
						</div>

						<div class="row remove-padding-margin post-description">
							<small>'.$description.'</small>
						</div>';

			//Fetch Image List
			displayImage($data['post_id']);			

			echo '<div class="row remove-padding-margin bottom-image">
					<div class="post-reaction">
						<label class="lbl1"><a href="">'._escape($data["post_like"]).' Likes</a></label>
						<label class="lbl2"><a href="">'._escape($data["post_comment"]).' Comments</a><span><a href="">'._escape($data["post_share"]).' Share</a></span></label>
					</div>
					<!-- POST CONTROLLER -->		
					<div class="post-controller">
						<center>
							<button class="btn profile-post-button  btn-post1 porfile-post-controller1" type="button"><img class="comment-button-image" src="store/img/like.png"> Like</button>
							<button class="btn profile-post-button  btn-post2 porfile-post-controller2" type="button"><img class="comment-button-image" src="store/img/comment.png"> Comments</button>
							<button class="btn profile-post-button  btn-post3 porfile-post-controller3"  type="button"><img class="comment-button-image" src="store/img/share.png"> Share</button>
						</center>
					</div>
					<!-- POST CONTROLLER -->
				</div>
				

				<div class="row remove-padding-margin p-2 comment-box">
				<div class="'.$data_id.'">
				';

			//Fetch Comment Data
			displayComment($data['post_id']);

			echo '
					</div>
				</div>	
					<div class="row remove-padding-margin add-padding-slightly">
						<div class="w-100">
							<div class="media">
								<div class="pull-left user-image-comment">
									<img class="img-thumbnail rounded-circle" src="store/img/dp1.jpg" />
								</div>
								<div class="media-body">
									<input type="text" id="'.$data_id.'" class="add-comment-textarea user_input"  style="float: left;margin-left: 8px;" style="" placeholder="Write a comment.">	
								</div>
							</div>
						</div>
					</div>
				</div>
			';
		}
	}

	function displayImage($postID)
	{	

		//Used for selecting between the 2 numbers. || count($image_data) >=5 && count($image_data)<=5 ||

		$image_data = "SELECT * FROM post_image WHERE post_id = ".$postID."";
		$image_data = view($image_data);
		$img_list = array();
		foreach ($image_data as $img) 
		{	
			$img_list[] =_escape($img['image_name']);
		}
		if (count($image_data) > 0) 
		{	
			//Check if the image length is 1
			if ( count($image_data) == 1 ) {
				echo '
				<div class="row remove-padding-margin posted-item">
					<div class="row remove-padding-margin">
						<div class="col posted-item-top add-image-hover">
							<img class="object-cover" src="store/database_image/'.$img_list[0].'" />
						</div>
					</div>
				</div>';
			}
			//Check if the image length is 2
			elseif ( count($image_data) == 2 ) {
				echo '
				<div class="row remove-padding-margin posted-item">
					<div class="row remove-padding-margin">
						<div class="col posted-item-top add-image-hover">
							<img class="object-cover" src="store/database_image/'.$img_list[0].'" />
						</div>
						<div class="col posted-item-top add-image-hover">
							<img class="object-cover" src="store/database_image/'.$img_list[1].'" />
						</div>
					</div>
				</div>';
			}
			//Check if the image length is 3
			elseif ( count($image_data) == 3 ) {
				echo '
				<div class="row remove-padding-margin posted-item">
					<div class="row remove-padding-margin">
						<div class="col posted-item-top add-image-hover">
							<img class="object-cover" src="store/database_image/'.$img_list[0].'" />
						</div>
					</div>
					<div class="top-image-posted2">
						<div class="row remove-padding-margin">
						    <div class="col remove-padding-margin add-image-hover">
						     	<img class="object-cover" src="store/database_image/'.$img_list[1].'" />
						    </div>
						    <div class="col remove-padding-margin add-image-hover">
						        <img class="object-cover" src="store/database_image/'.$img_list[2].'" />
						    </div>
						</div>
					</div>
				</div>';
			}
			//Check if the image length is 4
			elseif (count($image_data) == 4) {
				echo '
				<div class="row remove-padding-margin posted-item">
					<div class="row remove-padding-margin">
						<div class="col posted-item-top add-image-hover">
							<img class="object-cover" src="store/database_image/'.$img_list[0].'" />
						</div>
					</div>
					<div class="top-image-posted2">
						<div class="row remove-padding-margin">
						    <div class="col remove-padding-margin add-image-hover">
						     	<img class="object-cover" src="store/database_image/'.$img_list[1].'" />
						    </div>
						    <div class="col remove-padding-margin add-image-hover">
						        <img class="object-cover" src="store/database_image/'.$img_list[2].'" />
						    </div>
						    <div class="col remove-padding-margin add-image-hover">
						    	<img class="object-cover" src="store/database_image/'.$img_list[3].'" />	
						    </div>
						</div>
					</div>
				</div>';
			}
			//Check if the image length is 5
			elseif ( count($image_data) == 5 ) {
				echo '
				<div class="row remove-padding-margin posted-item">
					<div class="row remove-padding-margin">
						<div class="col posted-item-top add-image-hover">
							<img class="object-cover" src="store/database_image/'.$img_list[0].'" />
						</div>
						<div class="col posted-item-top add-image-hover">
							<img class="object-cover" src="store/database_image/'.$img_list[1].'" />
						</div>
					</div>
					<div class="top-image-posted2">
						<div class="row remove-padding-margin">
						    <div class="col remove-padding-margin add-image-hover">
						     	<img class="object-cover" src="store/database_image/'.$img_list[2].'" />
						    </div>
						    <div class="col remove-padding-margin add-image-hover">
						        <img class="object-cover" src="store/database_image/'.$img_list[3].'" />
						    </div>
						    <div class="col remove-padding-margin add-image-hover">
						    	<img class="object-cover" src="store/database_image/'.$img_list[4].'" />	
						    </div>
						</div>
					</div>
				</div>';
			}	
			//Check if the length of image is greater than 5
			else
			{
				$other_photos = count($image_data) - 5;
				echo '
				<div class="row remove-padding-margin posted-item">
					<div class="row remove-padding-margin">
						<div class="col posted-item-top add-image-hover">
							<img class="object-cover" src="store/database_image/'.$img_list[0].'" />
						</div>
						<div class="col posted-item-top add-image-hover">
							<img class="object-cover" src="store/database_image/'.$img_list[1].'" />
						</div>
					</div>
					<div class="top-image-posted2">
						<div class="row remove-padding-margin">
						    <div class="col remove-padding-margin add-image-hover">
						     	<img class="object-cover" src="store/database_image/'.$img_list[2].'" />
						    </div>
						    <div class="col remove-padding-margin add-image-hover">
						        <img class="object-cover" src="store/database_image/'.$img_list[3].'" />
						    </div>
						    <div class="col remove-padding-margin add-image-hover more-photo-hover">
						    	<img class="object-cover" src="store/database_image/'.$img_list[4].'" />	
						    	<small>+'.$other_photos.'</small>
						    </div>
						</div>
					</div>
				</div>';
			}		
		}
	}

	function displayComment($postID)
	{
		$comments = "SELECT * FROM comments WHERE post_id = ".$postID." ORDER BY `CREATED_AT` ASC";
		$comment_information = view($comments);

		foreach ($comment_information as $comment) {

			echo '
						
				<!-- USER COMMENT -->
				
					<div class="media">
						<div class="pull-left user-image-comment">
							<img class="img-thumbnail rounded-circle" src="store/img/dp1.jpg" />
						</div>
						<div class="media-body">

							<div class="user-comment text-align-left">
								<label class="media-heading">Robroy Bustillo Canales</label>
								<p>'.$comment['user_comment'].'</p>
							</div>
							<div class="comment-controller profile-comment-controller-adjust">
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
					
			';
		}
	}

	//=============================================== POST FUNCTION ===============================================//
	//
	//
	//
	//
	//
	//
?>

<?php

	session_start();
	include_once('../config/authentication.php');
 	include_once('../post/controllers.php');
 	include_once('../post/profileControllers.php');

	if($_FILES["imageData"]["name"])
	{	
		try 
		{
			$table = e('post');
			$user_id = e($_POST['adasj']);
			$user_id2 = DecryptThis($user_id);
			$postDescription = e($_POST['postDescription']);
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
			('$user_id2', '$postDescription', '$privacy', '$date', NOW(), '$like', '$comment', '$shares', '$timestamp')";

			$postId = store($table, $sql);


			$countfiles = count($_FILES['imageData']['name']);

			for($index = 0;$index < $countfiles;$index++)
			{
			    $getImageName = $_FILES["imageData"]["name"][$index];
				$name = pathinfo($getImageName)['filename'];
				$ext = pathinfo($getImageName)['extension'];

				$filename = generateRandomString().'.'.$ext;
				$location = '../store/database_image/' . $filename;

				move_uploaded_file($_FILES["imageData"]["tmp_name"][$index], $location);

				$imageTable = e('post_image');
				$image_description = "none";
				//$randomName = randomImageName($filename);

				$query = "
				(`user_id`, `post_id`, `image_name`, `image_description`)
				VALUES
				('$user_id2', '$postId', '$filename', '$image_description')";

				store($imageTable, $query);

			}

			fetchPosted($user_id2,$postId);

		} catch (Exception $e) {
		    echo 'Caught exception: ',  $e->getMessage(), "\n";
		}
	}

?>
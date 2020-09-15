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
 	//================================================ SEND MESSAGE ================================================//

	if (isset($_POST['sendMessage'])) 
	{	
		$table = e('chat');
		$senderID = e($_POST['uID']);
		$senderID2 = DecryptThis($senderID);
		$receiverID = e($_POST['mID']);
		$receiverID2 = DecryptThis($receiverID);
		$message = e($_POST['uMessage']);
		$time = e(date('H:i:s'));
		$date = e(date('Y-m-d'));
		$status = e('unchecked');

		$sql = "
		(`sender_id`, `receiver_id`, `message`, `time_sent`, `date_sent`, `status`)
		VALUES
		('$receiverID2', '$senderID2', '$message', '$time', '$date', '$status')";

		$chatID = store($table, $sql);	
	}

	//================================================ SEND MESSAGE ================================================//
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
	//================================================ VIEW MESSAGES ==============================================//
	
	if (isset($_POST['viewMessage'])) 
	{
		$my_id = e($_POST['mID']);
		$friend_id = e($_POST['uID']);
		$myID = DecryptThis($my_id);
		$friendID = DecryptThis($friend_id);

		$chats = "SELECT * FROM chat WHERE sender_id = ".$myID." AND receiver_id = ".$friendID." OR sender_id = ".$friendID." AND receiver_id = ".$myID." ORDER BY `chat_id` ASC";

		$chats_data = view($chats);
		echo '<center><small><b>Say hi to your new friend.</b></small></center>';
		echo '<div class="'.$friendID.'" id="displayChat" data-kudhksdhusywe="'.$friend_id.'" data-sender="'.$friendID.'">';
			foreach ($chats_data as $chat) 
			{

				if ($chat['sender_id'] === $myID) 
				{
					echo '<div class="my-chat"><label>' .$chat['message']. '</label></div>';
				} 
				else
				{
					echo '<div class="friend-chat"><img class="rounded-circle" src="store/img/dp1.jpg"><div class="friend-message"><label>' .$chat['message']. '</label></div></div>';
				}
			}
		echo '<input type="hidden" id="getReceiverID" class="'.$friendID.'" value="'.$friendID.'"><input type="hidden" id="getSenderID" class="'.$myID.'" data-receiverID="'.$friendID.'" value="'.$myID.'"></div>';
	}	

	//================================================ VIEW MESSAGES ==============================================//
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
	//=============================================== FETCH CHAT DATA ==============================================//

	function fetchAllFriendListChat()
	{
		$user_id = $_SESSION['user']['user_id'];
		$chatFriendList = "SELECT * FROM friends WHERE my_id = ".$user_id." OR friend_id = ".$user_id." ORDER BY `id` ASC";
		$friendChat = view($chatFriendList);

		foreach ($friendChat as $friend) 
		{
			if ($friend['my_id'] != $user_id) 
			{
				$friendName = "SELECT * FROM user_info WHERE user_id = ".$friend['my_id'];
				$friendData = view($friendName);

				foreach ($friendData as $friendInfo) 
				{
					$dp = "SELECT * FROM users WHERE user_id='".$friendInfo['user_id']."'";
					$profile_dp = view($dp);

					foreach ($profile_dp as $dp_profile) {
						$display_p = '<img class="rounded-circle" src="data:image/jpeg;base64,'.base64_encode( $dp_profile['display_profile'] ).'">';	
					}

					echo '
					<li class="viewMessages" id="'.EncryptThis($friendInfo['user_id']).'">
				  		'.$display_p.'
				  		'.$friendInfo['fname'].' '.$friendInfo['lname'].'
				  		<span><div class="online"></div></span>
					</li>';
				}
			}
			else
			{
				$friendName = "SELECT * FROM user_info WHERE user_id = ".$friend['friend_id'];
				$friendData = view($friendName);

				foreach ($friendData as $friendInfo) 
				{
					$dp = "SELECT * FROM users WHERE user_id='".$friendInfo['user_id']."'";
					$profile_dp = view($dp);

					foreach ($profile_dp as $dp_profile) {
						$display_p ='<img class="rounded-circle" src="store/img/1.jpg"/>';
						//$display_p = '<img class="rounded-circle" src="data:image/jpeg;base64,'.base64_encode( $dp_profile['display_profile'] ).'">';	
					}

					echo '
					<li class="viewMessages" id="'.EncryptThis($friendInfo['user_id']).'">
				  		'.$display_p.'
				  		'.$friendInfo['fname'].' '.$friendInfo['lname'].'
				  		<span><div class="online"></div></span>
					</li>';
				}
			}
		}
	}


	//=============================================== FETCH CHAT DATA ==============================================//
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
?>
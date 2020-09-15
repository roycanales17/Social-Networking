<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>citySocial</title>

    <!-- Bootstrap v4.4.1 -->
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css">

    <!-- Application styles -->
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    
    <!-- Home styles -->
    <link rel="stylesheet" type="text/css" href="assets/css/home.css">
    
    <!-- Profile styles -->
    <link rel="stylesheet" type="text/css" href="assets/css/profile.css">

    <!-- Font Awesome 5 -->
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    
    <!-- Alert css -->
    <link rel="stylesheet" type="text/css" href="assets/css/alert.css">
    
    <!-- Profile styles -->
    <link rel="stylesheet" type="text/css" href="assets/css/navigation.css">

    <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
    <script src="vendor/emoji-picker/lib/js/config.js"></script>
    <script src="vendor/emoji-picker/lib/js/util.js"></script>
    <script src="vendor/emoji-picker/lib/js/jquery.emojiarea.js"></script>
    <script src="vendor/emoji-picker/lib/js/emoji-picker.js"></script>
    
    <!-- Change the scrollbar -->
    <style type="text/css">
        
        input:focus, textarea:focus, select:focus, a:focus, button:focus{
            outline: none;
        }

        ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
        }
         
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background-color: darkgrey;
            outline: 1px solid slategrey;
            border-radius: 10px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background-color: darkgrey;
            outline: 1px solid slategrey;
        }

    </style>

</head>
<body>

    <?php include('../include/homeNavbar.php'); ?>
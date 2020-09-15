
  //  Add post
  $(document).on('click', '#submit_post', function()
  {
      try {
        var post = $('.post_data').val();
        var isjdasdasd = $('#isdfjkasdfnka').val();

        if (!post.length || !isjdasdasd.length) 
        {
          alertError("Invalid.");
        } 
        else 
        {
          //var isjdasdasd = $('#isdfjkasdfnka').val();
          var getImageId = document.getElementsByClassName("hover");

          //if naay image execute ni
          if (getImageId.length > 0) 
          {
            let imgIdStore = [];
            let imgID = '';
            for (i = 0; i < getImageId.length; i++) 
            {
              imgID = getImageId[i].id;
              imgIdStore.push(imgID);
            }
            //alert(imgIdStore);
            submitImageInformation(isjdasdasd,imgIdStore,post);
          }
          //kung wlay image execute ni
          else
          {
            addProfilePost(isjdasdasd,post);
          }

        }
      }
      catch(err) {
        alertError(err.message);
      }
  });

  // Remove post
  $(document).on('click', '.remove_post', function()
  {
      try 
      {
        var postAtt_id = $(this).attr('id');
        var postData_id = $(this).data('id');
        var user_id = $('#isdfjkasdfnka').val();

        if (postAtt_id !== postData_id) 
        {
          $.ajax({
            url: 'post/profileControllers.php',
            method: 'POST',
            data: {
              'remove_post': 1,
              'p_Attid': postAtt_id,
              'p_id': postData_id,
              'u_id': user_id,
            },
            beforeSend:function()
            {
              alert("Show the loading page");
            },
            complete:function(){
              alert("Hide the loading page");
            },
            success: function(response)
            {
              $('.post_data').val('');
              var keydel = "R"+postData_id;
              var removePost = document.getElementById(keydel).remove();
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
      catch(err) {
        alertError(err.message);
      }
  });

  // Add comment
  $(document).on("keypress", ".user_input", function(e){
      if(e.which == 13)
      {  
        try {
            var post_id = $(this).attr('id');
            var sdfiysdfaas = $('#isdfjkasdfnka').val();
            var user_comment = $(this).val();
            var fetch = document.getElementsByClassName(post_id);

            if (!post_id.length || !sdfiysdfaas.length || !user_comment.length) 
            {
              alertError("Input field is empty.");

            } else {
              $.ajax({
                 method: "POST",
                 url: 'post/profileControllers.php',
                 data: {
                    'user_input':1,
                    'post_id':post_id,
                    'adasj':sdfiysdfaas,
                    'userComment':user_comment,
                 },
                 success: function(data)
                 {
                    $('.user_input').val('');
                    $(fetch).html(data);
                 },
                 error: function() 
                 {
                    alertError("Server is down.");
                 }
               });
            }
        }
        catch(err) {
          alertError(err.message);
        } 
      } 
  });
  
  function addProfilePost(userID,postDescription)
  {
    $.ajax({
      url: 'post/profileControllers.php',
      method: 'POST',
      data: {
        'add_post': 1,
        'sdafasdgdgadha': userID,
        'post': postDescription,
      },
      success: function(response)
      {
        var textarea = document.getElementById('detectifFocues');
        textarea.setAttribute('style','');
        textarea.value = "";
        var display1 = document.getElementById("post_view");
        var display2 = document.getElementsByClassName("latestPost");
        if (display2.length > 0) {
          $(response).insertBefore(display2[0]);
        }else{
          display1.innerHTML = response;
        }
      },
      error: function() 
      {
        alertError("Server is down.");
      }
    });
  }

  function submitImageInformation(userID,imgID,postData)
  {
    try 
    {
        
        //var jsonString = JSON.stringify(getImageName(imgID));//All image name are contain here
        var img_data = new FormData();

        img_data.append('postDescription', postData);
        img_data.append('adasj', userID);

        imgID.forEach(function(img_id) 
        {
            img_data.append("imageData[]", document.getElementById('selectImagebtn').files[img_id]);
        });
          
        $.ajax({
            url:"post/uploadMultiple.php",
            method:"POST",
            data: img_data,
            contentType: false,
            cache: false,
            processData: false,
            beforeSend:function()
            {
              alert("Show the loading page");
            },
            complete:function(){
              alert("Hide the loading page");
            },
            success: function(data)
            {
              var textarea = document.getElementById('detectifFocues');
              textarea.setAttribute('style','');
              textarea.value = "";
              var $preview = $('.profilePostSelectedImage').empty();
              var display1 = document.getElementById("post_view");
              var display2 = document.getElementsByClassName("latestPost");
              if (display2.length > 0) {
                $(data).insertBefore(display2[0]);
              }else{
                display1.innerHTML = data;
              }
            },
            error: function() 
            {
              alertError("Server is down.");
            }
          });
    }
    catch(err) 
    {
        alertError(err.message);
    } 

  }
  
  /*
  function getImageName(imgID)
  {
    let img_name = [];
    let img_temp = '';
    imgID.forEach(function(img_id) 
    {

      img_temp = document.getElementById('selectImagebtn').files[img_id].name;
      img_name.push(img_temp);

    });
    //alert(img_name);
    return img_name;
  }
  */
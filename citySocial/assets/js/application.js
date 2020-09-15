
$(document).ready(function(){

    window.onload=checkBrowserWidth();
    setInterval("focuesTextarea()", 1);
    $(window).resize(function() {
        checkBrowserWidth();
    });

    $("#viewMore2").click(function(){
        $(".hide-menu").fadeOut();
        $("#viewMore2").hide();
        $("#viewMore1").show();
    });
    $("#viewMore1").click(function(){
        $(".hide-menu").fadeIn();
        $("#viewMore1").hide();
        $("#viewMore2").show();
    });

    var textarea = jQuery('#detectifFocues');
    textarea.on("input", function () {
        jQuery(this).css("height", ""); //reset the height
        jQuery(this).css("height", Math.min(jQuery(this).prop('scrollHeight'), 200) + "px");
    });

    var ctrlVideo = document.getElementById("cam-video"); 
    $('.playVid').toggleClass("active");
    $('.playVid').click(function(){
        if ($('.playVid').hasClass("active")){
            
            ctrlVideo.play();
            $('.playVid').toggleClass("active");
            $('.playVid').html('<i class="fa fa-pause"></i>');

        } else {
            
            ctrlVideo.pause();
            $('.playVid').html('<i class="fa fa-play"></i>');
            $('.playVid').toggleClass("active");
        }
    });
});



function checkBrowserWidth()
{

    if ($(window).width() < 767) {
        $(".hide-menu").hide();
        $("#viewMore2").hide();
        $("#viewMore1").show();
    }
    else 
    {
        $(".hide-menu").show();
        $("#viewMore2").hide();
        $("#viewMore1").hide();
    }
}	

function focuesTextarea() 
{

    if($("#detectifFocues").val().trim().length < 1 && $(".hover").length < 1)
    {
        $('.post-button').fadeOut();
    }else{
        $('.post-button').fadeIn();
    }
  
}

/* Upload for new profile picture */
function previewImage(event)
{

    var reader = new FileReader();
    var imageField = document.getElementById("image-field")

    reader.onload = function(){

        if (reader.readyState == 2){
            imageField.src = reader.result;
        }
    }
    reader.readAsDataURL(event.target.files[0]);
}
/* Upload for new profile picture */

function performClick(elemId) 
{
   var elem = document.getElementById(elemId);
   if(elem && document.createEvent) {
      var evt = document.createEvent("MouseEvents");
      evt.initEvent("click", true, false);
      elem.dispatchEvent(evt);
   }
}

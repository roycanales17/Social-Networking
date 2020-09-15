    
    <!-- jQuery 2.1.3 Javascript -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <!--<script type="text/javascript" src="assets/js/jquery.js"></script>-->

    <!-- Popper Javascript -->
    <script type="text/javascript" src="assets/js/popper.min.js"></script>

    <!-- Bootstrap v4.4.1 Javascript -->
    <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>

    <!-- Foundation javascript -->
    <script type="text/javascript" src="assets/js/alertAnimation.js"></script>
    
    <!-- Profile javascript -->
    <script type="text/javascript" src="assets/request/profile.js"></script>
    
	<!-- Application Javascript -->
    <script type="text/javascript" src="assets/js/application.js"></script>
    
    <script type="text/javascript">
        $(function () {
            // Initializes and creates emoji set from sprite sheet
            window.emojiPicker = new EmojiPicker({
                emojiable_selector: '[data-emojiable=true]',
                assetsPath: 'vendor/emoji-picker/lib/img/',
                popupButtonClasses: 'icon-smile'
            });

            window.emojiPicker.discover();
        });
    </script>

    </body>

</html>
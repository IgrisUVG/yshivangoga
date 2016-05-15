<!DOCTYPE html>
<html>
	<head>
		<?php
			require('data/head.php');
		?> 
	</head>
	<body>
		<h1 class="header">УШИ ВАН ГОГА</h1>
		<div class = "contents">
			<?php
				include 'application/views/'.$content_view;
			?>
		</div>
		<div class = "left">
			<?php
				require('data/menuL.php');
			?> 
		</div><!--Конец левого бара-->
		<div class = "right">
			<?php
				require('data/afisha.php');
				require('data/menuR.php');
			?> 
		</div><!--Конец правого бара-->
		<div class = "footer">
			<?php
				require('data/footer.php');
			?>
		</div><!--Конец футера-->
	</body>
</html>
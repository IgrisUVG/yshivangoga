<!DOCTYPE html>
<?php header('Content-type: text/html; charset=utf-8')?>
<html>
	<head>
		<?php
			require('data/head.php');
		?> 
	</head>
	<body>
		<!-- Google Tag Manager >
		<noscript>
			<iframe
				src="//www.googletagmanager.com/ns.html?id=GTM-WZT556"
				height="0"
				width="0"
				style="display:none;visibility:hidden">
			</iframe>
		</noscript>
		<script>
			(function(w,d,s,l,i){
				w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
				var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
				j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			}
			)
			(window,document,'script','dataLayer','GTM-WZT556');
		</script>
		<!-- End Google Tag Manager -->
		<h1 class="header">УШИ ВАН ГОГА</h1>
		<div class = "contents">
			<?php
				include 'application/views/'.$content_view;
			?>
		</div>
		<div class = "left">
			<?php
				require('data/menuLOld.php');
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
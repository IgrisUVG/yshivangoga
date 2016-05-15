<?php

class Controller_Shokolad extends Controller
{

	function action_index()
	{	
		$this->view->generate('shokolad_view.php', 'template_view.php');
	}
}
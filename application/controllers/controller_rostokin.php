<?php

class Controller_Rostokin extends Controller
{

	function action_index()
	{	
		$this->view->generate('rostokin_view.php', 'template_view.php');
	}
}
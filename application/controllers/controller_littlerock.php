<?php

class Controller_Littlerock extends Controller
{

	function action_index()
	{	
		$this->view->generate('littlerock_view.php', 'template_view.php');
	}
}
<?php

class Controller_Vermel extends Controller
{

	function action_index()
	{	
		$this->view->generate('vermel_view.php', 'template_view.php');
	}
}
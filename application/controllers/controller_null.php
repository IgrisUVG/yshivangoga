<?php

class Controller_Null extends Controller
{

	function action_index()
	{	
		$this->view->generate('null_view.php', 'template_view.php');
	}
}
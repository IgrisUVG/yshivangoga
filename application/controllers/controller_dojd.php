<?php

class Controller_Dojd extends Controller
{

	function action_index()
	{	
		$this->view->generate('dojd_view.php', 'template_view.php');
	}
}
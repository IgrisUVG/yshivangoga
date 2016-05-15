<?php

class Controller_Forpost extends Controller
{

	function action_index()
	{	
		$this->view->generate('forpost_view.php', 'template_view.php');
	}
}
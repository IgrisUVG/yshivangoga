<?php

class Controller_Sit extends Controller
{

	function action_index()
	{	
		$this->view->generate('sit_view.php', 'template_view.php');
	}
}
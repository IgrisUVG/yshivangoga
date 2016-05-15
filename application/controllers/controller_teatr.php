<?php

class Controller_Teatr extends Controller
{

	function action_index()
	{	
		$this->view->generate('teatr_view.php', 'template_view.php');
	}
}
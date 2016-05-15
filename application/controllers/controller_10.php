<?php

class Controller_10 extends Controller
{

	function action_index()
	{	
		$this->view->generate('10_view.php', 'template_view.php');
	}
}
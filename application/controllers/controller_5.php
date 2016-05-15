<?php

class Controller_5 extends Controller
{

	function action_index()
	{	
		$this->view->generate('5_view.php', 'template_view.php');
	}
}
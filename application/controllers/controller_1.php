<?php

class Controller_1 extends Controller
{

	function action_index()
	{	
		$this->view->generate('1_view.php', 'template_view.php');
	}
}
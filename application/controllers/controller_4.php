<?php

class Controller_4 extends Controller
{

	function action_index()
	{	
		$this->view->generate('4_view.php', 'template_view.php');
	}
}
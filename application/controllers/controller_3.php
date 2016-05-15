<?php

class Controller_3 extends Controller
{

	function action_index()
	{	
		$this->view->generate('3_view.php', 'template_view.php');
	}
}
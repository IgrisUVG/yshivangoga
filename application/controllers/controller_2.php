<?php

class Controller_2 extends Controller
{

	function action_index()
	{	
		$this->view->generate('2_view.php', 'template_view.php');
	}
}
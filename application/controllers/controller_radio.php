<?php

class Controller_Radio extends Controller
{

	function action_index()
	{	
		$this->view->generate('radio_view.php', 'template_view.php');
	}
}
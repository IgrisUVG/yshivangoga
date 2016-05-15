<?php

class Controller_Blur extends Controller
{

	function action_index()
	{	
		$this->view->generate('blur_view.php', 'template_view.php');
	}
}
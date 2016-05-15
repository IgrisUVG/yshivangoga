<?php

class Controller_Ejforia extends Controller
{

	function action_index()
	{	
		$this->view->generate('ejforia_view.php', 'template_view.php');
	}
}
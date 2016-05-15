<?php

class Controller_Bariton extends Controller
{

	function action_index()
	{	
		$this->view->generate('bariton_view.php', 'template_view.php');
	}
}
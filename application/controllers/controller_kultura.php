<?php

class Controller_Kultura extends Controller
{

	function action_index()
	{	
		$this->view->generate('kultura_view.php', 'template_view.php');
	}
}
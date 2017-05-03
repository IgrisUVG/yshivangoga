<ul class = "navR">
	<?php
		$menu = array(
		0 => array(0 => '/', 1=> 'УШИ ВАН ГОГА'),
		1 => array(0 => '/dojd', 1=> '&laquo;Дождь-Мажор&raquo;'),
		2 => array(0 => '/shokolad', 1=> '&laquo;Шоколадная фабрика&raquo;'),
		3 => array(0 => '/teatr', 1=> '&laquo;ТеатрЪ&raquo;'),
		4 => array(0 => '/blur', 1=> '&laquo;BLURcafe&raquo;'),
		5 => array(0 => '/bariton', 1=> '&laquo;BARiTON&raquo;'),
		6 => array(0 => '/vermel', 1=> '&laquo;Вермель&raquo;'),
		7 => array(0 => '/littlerock', 1=> '&laquo;Little Rock&raquo;'),
		8 => array(0 => '/ejforia', 1=> '&laquo;Эйфория&raquo;'),
		9 => array(0 => '/kultura', 1=> 'На радио &laquo;Культура&raquo;'),
		10 => array(0 => '/forpost', 1=> 'Концерт в &laquo;Форпосте&raquo;'),
		11 => array(0 => '/rostokin', 1=> 'От Ростокина'),
		12 => array(0 => '/sit', 1=> 'От Ситникова')
		);
		foreach ($menu as $item):
	?>
	<li><a href="<?=$item[0]?>" <?=$_SERVER['REQUEST_URI'] == $item[0] ? 'class="verbergend"':''?>><?=$item[1]?></a></li>
	<?php endforeach;?>
</ul><!--Конец правого меню-->
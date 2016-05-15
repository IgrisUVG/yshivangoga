<ul class = "navR">
<?php
$menu = array(
	0 => array(0 => '/', 1=> 'УШИ ВАН ГОГА'),
  1 => array(0 => '/dojd', 1=> '"Дождь-Мажор"'),
  2 => array(0 => '/shokolad', 1=> '"Шоколадная фабрика"'),
  3 => array(0 => '/teatr', 1=> '"ТеатрЪ"'),
  4 => array(0 => '/blur', 1=> '"BLURcafe"'),
  5 => array(0 => '/bariton', 1=> '"BARiTON"'),
  6 => array(0 => '/vermel', 1=> '"Вермель"'),
  7 => array(0 => '/littlerock', 1=> '"Little Rock"'),
  8 => array(0 => '/ejforia', 1=> '"Эйфория"'),
  9 => array(0 => '/radio', 1=> 'На радио "Культура"'),
  10 => array(0 => '/forpost', 1=> 'Концерт в "Форпосте"'),
  11 => array(0 => '/rostokin', 1=> 'От Ростокина'),
  12 => array(0 => '/sit', 1=> 'От Ситникова')
);
foreach ($menu as $item):
?>
	<li><a href="<?=$item[0]?>" <?=$_SERVER['REQUEST_URI'] == $item[0] ? 'class="verbergend"':''?>><?=$item[1]?></a></li>
<?php endforeach;?>
</ul><!--Конец правого меню-->
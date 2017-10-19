<?php
$moment = date('H:i:s d.m.Y');
$fp = fopen('suppe.txt', 'a+');
fwrite($fp, $moment . " " . $_POST['result'] . "\r\n");
fclose($fp);
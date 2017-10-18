<?php
$moment = date('Y-m-d H:i:s');
$fp = fopen('suppe.txt', 'a+');
fwrite($fp, $_POST['result'] . " " . $moment . "\r\n");
fclose($fp);
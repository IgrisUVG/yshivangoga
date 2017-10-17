<?php
$fp = fopen('suppe.txt', 'a+');
fwrite($fp, $_POST['result'] . "\r\n");
fclose($fp);
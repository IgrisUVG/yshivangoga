﻿var suppe = [
    'Харчо',
    'Борщ',
    'Щи',
    'Кислые щи',
    'Картофельный',
    'Овощной',
    'Щавелевый',
    'Рассольник',
    'Солянка',
    'Гречневый',
    'Гороховый',
    'Грибной',
    'Рыбный',
    'С фрикадельками',
    'Куриный',
    'Фасолевый'
];
var result = '';

function findSuppe() {
    var min = 1, max = suppe.length;
    var i = ((Math.floor(Math.random() * (max - min + 1)) + min)) - 1;
    result = suppe[i];
    document.getElementById('res').innerHTML = result;
    $.ajax({
        url: 'write.php',
        type: 'POST',
        data: {result:result}
    })
}
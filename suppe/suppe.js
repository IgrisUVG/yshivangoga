var suppe = [
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

var ingred =[
    '#harch',
    '#borsh',
    '#stschi',
    '#kislstschi',
    '#kartopl',
    '#ovostch',
    '#stschavel',
    '#rassol',
    '#solan',
    '#grech',
    '#goroch',
    '#grib',
    '#fisch',
    '#frikadel',
    '#chicken',
    '#fasol'
];
var links='';

function findSuppe() {
    var min = 1, max = suppe.length;
    var i = ((Math.floor(Math.random() * (max - min + 1)) + min)) - 1;
    result = suppe[i];
    links=ingred[i];
    document.getElementById('res').innerHTML = result;
    $('#ingred').load('ingredients.html '+ links + ' > *');
    $.ajax({
        url: 'write.php',
        type: 'POST',
        data: {result: result}
    })
}

$('#but').click(function () {
    $(this).hide(500, 'swing');
    $('#butMain').animate({
        fontSize: 'hide',
        width: 'hide',
        height: 'hide',
        opacity: 'hide',
        display: 'none'
    }, 500, 'swing', findSuppe());
    $('#res').animate({
        opacity: 1
    }, 500, 'swing');
    $('#ingred').show('slow')
});

$('#res').click(function () {
    $('#but').show(500, 'swing');
    $('#butMain').animate({
        display: 'block',
        opacity: 'toggle',
        // height: 'toggle',
        // width: 'toggle',
        fontSize: 'toggle'
    }, 500, 'swing');
    $(this).animate({
        opacity: 0
    }, 500, 'swing');
    $('#ingred').hide('fast')
});
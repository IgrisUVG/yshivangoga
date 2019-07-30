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

var ingred = [
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
var links = '';

function findSuppe() {
    var min = 1, max = suppe.length;
    var i = ((Math.floor(Math.random() * (max - min + 1)) + min)) - 1;
    result = suppe[i];
    links = ingred[i];
    document.getElementById('res').innerHTML = result;
    $('#ingred').load('ingredients.html ' + links + ' > *');
    $.ajax({
        url: 'write.php',
        type: 'POST',
        data: {result: result}
    })
}

function listSuppe() {
    var ul = document.createElement('ul');
    for (i in suppe) {
        result = suppe[i];
        links = ingred[i];
        var li = document.createElement('li');
        var a = document.createElement('a');
        $(a).appendTo(li);
        $(a).text(result);
        $(a).attr('href', ingred[i]);
        $(li).appendTo(ul);
    }
    $(ul).appendTo($('#res_list'));
}

// function showSuppe() {
//     $(ul).hide(500, 'swing');
//     $('#butLoupe').animate({
//         fontSize: 'hide',
//         width: 'hide',
//         height: 'hide',
//         opacity: 'hide',
//         display: 'none'
//     }, 500, 'swing');
//     document.getElementById('res').innerHTML = result;
//     $('#res').animate({
//         opacity: 1
//     }, 500, 'swing');
//     $('#ingred').load('ingredients.html ' + links + ' > *').show('slow');
// }

$('#but').click(function () {
    $(this).hide(500, 'swing');
    $('#butMain').animate({
        fontSize: 'hide',
        width: 'hide',
        height: 'hide',
        opacity: 'hide',
        display: 'none'
    }, 500, 'swing', findSuppe());
    $('#search').animate({
        width: 'hide',
        height: 'hide',
        opacity: 'hide',
        display: 'none'
    }, 500, 'swing');
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
    $('#search').animate({
        display: 'block',
        opacity: 'toggle',
        fontSize: 'toggle'
    }, 500, 'swing');
    $(this).animate({
        opacity: 0
    }, 500, 'swing');
    $('#ingred').hide('fast');
    $(this).html("")
});

$('#butLoupe').click(function () {
    $(this).hide(500, 'swing');
    $('#but').hide(500, 'swing');
    $('#search').animate({
        width: 'hide',
        height: 'hide',
        opacity: 'hide',
        display: 'none'
    }, 500, 'swing', listSuppe());
    $('#butMain').animate({
        fontSize: 'hide',
        width: 'hide',
        height: 'hide',
        opacity: 'hide',
        display: 'none'
    }, 500, 'swing');
    $('#res_list').animate({
        display: 'block',
        opacity: 1
    }, 500, 'swing');
});

$('#res_list').click(function () {
    $(this).hide(500, 'swing');
    $('#but').show(500, 'swing');
    $('#butMain').animate({
        display: 'block',
        opacity: 'toggle',
        // height: 'toggle',
        // width: 'toggle',
        fontSize: 'toggle'
    }, 500, 'swing');
    $('#search').animate({
        display: 'block',
        opacity: 'toggle',
        fontSize: 'toggle'
    }, 500, 'swing');
});
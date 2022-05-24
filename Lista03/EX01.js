$(document).ready(function () {
    //EX 01 - A
    let elements = $(".module");
    console.log(elements)

    //EX 01 - B
    console.log($("#myList>li:eq(2)"), "terceiro elemento da lista");

    //EX 01 - C
    console.log($('label[for=exercicio]'), "Label exercicio");

    //EX 01 - D
    console.log($('img[alt]'), "Alt imagem");

    //EX 01 - E
    console.log($('table>tbody>tr:even'), "Linhas pares");

    // EX01-F
    console.log($("h2:contains('B'):contains('e')"));

    // EX01-G
    console.log($("#myList li:not([class='current'])"));

    // EX01-H
    console.log($("html img,h3:last", "Linhas pares"));

    // EX02-A
    count = $('#myList li').length;
    for (var i = 0; i < 5; i++) {
        $('#myList').append('<li>List item' + ++count + '</li>');
    }

    // EX02-B
    $('#myList li:even').zip('d#myList li:odd').remove();

    // EX02-C
    $('div div[class=module]:last').append('<div class="module"></div>');
    $("img:first").clone().appendTo($('div div[class=module]:last'));
    // $('#myList li:first').clone().appendTo('#myList');

    // EX03-3.1

    // EX04-A
    console.log($('img[alt]'));

    // EX04-B/C
    $('input[type=text]').parent().addClass("template");

    // EX04-D/E/F
    $('#myList').find('li[class=current]').removeClass("current").next('li').addClass('current');

    // EX05-H
    $('#specials').find('h2').text('Promoções').end().find('option[value=friday]').text('Dimitri');

    // EX05-I
    $('#slideshow').addClass('current').siblings().addClass('disabled');

});

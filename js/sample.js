"use strict";

import 'jQuery';

$(window).on('load', function(){
    console.log('loaded!');

    let count = 0

    $('#up').on('click', function () {
        $('#count').html(++count)
    })
    $('#minus').on('click', function () {
        $('#count').html(--count)
    })
})
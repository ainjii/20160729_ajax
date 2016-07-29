"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    $.get('/fortune', fortune);
}

function fortune(data) {
    $('#fortune-text').html(data);
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var zipcode = $("#zipcode-field").val();
    var url = "/weather.json?zipcode=" + zipcode;

    $.get(url, function(data) {
        alert("The forecast for " + zipcode + " is " + data.forecast);
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function confirmation(data) {
    console.log(data.code);
    if (data.code) {
        $("#order-status").addClass("order-error");
    } else {
        $("#order-status").removeClass("order-error");
    }

    $("#order-status").html(data.msg);
}

function orderMelons(evt) {
    evt.preventDefault();

    var formInputs = {
        "melon_type": $("#melon-type-field").val(),
        "qty": $("#qty-field").val()
    };

    $.post("/order-melons.json",
           formInputs,
           confirmation
    );

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);



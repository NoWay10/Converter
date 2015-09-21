var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'

    /*    onDeviceReady: function() {
     }*/

    onDeviceReady: this.mainFunction,
    mainFunction: function () {
        $('.ui-btn').on('click', function () {
            var $btnText = $(this).text();
            var $form;
            if ($btnText == 'Length') {
                $form = '<form id="value-form">' +
                    '<h1>LENGTH</h1>' +

                    '<div class="value-input">' +
                    '<label for="number-pattern" class="ui-hidden-accessible"></label>' +
                    '<input name="number" pattern="[0-9]*" step="any" min="0" id="number-pattern" placeholder="Enter Value" value="" type="number">' +
                    '</div>' +

                    '<label for="select1" class="select ui-hidden-accessible">Mini select, inline</label>' +
                    '<select name="select-choice-mini" id="select1" class="select-choice-mini" data-mini="true" data-inline = "true" > ' +
                    '<option value="mm">mm</option>' +
                    '<option value="cm">cm</option>' +
                    '<option value="m">m</option>' +
                    '<option value="km">km</option>' +
                    '<option value="feet">Feet</option>' +
                    '<option value="inches">Inches</option>' +
                    '<option value="miles">Miles</option>' +
                    '<option value="yards">Yards</option>' +
                    '</select>' +

                    '<div class="value-input">' +
                    '<label for="number-pattern-converted" class="ui-hidden-accessible"></label>' +
                    '<input disabled="disabled" step="any" name="number-pattern-converted" id="number-pattern-converted" placeholder = "Converted Value" value = "" type = "number" > ' +
                    '</div>' +

                    '<label for="select2" class="select ui-hidden-accessible">Mini select, inline</label>' +
                    '<select name="select-choice-mini" id="select2" class="select-choice-mini" data-mini="true" data-inline = "true" > ' +
                    '<option value="mm">mm</option>' +
                    '<option value="cm">cm</option>' +
                    '<option value="m">m</option>' +
                    '<option value="km">km</option>' +
                    '<option value="feet">Feet</option>' +
                    '<option value="inches">Inches</option>' +
                    '<option value="miles">Miles</option>' +
                    '<option value="yards">Yards</option>' +
                    '</select>' +
                    '<input type="button" value="Convert" id="convert-btn">' +
                    '</form>';
                $('#value-section').html($form).enhanceWithin();
                $('#convert-btn').click(function () {
                    var $enteredValue = $('#number-pattern').val();
                    $enteredValue = $enteredValue.replace(/[^0-9\.]/g, '');
                    if ($enteredValue == '' || $enteredValue < 0) {
                        alert('Enter Value Above 0!');
                    } else {
                        var $enteredUnit = $('#select1').val();

                        var $convertedUnit = $('#select2').val();
                        var $oneMeter = {
                            'km': 0.001,
                            'm': 1,
                            'cm': 100,
                            'mm': 1000,
                            'feet': 3.280833,
                            'inches': 39.3707,
                            'miles': 0.00062,
                            'yards': 1.094
                        };
                        var $enteredJsonValue = $oneMeter[$enteredUnit];
                        //alert($enteredJsonValue);
                        var $convertedJsonValue = $oneMeter[$convertedUnit];
                        //alert($convertedJsonValue);
                        var $result = $enteredValue / $enteredJsonValue * $convertedJsonValue;
                        $('.ui-input-text').removeClass('ui-state-disabled');
                        $('#number-pattern-converted').removeAttr('disabled').val($result);
                    }
                });
            } else if ($btnText == 'Weight') {
                $form = '<form id="value-form">' +
                    '<h1>WEIGHT</h1>' +

                    '<div class="value-input">' +
                    '<label for="number-pattern" class="ui-hidden-accessible"></label>' +
                    '<input name="number" pattern="[0-9]*" step="any" min="0" id="number-pattern" placeholder="Enter Value" value="" type="number">' +
                    '</div>' +

                    '<label for="select1" class="select ui-hidden-accessible">Mini select, inline</label>' +
                    '<select name="select-choice-mini" id="select1" class="select-choice-mini" data-mini="true" data-inline = "true" > ' +
                    '<option value="mg">mg</option>' +
                    '<option value="g">g</option>' +
                    '<option value="kg">kg</option>' +
                    '<option value="tonne">Tonne</option>' +
                    '<option value="grains">Grains</option>' +
                    '<option value="ounces">Ounces</option>' +
                    '<option value="pounds">Pounds</option>' +
                    '<option value="stones">Stones</option>' +
                    '</select>' +

                    '<div class="value-input">' +
                    '<label for="number-pattern-converted" class="ui-hidden-accessible"></label>' +
                    '<input disabled="disabled" step="any" name="number-pattern-converted" id="number-pattern-converted" placeholder = "Converted Value" value = "" type = "number" > ' +
                    '</div>' +

                    '<label for="select2" class="select ui-hidden-accessible">Mini select, inline</label>' +
                    '<select name="select-choice-mini" id="select2" class="select-choice-mini" data-mini="true" data-inline = "true" > ' +
                    '<option value="mg">mg</option>' +
                    '<option value="g">g</option>' +
                    '<option value="kg">kg</option>' +
                    '<option value="tonne">Tonne</option>' +
                    '<option value="grains">Grains</option>' +
                    '<option value="ounces">Ounces</option>' +
                    '<option value="pounds">Pounds</option>' +
                    '<option value="stones">Stones</option>' +
                    '</select>' +
                    '<input type="button" value="Convert" id="convert-btn">' +
                    '</form>';
                $('#value-section').html($form).enhanceWithin();
                $('#convert-btn').click(function () {
                    var $enteredValue = $('#number-pattern').val();
                    if ($enteredValue == '') {
                        alert('Enter Value!');
                    }
                    else if ($enteredValue < 0) {
                        alert('Enter Value Above 0!');
                    } else {
                        var $enteredUnit = $('#select1').val();
                        var $convertedUnit = $('#select2').val();
                        var $oneKg = {
                            'mg': 1000000,
                            'g': 1000,
                            'kg': 1,
                            'tonne': 0.001,
                            'grains': 15432.358,
                            'ounces': 35.273966,
                            'pounds': 2.204623,
                            'stones': 0.157473
                        };
                        var $enteredJsonValue = $oneKg[$enteredUnit];
                        //alert($enteredJsonValue);
                        var $convertedJsonValue = $oneKg[$convertedUnit];
                        //alert($convertedJsonValue);
                        var $result = $enteredValue / $enteredJsonValue * $convertedJsonValue;
                        $('.ui-input-text').removeClass('ui-state-disabled');
                        $('#number-pattern-converted').removeAttr('disabled').val($result);
                    }
                });
            } else if ($btnText == 'Volume') {
                $form = '<form id="value-form">' +
                    '<h1>VOLUME</h1>' +

                    '<div class="value-input">' +
                    '<label for="number-pattern" class="ui-hidden-accessible"></label>' +
                    '<input name="number" pattern="[0-9]*" step="any" min="0" id="number-pattern" placeholder="Enter Value" value="" type="number">' +
                    '</div>' +

                    '<label for="select1" class="select ui-hidden-accessible">Mini select, inline</label>' +
                    '<select name="select-choice-mini" id="select1" class="select-choice-mini" data-mini="true" data-inline = "true" > ' +
                    '<option value="cm3">cm&#179</option>' +
                    '<option value="m3">m&#179</option>' +
                    '<option value="feet3">Feet&#179</option>' +
                    '<option value="gallonsUK">Gallons (UK)</option>' +
                    '<option value="gallonsUSA">Gallons (USA)</option>' +
                    '<option value="inches3">Inches&#179</option>' +
                    '<option value="litres">Litres</option>' +
                    '<option value="yards3">Yards&#179</option>' +
                    '</select>' +

                    '<div class="value-input">' +
                    '<label for="number-pattern-converted" class="ui-hidden-accessible"></label>' +
                    '<input disabled="disabled" step="any" name="number-pattern-converted" id="number-pattern-converted" placeholder = "Converted Value" value = "" type = "number" > ' +
                    '</div>' +

                    '<label for="select2" class="select ui-hidden-accessible">Mini select, inline</label>' +
                    '<select name="select-choice-mini" id="select2" class="select-choice-mini" data-mini="true" data-inline = "true" > ' +
                    '<option value="cm3">cm&#179</option>' +
                    '<option value="m3">m&#179</option>' +
                    '<option value="feet3">Feet&#179</option>' +
                    '<option value="gallonsUK">Gallons (UK)</option>' +
                    '<option value="gallonsUSA">Gallons (USA)</option>' +
                    '<option value="inches3">Inches&#179</option>' +
                    '<option value="litres">Litres</option>' +
                    '<option value="yards3">Yards&#179</option>' +
                    '</select>' +
                    '<input type="button" value="Convert" id="convert-btn">' +
                    '</form>';
                $('#value-section').html($form).enhanceWithin();
                $('#convert-btn').click(function () {
                    var $enteredValue = $('#number-pattern').val();
                    if ($enteredValue == '') {
                        alert('Enter Value!');
                    }
                    else if ($enteredValue < 0) {
                        alert('Enter Value Above 0!');
                    } else {
                        var $enteredUnit = $('#select1').val();
                        var $convertedUnit = $('#select2').val();
                        var $oneM3 = {
                            'cm3': 1000000,
                            'm3': 1,
                            'feet3': 35.32,
                            'gallonsUK': 220,
                            'gallonsUSA': 264,
                            'inches3': 61024,
                            'litres': 1000,
                            'yards3': 1.308
                        };
                        var $enteredJsonValue = $oneM3[$enteredUnit];
                        //alert($enteredJsonValue);
                        var $convertedJsonValue = $oneM3[$convertedUnit];
                        //alert($convertedJsonValue);
                        var $result = $enteredValue / $enteredJsonValue * $convertedJsonValue;
                        $('.ui-input-text').removeClass('ui-state-disabled');
                        $('#number-pattern-converted').removeAttr('disabled').val($result);
                    }
                });
            } else if ($btnText == 'Area') {
                $form = '<form id="value-form">' +
                    '<h1>AREA</h1>' +

                    '<div class="value-input">' +
                    '<label for="number-pattern" class="ui-hidden-accessible"></label>' +
                    '<input name="number" pattern="[0-9]*" step="any" min="0" id="number-pattern" placeholder="Enter Value" value="" type="number">' +
                    '</div>' +

                    '<label for="select1" class="select ui-hidden-accessible">Mini select, inline</label>' +
                    '<select name="select-choice-mini" id="select1" class="select-choice-mini" data-mini="true" data-inline = "true" > ' +
                    '<option value="cm2">cm&#178</option>' +
                    '<option value="m2">m&#178</option>' +
                    '<option value="acres">Acres</option>' +
                    '<option value="feet2">Feet&#178</option>' +
                    '<option value="hectares">Hectares</option>' +
                    '<option value="inches2">Inches&#178</option>' +
                    '<option value="miles">miles&#178</option>' +
                    '<option value="yards2">Yards&#178</option>' +
                    '<option value="ares">Ares</option>' +
                    '</select>' +

                    '<div class="value-input">' +
                    '<label for="number-pattern-converted" class="ui-hidden-accessible"></label>' +
                    '<input disabled="disabled" step="any" name="number-pattern-converted" id="number-pattern-converted" placeholder = "Converted Value" value = "" type = "number" > ' +
                    '</div>' +

                    '<label for="select2" class="select ui-hidden-accessible">Mini select, inline</label>' +
                    '<select name="select-choice-mini" id="select2" class="select-choice-mini" data-mini="true" data-inline = "true" > ' +
                    '<option value="cm2">cm&#178</option>' +
                    '<option value="m2">m&#178</option>' +
                    '<option value="acres">Acres</option>' +
                    '<option value="feet2">Feet&#178</option>' +
                    '<option value="hectares">Hectares</option>' +
                    '<option value="inches2">Inches&#178</option>' +
                    '<option value="miles">miles&#178</option>' +
                    '<option value="yards2">Yards&#178</option>' +
                    '<option value="ares">Ares</option>' +
                    '</select>' +
                    '<input type="button" value="Convert" id="convert-btn">' +
                    '</form>';
                $('#value-section').html($form).enhanceWithin();
                $('#convert-btn').click(function () {
                    var $enteredValue = $('#number-pattern').val();
                    if ($enteredValue == '') {
                        alert('Enter Value!');
                    }
                    else if ($enteredValue < 0) {
                        alert('Enter Value Above 0!');
                    } else {
                        var $enteredUnit = $('#select1').val();
                        var $convertedUnit = $('#select2').val();
                        var $oneM2 = {
                            'cm2': 10000,
                            'm2': 1,
                            'acres': 0.00024711,
                            'feet2': 10.764,
                            'hectares': 0.0001,
                            'inches2': 1550,
                            'miles': 0.00000039,
                            'yards2': 1.196,
                            'ares': 0.01
                        };
                        var $enteredJsonValue = $oneM2[$enteredUnit];
                        //alert($enteredJsonValue);
                        var $convertedJsonValue = $oneM2[$convertedUnit];
                        //alert($convertedJsonValue);
                        var $result = $enteredValue / $enteredJsonValue * $convertedJsonValue;
                        $('.ui-input-text').removeClass('ui-state-disabled');
                        $('#number-pattern-converted').removeAttr('disabled').val($result);
                    }
                });
            } else if ($btnText == 'Temperature') {
                $form = '<form id="value-form">' +
                    '<h1>TEMPERATURE</h1>' +

                    '<div class="value-input">' +
                    '<label for="number-pattern" class="ui-hidden-accessible"></label>' +
                    '<input name="number" pattern="[0-9]*" step="any" min="0" id="number-pattern" placeholder="Enter Value" value="" type="number">' +
                    '</div>' +

                    '<label for="select1" class="select ui-hidden-accessible">Mini select, inline</label>' +
                    '<select name="select-choice-mini" id="select1" class="select-choice-mini" data-mini="true" data-inline = "true" > ' +
                    '<option value="c">C</option>' +
                    '<option value="f">F</option>' +
                    '</select>' +

                    '<div class="value-input">' +
                    '<label for="number-pattern-converted" class="ui-hidden-accessible"></label>' +
                    '<input disabled="disabled" step="any" name="number-pattern-converted" id="number-pattern-converted" placeholder = "Converted Value" value = "" type = "number" > ' +
                    '</div>' +

                    '<label for="select2" class="select ui-hidden-accessible">Mini select, inline</label>' +
                    '<select name="select-choice-mini" id="select2" class="select-choice-mini" data-mini="true" data-inline = "true" > ' +
                    '<option value="c">C</option>' +
                    '<option value="f">F</option>' +
                    '</select>' +
                    '<input type="button" value="Convert" id="convert-btn">' +
                    '</form>';
                $('#value-section').html($form).enhanceWithin();
                $('#convert-btn').click(function () {
                    var $enteredValue = $('#number-pattern').val();
                    if ($enteredValue == '') {
                        alert('Enter Value!');
                    }
                    else if ($enteredValue < 0) {
                        alert('Enter Value Above 0!');
                    } else {
                        var $enteredUnit = $('#select1').val();
                        var $convertedUnit = $('#select2').val();
                        var $oneC = {
                            'c': 1,
                            'f': 33.8
                        };
                        var $enteredJsonValue = $oneC[$enteredUnit];
                        //alert($enteredJsonValue);
                        var $convertedJsonValue = $oneC[$convertedUnit];
                        //alert($convertedJsonValue);
                        var $result = $enteredValue / $enteredJsonValue * $convertedJsonValue;
                        $('.ui-input-text').removeClass('ui-state-disabled');
                        $('#number-pattern-converted').removeAttr('disabled').val($result);
                    }
                });
            }
        });
    }

};

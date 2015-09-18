/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
        $('.ui-btn').one('click', function () {
            var $btnText = $(this).text();
            if ($btnText == 'Length') {
                /*                var $form = document.createElement('form');
                 $form.id = 'value-form';
                 $('#value-section').append($form);
                 $('<h1>LENGTH</h1>').appendTo('#value-form');
                 $('<div></div>').attr({
                 class: 'value-input'
                 }).appendTo('#value-form');
                 $('<input>').attr({
                 name: 'number',
                 pattern: '[0-9]*',
                 step: 'any',
                 id: 'number-pattern',
                 placeholder: 'Enter Value',
                 value: '',
                 type: 'number'
                 }).appendTo('.value-input');*/
                var $lengthForm = '<form id="value-form">' +
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
                $('#value-section').append($lengthForm).enhanceWithin();
                $('#convert-btn').click(function () {
                    var $enteredValue = $('#number-pattern').val();
                    if ($enteredValue == '') {
                        alert('Enter Value!');
                    }
                    else if ($enteredValue < 0) {
                        alert('Enter Value Above 0!');
                    } else {
                        /*                    $('#number-pattern').validate({
                         rules: {
                         "required": true,
                         "number": true,
                         "range": [0, Infinity]
                         });*/

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
                var $weightForm = '<form id="value-form">' +
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
                $('#value-section').append($weightForm).enhanceWithin();
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
                var $volumeForm = '<form id="value-form">' +
                    '<h1>VOLUME</h1>' +

                    '<div class="value-input">' +
                    '<label for="number-pattern" class="ui-hidden-accessible"></label>' +
                    '<input name="number" pattern="[0-9]*" step="any" min="0" id="number-pattern" placeholder="Enter Value" value="" type="number">' +
                    '</div>' +

                    '<label for="select1" class="select ui-hidden-accessible">Mini select, inline</label>' +
                    '<select name="select-choice-mini" id="select1" class="select-choice-mini" data-mini="true" data-inline = "true" > ' +
                    '<option value="cm3">cm<sup>3</sup></option>' +
                    '<option value="m3">m<sup>3</sup></option>' +
                    '<option value="feet3">Feet<sup>3</sup></option>' +
                    '<option value="gallonsUK">Gallons (UK)</option>' +
                    '<option value="gallonsUSA">Gallons (USA)</option>' +
                    '<option value="inches3">Inches<sup>3</sup></option>' +
                    '<option value="litres">Litres</option>' +
                    '<option value="yards3">Yards<sup>3</sup></option>' +
                    '</select>' +

                    '<div class="value-input">' +
                    '<label for="number-pattern-converted" class="ui-hidden-accessible"></label>' +
                    '<input disabled="disabled" step="any" name="number-pattern-converted" id="number-pattern-converted" placeholder = "Converted Value" value = "" type = "number" > ' +
                    '</div>' +

                    '<label for="select2" class="select ui-hidden-accessible">Mini select, inline</label>' +
                    '<select name="select-choice-mini" id="select2" class="select-choice-mini" data-mini="true" data-inline = "true" > ' +
                    '<option value="cm3">cm<sup>3</sup></option>' +
                    '<option value="m3">m<sup>3</sup></option>' +
                    '<option value="feet3">Feet<sup>3</sup></option>' +
                    '<option value="gallonsUK">Gallons (UK)</option>' +
                    '<option value="gallonsUSA">Gallons (USA)</option>' +
                    '<option value="inches3">Inches<sup>3</sup></option>' +
                    '<option value="litres">Litres</option>' +
                    '<option value="yards3">Yards<sup>3</sup></option>' +
                    '</select>' +
                    '<input type="button" value="Convert" id="convert-btn">' +
                    '</form>';
                $('#value-section').append($volumeForm).enhanceWithin();
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
                var $areaForm = '<form id="value-form">' +
                    '<h1>AREA</h1>' +

                    '<div class="value-input">' +
                    '<label for="number-pattern" class="ui-hidden-accessible"></label>' +
                    '<input name="number" pattern="[0-9]*" step="any" min="0" id="number-pattern" placeholder="Enter Value" value="" type="number">' +
                    '</div>' +

                    '<label for="select1" class="select ui-hidden-accessible">Mini select, inline</label>' +
                    '<select name="select-choice-mini" id="select1" class="select-choice-mini" data-mini="true" data-inline = "true" > ' +
                    '<option value="cm2">cm<sup>2</sup></option>' +
                    '<option value="m2">m<sup>2</sup></option>' +
                    '<option value="acres">Acres</option>' +
                    '<option value="feet2">Feet<sup>2</sup></option>' +
                    '<option value="hectares">Hectares</option>' +
                    '<option value="inches2">Inches<sup>2</sup></option>' +
                    '<option value="miles">miles<sup>2</sup></option>' +
                    '<option value="yards2">Yards<sup>2</sup></option>' +
                    '<option value="ares">Ares</option>' +
                    '</select>' +

                    '<div class="value-input">' +
                    '<label for="number-pattern-converted" class="ui-hidden-accessible"></label>' +
                    '<input disabled="disabled" step="any" name="number-pattern-converted" id="number-pattern-converted" placeholder = "Converted Value" value = "" type = "number" > ' +
                    '</div>' +

                    '<label for="select2" class="select ui-hidden-accessible">Mini select, inline</label>' +
                    '<select name="select-choice-mini" id="select2" class="select-choice-mini" data-mini="true" data-inline = "true" > ' +
                    '<option value="cm2">cm<sup>2</sup></option>' +
                    '<option value="m2">m<sup>2</sup></option>' +
                    '<option value="acres">Acres</option>' +
                    '<option value="feet2">Feet<sup>2</sup></option>' +
                    '<option value="hectares">Hectares</option>' +
                    '<option value="inches2">Inches<sup>2</sup></option>' +
                    '<option value="miles">miles<sup>2</sup></option>' +
                    '<option value="yards2">Yards<sup>2</sup></option>' +
                    '<option value="ares">Ares</option>' +
                    '</select>' +
                    '<input type="button" value="Convert" id="convert-btn">' +
                    '</form>';
                $('#value-section').append($areaForm).enhanceWithin();
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
                var $temperatureForm = '<form id="value-form">' +
                    '<h1>AREA</h1>' +

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
                $('#value-section').append($temperatureForm).enhanceWithin();
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

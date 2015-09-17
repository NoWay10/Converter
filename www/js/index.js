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
        $('.ui-btn').click(function () {
            var $btnText = $(this).text();
            if ($btnText == 'Length') {
                var $form = '<form id="value-form">' +
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
                    '<option value="feet">feet</option>' +
                    '<option value="inches">inches</option>' +
                    '<option value="miles">miles</option>' +
                    '<option value="yards">yards</option>' +
                    '</select>' +
                    '<button id="convert-btn">Convert</button>' +
                    '</form>';
                $('#value-section').append($form);
                $('#convert-btn').click(function () {
                    var $enteredValue = $('#number-pattern').val();
                    if ($enteredValue == '') {
                        alert('Enter Value!');
                    }
                    else if ($enteredValue < 0) {
                        alert('Enter Value Above 0!');
                    }
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
                    }
                    var $enteredJsonValue = $oneMeter.keys($enteredUnit)[0];
                    alert($enteredJsonValue);
                    var $convertedJsonValue = $oneMeter.keys($convertedUnit)[0];
                    var $result = $enteredValue / $enteredJsonValue * $convertedJsonValue;
                    alert ($result);

                });


            } else if ($btnText == 'Weight') {
                alert('bravo');
            } else if ($btnText == 'Volume') {
                alert('terrible');
            } else if ($btnText == 'Area') {
                alert('what');
            } else if ($btnText == 'Temperature') {
                alert('yes');
            }
        });
    }

};

$(document).ready(function() {
    var max_fields = 10;

    var smsa_wrapper = $(".fewshot-smsa-input-container");
    var smsa_add_button = $(".add-smsa-input");

    var emot_wrapper = $(".fewshot-emot-input-container");
    var emot_add_button = $(".add-emot-input");

    var wrete_wrapper = $(".fewshot-wrete-input-container");
    var wrete_add_button = $(".add-wrete-input");

    var x = 1;
    $(smsa_add_button).click(function(e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(smsa_wrapper).append('<div class="fewshot-context-input"><input type="text" name="example"><select name="label"><option value="positif">Positif</option><option value="negatif">Negatif</option><option value="netral">Netral</option></select></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });

    var y = 1;
    $(emot_add_button).click(function(e) {
        e.preventDefault();
        if (y < max_fields) {
            y++;
            $(emot_wrapper).append('<div class="fewshot-context-input"><input type="text" name="example"><select name="label"><option value="marah">Marah</option><option value="senang">Senang</option><option value="sedih">Sedih</option><option value="takut">Takut</option><option value="cinta">Cinta</option></select></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });

    var z = 1;
    $(wrete_add_button).click(function(e) {
        e.preventDefault();
        if (y < max_fields) {
            y++;
            $(wrete_wrapper).append('<div class="fewshot-context-input"><input type="text" name="example"><select name="label"><option value="benar">Benar</option><option value="salah">Salah</option></select></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });

});
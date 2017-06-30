var rows=0;

$(document).ready(function() {
	while(rows<12)
	{       
                var tabind = 2*(rows+1);
		rows++;
		
		$('#low').before("<div class=\"row\"> <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                            <input type=\"number\" name=\"credit" + rows + "\" id=\"credit" +rows + "\" required=\"true\" class=\"form-control input-lg\" placeholder=\"Credit\" tabindex=\""+tabind+"\" max=\"6\" min=\"1\"> \
                        </div></div> \
                        <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                                <select name=\"grade"+rows+"\" id=\"grade"+rows+"\" class=\"form-control input-lg\" placeholder=\"Grade Score\" tabindex=\""+tabind+1+"\"> \
                                    <option value=10>O</option> \
                                    <option value=9>A+</option><option value=8>A</option><option value=7>B+</option> \
                                    <option value=6>B</option><option value=5>C</option><option value=4>P</option> \
                                    <option value=0>F</option><option value=0>Ab</option><option value=0>I</option> \
                                </select>\
                        </div></div> \
                        </div>");
        }
        $('#email').keyup(function () {
        $(this).next('span').remove();
        $(this).next('span').remove();
        var inputVal = $(this).val();

        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test(inputVal)) {
            $(this).parent('div').removeClass('has-success').addClass('has-error has-feedback');
            $(this).after('<span class="glyphicon glyphicon-remove control-label help-block form-control-feedback "></span>');
            $(this).after('<span style="float:right">Invalid E-mail format!</span>');
        } else {
            $(this).parent('div').removeClass('has-error').addClass('has-success');
            $(this).after('<span class="glyphicon glyphicon-ok control-label help-block form-control-feedback"></span>');
        }

});
$('#add').click(function() {
	rows++;
	$('#low').before("<div class=\"row\"> <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                            <input type=\"number\" name=\"credit" + rows + "\" id=\"credit" +rows + "\" required=\"true\" class=\"form-control input-lg\" placeholder=\"Credit\" tabindex=\""+tabind+"\" max=\"6\" min=\"1\"> \
                        </div></div> \
                        <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                                <select name=\"grade"+rows+"\" id=\"grade"+rows+"\" class=\"form-control input-lg\" placeholder=\"Grade Score\" tabindex=\""+tabind+1+"\"> \
                                    <option value=10>O</option> \
                                    <option value=9>A+</option><option value=8>A</option><option value=7>B+</option> \
                                    <option value=6>B</option><option value=5>C</option><option value=4>P</option> \
                                    <option value=0>F</option><option value=0>Ab</option><option value=0>I</option> \
                                </select>\
                        </div></div> \
                        </div>");
	
});
});
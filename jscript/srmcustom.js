var rows2015 = 0;
var rows2014 = 0;
var rowscgpa = 0;


$(document).ready(function () {
    $('.nav-tabs > li > a').click(function(event){
        event.preventDefault();//stop browser to take action for clicked anchor

        //get displaying tab content jQuery selector
        var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');					

        //find actived navigation and remove 'active' css
        var actived_nav = $('.nav-tabs > li.active');
        actived_nav.removeClass('active');

        //add 'active' css into clicked navigation
        $(this).parents('li').addClass('active');

        //hide displaying tab content
        $(active_tab_selector).removeClass('active');
        $(active_tab_selector).addClass('hide');

        //show target tab content
        var target_tab_selector = $(this).attr('href');
        $(target_tab_selector).removeClass('hide');
        $(target_tab_selector).addClass('active');
     });
    
    //for 2015batch section, id=*2015
    while (rows2015 < 12)
    {
        var tabind = 2 * (rows2015 + 1);
        rows2015++;

        $('#low2015').before("<div class=\"row\"> <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                            <input type=\"number\" name=\"credit15" + rows2015 + "\" id=\"credit15" + rows2015 + "\" required=\"true\" class=\"form-control input-lg\" placeholder=\"Credit\" tabindex=\"" + tabind + "\" max=\"6\" min=\"0\"> \
                        </div></div> \
                        <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                                <select name=\"grade15" + rows2015 + "\" id=\"grade15" + rows2015 + "\" class=\"form-control input-lg\" placeholder=\"Grade Score\" tabindex=\"" + tabind + 1 + "\"> \
                                    <option value=10>O</option> \
                                    <option value=9>A+</option><option value=8>A</option><option value=7>B+</option> \
                                    <option value=6>B</option><option value=5>C</option><option value=4>P</option> \
                                    <option value=0>F</option><option value=0>Ab</option><option value=0>I</option> \
                                </select>\
                        </div></div> \
                        </div>");
    }
    $('#add2015').click(function () {
        rows2015++;
        $('#low2015').before("<div class=\"row\"> <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                            <input type=\"number\" name=\"credit15" + rows2015 + "\" id=\"credit15" + rows2015 + "\" required=\"true\" class=\"form-control input-lg\" placeholder=\"Credit\" tabindex=\"" + tabind + "\" max=\"6\" min=\"0\"> \
                        </div></div> \
                        <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                                <select name=\"grade15" + rows2015 + "\" id=\"grade15" + rows2015 + "\" class=\"form-control input-lg\" placeholder=\"Grade Score\" tabindex=\"" + tabind + 1 + "\"> \
                                    <option value=10>O</option> \
                                    <option value=9>A+</option><option value=8>A</option><option value=7>B+</option> \
                                    <option value=6>B</option><option value=5>C</option><option value=4>P</option> \
                                    <option value=0>F</option><option value=0>Ab</option><option value=0>I</option> \
                                </select>\
                        </div></div> \
                        </div>");

    });
    
    
    //for 2014batch section, id=*2014
    while (rows2014 < 12)
    {
        var tabind = 2 * (rows2014 + 1);
        rows2014++;

        $('#low2014').before("<div class=\"row\"> <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                            <input type=\"number\" name=\"credit14" + rows2014 + "\" id=\"credit14" + rows2014 + "\" required=\"true\" class=\"form-control input-lg\" placeholder=\"Credit\" tabindex=\"" + tabind + "\" max=\"6\" min=\"0\"> \
                        </div></div> \
                        <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                                <select name=\"grade14" + rows2014 + "\" id=\"grade14" + rows2014 + "\" class=\"form-control input-lg\" placeholder=\"Grade Score\" tabindex=\"" + tabind + 1 + "\"> \
                                    <option value=10>S</option> \
                                    <option value=9>A</option><option value=8>B</option><option value=7>C</option> \
                                    <option value=5>D</option><option value=0>U</option><option value=0>I</option><option value=0>W</option> \
                                </select>\
                        </div></div> \
                        </div>");
    }
    $('#add2014').click(function () {
        rows2014++;
        $('#low2014').before("<div class=\"row\"> <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                            <input type=\"number\" name=\"credit14" + rows2014 + "\" id=\"credit14" + rows2014 + "\" required=\"true\" class=\"form-control input-lg\" placeholder=\"Credit\" tabindex=\"" + tabind + "\" max=\"6\" min=\"0\"> \
                        </div></div> \
                        <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                                <select name=\"grade14" + rows2014 + "\" id=\"grade14" + rows2014 + "\" class=\"form-control input-lg\" placeholder=\"Grade Score\" tabindex=\"" + tabind + 1 + "\"> \
                                    <option value=10>S</option> \
                                    <option value=9>A</option><option value=8>B</option><option value=7>C</option> \
                                    <option value=5>D</option><option value=0>U</option><option value=0>I</option><option value=0>W</option> \
                                </select>\
                        </div></div> \
                        </div>");

    });
    
    //for cgpa section, id=*cgpa
    while (rowscgpa < 2)
    {
        var tabind = 2 * (rowscgpa + 1);
        rowscgpa++;

        $('#lowcgpa').before("<div class=\"row\"> <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                            <input type=\"number\" name=\"creditcgpa" + rowscgpa + "\" id=\"creditcgpa" + rowscgpa + "\" required=\"true\" class=\"form-control input-lg\" placeholder=\"Credit\" tabindex=\"" + tabind + "\" max=\"50\" min=\"0\"> \
                        </div></div> \
                        <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                                <input type=\"number\" step=\"any\" name=\"gradecgpa" + rowscgpa + "\" id=\"gradecgpa" + rowscgpa + "\" required=\"true\" class=\"form-control input-lg\" placeholder=\"Pointer Obtained\" tabindex=\"" + tabind + "\" max=\"50\" min=\"0\"> \
                        </div></div> \
                        </div>");
    }
    $('#addcgpa').click(function () {
        rowscgpa++;
        $('#lowcgpa').before("<div class=\"row\"> <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                            <input type=\"number\" name=\"creditcgpa" + rowscgpa + "\" id=\"creditcgpa" + rowscgpa + "\" required=\"true\" class=\"form-control input-lg\" placeholder=\"Credit\" tabindex=\"" + tabind + "\" max=\"50\" min=\"0\"> \
                        </div></div> \
                        <div class=\"col-xs-6 col-sm-6 col-md-6\"><div class=\"form-group\"> \
                                <input type=\"number\" step=\"any\" name=\"gradecgpa" + rowscgpa + "\" id=\"gradecgpa" + rowscgpa + "\" required=\"true\" class=\"form-control input-lg\" placeholder=\"Pointer Obtained\" tabindex=\"" + tabind + "\" max=\"50\" min=\"0\"> \
                        </div></div> \
                        </div>");

    });
    
    //for email
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
    
    //for email
    $('#email14').keyup(function () {
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
    
    //for email
    $('#email15').keyup(function () {
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
    
    //for email
    $('#emailcgpa').keyup(function () {
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
    
    //for email
    $('#emailfeedback').keyup(function () {
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
    
});
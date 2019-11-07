$(document).ready(function() {
	$('#error1').hide();
    $('#error2').hide();

    var email_err = true;
    var pass_err  = true;

    $('#email').keyup(function () {
    	email_check();
    })

    function email_check(){
    	var email_value = $('#email').val();

    	if (email_value.length == "") {
    		$('#error1').show();
    		$('#error1').html("*Email or mobile no. is not registered");
    		$('#error1').focus();
    		$('#error1').css('color','red');
    		$('#error1').css('font-size','15px');
    		$('#email').css('border-bottom','2px solid red');

    		email_err = false;
    		return false;
    	}else{
    		$('#error1').hide();
    		$('#email').css('border-bottom','2px solid green');
    	}
    }

    
    $('#pass').keyup(function() {
    	password_check();
    })
    function password_check(){
    	var pass_value = $('#pass').val();

    	if (pass_value.length == "") {
    		$('#error2').show();
    		$('#error2').html("*Wrong Password");
    		$('#error2').focus();
    		$('#error2').css('color','red');
    		$('#error2').css('font-size','15px');
    		$('#pass').css('border-bottom','2px solid red');

    		pass_err = false;
    		return false;
    	}else{
    		$('#error2').hide();
    		$('#pass').css('border-bottom','2px solid green');
    	}

    	if (pass_value.length <= 3) {
    		$('#error2').show();
    		$('#error2').html("*Weak password");
    		$('#error2').focus();
    		$('#error2').css('color','red');
    		$('#error2').css('font-size','15px');
    		$('#pass').css('border-bottom','2px solid red');

    		pass_err = false;
    		return false;
    	}else{
    		$('#error2').hide();
    		$('#pass').css('border-bottom','2px solid green');
    	}
    }

     $('#submitbtn').click(function(){

            email_err = true;
            pass_err = true;

			email_check();
			password_check();

		if((email_err == true ) && (pass_err == true)){
		return true;
		}else{
		return false;
		}

		});
   
});
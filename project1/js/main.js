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
    		$('.right1').css('opacity','0');
    		$('.wrong1').css('opacity','1');
    		$('.right2').css('opacity','0');
     		$('.wrong2').css('opacity','0');
    		$('#error1').html("*Email or mobile no. is not registered");
    		$('#error1').focus();
    		$('#error1').css('color','red');
    		$('#error1').css('font-size','15px');
    		$('#email').css('border-bottom','2px solid red');


    		email_err = false;
    		return false;
    	}else{
    		$('#error1').hide();
    	    $('.right1').css('opacity','1');
    		$('.wrong1').css('opacity','0');
    		$('.right2').css('opacity','0');
     		$('.wrong2').css('opacity','0');
    		$('#email').css('border-bottom','2px solid green');
    	}

        if (email_value.length < 10) {
    		$('#error1').show();
    		$('.right1').css('opacity','0');
    		$('.wrong1').css('opacity','1');
    		$('.right2').css('opacity','0');
     		$('.wrong2').css('opacity','0');
    		$('#error1').html("*Plz Enter Valid Email or mobile-no");
    		$('#error1').focus();
    		$('#error1').css('color','red');
    		$('#error1').css('font-size','15px');
    		$('#email').css('border-bottom','2px solid red');


    		email_err = false;
    		return false;
    	}else{
    		$('#error1').hide();
    	    $('.right1').css('opacity','1');
    		$('.wrong1').css('opacity','0');
    		$('.right2').css('opacity','0');
     		$('.wrong2').css('opacity','0');
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
    		$('.right1').css('opacity','0');
    		$('.wrong1').css('opacity','0');
    		$('.right2').css('opacity','0');
     		$('.wrong2').css('opacity','1');
    		$('#error2').html("*Wrong Password");
    		$('#error2').focus();
    		$('#error2').css('color','red');
    		$('#error2').css('font-size','15px');
    		$('#pass').css('border-bottom','2px solid red');

    		pass_err = false;
    		return false;
    	}else{
    		$('#error2').hide();
    		$('.right1').css('opacity','0');
    		$('.wrong1').css('opacity','0');
    		$('.right2').css('opacity','1');
     		$('.wrong2').css('opacity','0');
    		$('#pass').css('border-bottom','2px solid green');
    	}

    	if (pass_value.length <= 3) {
    		$('#error2').show();
    		$('.right1').css('opacity','0');
    		$('.wrong1').css('opacity','0');
    		$('.right2').css('opacity','0');
     		$('.wrong2').css('opacity','1');
    		$('#error2').html("*Weak password");
    		$('#error2').focus();
    		$('#error2').css('color','red');
    		$('#error2').css('font-size','15px');
    		$('#pass').css('border-bottom','2px solid red');

    		pass_err = false;
    		return false;
    	}else{
    		$('#error2').hide();
    	    $('.right1').css('opacity','0');
    		$('.wrong1').css('opacity','0');
    		$('.right2').css('opacity','1');
     		$('.wrong2').css('opacity','0');
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

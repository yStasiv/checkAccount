function TestAll() {
	if(document.getElementById("Log").value == "admin"){
		if(document.getElementById("Pass").value == '123'){
			alert('Welcome!');
			// alert('You know me?');
			// alert('Add me to friends');
			// alert('OK');
			location.href = "https://www.ukrainians.co/id69753";
		}else alert('Password is\'t correct, try again');
	}else alert('Login is\'t correct, try again');
}

function Help(){
	var helper = prompt('12^2 = ?', 'Your Answer');
	if(helper == 144) alert('Password from 1 til ...');
	else if(helper == null) alert('are you really admin?');
	else alert('Learn math, baby...');
}

$(function(){
    $('#prikol li#submenu ul').hide();
    $('#prikol li#submenu').hover(
        function(){
            $(this).find('ul').slideDown();
        }, function(){
            $(this).find('ul').slideUp('fast');
        });
});
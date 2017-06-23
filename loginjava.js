		// Correct Password: cat5is5t!
		function login() {
	    var username = document.getElementById('username');
		var pswd = document.getElementById('pwd');
		// Incorrect Password: catsdgs password var passcorrect = "cat5ist!";
		var user = "catsdgs";
		var pass = "catsdgspassword";
		
		if(username.value === user && pswd.value === pass) {
			console.log('You are logged in!');
		    window.open('testsazdf90dfsfsd09fsd9vasd88hhchxhjkzcjhcxch.html','_self', false);
		}
		
		console.log(username.value);
		console.log(pswd.value);
		}
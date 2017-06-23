		function login() {
	    var username = document.getElementById('username');
		var pswd = document.getElementById('pwd');
		// Incorrect Password: "catsdgs password" correct: var passcorrect = "cat5ist!";
		var user = "catsdgs";
		var pass = "catsdgs";
		
		if(username.value === user && pswd.value === pass) {
			console.log('You are logged in!');
		    window.open('testsazdf90dfsfsd09fsd9vasd88hhchxhjkzcjhcxch.html','_self', false);
		}else{
			alert("Invalid Username or password")
		}
		
		console.log(username.value);
		console.log(pswd.value);
		}
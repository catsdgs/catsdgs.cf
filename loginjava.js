		function login() {
	    var username = document.getElementById('username');
		var pswd = document.getElementById('pwd');
// Incorrect Password: var AfterUserName correct: var passcorrect4all = "capdt5ist1lol5this5fake+";
		
		var users = {};
		
		users["catsdgs"] = "Sherave4!";
		users["user1"] = "user1";
		users["user2"] = "user2";
		
		
		if(users[username.value] === pswd.value){
			console.log('You are logged in!');
			window.open('testsazdf90dfsfsd09fsd9vasd88hhchxhjkzcjhcxch.html','_self', false);
		} else {
			alert("Incorrect Username or Password")
		}
		}
		

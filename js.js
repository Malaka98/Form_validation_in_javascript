function validateForm() {

		   var fName = document.getElementById("fName");
		   var add = document.getElementById("add");
		   var email = document.getElementById("txtemail");
		   var ph = document.getElementById("pH");
		   var inc = document.getElementById("nic");
		   var dselect =document.getElementById("dpselect");
		   var checkbox = document.getElementById("check");
		   var radio1 = document.getElementById("male");
		   var radio2 =document.getElementById("femail");
		   var pass = document.getElementById("pass");
		   var cpass = document.getElementById("cpass");
		   var checkpass = false;
		   var matchpass = true;
		   var email_cheack = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


		   if(fName.value == "") {
		   	document.getElementById("name_error").innerHTML = "Please required this field";		   	
		   } else {
		   	document.getElementById("name_error").innerHTML = "";
		   }

		   if(add.value == "") {
		   	document.getElementById("add_error").innerHTML = "Please required this field";
		   	
		   } else {
		   	document.getElementById("add_error").innerHTML = "";
		   }

		   if(email.value == "") {
		   	document.getElementById("email_error").innerHTML = "Please required this field";
		   } else if(email.value.match(email_cheack)) {
		   	document.getElementById("email_error").innerHTML = "";
		   } else {

		   	document.getElementById("email_error").innerHTML = "Please enter valid email";
		   	email.value = "";
		   }

		   if(ph.value == "") {
		   	document.getElementById("ph_error").innerHTML = "Please required this field";
		   } else if(isNaN(ph.value) || ph.value.length!=10) {
		   	document.getElementById("ph_error").innerHTML = "Please enter valid phone number";
		   	ph.value = "";
		   }else {
		   	document.getElementById("ph_error").innerHTML = "";
		   }

		   if(inc.value == "") {
		   	document.getElementById("nic_error").innerHTML = "Please required this field";
		   } else {
		   	document.getElementById("nic_error").innerHTML = "";
		   }

		   if(dselect.value == "Not_Select") {
		   	document.getElementById("dp_error").innerHTML = "Please required this field";
		   } else {
		   	document.getElementById("dp_error").innerHTML = "";
		   }

		   if(radio1.checked == "") {
		   	if(radio2.checked == "") {
		   	document.getElementById("check_error").innerHTML = "Please select";
		   	}
		   	
		   } else {
		   	document.getElementById("check_error").innerHTML = "";
		   }

		   if(pass.value =="") {
		   	document.getElementById("pass_error").innerHTML = "Please required this field";
		   }else if(pass.value.match(/[a-z]/g) && str.match( 
                    /[A-Z]/g) && str.match( 
                    /[0-9]/g) && str.match( 
                    /[^a-zA-Z\d]/g) && str.length >= 8) {

		   		checkpass = true;

		   } else if(checkpass !=true){

		   		document.getElementById("pass_error").innerHTML = "Please enter valid password";

		   }

		   if(cpass.value == "") {
		   	document.getElementById("repass_error").innerHTML = "Please required this field";
		   	} else {
		   	document.getElementById("repass_error").innerHTML = "";
		   }

		   if(pass.value != cpass.value && (pass.value !="" && cpass.value != "")) {
		   	matchpass = false;
		   	document.getElementById("pass_error").innerHTML = "";
		   	document.getElementById("repass_error").innerHTML = "Password not match";
		   }

		   if(checkbox.checked == "") {
		   	window.alert("you do not accept our terms and conditions");
		   	checkbox.focus();
		   }

		   if((fName.value=="" || add.value=="" || email.value=="" || ph.value=="" || inc.value == "" || dselect.value == "Not_Select" || radio1.checked == "" || radio2.checked == "" || pass.value=="" || cpass.value=="" || checkpass==false || matchpass==false || checkbox.checked == "") == true) {
		   	return false;
		   } else {
		   	return true;
		   }
		   
		}
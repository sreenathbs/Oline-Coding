function key(e) {
    var k;
    if(e.keyCode != 9 && e.keyCode != 13)
    {
   		document.all ? k = e.keyCode : k = e.which;
   		return ((k >= 65 && k <= 90) || (k >= 48 && k <= 57) || k == 8 || (k > 96 && k < 123) || (k >= 37 && k <= 40));
    }
}

function validate() { 	var regno=document.getElementById("result-registernum").value; 	var pass=document.getElementById("result-password").value; 	if(regnovalid(regno)) 		{ 			if(passvalid(pass)) 				{ 					return true; 				} 		} 	return false; } function regnovalid(x) { 	if(x=="") 		{ 			alert("Please enter your Register Number"); 			document.getElementById("result-registernum").focus(); 			return false; 		} 	else if(x.length!==10 || !isNaN(x)) 		{ 			alert("Invalid Register Number"); 			document.getElementById("result-registernum").value=''; 			document.getElementById("result-registernum").focus(); 			return false; 		} 		else 		{return true;} 		 } function passvalid(x) { 	if(x=="") 		{ 			alert("Please enter your Password"); 			document.getElementById("result-password").focus(); 			return false; 		} 	else if(isNaN(x) || x.length!==8) 		{ 			alert("Invalid password"); 			document.getElementById("result-password").value=''; 			document.getElementById("result-password").focus(); 			return false; 		} 	else 	{return true;} }
	var screen = document.querySelector("#screen"),
	btn = document.querySelectorAll(".btn");
	for(item of btn){
		item.addEventListener("click", (e)=>{
			btnText = e.target.innerText;
			
			if(btnText=="x"){
				btnText = "*";
			};
			screen.value += btnText;
		})
	}
	
	function equal(){
		screen.value = eval(screen.value);
	}
	
	function pow(){
		screen.value = Math.pow(screen.value,2);
	}
	function log(){
		screen.value = Math.log(screen.value);
	}
	function Del(){
		screen.value = screen.value.substr(0, screen.value.length-1);
	}
	function Ac(){
		screen.value = "";
	}
	function back(){
		window.history.back()
	}
	function forward(){
		window.history.forward()
	}
	
	
	
	
	
	
	
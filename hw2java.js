let words = [];
	for(let i = 0; i<3; i++) {
				let userinput = prompt("please enter a word");
				words[i] = userinput;
	}
			
let ul = document.creatElement("ul");
	for(let userinput of words)
	{
	var li = document.createElement("li");
	li.innerText = userinput;
	ul.appendChild(li);
	}
			
			document.getElementById("section1").appendChild(ul);
			let button = document.createElement("button");
			button.innerHTML = "Change the Words";
			button.id = "button1";
			document.getElementById("section1").appendChild(button);
			
			let wordSwappedArray = words.map(function(userinput){
				return userinput.charAt(userinput.length-1) + userinput.substring(1,userinput.length-1) + userinput.charAt(0);
			});
			
			ul = document.createElement("ul");
			for(let userinput of wordSwappedArray){
				var li = document.createElement("li");
				li.innerText = userinput;
				ul.appendChild(li);
			}
			
			document.getElementById("section2").appendChild(ul);
			button = document.createElement("button");
			button.innerHTML = "Go back";
			button.id = "button2";
			document.getElementById("section2").appendChild(button);
			
			document.getElementById("button1").addEventListener("click", function){
				document.getElementById("section1").style.display = "none";
				document.getElementById("section2").style.display = "block";
			});
			
			document.getElementById("button2").addEventListener("click", function(){
				document.getElementById("section2").style.display = "none";
				document.getElementById("section1").style.display = "block";
			});

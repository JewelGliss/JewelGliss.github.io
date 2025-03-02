//pls ignore the jank, thnx

function addGallery(event){
	//console.log(event.target);
	var selected = document.getElementById('Selected');
	
	if (selected.style.display=="none"){
		document.getElementById('Cover').style.display = "block";
		selected.style.display = "block";
		selected.src=event.target.src;
		selected.alt=event.target.alt;
		//console.log(selected)
	}else{
		document.getElementById('Cover').style.display = "none";
		selected.style.display = "none";
	}
}   

document.getElementById('Cover').addEventListener("click", addGallery);
document.getElementById('Selected').addEventListener("click", addGallery);

var images = document.getElementsByTagName("img");
for(var i=0; i<images.length; i++) {
	images[i].addEventListener("click", addGallery);
}

const Toks = document.getElementsByClassName('zeroWidths'); 
for(var i=0; i<Toks.length; i++) {
	Toks[i].innerHTML = Toks[i].innerHTML.replaceAll("&nbsp; ","&nbsp;&nbsp;")
	Toks[i].innerHTML = Toks[i].innerHTML.replaceAll(" ","&ZeroWidthSpace;")
}

function langChange(event){
	if(event.id=="english")
		document.title = "Jewel Glisson";
	
	if(event.id=="tokiPona")
		document.title = "jan Kiwin";
	
	if(event.id=="laLojban")
		document.title = "la bakre'u";
}
//pls ignore the jank, thnx

function addGallery(event){
	//console.log(event.target);
	var selected = document.getElementById('Selected');
	
	
	
	if (selected.style.display=="none"){
		document.getElementById('Cover').style.display = "block";
		selected.style.display = "block";
		selected.src=event.target.src;
		selected.alt=event.target.alt;
		console.log(selected)
	}else{
		document.getElementById('Cover').style.display = "none";
		selected.style.display = "none";
	}
}   


document.getElementById('Cover').addEventListener("click", addGallery);
document.getElementById('Selected').addEventListener("click", addGallery);

var getDivId = document.getElementById("Gallery");
var images = getDivId.getElementsByTagName("img");
for(var i=0; i<images.length; i++) {
	images[i].addEventListener("click", addGallery);
}


document.querySelectorAll('.codedText').forEach((t)=>{
	var arr1 = t.innerHTML.split('')
	if (t.classList.contains('fromRight')) {
		arr1=arr1.reverse()
	}
	const arr2 = []
	arr1.forEach( (char,i)=> arr2[i] = randChar() ) //fill arr2 with random characters
	const tl = gsap.timeline()
	let step = 0
	tl.fromTo(t, {
		innerHTML:arr2.join(''),
		opacity:0,
	},{
		duration:arr1.length/18, //duration based on text length
		ease:'power1.out',
		delay:.1,
		opacity:1,
		onUpdate:()=>{
			const p = Math.floor(tl.progress()*(arr1.length)) //whole number from 0 - text length
			if (step != p) { //throttle the change of random characters
				step = p
				
				//arr1.forEach( (char,i)=> {
				//		if (" -.@\n\t".includes(char)){
				//			arr2[i] = char
				//		}else{
				//			arr2[i] = randChar()
				//		}
				//	arr2[i] = randChar()
				//})
				//let pt1 = arr1.join('').substring(p, 0),
              	//pt2 = arr2.join('').substring(arr2.length-p, 0)
          		//if (t.classList.contains('fromRight')) {
            	//	pt1 = arr2.join('').substring(arr2.length-p, 0)
            	//	pt2 = arr1.join('').substring(arr1.length-p)
				//}
				//t.innerHTML = pt1 + pt2 //update text
				
				

				let pt2 = ""
				arr1.forEach( (char,i) => {
					if (i>=p){
						if (" -.@\n\t".includes(char)){
							pt2 = pt2 + char
						}else{
							pt2 = pt2 + randChar()
						}
					}
				})
				let pt1 = arr1.join('').substring(p, 0)
				
				if (t.classList.contains('fromRight')) {
					pt1=pt1.split('').reverse().join('')
					t.innerHTML = '<span class="fadedCodedText">' + pt2.replaceAll("<","</span!<").replaceAll(">",'><span class="fadedCodedText">').replaceAll("!",">") +'</span>' + pt1//update text
					//console.log(t.innerHTML)
				}else{
					t.innerHTML = pt1 + '<span class="fadedCodedText">' + pt2.replaceAll("<","</span!<").replaceAll(">",'><span class="fadedCodedText">').replaceAll("!",">") +'</span>' //update text
				}
				//console.log(t.innerHTML)
			}
		}
	})
})

function randChar(){
	//**
	let c = [
		"\u{f1900}","\u{f1901}","\u{f1902}","\u{f1903}","\u{f1904}","\u{f1905}","\u{f1906}","\u{f1907}","\u{f1908}","\u{f1909}","\u{f190a}","\u{f190b}","\u{f190c}","\u{f190d}","\u{f190e}","\u{f190f}",
		"\u{f1910}","\u{f1911}","\u{f1912}","\u{f1913}","\u{f1914}","\u{f1915}","\u{f1916}","\u{f1917}","\u{f1918}","\u{f1919}","\u{f191a}","\u{f191b}","\u{f191c}","\u{f191d}","\u{f191e}","\u{f191f}",
		"\u{f1920}","\u{f1921}","\u{f1922}","\u{f1923}","\u{f1924}","\u{f1925}","\u{f1926}","\u{f1927}","\u{f1928}","\u{f1929}","\u{f192a}","\u{f192b}","\u{f192c}","\u{f192d}","\u{f192e}","\u{f192f}",
		"\u{f1930}","\u{f1931}","\u{f1932}","\u{f1933}","\u{f1934}","\u{f1935}","\u{f1936}","\u{f1937}","\u{f1938}","\u{f1939}","\u{f193a}","\u{f193b}","\u{f193c}","\u{f193d}","\u{f193e}","\u{f193f}",
		"\u{f1940}","\u{f1941}","\u{f1942}","\u{f1943}","\u{f1944}","\u{f1945}","\u{f1946}","\u{f1947}","\u{f1948}","\u{f1949}","\u{f194a}","\u{f194b}","\u{f194c}","\u{f194d}","\u{f194e}","\u{f194f}",
		"\u{f1950}","\u{f1951}","\u{f1952}","\u{f1953}","\u{f1954}",            "\u{f1956}","\u{f1957}","\u{f1958}","\u{f1959}","\u{f195a}","\u{f195b}","\u{f195c}","\u{f195d}","\u{f195e}","\u{f195f}",
		"\u{f1960}","\u{f1961}","\u{f1962}","\u{f1963}","\u{f1964}","\u{f1965}","\u{f1966}","\u{f1967}","\u{f1968}","\u{f1969}","\u{f196a}","\u{f196b}","\u{f196c}","\u{f196d}","\u{f196e}","\u{f196f}",
		"\u{f1970}","\u{f1971}","\u{f1972}","\u{f1973}","\u{f1974}","\u{f1975}","\u{f1976}","\u{f1977}","\u{f1978}","\u{f1979}",            "\u{f197b}","\u{f197c}","\u{f197d}","\u{f197e}",
		"\u{f1980}","\u{f1981}",                                                "\u{f1986}","\u{f1987}"
	]
	//**/
	//let c = "0123456789ABCDEF"
	c = c[Math.floor(Math.random() * c.length)]
	return (Math.random()>0.5)? c : c.toUpperCase()
}
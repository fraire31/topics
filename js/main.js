var menuBar = document.getElementById('menuButton');

function appear(elementId){
	var open = document.getElementById(elementId);
	open.removeAttribute('style','display:none')
	open.setAttribute('style','display:block;');
}

function exit(elementId){
	var div = document.getElementById(elementId);

}



menuBar.addEventListener('click',function(){
	console.log('you got it')

	var menubarDiv = document.getElementById('men');

	var exit1 = document.createElement('i');
	exit1.classList += 'fas fa-times-circle'
	exit1.setAttribute('onclick','exit(div1)');
	var exit2 = document.createElement('i');
	exit2.classList += 'fas fa-times-circle'
	exit2.setAttribute('onclick','exit(div2)');
	var exit3 = document.createElement('i');
	exit3.classList += 'fas fa-times-circle'
	exit3.setAttribute('onclick','exit(div3)');
	var exit4 = document.createElement('i');
	exit4.classList += 'fas fa-times-circle'
	exit4.setAttribute('onclick','exit(div4)');

	var ul = document.createElement('ul');

	var li1 = document.createElement('li');
	li1.classList = 'dropdown';
	li1.setAttribute('onclick','appear("div1")');
	var li2 = document.createElement('li');
	li2.classList = 'dropdown';
	li2.setAttribute('onclick','appear("div2")');
	var li3 = document.createElement('li');
	li3.classList = 'dropdown';
	li3.setAttribute('onclick','appear("div3")');
	var li4 = document.createElement('li');
	li4.classList = 'dropdown';
	li4.setAttribute('onclick','appear("div4")');

	var a1 = document.createElement('a');
	a1.setAttribute('href','#');
	a1.innerHTML = 'ABOUT';
	var a2 = document.createElement('a');
	a2.setAttribute('href','#');
	a2.innerHTML = 'SOURCES'
	var a3 = document.createElement('a');
	a3.setAttribute('href','#');
	a3.innerHTML ='ODDLY SATISFYING'
	var a4 = document.createElement('a');
	a4.setAttribute('href','#');	
	a4.innerHTML ='HEALTH'

//DIVS HOLDING MENU OPTIONS
	var div1 = document.createElement('div');
	div1.classList = 'dropdown-content';
	div1.setAttribute('id','div1');

	var div2 = document.createElement('div');
	div2.classList = 'dropdown-content';
	div2.setAttribute('id','div2');

	var div3 = document.createElement('div');
	div3.classList = 'dropdown-content';
	div3.setAttribute('id','div3');

	var div4 = document.createElement('div');
	div4.classList = 'dropdown-content';
	div4.setAttribute('id','div4');



	var an1 = document.createElement('a');
	var an2 = document.createElement('a');
	var an3 = document.createElement('a');
	var an4 = document.createElement('a');

	an1.setAttribute('href','#');
	an1.innerHTML = 'Welcome to hot topics'
	an2.setAttribute('href','#');
	an2.innerHTML = 'Check who edits what you read'
	an3.setAttribute('href','#');
	an3.innerHTML = 'Thousands of them'
	an4.setAttribute('href','#');
	an4.innerHTML = 'Plants to heal'



	var img1 = document.createElement('img');
	img1.src = 'images/stones.jpg'
	var img2 = document.createElement('img');
	img2.src = 'images/cds.jpg'
	var img3 = document.createElement('img');
	img3.src = 'images/beer.jpg'
	var img4 = document.createElement('img');
	img4.src = 'images/veggies.jpg'


	var p1 = document.createElement('p');
	p1.innerHTML= 'Nothing but the truth <br/> truth are facts'
	var p2 = document.createElement('p');
	p2.innerHTML='Its hard facts and style in one'
	var p3 = document.createElement('p');
	p3.innerHTML= 'Why are all these things satisfying';
	var p4 = document.createElement('p');
	p4.innerHTML = 'Why not use food as medicine?'

	var h1 = document.createElement('h1');
	h1.innerHTML = 'Menu';



	div1.appendChild(exit1);
	div1.appendChild(p1);
	div1.appendChild(an1);
	div1.appendChild(img1);
	li1.appendChild(div1);
	li1.appendChild(a1);

	div2.appendChild(exit2);
	div2.appendChild(p2);
	div2.appendChild(an2);
	div2.appendChild(img2);
	li2.appendChild(div2);
	li2.appendChild(a2);

	div3.appendChild(exit3);
	div3.appendChild(p3);
	div3.appendChild(an3);
	div3.appendChild(img3);
	li3.appendChild(div3);
	li3.appendChild(a3);

	div4.appendChild(exit4);
	div4.appendChild(p4);
	div4.appendChild(an4);
	div4.appendChild(img4);
	li4.appendChild(div4);
	li4.appendChild(a4);

	ul.appendChild(li4);
	ul.appendChild(li3);
	ul.appendChild(li2);
	ul.appendChild(li1);


	menubarDiv.appendChild(h1);
	menubarDiv.appendChild(ul);

	menubarDiv.classList = 'allWhite';

});
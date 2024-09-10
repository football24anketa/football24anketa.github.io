let scroll
let body
let rollercoaster
let biglogo
let lenta
let navBut

window.onload = function(){
	scroll = document.getElementsByClassName('slow-scroll')[0];
	scroll.style.marginTop = `-${window.scrollY/5}px`;
	body=document.getElementsByClassName('body')[0];
	biglogo=document.getElementsByClassName('big-logo')[0]
	rollercoaster = document.getElementsByClassName('rollercoaster');
	rollercoaster[0].scrollTo({left: window.scrollY});
	lenta=document.getElementsByClassName('stars_start')[0]
	leaves=document.getElementsByClassName('leaves')[0]
	navBut=document.getElementsByClassName('nav-button');
	Array.from(navBut).forEach(function(item, index, array){
		item.addEventListener('click',function(){
			window.scrollBy({
				top: document.getElementById(item.getAttribute('href').substring(1)).getBoundingClientRect().y-100,
				behavior: 'smooth'
			})
		})
	})

	document.getElementsByClassName('logo')[0].addEventListener('click', function(){
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		})
	if(lenta.getBoundingClientRect().y<=0){
		leaves.style.opacity = '1';
	}
	else{
		leaves.style.opacity = '0';
	}
};

window.addEventListener('scroll', function(){
	if(lenta!=undefined){
		if(lenta.getBoundingClientRect().y<=0){
			leaves.style.opacity = '1';
		}
		else{
			leaves.style.opacity = '0';
		}
		scroll.style.marginTop = `-${window.scrollY/5}px`;
		rollercoaster[0].scrollTo({left: window.scrollY});
	}
})
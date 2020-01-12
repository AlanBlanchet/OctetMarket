var burger = false;
function SetBurger()
{
	document.getElementsByClassName("nav-menu")[0].style.left=(burger)?"-260px":"0px";
	document.getElementsByClassName("nav-menu")[0].style.maxWidth=(burger)?"200px":"100vw";
	document.getElementsByClassName("burger")[0].style.backgroundColor=(burger)?"var(--main-color)":"#003e7e";
	burger = !burger;
}
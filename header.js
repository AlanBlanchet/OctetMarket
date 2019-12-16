var htmlCode = '';
htmlCode += '<div id="header-1">';
htmlCode += '<a href="accueil.html">Octet Market</a>';
htmlCode += '</div>';
htmlCode += '<div class="nav-menu">';
htmlCode += '<button class="burger" onclick="SetBurger()"><i class="fas fa-hamburger"></i></button>';
htmlCode += '<nav>';
htmlCode += '<div class="menu-bar">';
htmlCode += '<div><a href="accueil.html">Accueil</a></div>';
htmlCode += '<div>';
htmlCode += '<a href="Produits/produits.html">Produits</a>';
htmlCode += '<div class="sub-menu">';
htmlCode += '<div><a href="Produits/peripheriques.html">Périphériques</a></div>';
htmlCode += '<div><a href="Produits/hardware.html">Hardware</a></div>';
htmlCode += '<div><a href="Produits/logiciels.html">Logiciels</a></div>';
htmlCode += '</div>';
htmlCode += '</div>';
htmlCode += '<div>';
htmlCode += '<a href="Nous Rejoindre/nousrejoindre.html">Nous rejoindre</a>';
htmlCode += '<div class="sub-menu">';
htmlCode += '<div><a href="Nous Rejoindre/vendeur.html">Vendeur</a></div>';
htmlCode += '<div><a href="Nous Rejoindre/formateur.html">Formateur</a></div>';
htmlCode += '<div><a href="Nous Rejoindre/developpeurweb.html">Developpeur Web</a></div>';
htmlCode += '</div>';
htmlCode += '</div>';
htmlCode += '<div><a href="contact.html">Contact</a></div>';
htmlCode += '<span></span>'
htmlCode += '<div><a href="faq.html">FAQ</a></div>';
htmlCode += '<div><a href="equipe.html">Équipe</a></div>';
htmlCode += '<div><a href="presse.html">Presse</a></div>';
htmlCode += '</div>';
htmlCode += '<div class="milieu">';
htmlCode += '<a class="recherche">';
htmlCode += '<i class="fas fa-search"></i>';
htmlCode += '</a>';
htmlCode += '<input type="search" name="q" class="s" placeholder="Rechercher">';
htmlCode += '<a href="https://twitter.com/?lang=fr" target="_blank" class="but">';
htmlCode += '<i class="fab fa-twitter"></i>';
htmlCode += '</a>';
htmlCode += '<a href="https://fr-fr.facebook.com/" target="_blank" class="but">';
htmlCode += '<i class="fab fa-facebook-f"></i>';
htmlCode += '</a>';
htmlCode += '</div>';
htmlCode += '</nav>';
htmlCode += '</div>';

window.onload = function(){
    let headerHTML = document.getElementById("header-html");
    headerHTML.innerHTML = htmlCode;
}

var burger = false;
function SetBurger()
{
	document.getElementsByClassName("nav-menu")[0].style.left=(burger)?"-260px":"0px";
	document.getElementsByClassName("nav-menu")[0].style.maxWidth=(burger)?"200px":"100vw";
	document.getElementsByClassName("burger")[0].style.backgroundColor=(burger)?"var(--main-color)":"#003e7e";
	//document.getElementsByTagName("nav")[0].setAttribute('style',(burger)?'var(--main-color);':'#003e7e !important;');
	document.getElementsByTagName("nav")[0].style.backgroundColor=(burger)?"var(--main-color)":"#003e7e";

	burger = !burger;
}
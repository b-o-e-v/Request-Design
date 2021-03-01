let menu = document.querySelector('.search__menu');
let navigation = document.querySelector('.navigation');
let equipments = document.querySelector('.equipments__title');
let equipmentsList = document.querySelector('.equipments__container');
let footerNav = document.querySelectorAll('.footer-navigation__title');
let footerList = document.querySelectorAll('.footer-navigation__list');

function openNav() {
    navigation.classList.toggle('display-none');
}
function openEqu() {
    equipmentsList.classList.toggle('display-none');
}

menu.addEventListener('click', openNav);
equipments.addEventListener('click', openEqu);
for (let list = 0; list < footerList.length; list++) {
    function openNavFooter() {
        footerList[list].classList.toggle('display-none');
    } 
    footerNav[list].addEventListener('click', openNavFooter)
}

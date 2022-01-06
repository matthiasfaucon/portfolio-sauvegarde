$(document).ready(function () {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#']:not([href='#'])").click(function () {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
            if (anchor.length) {
                $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});


/****
 * 1 - Quand on clique sur le menu burger afficher menuToggleDiv
 * 2 - Menu ouvert -> Quand on clique sur la croix fermer menuToggleDiv
 ****/


let menuToggleDiv = document.getElementById('menuToggleDiv');
let menuToggle = document.getElementsByClassName('menuToggle');
let toggle = document.getElementById('toggle');
let toggleCrea = document.getElementsByClassName('toggleCrea');
let infosCrea = document.getElementsByClassName('infosCreations');
let card = document.getElementsByClassName('card');

toggle.onclick = function () {
    toggle.classList.toggle('active');
    menuToggleDiv.style.display = "block";
}

document.onclick = function (e) {

    if (e.target.id !== 'toggle') {
        toggle.classList.remove('active');
        menuToggleDiv.style.display = "none";
    }

    if (toggle.classList == '') {
        menuToggleDiv.style.display = "none";
    }

}

// console.log(numero);
card[0].addEventListener('click', function () {
    infosCrea[0].style.display = "initial";
    document.body.classList.toggle('activeInfo');
});
toggleCrea[0].addEventListener('click', function () {
    infosCrea[0].style.display = "none";
    document.body.classList.remove('activeInfo');
});


card[1].addEventListener('click', function () {
    infosCrea[1].style.display = "initial";
    document.body.classList.toggle('activeInfo');
});
toggleCrea[1].addEventListener('click', function () {
    infosCrea[1].style.display = "none";
    document.body.classList.remove('activeInfo');
});


card[2].addEventListener('click', function () {
    infosCrea[2].style.display = "initial";
    document.body.classList.toggle('activeInfo');
});
toggleCrea[2].addEventListener('click', function () {
    infosCrea[2].style.display = "none";
    document.body.classList.remove('activeInfo');
});


card[3].addEventListener('click', function () {
    infosCrea[3].style.display = "initial";
    document.body.classList.toggle('activeInfo');
});
toggleCrea[3].addEventListener('click', function () {
    infosCrea[3].style.display = "none";
    document.body.classList.remove('activeInfo');
});


card[4].addEventListener('click', function () {
    infosCrea[4].style.display = "initial";
    document.body.classList.toggle('activeInfo');
});
toggleCrea[4].addEventListener('click', function () {
    infosCrea[4].style.display = "none";
    document.body.classList.remove('activeInfo');
});

// card[5].addEventListener('click', function(){
//     infosCrea[5].style.display = "initial";
//     infosCrea.classList.toggle('activeInfo');
// });
// toggleCrea.addEventListener('click', function(){
//     infosCrea[5].style.display = "none";
// });


let plus = document.getElementById('plus');
let apres = document.getElementById('apresClick');

plus.addEventListener("click", function () {

    console.log(apres.style.display);
    apres.style.display = 'initial';

});


let apresClickMenu = document.getElementById('apresClickMenu');

plus.addEventListener("click", function () {

    console.log(apres.style.display);
    apresClickMenu.style.display = 'initial';

});


// let marketing = document.getElementsByClassName('marketing');
// let graphisme = document.getElementsByClassName('graphisme');
// let photographie = document.getElementsByClassName('photographie');
// let programmation = document.getElementsByClassName('programmation');
// let conceptionArtistique = document.getElementsByClassName('conceptionArtistique');
// let troisd = document.getElementsByClassName('troisd');
let imageGif = document.getElementsByClassName('inactive');
let imageGifActive = document.getElementsByClassName('active');

imageGif[0].addEventListener("mouseenter", function () { // tu as récupérer un tableau 
    imageGifActive[0].style.display = 'initial';
    imageGif[0].style.display = 'none';
});
imageGifActive[0].addEventListener("mouseleave", function () { // tu as récupérer un tableau 
    imageGifActive[0].style.display = 'none';
    imageGif[0].style.display = 'initial';
});

imageGif[4].addEventListener("mouseenter", function () { // tu as récupérer un tableau 
    imageGifActive[4].style.display = 'initial';
    imageGif[4].style.display = 'none';
});
imageGifActive[4].addEventListener("mouseleave", function () { // tu as récupérer un tableau 
    imageGifActive[4].style.display = 'none';
    imageGif[4].style.display = 'initial';
});

imageGif[2].addEventListener("mouseenter", function () { // tu as récupérer un tableau 
    imageGifActive[2].style.display = 'initial';
    imageGif[2].style.display = 'none';
});
imageGifActive[2].addEventListener("mouseleave", function () { // tu as récupérer un tableau 
    imageGifActive[2].style.display = 'none';
    imageGif[2].style.display = 'initial';
});

imageGif[1].addEventListener("mouseenter", function () { // tu as récupérer un tableau 
    imageGifActive[1].style.display = 'initial';
    imageGif[1].style.display = 'none';
});
imageGifActive[1].addEventListener("mouseleave", function () { // tu as récupérer un tableau 
    imageGifActive[1].style.display = 'none';
    imageGif[1].style.display = 'initial';
});

imageGif[3].addEventListener("mouseenter", function () { // tu as récupérer un tableau 
    imageGifActive[3].style.display = 'initial';
    imageGif[3].style.display = 'none';
});
imageGifActive[3].addEventListener("mouseleave", function () { // tu as récupérer un tableau 
    imageGifActive[3].style.display = 'none';
    imageGif[3].style.display = 'initial';
});

imageGif[5].addEventListener("mouseenter", function () { // tu as récupérer un tableau 
    imageGifActive[5].style.display = 'initial';
    imageGif[5].style.display = 'none';
});
imageGifActive[5].addEventListener("mouseleave", function () { // tu as récupérer un tableau 
    imageGifActive[5].style.display = 'none';
    imageGif[5].style.display = 'initial';
});

$("#butn").click(function () {
    $('#form').attr('action', 'mailto:matthias.faucon@univ-rouen?body=' + $('#fname').val() + ' : ' + $('#emailAddress').val() + '<br><br>' + $('#subject').val() + '&subject=' + $('#sujet').val());
});

// https://askcodez.com/comment-envoyer-par-e-mail-a-laide-de-javascript-ou-jquery.html
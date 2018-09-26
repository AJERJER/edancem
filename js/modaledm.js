function opennav() {
    var navigation = document.getElementById('navigation');
    var edmtext = document.getElementById('edmtext');
    var nav = document.getElementById('nav');
    navigation.classList.remove('closenavigation');
    edmtext.classList.remove('closeedmtext');
    nav.classList.remove('closemodalnav');
    nav.classList.add('openmodalnav');
    setTimeout(function () {
        navigation.classList.add('shownavigation');
        edmtext.classList.add('showedmtext');
        navigation.style.display = 'block';
        edmtext.style.display = 'block';
    }, 300)
    nav.style.display = 'block';
}

function closenav() {
    setTimeout(function () {
        navigation.style.display = 'none';
        edmtext.style.display = 'none';
    }, 200)
    setTimeout(function () {
        nav.style.display = 'none';
    },900)
    var navigation = document.getElementById('navigation');
    var edmtext = document.getElementById('edmtext');
    var nav = document.getElementById('nav');
    navigation.classList.remove('shownavigation');
    edmtext.classList.remove('showedmtext');
    nav.classList.remove('openmodalnav');
    navigation.classList.add('closenavigation');
    edmtext.classList.add('closeedmtext');
    nav.classList.add('closemodalnav');
}

function chain(){
    $('body').fadeOut('slow');
    setTimeout(function(){
        window.location.href='chain.html';
    },2000);
}

function diplo(){
    $('body').fadeOut('slow');
    setTimeout(function(){
        window.location.href='diplo.html';
    },2000);
}

function gryffin(){
    $('body').fadeOut('slow');
    setTimeout(function(){
        window.location.href='gryffin.html';
    },2000);
}

function mello(){
    $('body').fadeOut('slow');
    setTimeout(function(){
        window.location.href='marshmello.html';
    },2000);
}

function holo(){
    $('body').fadeOut('slow');
    setTimeout(function(){
        window.location.href='holo.html';
    },2000);
}

function zedd(){
    $('body').fadeOut('slow');
    setTimeout(function(){
        window.location.href='zedd.html';
    },2000);
}

function music(){
    $('body').fadeOut('slow');
    setTimeout(function(){
        window.location.href='music.html';
    },2000);
}
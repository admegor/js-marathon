function $getElByID(id) {
    return document.getElementById(id);
}

const $btn = $getElByID('btn-kick');
const $btnBat = $getElByID('btn-kick-bat');

const character = {
    name: 'Pikachu',
    defaultHP: 200,
    damageHP: 200,
    elHP: $getElByID('health-character'),
    elProgressbar: $getElByID('progressbar-character'),
    renderHPLife,
    renderProgressbarHP,
    renderHP,
    changeHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElByID('health-enemy'),
    elProgressbar: $getElByID('progressbar-enemy'),
    renderHPLife,
    renderProgressbarHP,
    renderHP,
    changeHP,
}

$btnBat.addEventListener('click', function () {
    powerStroke(30);
})

$btn.addEventListener('click', function () {
    powerStroke(20);
})

function powerStroke(count) {
    character.changeHP(random(count));
    enemy.changeHP(random(count));
}

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

function renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
}

function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = (this.damageHP / this.defaultHP) * 100 + '%';
}

function changeHP(count) {

    this.damageHP -= count;

    if (this.damageHP <= 0) {
        this.damageHP = 0;
        alert('Бедный '+ this.name + ' проиграл бой!');
        $btn.disabled = true;
        $btnBat.disabled = true;
    } 

    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num)
}

init();
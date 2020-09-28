const $btn = document.getElementById('btn-kick');
const $btnBat = document.getElementById('btn-kick-bat');

const character = {
    name: 'Pikachu',
    defaultHP: 200,
    damageHP: 200,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    renderHP: renderHP,
    changeHP: changeHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    renderHP: renderHP,
    changeHP: changeHP,
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
    this.elProgressbar.style.width = this.damageHP + '%';
    // this.elProgressbar.style.width = ((100 / this.damageHP) * this.damageHP) + '%';
}

function changeHP(count) {
    if (this.damageHP < count) {
        this.damageHP = 0;
        alert('Бедный '+ this.name + ' проиграл бой!');
        $btn.disabled = true;
        $btnBat.disabled = true;
    } else {
        this.damageHP -= count;
    }

    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num)
}

init();
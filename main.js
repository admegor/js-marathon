const $btn = document.getElementById('btn-kick');
const $btnBat = document.getElementById('btn-kick-bat');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

$btnBat.addEventListener('click', function () {
    powerStroke(30);
})

$btn.addEventListener('click', function () {
    powerStroke(20);
})

function powerStroke(count) {
    changeHP(random(count), character);
    changeHP(random(count), enemy);
}

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert('Бедный '+ person.name + ' проиграл бой!');
        $btn.disabled = true;
        $btnBat.disabled = true;
    } else {
        person.damageHP -= count;
    }

    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random() * num)
}

init();
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

const { name, defaultHP } = character;
const { name: nameEnemy, defaultHP: defaultHPEnemy } = enemy;

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
        alert('Бедный '+ name + ' проиграл бой!');
        $btn.disabled = true;
        $btnBat.disabled = true;
    } 

    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num)
}

const logs = [
    '[ПЕРСОНАЖ №1] вспомнил что-то важное, но неожиданно [ПЕРСОНАЖ №2], не помня себя от испуга, ударил в предплечье врага.',
    '[ПЕРСОНАЖ №1] поперхнулся, и за это [ПЕРСОНАЖ №2] с испугу приложил прямой удар коленом в лоб врага.',
    '[ПЕРСОНАЖ №1] забылся, но в это время наглый [ПЕРСОНАЖ №2], приняв волевое решение, неслышно подойдя сзади, ударил.',
    '[ПЕРСОНАЖ №1] пришел в себя, но неожиданно [ПЕРСОНАЖ №2] случайно нанес мощнейший удар.',
    '[ПЕРСОНАЖ №1] поперхнулся, но в это время [ПЕРСОНАЖ №2] нехотя раздробил кулаком \<вырезанно цензурой\> противника.',
    '[ПЕРСОНАЖ №1] удивился, а [ПЕРСОНАЖ №2] пошатнувшись влепил подлый удар.',
    '[ПЕРСОНАЖ №1] высморкался, но неожиданно [ПЕРСОНАЖ №2] провел дробящий удар.',
    '[ПЕРСОНАЖ №1] пошатнулся, и внезапно наглый [ПЕРСОНАЖ №2] беспричинно ударил в ногу противника',
    '[ПЕРСОНАЖ №1] расстроился, как вдруг, неожиданно [ПЕРСОНАЖ №2] случайно влепил стопой в живот соперника.',
    '[ПЕРСОНАЖ №1] пытался что-то сказать, но вдруг, неожиданно [ПЕРСОНАЖ №2] со скуки, разбил бровь сопернику.'
];

init();
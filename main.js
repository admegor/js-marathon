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

const { name, defaultHP, damageHP } = character;
const { name: nameEnemy, defaultHP: defaultHPEnemy, damageHP: damageHPEnemy } = enemy;

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
    const { elHP, damageHP, defaultHP} = this;
    elHP.innerText = damageHP + ' / ' + defaultHP;
}

function renderProgressbarHP() {
    const { elProgressbar, damageHP, defaultHP } = this;
    elProgressbar.style.width = (damageHP / defaultHP) * 100 + '%';
}

function animateDamage(count) {
    console.log(count);
    const $damageItem = document.querySelector('#damage');
    const $pd = document.createElement('p');

    $pd.innerText = `${count.character}`;
    $damageItem.appendChild($pd);
}

function createLog(log) {
        const $logs = document.querySelector('#log');
        const $p = document.createElement('p');

        $p.innerText = `${log}`;
        $logs.appendChild($p);
}

function changeHP(count) {
    this.damageHP -= count;

    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
    createLog(log);
    const damage = this === enemy ? animateDamage(this, character, count) : animateDamage(this, enemy, count);
    animateDamage(damage);

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


function generateLog(firstPerson, secondPerson, count) {
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага., -${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника -${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${count}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`
    ];

    return logs[random(logs.length) - 1];
}

init();
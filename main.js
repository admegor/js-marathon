import pokemon from "./pokemon.js"
import random from "./random.js";

const player1 = new pokemon({
    name: 'Pikachu',
    defaultHP: 200,
    damageHP: 200,
    Selectors: 'character',
});

const player2 = new pokemon({
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    Selectors: 'enemy',
});

function $getElByID(id) {
    return document.getElementById(id);
}

const $btn = $getElByID('btn-kick');
const $btnBat = $getElByID('btn-kick-bat');
let clickCount = 1;

function clickCounter() {
    clickCount += 1;
}

let manaCountBtnBat = 3;
let manaCountBtnJolt = 8;

$btn.addEventListener('click', function () {
    player1.changeHP(random(30), function(count) {
        createLog(generateLog(player1, player2, count));
    });
    player2.changeHP(random(30), function(count) {
        createLog(generateLog(player1, player2, count));
    });
    powerStroke(20);
    clickCounter(clickCount);
    manaCountBtnJolt -= 1;

    if (manaCountBtnJolt <= 0) {
        this.disabled = true;
    }

    this.innerText = `Thunder Jolt ${manaCountBtnJolt}/8`;
})

$btnBat.addEventListener('click', function () {
    player1.changeHP(random(30), function(count) {
        createLog(generateLog(player1, player2, count));
    });
    player2.changeHP(random(30), function(count) {
        createLog(generateLog(player1, player2, count));
    });
    powerStroke(30);
    clickCounter(clickCount);
    manaCountBtnBat -= 1;

    if (manaCountBtnBat <= 0) {
        this.disabled = true;
    }

    this.innerText = `Thunder baseball bat ${manaCountBtnBat}/3`;
})

function powerStroke(count) {
}

function createLog(log) {
        const $logs = document.querySelector('#log');
        const $p = document.createElement('p');

        $p.innerText = `${log}`;
        $logs.insertBefore($p, $logs.children[0]);
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
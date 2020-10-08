class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({ name, defaultHP, damageHP, Selectors }) {
        super(Selectors);

        this.name = name;
        this.defaultHP = defaultHP;
        this.damageHP = damageHP;

        this.renderHP();
    }

    changeHP = (count, cb) => {
        this.damageHP -= count;
    
        if (this.damageHP <= 0) {
        this.damageHP = 0;
            alert('Бедный '+ this.name + ' проиграл бой!');
            $btn.disabled = true;
            $btnBat.disabled = true;
        }

        this.renderHP();
        cb && cb(count);
    }
    
    renderHP = () => {
        this.renderHPLife();
        this.renderProgressbarHP();
    }
    
    renderHPLife = () => {
        const { elHP, damageHP, defaultHP} = this;
        elHP.innerText = damageHP + ' / ' + defaultHP;
    }
    
    renderProgressbarHP = () => {
        const { elProgressbar, damageHP, defaultHP } = this;
        elProgressbar.style.width = (damageHP / defaultHP) * 100 + '%';
    }
}

export default Pokemon;
//  Задача №1 (рабочая без *)

const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

let elementCounter = 0;

function iteratorFunc(elementCounter) {
    let count = 0;
    for (let i = 0; i < elementCounter.length; i++) {
        if (elementCounter.charAt(i) === 'а') {
            count++;
        }
    }
    return count;
}

if (iteratorFunc(firstRow) > iteratorFunc(secondRow)) {
    console.log(firstRow);
} else {
    console.log(secondRow);    
}

// Задача №2 (рабочая под *)

let phone = prompt('Введите номер телефона');
let resultPhone = '';

function formattedPhone(phone) {

    // проверяет длинну ввода

    if (phone.length == 10 || phone.length == 11 || phone.length == 12) {
        
        // Номера начинаются с +7

        if (phone.charAt(0) == '+' || phone.length == 12) {
            
            for (let i = 0; i < phone.length; i++) {
                if (i == 2) {
                    resultPhone += ' (';
                }

                if (i == 5) {
                    resultPhone += ') ';
                }

                if (i == 7 || i == 9) {
                    resultPhone += '-';
                }
                resultPhone += phone.charAt(i);
            }
        }   

            // Номера начинаются с 7-ки или 8-ки

            else if (phone.length == 11) {

                for (let i = 1; i < phone.length; i++) {
                    if (i == 1) {
                        resultPhone += '+7 (';
                    }
    
                    if (i == 4) {
                        resultPhone += ') ';
                    }
    
                    if (i == 7 || i == 9) {
                        resultPhone += '-';
                    }
                    resultPhone += phone.charAt(i);
                }
            }

            // Номера начинаются с кода оператора без 7-ки и 8-ки

            else if (phone.length == 10) {
                for (let i = 0; i < phone.length; i++) {
                    if (i == 0) {
                        resultPhone += '+7 (';
                    }
    
                    if (i == 3) {
                        resultPhone += ') ';
                    }
    
                    if (i == 6 || i == 8) {
                        resultPhone += '-';
                    }
                    resultPhone += phone.charAt(i);
                }
            }

        
    } else {
        
        resultPhone = `Вы ввели не верный формат
Попробуйте ввести номер в формате +71234567890`;
    }

    return resultPhone;
}
alert(formattedPhone(phone));

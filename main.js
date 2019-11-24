
// примичание мини проект юни13
// здесь таски от 12 по 15
// ВНИМАНИЕ задействован сцсс


// функция показа главного модального окна
// при событие онклик схемы метрополитена

let btnShow = document.querySelectorAll('.button');

for (let i = 0; i < btnShow.length; i++) {
    btnShow[i].onclick = showSubway;
}

function showSubway() {
    let modalSub = this.dataset.sub;
    document.querySelector(modalSub).classList.remove('hide');

    document.onkeydown = function (event) {
        if (event.keyCode == 27) {
            closeSubway();
        }
        this.onkeydown = null;
    }

}

// функция закрытия главного модального окна
// при событие онклик схемы метрополитена

let btnClose = document.querySelectorAll('.close');

for (let i = 0; i < btnShow.length; i++) {
    btnClose[i].onclick = closeSubway;
}

function closeSubway() {

    let modals = document.querySelectorAll('.wrap-modal');

    for (let i = 0; i < modals.length; i++) {
        modals[i].classList.add('hide');
    }
}

// глобальная переменная сюда выводим результаты
let p = document.querySelector('.task-12__text');

// глобальная переменная форма
// т.е. все наши селекты опшины и другие вложености формы
// находим через форму
let form = document.querySelector('.form-selects');


// task 12

let branch1 = document.querySelectorAll('.m-1');

for (let i = 0; i < branch1.length; i++) {
    branch1[i].onclick = showBranch;

}

// функция закрытия  модального окна 
// со станциями данной ветки

const closeBranch = () => {

    let wrapBranch = document.querySelectorAll('.wrap-task-12');

    for (let i = 0; i < wrapBranch.length; i++) {

        wrapBranch[i].classList.add('hide');
    }
    document.onkeydown = null;
}

// функция показа  модального окна 
// со станциями данной ветки


const a11 = {
    "red": ['Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт', 'Вокзальная', 'Университет', 'Театральная', 'Крещатик', 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', 'Лесная'],
    "green": ['Сырец', 'Дорогожичи', 'Лукьяновская', 'Золотые ворота', 'Дворец спорта', 'Кловская', 'Печерская', 'Дружбы народов', 'Выдубичи', 'Славутич', 'Осокорки ', 'Позняки', 'Харьковская', 'Вырлица', 'Бориспольская', 'Красный хутор'],
    "blue": ['Героев Днепра', 'Минская', 'Оболонь', 'Почайна', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая площадь', 'Площадь Независимости', 'Площадь Льва Толстого', 'Олимпийская', 'Дворец Украина ', 'Лыбедская', 'Демиевская', 'Голосеевская', 'Васильковская', 'Выставочный центр', 'Ипподром', 'Теремки'],
}

function showBranch(e) {

    document.onkeydown = (event) => {

        if (event.keyCode == 27) {
            closeBranch();
        }
        document.onkeydown = null;
    }

    e.preventDefault();

    let modalBranch = this.dataset.select;
    document.querySelector(modalBranch).classList.remove('hide');

    p.innerHTML = resetBranch(a11);
}

// само задание таск 12 ,если выбран тот или иной цвет ветки
// значит выводим станции данной ветки

const resetBranch = (a11) => {

    if (form[0][0].selected) {
        p.style.color = 'red';
        return 'Красная ветка -' + a11['red'];
    }
    if (form[0][1].selected) {
        p.style.color = 'green';
        return 'Зеленая ветка -' + a11['green'];
    }

    if (form[0][2].selected) {
        p.style.color = 'blue';
        return 'Синяя ветка -' + a11['blue'];
    }
}

// task 13

let branch2 = document.querySelectorAll('.m-2');

for (let i = 0; i < branch2.length; i++) {
    branch2[i].onclick = showBranch2;

}

// функция показа  модального окна 
// со станциями данной ветки
// выведеными наоборот

function showBranch2(e) {

    document.onkeydown = (event) => {

        if (event.keyCode == 27) {
            closeBranch();
        }
        document.onkeydown = null;
    }

    e.preventDefault();

    let modalBranch = this.dataset.select;
    document.querySelector(modalBranch).classList.remove('hide');

    p.innerHTML = reverseBranch(a11);
}

// сама функция для таска 13
// при нажатие на цвет ветки выводим станции
// с конца вначало

const reverseBranch = (a11) => {

    if (form[0][0].selected) {
        p.style.color = 'red';
        return 'Красная ветка -' + a11['red'].reverse();
    }
    if (form[0][1].selected) {
        p.style.color = 'green';
        return 'Зеленая ветка -' + a11['green'].reverse();
    }

    if (form[0][2].selected) {
        p.style.color = 'blue';
        return 'Синяя ветка -' + a11['blue'].reverse();
    }
}


// task 14
// выбераем в селекте станцию 
// и нам выводит цвет ветки на страницу

let branch3 = document.querySelectorAll('.m-3');

for (let i = 0; i < branch3.length; i++) {
    branch3[i].onclick = showBranch3;

}

function showBranch3(e) {

    document.onkeydown = (event) => {

        if (event.keyCode == 27) {
            closeBranch();
        }
        document.onkeydown = null;
    }

    e.preventDefault();

    let modalBranch = this.dataset.select;
    document.querySelector(modalBranch).classList.remove('hide');

    p.innerHTML = getBranch(a11);

}


let selectStation = '';
let selectBranch = '';


const getBranch = (a11) => {

    let select = document.querySelectorAll('.select-2__station option');

    // поиск станции
    for (let i = 0; i < select.length; i++) {
        if (select[i].selected)
            selectStation = select[i].value;
    }

    // поиск ветки
    for (let key in a11) {
        for (let i = 0; i < a11[key].length; i++) {
            if (selectStation == a11[key][i]) {
                return selectBranch = key;
            }
        }
    }
}

// Task 15

// вывод сколько станций между

let branch4 = document.querySelectorAll('.m-4');

for (let i = 0; i < branch4.length; i++) {
    branch4[i].onclick = showBranch4;
}

// функция показа модального окна на котором будет выведен результат
function showBranch4(e) {
    e.preventDefault();

    document.onkeydown = (event) => {

        if (event.keyCode == 27) {
            closeBranch();
        }
        document.onkeydown = null;
    }

    let modal = this.dataset.select;
    document.querySelector(modal).classList.remove('hide');
    p.innerHTML = 'станций между =' + showDistance();
}

let station1 = '';
let station2 = '';
let indexStation1;
let indexStation2;

// функция которая показывает сколько станций между
const showDistance = () => {

    let select1 = document.querySelectorAll('.select-2 option');
    for (let i = 0; i < select1.length; i++) {
        if (select1[i].selected) {
            station1 = select1[i].value
        }
    }


    let select2 = document.querySelectorAll('.select-3 option');
    for (let i = 0; i < select2.length; i++) {
        if (select2[i].selected) {
            station2 = select2[i].value
        }
    }

    let colorBranch = '';

    for (let key in a11) {
        let counter = 0;

        for (let i = 0; i < a11[key].length; i++) {
            if (station1 == a11[key][i - 1]) {
                counter++;
                indexStation1 = i;
            }

            if (station2 == a11[key][i - 1]) {
                counter++;
                indexStation2 = i;
            }
        }

        if (counter == 2) {
            colorBranch = key;
            console.log(indexStation1);

        }
    }

    if (colorBranch == '') {
        alert('Станции не находятся на одной ветки');

    } else {
        return step2();

    }

}

// функия шаг 2 которая выполняется при условии
// ксли станции находятся на одной ветки

const step2 = () => {
    let data = [indexStation1, indexStation2];
    return Math.abs(data[0] - data[1]) - 1;

}



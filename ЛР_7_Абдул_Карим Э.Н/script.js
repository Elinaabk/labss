let input = document.querySelector(".form_input");
let btn = document.querySelector(".form_btn");
let check = document.querySelector(".res_check");
let help = document.querySelector(".res_help");
let count = document.querySelector(".res_count");
let item = 0;
let randNum = 1 + Math.floor(Math.random() * 100);
let userNum;

btn.onclick = function (evt) {
    evt.preventDefault();
    userNum = input.value;
    console.log(userNum, randNum);

    if (userNum > randNum) {
        check.textContent = "К сожалению, не угадали";
        help.textContent = "Возьмите поменьше!";
        item++;
        count.textContent = item;
            if (item>5) {
                count.textContent = "Вы проиграли( Это была ваша последняя попытка! Для того, чтобы начать заново, нажмите кнопку Начать заново";
                return;
            }
    } else if (userNum < randNum) {
        check.textContent = "К сожалению, не угадали";
        help.textContent = "Возьмите побольше!";
        item++;
        count.textContent = item;
        if (item>5) {
            count.textContent = "Вы проиграли( Это была ваша последняя попытка! Для того, чтобы начать заново, нажмите кнопку Начать заново";
            return;
        }
    } else {
        check.textContent = "Поздравляю! Вы угадали число";
        help.textContent = "В точку!";
        item++;
        count.textContent = item;
        if (item>5) {
            count.textContent = "Вы проиграли( Это была ваша последняя попытка! Для того, чтобы начать заново, нажмите кнопку Начать заново";
            return;
        }
    }
};
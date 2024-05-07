function checkFirst() {
    let first = document.getElementById("first").value;
    let regex = /^[a-zA-Z\s]{2,12}$/;

    if (regex.test(first)) {
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Данные введены корректно";
        return true;
    }
    else {
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Введите от 2 до 12 символов";
        return false;
    }
}

function checkLast() {
    let last = document.getElementById("last").value;
    let regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(last)) { 
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Данные введены корректно";
        return true;
    }
    else {
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Требуется ввести от 2 до 15 символов";
        return false;
    }
}

function checkPhone() {
    let phone = document.getElementById("phone").value;
    let regex = /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/; 

    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Данные введены корректно";
        return true;
    }
    else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Введите телефон по образцу";
        return false;
    }
}

function checkEmail() {
    let product = document.getElementById("email").value;
    let regex = /^[a-zA-Z\s]{8,40}$/;

    if (regex.test(product)) {
        document.getElementById("email_Check").style.color = "green";
        document.getElementById("email_Check").innerHTML = "Данные введены корректно";
        return true;
    }
    else {
        document.getElementById("email_Check").style.color = "red";
        document.getElementById("email_Check").innerHTML = "Требуется ввести от 8 символов. Не забудьте использовать символ @";
        return false;
    }
}

function checkDate() {
    let city = document.getElementById("date").value;
    let regex = /^[a-zA-Z\s\-]{2,40}$/;

    if (regex.test(city)) {
        document.getElementById("date_Check").style.color = "green";
        document.getElementById("date_Check").innerHTML = "Данные введены корректно";
        return true;
    }
}
function outputData() {
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;

    if (first != "" && last != "" && email != "" && phone != "" && date != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML += "<p>Ваша заявка принята к рассмотрению.</p>";
        document.getElementById("summary").innerHTML += "<p>Ваш телефон: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "<p>Ваш E-mail: " + email + ".</br>";
        document.getElementById("summary").innerHTML += "Интересующая дата: " + date + ".</br>";
        document.getElementById('sendOrder').style.color = "rgb(248, 146, 38)";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Заполните все поля";
        
    }
}
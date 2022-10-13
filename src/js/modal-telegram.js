const TOKEN = "5747023535:AAHZqWUgYIO9mprxjGZVMpq59VcQiIZrx-E";
const CHATID = "-1001796692586";
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById('form-hero').addEventListener('submit', function (event) {
    event.preventDefault();
    
    let message = `<b>Кнопка - Головний екран</b>\n`;
    message += `<b>Ім'я: ${this.name.value}</b>\n`;
    message += `<b>Телефон: ${this.tel.value}</b>`;
 
    axios.post(URL_API, {
        chat_id: CHATID,
        parse_mode: 'html',
        text: message
    })
        .then((response) => {
            this.name.value = "";
            this.tel.value = "";
        })
        .catch((error) => {
            console.warn(error);
        })
});

document.getElementById('form-programs1').addEventListener('submit', function (event) {
    event.preventDefault();
    
    let message = `<b>Кнопка - Програма 1</b>\n`;
    message += `<b>Ім'я: ${this.name.value}</b>\n`;
    message += `<b>Телефон: ${this.tel.value}</b>`;
 
    axios.post(URL_API, {
        chat_id: CHATID,
        parse_mode: 'html',
        text: message
    })
        .then((response) => {
            this.name.value = "";
            this.tel.value = "";
        })
        .catch((error) => {
            console.warn(error);
        })
});

document.getElementById('form-programs2').addEventListener('submit', function (event) {
    event.preventDefault();
    
    let message = `<b>Кнопка - Програма 2</b>\n`;
    message += `<b>Ім'я: ${this.name.value}</b>\n`;
    message += `<b>Телефон: ${this.tel.value}</b>`;
 
    axios.post(URL_API, {
        chat_id: CHATID,
        parse_mode: 'html',
        text: message
    })
        .then((response) => {
            this.name.value = "";
            this.tel.value = "";
        })
        .catch((error) => {
            console.warn(error);
        })
});

document.getElementById('form-programs3').addEventListener('submit', function (event) {
    event.preventDefault();
    
    let message = `<b>Кнопка - Програма 2</b>\n`;
    message += `<b>Ім'я: ${this.name.value}</b>\n`;
    message += `<b>Телефон: ${this.tel.value}</b>`;
 
    axios.post(URL_API, {
        chat_id: CHATID,
        parse_mode: 'html',
        text: message
    })
        .then((response) => {
            this.name.value = "";
            this.tel.value = "";
        })
        .catch((error) => {
            console.warn(error);
        })
});
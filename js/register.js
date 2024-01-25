import { validate, getData } from "./function.js"

const name = document.getElementById('name');
const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const year = document.querySelector('#year');
const password = document.querySelector('#password');
const rePassword = document.querySelector('#rePassword');
const button = document.querySelector('#button');
const okBtn = document.querySelector('#okBtn')
const formClass = document.querySelector('.form')
const thank = document.getElementById('thank')
const container = document.getElementById('container')
const logIn = document.getElementById('logIn')

logIn && logIn.addEventListener('click', function (e) {
    e.preventDefault()
    let currentUrl = window.location.href
    let pageIndex = currentUrl.search('pages')
    const domain = currentUrl.substring(0, pageIndex)
    window.location.assign(`${domain}pages/login.html?`)
})

button && button.addEventListener('click', function (e) {
    e.preventDefault();

    const formData = {
        name: name,
        userName: userName,
        email: email,
        year: year,
        password: password,
        rePassword: rePassword
    };

    if (validate(formData)) {
        let user = {
            name: name.value,
            userName: userName.value,
            email: email.value,
            year: year.value,
            password: password.value
        };

        let data = getData();
        data.push(user);
        localStorage.setItem('users', JSON.stringify(data));

        container.style.border = "1px solid green"
        thank.style.display = "flex"
        // console.log(thankyou);
        formClass.style.display = "none";

    }
});

okBtn && okBtn.addEventListener('click', function () {
    let currentUrl = window.location.href
    let pageIndex = currentUrl.search('pages')
    const domain = currentUrl.substring(0, pageIndex)
    window.location.assign(`${domain}pages/login.html?`)
})
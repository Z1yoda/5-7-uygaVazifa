import { getData, validateLogin } from "./function.js";

const userName = document.querySelector('#userName');
const password = document.querySelector('#password');
const button = document.querySelector('#button');
const formClass = document.querySelector('.form')

button && button.addEventListener('click', function (e) {
    e.preventDefault();

    if (validateLogin({ password, userName })) {
        let data = getData()
        let user = data.find(el => {
            return el.userName == userName.value
        })

        if (user && user.password == password.value) {
            localStorage.setItem('currentUser', userName.value)
            formClass.reset()

            let currentUrl = window.location.href
            let pageIndex = currentUrl.search('/')
            const domain = currentUrl.substring(0, pageIndex)
            window.location.assign(`${domain}/index.html?`)
        }
    }
});
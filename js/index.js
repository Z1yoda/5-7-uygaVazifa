import { getData } from "./function.js";

const name = document.getElementById('name');
const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const year = document.querySelector('#year');
const password = document.querySelector('#password');
const button = document.querySelector('#button');

document.addEventListener('DOMContentLoaded', function () {
    let currentUser = localStorage.getItem('currentUser')

    if (currentUser) {
        let users = getData()

        let user = users.find(el => {
            return el.userName == currentUser
        })

        if (user) {
            name.innerHTML = user.name
            userName.innerHTML = user.userName
            email.innerHTML = user.email
            year.innerHTML = user.year
            password.innerHTML = user.password

        } else {
            let currentUrl = window.location.href
            let pageIndex = currentUrl.search('pages')
            const domain = currentUrl.substring(0, pageIndex)
            window.location.assign(`${domain}pages/login.html?`)
        }

    } else {
        let currentUrl = window.location.href
        let pageIndex = currentUrl.search('pages')
        const domain = currentUrl.substring(0, pageIndex)
        window.location.assign(`${domain}pages/login.html?`)
    }
})

button && button.addEventListener('click', function () {
    localStorage.removeItem('currentUser')

    let currentUrl = window.location.href
    let pageIndex = currentUrl.search('pages')
    const domain = currentUrl.substring(0, pageIndex)
    window.location.assign(`${domain}pages/login.html?`)
})
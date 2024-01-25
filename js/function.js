
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function validate(data) {
    if (!data.name.value) {
        alert("Ism va familiya kiritilishi shart!")
        data.name.focus()
        return false
    }

    if (data.name.value.trim().length < 3) {
        alert("Ism va familiya kamida 3 ta belgidan iborat bo'lishi kerak!")
        data.name.focus()
        return false
    }

    if (!data.userName.value) {
        alert("Foydalanuvchi nomi kiritilishi shart!")
        data.userName.focus()
        return false
    }

    if (!data.email.value) {
        alert("Email kiritilishi shart!")
        data.email.focus()
        return false
    }

    if (!validateEmail(data.email.value)) {
        alert("Email not'g'ri kiritildi!")
        data.email.focus()
        return false
    }

    if (!data.password.value) {
        alert("Parol kiritilishi shart!")
        data.password.focus()
        return false
    }

    if (data.password.value.length < 6) {
        alert("Parol 6 ta belgidan kam bo'lmasligi kerak!")
        data.password.focus()
        return false
    }

    if (!data.rePassword.value) {
        alert("Parol qayta kiritilishi shart!")
        data.rePassword.focus()
        return false
    }

    if (data.password.value !== data.rePassword.value) {
        alert("Parollar mos emas!")
        data.password.focus()
        data.rePassword.value = ''
        return false
    }

    if (data.userName.value) {
        let dataUsers = getData()
        let isExist = dataUsers.some(user => {
            return data.userName.value == user.userName
        })

        if (isExist) {
            alert("Bunday foydalanuvchi mavjud")
            data.userName.focus()
            return false
        }
    }



    return true
}

function validateLogin(data) {
    if (!data.userName.value) {
        alert("Foydalanuvchi nomi kiritilishi shart!")
        data.userName.focus()
        return false
    }

    if (data.password.value.length > 6) {
        alert("Parol 6 ta belgidan kam bo'lmasligi kerak!")
        data.password.focus()
        return false
    }

    if (!data.password.value) {
        alert("Parol kiritilishi shart!")
        data.password.focus()
        return false
    }

    return true
}

function getData() {
    let data = [];
    if (localStorage.getItem('users')) {
        data = JSON.parse(localStorage.getItem('users'));
    }

    return data;
}

export { validate, getData, validateLogin };

//Đổi form
var dnhapBtn = document.querySelector('.Login_link');
var dkiBtn = document.querySelector('.Register_link');
var dki = document.querySelector('.Register_form');
var dnhap = document.querySelector('.Login_form');
dnhapBtn.onclick = function () {
    dki.style.display = 'none';
    dnhap.style.display = 'flex';
}

dkiBtn.onclick = function () {
    dnhap.style.display = 'none';
    dki.style.display = 'flex';
}

// Mobile

var dki_mobile = document.querySelector('.dki');
var dnhap_mobile = document.querySelector('.dnhap');
dnhap_mobile.onclick = function () {
    dki.style.display = 'none';
    dnhap.style.display = 'flex';
}

dki_mobile.onclick = function () {
    dnhap.style.display = 'none';
    dki.style.display = 'flex';
}


// Check form

function validate(inputElement, rule) {
    var message = rule.test(inputElement.value);
    var errorElement = inputElement.parentElement.querySelector('.message');
    if (message) {
        errorElement.innerText = message;
    }
    else {
        errorElement.innerText = '';
    }
    return !message;
}

var login = document.querySelector('.dnhapSubBtn');
var register = document.querySelector('.dkiSubBtn');

var isFormValid = true;
var username, password;


function Validator(options) {
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Submit
        formElement.onsubmit = function (e) {
            e.preventDefault();

            // var isFormValid = true;

            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            })
            if (isFormValid) {
                if (options.form == '#form-2') {
                    var form = document.querySelector(options.form);
                    console.log(username+" "+password);
                    if((username == form.querySelector('#username').value) && (password == form.querySelector('#password').value)){
                        window.location.href = 'index.html'
                        alert('Đăng Nhập Thành Công');
                    }
                    else{
                        alert('Tài khoản hoặc mật khẩu không chính xác');
                    }
                }
                else {
                    var form = document.querySelector(options.form);
                    username = form.querySelector('#username').value;
                    password = form.querySelector('#password').value;
                    alert('Đăng kí thành công');
                    dki.style.display = 'none';
                    dnhap.style.display = 'flex';
                }
            }
            else {
                console.log('Có Lỗi');
            }
        }

        // Event
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                // blur ra ngoai
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // nhap input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector('.message');
                    errorElement.innerText = '';
                    isFormValid = true;
                }

            }
        })
    }
}

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này';
        }
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) ? undefined : 'Email không hợp lệ';
        }
    }
}

Validator.isPass = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/) ? undefined : 'Mật khẩu phải chứa chữ hoa, chữ thường và số';
        }
    }
}

login.onclick = function () {
    Validator({
        form: '#form-2',
        rules: [
            Validator.isRequired('#username'),
            Validator.isPass('#password')
        ]
    })

}
register.onclick = function () {
    Validator({
        form: '#form-1',
        rules: [
            Validator.isRequired('#username'),
            Validator.isRequired('#phone'),
            Validator.isRequired('#name'),
            Validator.isEmail('#mail'),
            Validator.isPass('#password')
        ]
    })

}

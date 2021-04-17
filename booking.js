console.log("Скрипт загружен")
let formData = new FormData();

var buttonsubmit = document.forms[0].submit;
buttonsubmit.addEventListener("click", buttonPressed);

function buttonPressed(evt) {
    console.log("Кнопка нажата загружен");
    evt.preventDefault();

    if (document.forms[0].name.value == '') {
        Swal.fire(
            'Ошибка!',
            'Вы не ввели ваше имя!',
            'error'
        )
        console.log("Вы не ввели ваше имя");
    }
    else {
        if (document.forms[0].phone.value == '8') {
            Swal.fire(
                'Ошибка!',
                'Вы не ввели номер телефона!',
                'error'
            )
            console.log("Вы не ввели номер телефона");
        }
        else {
            if (document.forms[0].master.value == '') {
                Swal.fire(
                    'Ошибка!',
                    'Вы не выбрали специалиста!',
                    'error'
                )
                console.log("Вы не выбрали специалиста");
            }
            else {
                formData.append('name', document.forms[0].name.value);
                formData.append('phone', document.forms[0].phone.value);
                formData.append('master', document.forms[0].master.value);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Запись на имя " + formData.get("name") + " к специалисту " + formData.get("master") + " оформлена, время вашего сеанса вам сообщат по номеру " + formData.get("phone"),
                    showConfirmButton: true
                }
                )
                console.log("Запись прошла успешно");
            }
        }
    }
}
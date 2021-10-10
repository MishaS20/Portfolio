var buttonForm = document.querySelector(".button");
buttonForm === null || buttonForm === void 0 ? void 0 : buttonForm.addEventListener("click", function (event) {
    event.preventDefault();
    var userMessage = document.getElementsByTagName("textarea")[0];
    var userName = document.getElementsByTagName("input")[0];
    console.log("Имя: ", userName.value);
    console.log("Сообщение: ", userMessage.value);
});

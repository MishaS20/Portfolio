const buttonForm = document.querySelector(".button")

buttonForm?.addEventListener("click", (event) => {
   event.preventDefault()
   const userMessage = document.getElementsByTagName("textarea")[0];
   const userName = document.getElementsByTagName("input")[0];
   console.log("Имя: ", userName.value)
   console.log("Сообщение: ", userMessage.value)
})
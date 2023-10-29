const openMenu = document.getElementById("burger"); // по идентификатору id="burger" у кнопки открытия меню находим эту самую кнопку
const sidebar = document.getElementById("main-unit"); // также по идентификатору находим саму менюшку сайдбар

openMenu.addEventListener("click", () => {
  // на кнопку открытия меню навешиваем обработчик событий по клику, в котором выполняется функция
  sidebar.classList.add("main__unit--active"); // вешаем активный класс менюшке
});

const closeMenu = document.getElementById("close-menu"); // тут та же логика, только с закрытием
closeMenu.addEventListener("click", () => {
  sidebar.classList.remove("main__unit--active"); // но активный класс наоборот убираем
});

export class UI {
    toggle() {
        const menu = document.getElementById('menu');
        const botonMenu = document.querySelector('.menu-toggle');
        const menuToogleIcon = document.querySelector('.menu-toggle i')

        botonMenu?.addEventListener('click', () => {
            menu.classList.toggle('show');
        });

    }
}
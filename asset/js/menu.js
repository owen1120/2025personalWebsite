document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenuButton = document.querySelector('.close-menu');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
    const body = document.body;

    function openMenu() {
        fullscreenMenu.classList.add('is-open');
        body.classList.add('menu-open');
    }

    function closeMenu() {
        fullscreenMenu.classList.remove('is-open');
        body.classList.remove('menu-open');
    }

    // 點擊漢堡按鈕打開選單
    menuToggle.addEventListener('click', openMenu);

    // 點擊關閉按鈕關閉選單
    closeMenuButton.addEventListener('click', closeMenu);

    // 點擊選單內的連結也關閉選單 (優化使用者體驗)
    fullscreenMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
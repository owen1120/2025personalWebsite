document.addEventListener('DOMContentLoaded', () => {

  // Light/Dark Mode 切換邏輯
  const themeToggleBtn = document.getElementById('themeToggle');
  const htmlElement = document.documentElement; // html 元素

  // 檢查使用者系統的偏好 (初始設定)
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = localStorage.getItem('theme') || (prefersDarkScheme ? 'dark' : 'light');

  // 根據 currentTheme 設定初始狀態
  if (currentTheme === 'dark') {
    htmlElement.dataset.theme = 'dark';
    themeToggleBtn.querySelector('[data-mode="dark"]').style.display = 'block';
    themeToggleBtn.querySelector('[data-mode="light"]').style.display = 'none';
  } else {
    htmlElement.dataset.theme = 'light';
    themeToggleBtn.querySelector('[data-mode="dark"]').style.display = 'none';
    themeToggleBtn.querySelector('[data-mode="light"]').style.display = 'block';
  }

  // 切換主題的函數
  function toggleTheme() {
    if (htmlElement.dataset.theme === 'dark') {
      htmlElement.dataset.theme = 'light';
      themeToggleBtn.querySelector('[data-mode="dark"]').style.display = 'none';
      themeToggleBtn.querySelector('[data-mode="light"]').style.display = 'block';
      localStorage.setItem('theme', 'light');
    } else {
      htmlElement.dataset.theme = 'dark';
      themeToggleBtn.querySelector('[data-mode="dark"]').style.display = 'block';
      themeToggleBtn.querySelector('[data-mode="light"]').style.display = 'none';
      localStorage.setItem('theme', 'dark');
    }
  }

  // 為切換按鈕添加事件監聽器
  if (themeToggleBtn) { // 確保按鈕存在
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // 監聽系統偏好變化 (可選，但推薦)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    // 如果使用者沒有手動設定主題 (localStorage 沒有 'theme')，才跟隨系統偏好
    if (!localStorage.getItem('theme')) {
      if (event.matches) {
        htmlElement.dataset.theme = 'dark';
        themeToggleBtn.querySelector('[data-mode="dark"]').style.display = 'block';
        themeToggleBtn.querySelector('[data-mode="light"]').style.display = 'none';
      } else {
        htmlElement.dataset.theme = 'light';
        themeToggleBtn.querySelector('[data-mode="dark"]').style.display = 'none';
        themeToggleBtn.querySelector('[data-mode="light"]').style.display = 'block';
      }
    }
  });
});
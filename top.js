document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger-menu");
    const mobileNav = document.querySelector(".mobile-nav");
    const body = document.body;

    // ハンバーガーメニュークリックでナビを表示
    hamburger.addEventListener("click", function() {
        mobileNav.classList.toggle("active");
        hamburger.classList.toggle("active");
        body.classList.toggle("menu-open");
    });

    // メニュー内のリンクをクリックしたら閉じる
    document.querySelectorAll(".mobile-nav a").forEach(link => {
        link.addEventListener("click", function() {
            mobileNav.classList.remove("active");
            hamburger.classList.remove("active");
            body.classList.remove("menu-open");
        });
    });
});

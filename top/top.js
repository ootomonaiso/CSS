// DOMContentLoadedイベントで、DOMツリーが完全に読み込まれた後に処理を開始
document.addEventListener('DOMContentLoaded', function() {
    // 各要素を取得（ハンバーガーメニュー、モバイルナビ、body）
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    // ハンバーガーメニューがクリックされたときのイベントリスナーを設定
    hamburger.addEventListener('click', function() {
        // ヘッダーとモバイルナビのトランジションを設定
        // ヘッダーは transform プロパティのトランジションを使用
        document.querySelector('header').style.transition = 'transform 0.5s';
        // モバイルナビも right ではなく、transform を使用するように変更するためここも合わせる
        mobileNav.style.transition = 'transform 0.5s';

        // 強制的にリフローを発生させることで、直前のスタイル変更を確定させる
        void document.querySelector('header').offsetWidth;

        // 各要素に active クラスをトグル（切り替え）し、表示状態を変更
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // ウィンドウのリサイズイベントを監視し、PC表示になった場合にモバイル用クラスをリセットする
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 769) {
            // PC表示に戻ったとき、ハンバーガーメニューやモバイルナビの active クラス、bodyの menu-open クラスを削除
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
});

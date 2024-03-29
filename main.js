// スライドショー
document.addEventListener('DOMContentLoaded', function() {
  let currentImageIndex = 0;
  const images = ["images/cake.jpg","images/coffee.jpg","images/cafe.jpg","images/cafe2.jpg"]; // 画像ファイルのパスを配列に
  const slideShowElement = document.getElementById('slideShow');

  function changeImage() {
    // 画像をフェードアウト
    slideShowElement.classList.remove('active');
    
    // 次の画像へインデックスを移動
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideShowElement.src = images[currentImageIndex];
    
    // 画像が読み込まれたらフェードイン
    slideShowElement.onload = function() {
      slideShowElement.classList.add('active');
    }
  }

  // 5秒ごとにchangeImage関数を実行
  setInterval(changeImage, 5000); // この数値も調整可能
});


  // ハンバーガーメニュー
  document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.hamburger_menu').classList.add('open');
  });

  document.querySelector('.close_btn').addEventListener('click', function() {
    document.querySelector('.hamburger_menu').classList.remove('open');
  });


  // ふわっと浮き出る
  document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".vertical-text");
    
    function isVisible(elem) {
      let bounding = elem.getBoundingClientRect();
      return (
        bounding.top < window.innerHeight && bounding.bottom > 0
      );
    }
  
    function checkVisibility() {
      for (let i = 0; i < elements.length; i++) {
        if (isVisible(elements[i])) {
          elements[i].classList.add("fadeInUp");
        }
      }
    }
  
    // スクロールとリサイズ時にチェック
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    
    // 初期ロード時にもチェック
    checkVisibility();
  });

  // テキストを一文字ずつ分割してアニメーションを適用する
  document.addEventListener('DOMContentLoaded', (event) => {
    let observer;

    const options = {
      root: null, // ビューポートをルートとする
      rootMargin: '0px',
      threshold: 0.1 // 10%の要素が見えた時点でコールバックを実行
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 要素がビューポートに入ったらスパンにクラスを追加
          entry.target.querySelectorAll('.char').forEach((char, index) => {
            setTimeout(() => {
              char.classList.add('in-view');
            }, 100 * index);
          });
        }
      });
    };

    observer = new IntersectionObserver(callback, options);

    // '.slowly-appearing-text'クラスを持つ全ての要素を監視対象に追加
    document.querySelectorAll('.slowly-appearing-text').forEach((element) => {
      const text = element.innerText;
      const newText = text.split('').map(char => `<span class="char">${char}</span>`).join('');
      element.innerHTML = newText;

      observer.observe(element); // Intersection Observerに要素を登録
    });
  });
  


  


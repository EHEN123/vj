window.addEventListener('load', function(){
    const mainBanner = new Swiper('#mainBanner .swiper-container', {
      effect :"fade",
      slidesPerView: 1,          // 한 번에 보여줄 슬라이드 개수
      spaceBetween:0,          // 슬라이드 간의 간격
     // centeredSlides: true,      // 가운데 정렬 모드
      loop: true,                // 반복 처리
      autoplay: {
        delay: 6000,             // 자동 롤링 딜레이 (3초)
        disableOnInteraction: false,  // 사용자 상호작용 후에도 자동 롤링 유지
      },
      pagination: {
        el: ".indicate",
        clickable: true,
        renderBullet: function (index, className) {
          
          var swiperSlide = this.slides[index];
        
          var btnMsg = swiperSlide.dataset.btnmsg;
          
          return '<span class="' + className + ' w-auto h-auto p-2 mx-3 bg-transparent border border-white ">' + btnMsg + '</span>';
        },
      },
      
      
      on : {
        init : function(){
         
        },
        realIndexChange: function() {
          // 실제슬라이드가 변경되면        
         const activeIndex = this.activeIndex; // 현재 활성화된 슬라이드의 인덱스
         const realIndex = this.realIndex; // 실제 슬라이드의 인덱스
         console.log( activeIndex, realIndex )

         const classesToRemove = Array.from(document.body.classList).filter(className => className.startsWith('slide-'));
         // array 메서드 filter를 통해서 해당조건의 값만 필터링하므로 데이터타입은 여전히 배열
         document.body.classList.remove(...classesToRemove);
         // 배열 [] 기호를 제외함

         document.body.classList.add(`slide-${realIndex}`); // 새로운 클래스 추가
      }

      }
    });
})
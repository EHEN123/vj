window.addEventListener('load', function(){
    //햄버거버튼
    const allMenubtn = this.document.querySelector("#hd_allmenu_LEE");
    allMenubtn.addEventListener('click', function(){
      document.body.classList.toggle('menuOpen')
    })


    this.addEventListener('scroll', scrollTops);

    function scrollTops(){
      console.log("Scroll position", this.scrollTop || window.scrollY, window.innerHeight, typeof window.innerHeight);

      // 웹표준
      const pagetop = this.scrollTop || window.scrollY;
      // 화면의 절반
      const targetscrolleffect = window.innerHeight / 3;

      
      if(pagetop > targetscrolleffect){
          // 0 대신에 50vh로 표현하고싶음
            document.body.classList.add('scrolldown')
          }else{
          document.body.classList.remove('scrolldown')

        }

    }

});
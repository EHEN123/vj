window.addEventListener('load', function(){

  let navitag = ""; // 값변경가능한 변수를 선언
  const navitarget = this.document.querySelector("#navi >ul"); 

  for(x of mynavi){
    navitag += `<li class="position-relative">
                <a href="${x.title.link}" class="d-block px-lg-5">${x.title.text}</a>
                <div class="position-absolute">
                  <ul>`;
        for( i of x.subMenu){
                    navitag += `<li><a href="${i.link}" class="text-nowrap">${i.text}</a></li>`;
        }                   
    navitag += ` </ul>
                </div>
              </li>`
            }
            navitarget.innerHTML = navitag;


  //호출영역
  this.document.querySelector("#family h2").innerHTML = family.d1text;

  let familylist  = '';


  for(x of family.faimilysite ){
    familylist += `<li>${x.atext}</li>`;
  }
  this.document.querySelector("#family ul").innerHTML = familylist;
  


      // faq
      let faqtag = ""; 
      const faqtarget = this.document.querySelector("#faqcontent  > .content"); 
    
      faqtag += `<dl class="container py-5">`;
      
      for(x of faqcontent){
              faqtag += `<dt class="border-bottom py-3">${x.faqQ}</dt>
                                    <dd class="my-2 mb-5 d-none">`;

                                    const faqcontentArr = x.faqA.split("|");
                                    for(j of faqcontentArr){
                                      faqtag += `<span class="d-block">${j}</span>`;
                                    }

                                    
      faqtag += `</dd>`;
          }

      faqtag += `</dl>`;

        faqtarget.innerHTML = faqtag;



  //패밀리노출
  this.document.querySelector("#family h2").addEventListener('click', function(){
    this.classList.toggle('open');
  })

  // 동적개체(js에서 태어난 친구) = 이벤트에 저장하는 식 사용 불가
  const faqdts = document.querySelectorAll("#faqcontent  > .content dt");

  // forEach = 각각의
  faqdts.forEach(function(el, idx){
          el.addEventListener('click', function(){
          this.classList.toggle('expand')
        })
  })



})

// 함수제작
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

  // for(x in family.faimilysite ){
  //     familylist += `<li>${family.faimilysite[x].atext}</li>`;
  // }

  for(x of family.faimilysite ){
    familylist += `<li>${x.atext}</li>`;
  }
  this.document.querySelector("#family ul").innerHTML = familylist;


  //패밀리노출
  this.document.querySelector("#family h2").addEventListener('click', function(){
    this.classList.toggle('open');
  })



})

// 함수제작
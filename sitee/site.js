function call_js(){
  //사진 및 앵커 참조변수 선언
  let slideshow = document.querySelector(".slideshow");
  let slideshow_sildes = document.querySelector(".slideshow_slides");
  let slideshow_slides_a = document.querySelectorAll(".slideshow_slides a");

  //화살표 객체 참조 변수 선언
  let prev = document.querySelector(".prev");
  let next = document.querySelector(".next");

  //인디케이터 객체 참조 변수 선언
  let indicators = document.querySelectorAll(".indicator a")
  
  //회전목마 현재 위치 값
  let currentIndex = 0;
  let timer = null;
  let slideCount = slideshow_slides_a.length;
  
  //이미지 우축 배치
  for(let i = 0;  i < slideCount; i++){
    let newLeft = `${i*100}%`
    slideshow_slides_a[i].style.left = newLeft;
  }
  //회전목마 움직이기 slideshow_slides 왼쪽으로 이동
  function gotoSlide(index){
    currentIndex = index;
    let newLeft = `${index*-100}%`;
    slideshow_sildes.style.left = newLeft;

    //인디케이터 초기화 active를 지워주고 현재 인디케이터에 active 추가
    indicators.forEach(e=>{
      e.classList.remove("active")
    })
    indicators[currentIndex].classList.add("active")
  }
  //0~사진개수 -1까지 3초 딜레이 시키며 gotoSlide 호출
  gotoSlide(0);
  function startTime(){
    timer = setInterval(()=>{
      let index = (currentIndex+1)%slideCount;
      gotoSlide(index)
    }, 5000);
  }
  startTime();
  //이벤트 처리 마우스 올리면 멈추기 내리면 다시 회전 시작
  slideshow_sildes.addEventListener("mouseenter", ()=>{
    clearInterval(timer);
  })
  slideshow_sildes.addEventListener("mouseleave",()=>{
    startTime();
  })
  
  //화살표 이벤트 처리
  prev.addEventListener("click", e=>{
    //a의 기능을 막아줌
    e.preventDefault();
    currentIndex -= 1;
    //currentIndex가 0보다 작아지면 제일 마지막 사진부터 시작
    if (currentIndex < 0) {
      currentIndex = slideCount - 1;
    }
    gotoSlide(currentIndex);
  })
  next.addEventListener("click", e=>{
    //a기능 막기
    e.preventDefault();
    currentIndex += 1;
    //currentIndex가 slide의 개수의 length와 같아지면 처음으로 사진으로 돌아가기
    if (currentIndex > slideCount -1) {
      currentIndex = 0;
    }
    gotoSlide(currentIndex);
  })
  indicators.forEach(e=>{
    e.addEventListener("mouseenter", ()=>{
      clearInterval(timer);
    })
  })
  for(let i = 0; i < indicators.length; i++){
    indicators[i].addEventListener("click", e=>{
      e.preventDefault();
      gotoSlide(i);
    })
  }
}

function idCheck(){
  const memberID = document.querySelector("#memberID");
  const memberIDInfo = document.querySelector("#memberIDInfo");
  let idExp = /^[a-z]+[a-z0-9]{5,19}$/g;
  
  if (!memberID.value.match(idExp)) {
    memberIDInfo.innerHTML = `영소문자 또는 0~9까지 5~19자 사이로 연속되어있어야 합니다.`;
    return false;
  }else{
    memberIDInfo.innerHTML = `사용가능한 아이디입니다.`;
    return true;
  }
}
function pwCheck(){
  const memberPW = document.querySelector("#memberPW");
  const memberPWInfo = document.querySelector("#memberPWInfo");
  let pwExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

  if (!memberPW.value.match(pwExp)) {
    memberPWInfo.innerHTML = `영어, 숫자, 특수문자를 포함하여 8~16자 입력해주세요`;
    return false;
  }else{
    memberPWInfo.innerHTML = `사용가능한 비밀번호입니다.`;
    return true;
  }
}
function pwComCheck(){
  const pwComfirm = document.querySelector("#pwComfirm");
  const pwComfirmInfo = document.querySelector("#pwComfirmInfo");
  const memberPW = document.querySelector("#memberPW")
  
  if (!pwComfirm.value.match(memberPW.value)) {
    pwComfirmInfo.innerHTML = `비밀번호가 일치하지 않습니다.`;
    return false;
  }else{
    pwComfirmInfo.innerHTML = `비밀번호가 일치합니다`;
    return true;
  }
}
function nameCheck(){
  const memberName = document.querySelector("#memberName");
  const memberNameInfo = document.querySelector("#memberNameInfo");
  let nameExp = /^[가-힣]{2,4}$/;

  if (!memberName.value.match(nameExp)) {
    memberNameInfo.innerHTML = `띄어쓰기 없이 입력, 반드시 실명이어야 합니다.`;
    return false;
  }else{
    memberNameInfo.innerHTML = `GOOD`;
    return true;
  }
}
function emailCheck(){
  const memberEmail = document.querySelector("#memberEmail");
  const memberEmailInfo = document.querySelector("#memberEmailInfo");
  let emailExp =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  if (!memberEmail.value.match(emailExp)) {
    memberEmailInfo.innerHTML = `이메일 형식에 맞게 입력해주세요.`;
    return false;
  }else{
    memberEmailInfo.innerHTML = `GOOD`;
    return true;
  }
}
function phoneCheck(){
  const phoneNum = document.querySelector("#phoneNum");
  const phoneNumInfo = document.querySelector("#phoneNumInfo");
  let phoneExp = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/g;

  if (!phoneNum.value.match(phoneExp)) {
    phoneNumInfo.innerHTML = `-, 숫자(0~9)를 포함하여 형식에 맞게 입력해주세요`;
    return false;
  }else{
    phoneNumInfo.innerHTML = `GOOD`;
    return true;
  }
}
function allCheck(event) {
  if (idCheck() && pwCheck()&& pwComCheck() &&nameCheck()&&phoneCheck()) {
    alert("회원가입 성공");
  }else{
    alert("입력한 내용을 확인해주세요.");
    event.preventDefault();
  }
}
function signInVis(){
  const signin = document.querySelector("#signin");
  const slideshow = document.querySelector(".slideshow");
  if (signin.style.display === 'none') {
    signin.style.display = 'block';
  }else{
    signin.style.display = 'none';
  }
}
function loginVis() {

  const login = document.querySelector("#login");

  if (login.style.display === 'none') {
    login.style.display = 'block';
  }else{
    login.style.display = 'none';
  }
}
function postSearch() {
  new daum.Postcode({
    oncomplete: function(data){
      let addr = '';
      let extraAddr = '';

      if (data.userSelectedType === 'R') {
        addr = data.roadArredss;
      }else{
        addr = data.jibunAddress;
      }

      if (data.userSelectedType === 'R') {
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraAddr += data.bname;
        }
        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
        }
        if (extraAddr !== '') {
          extraAddr = ' (' + extraAddr + ')';
        }
        document.querySelector("#postcode").value = data.zonecode;
        document.querySelector("#address").value = addr;
        document.querySelector("#detailAddress").value.focus();
      }
    }
  }).open();
}

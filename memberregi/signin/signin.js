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
function postCheck(){
  const postcode = document.querySelector("#postcode");
  const postcodeInfo = document.querySelector("#postcodeInfo");
  let postcodeExp = /\d{5}/;

  if (!postcode.value.match(postcodeExp)) {
    postcodeInfo.innerHTML = `숫자 5개를 입력해주세요.`;
    return false;
  }else{
    postcodeInfo.innerHTML = `GOOD`;
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
  if (idCheck() && pwCheck()&& pwComCheck() &&nameCheck()
  &&phoneCheck()&&emailCheck()&&postCheck()) {
    alert("회원가입 성공");
  }else if(!idCheck()){
    document.querySelector("#memberID").focus();
    alert("입력한 아이디를 확인해주세요.");
    event.preventDefault();
  }else if (!pwCheck()) {
    document.querySelector("#memberPW").focus();
    alert("입력한 비밀번호를 확인해주세요");
    event.preventDefault();
  }else if (!pwComCheck()) {
    document.querySelector("#pwComfirm").focus();
    alert("비밀번호를 확인해주세요.");
    event.preventDefault();
  }else if (!nameCheck()) {
    document.querySelector("#memberName").focus();
    alert("입력한 이름을 확인해주세요.");
    event.preventDefault();
  }else if (!emailCheck()) {
    document.querySelector("#memberEmail").focus();
    alert("입력한 이메일 확인해주세요.");
    event.preventDefault();
  }else if(!postCheck()){
    document.querySelector("#postcode").focus();
    alert("입력한 우편번호를 확인해주세요.");
    event.preventDefault;
  }else if (!phoneCheck()) {
    document.querySelector("#phoneNum").focus();
    alert("입력한 전화번호를 확인해주세요.");
    event.preventDefault();
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
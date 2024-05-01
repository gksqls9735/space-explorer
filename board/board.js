document.querySelector("#more").addEventListener("click", function(){
  const bulletinList =document.querySelector("#bulletinList");
  let date = new Date();

  for(let i = 0; i < 3; i++){
    const cell = bulletinList.insertRow();
    const cell1 = cell.insertCell(0);
    const cell2 = cell.insertCell(1);
    const cell3 = cell.insertCell(2);

    cell1.innerHTML = bulletinList.rows.length;
    cell2.innerHTML = `익명의 게시글 ${bulletinList.rows.length}`
    cell3.innerHTML = date.toDateString();
  }
})

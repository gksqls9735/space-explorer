document.querySelector("#more").addEventListener("click", ()=>{
  const bulletinList =document.querySelector("#bulletinList");
  let date = new Date();

  for(let i = 0; i < 5; i++){
    const cell = bulletinList.insertRow(0);
    const cell1 = cell.insertCell(0);
    const cell2 = cell.insertCell(1);
    const cell3 = cell.insertCell(2);
    const cell4 = cell.insertCell(3);

    cell1.innerHTML = bulletinList.rows.length;
    cell2.innerHTML = `익명의 게시글 ${bulletinList.rows.length}`
    cell3.innerHTML = date.toDateString();
    cell4.innerHTML = parseInt(Math.random()*10000);
  }
})

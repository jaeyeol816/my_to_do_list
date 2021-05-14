'use strict';

let summitButton = document.getElementById("summitButton");
//summitButton.addEventListener("click", addList);  //summitButton 클릭시 addList함수 실행  

function addList() {
  let newItem = document.createElement("li");   //새로운 li요소 생성

  let appendingData = document.querySelector("#appendingData");   //폼의 텍스트 필드 가져오기
  let newText = document.createTextNode(appendingData.value); //가져온 텍스트 필드의 값을 새 텍스트 노드로 만든다.

  /*
  let newCheckBox = document.createElement("input");  //체크박스로 쓸 input요소 생성
  let newCheckBoxAttribute = document.createAttribute("type");
  newCheckBoxAttribute.value="checkbox"
  newCheckBox.setAttribute(newCheckBoxAttribute);

  console.log("ok"); //test code
  */
  let newDeleteButton = document.createElement("button"); //삭제버튼으로 쓸 button요소 생성
  let newButtonText = document.createTextNode("X"); //만든 button의 텍스트노드 생성
  newDeleteButton.appendChild(newButtonText); //button요소의 자식으로 텍스트노드를 연결

  //newItem.appendChild(newCheckBox);
  newItem.appendChild(newText);
  newItem.appendChild(newDeleteButton);

  let ItemList = document.querySelector("#ItemList");   //부모 노드를 가져옴.
  ItemList.appendChild(newItem);  //최종적으로 부모 노드에 연결.

  appendingData.value="";


  //////////////////////////////////////////////
  //여기부터 리스트 삭제 관련 코드 (왜 이것이 addList함수 안에 있어야 될까?)
  
  let itemsButtons = document.querySelectorAll("li > button");
  console.log("ok");  //testcode

  for (let i = 0; i < itemsButtons.length; i++) {   //각각의 X버튼에 이벤트리스너 달기
    itemsButtons[i].addEventListener("click", delNode);
  }

  function delNode() {
    let liNode = this.parentNode.parentNode;
    liNode.removeChild(this.parentNode);
  }
} //addList





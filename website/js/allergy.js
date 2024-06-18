//?��?��?���? ?��버로�??�� 받아??? ?��면에 출력
server_ip = "http://115.85.182.143:5501"

function fetchData() {
  fetch(server_ip + "/getUser")
    .then((response) => response.json())
    .then((data) => {
      const dataList = document.getElementById("dataList");
      dataList.innerHTML = ""; // 기존 목록 초기?��
      data.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        ?���?: ${user.name} &#160/&#160 ?��?��르기: ${user.allergy} &#160&#160
        <button onclick="deleteUser(${user.id})">?��?��</button>`;
        dataList.appendChild(listItem); //�??�� 각각?�� 값을 dataList?�� 추�??
      });
    })
    .catch((error) => {
      console.error("?���? 발생:", error);
    });
}

//?���? user.json?�� ?��?��?�� 값을 ????��?��?�� 기능
function save() {
  const name = document.getElementById("name").value;
  const allergy = document.getElementById("allergy").value;
  const user = { name, allergy };

  fetch(server_ip + "/saveUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", //json ?��?��?�� ?��?��?�� ?���?.
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.text())
    .then((message) => {
      console.log(message);
    });
}

//?��?��?���? ?��?��?��?�� 기능
function deleteUser(id) {
  fetch(server_ip + "/deleteUser", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    .then((response) => response.text())
    .then((message) => {
      console.log(message);
      fetchData(); // ?��?��?�� ?��?�� ?�� ?��?��?�� ?��?�� 불러?���?
    })
    .catch((error) => {
      console.error("?���? 발생:", error);
    });
}

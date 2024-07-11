server_ip = "http://203.253.176.254:10500"

//�����͸� �����κ��� �޾ƿ� ȭ�鿡 ���
function fetchData() {
  fetch(server_ip + "/getUser")
    .then((response) => response.json())
    .then((data) => {
      const dataList = document.getElementById("dataList");
      dataList.innerHTML = ""; // ���� ��� �ʱ�ȭ
      data.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        �̸�: ${user.name} &#160/&#160 �˷�����: ${user.allergy} &#160&#160
        <button onclick="deleteUser(${user.id})">����</button>`;
        dataList.appendChild(listItem); //���� ������ ���� dataList�� �߰�
      });
    })
    .catch((error) => {
        console.error("���� �߻�:", error);
    });
}

//���� user.json�� �Է��� ���� �����ϴ� ���
function save() {
  const name = document.getElementById("name").value;
  const allergy = document.getElementById("allergy").value;
  const user = { name, allergy };

  fetch(server_ip + "/saveUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", //json ������ ������ �ٷ�
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.text())
    .then((message) => {
      console.log(message);
    });
}

//�����͸� �����ϴ� ���
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
      fetchData(); // ������ ���� �� ������ �ٽ� �ҷ�����
    })
    .catch((error) => {
        console.error("���� �߻�:", error);
    });
}

const USER = "admin";
const PASS = "1234";

let data = JSON.parse(localStorage.getItem("ssdData")) || [];

function login() {
    let u = username.value;
    let p = password.value;

    if (u === USER && p === PASS) {
        loginBox.style.display = "none";
        dashboard.style.display = "block";
        renderTable();
    } else {
        alert("Wrong Login");
    }
}

function logout() {
    location.reload();
}

function addEntry() {
    let entry = {
        name: name.value,
        mobile: mobile.value,
        amount: amount.value
    };

    data.push(entry);
    localStorage.setItem("ssdData", JSON.stringify(data));
    renderTable();

    name.value = "";
    mobile.value = "";
    amount.value = "";
}

function renderTable() {
    dataTable.innerHTML = "";
    data.forEach((e, i) => {
        dataTable.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${e.name}</td>
                <td>${e.mobile}</td>
                <td>₹${e.amount}</td>
            </tr>
        `;
    });
}

function drawWinner() {
    if (data.length === 0) {
        alert("No applications");
        return;
    }

    let win = data[Math.floor(Math.random() * data.length)];
    winner.innerHTML = `🏆 Winner: ${win.name} (${win.mobile})`;
}

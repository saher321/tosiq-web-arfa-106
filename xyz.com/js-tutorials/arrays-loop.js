const users = [
  { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", role: "admin" },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com", role: "user" },
  { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com", role: "user" },
  { id: 4, name: "Diana Prince", email: "diana.prince@example.com", role: "admin" },
  { id: 5, name: "Ethan Clark", email: "ethan.clark@example.com", role: "user" },
  { id: 6, name: "Fiona Davis", email: "fiona.davis@example.com", role: "user" },
  { id: 7, name: "George Miller", email: "george.miller@example.com", role: "user" },
  { id: 8, name: "Hannah Wilson", email: "hannah.wilson@example.com", role: "admin" },
  { id: 9, name: "Ian Moore", email: "ian.moore@example.com", role: "user" },
  { id: 10, name: "Julia Taylor", email: "julia.taylor@example.com", role: "user" }
];

showUsers(users);
function showUsers(data) {
    let tbody = document.getElementById("users-list");
    tbody.innerHTML = '';
    data.map((user) => {
        tbody.innerHTML += 
        `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
        </tr>`
    })
}

// filtering data using role

function filterByRole(){
    let selectedVal = document.getElementById("role").value;
    
    if (selectedVal == "all") {
        showUsers(users);
        return;
    }


    const filteredData = users.filter((user) => {
        return user.role == selectedVal;
    });

    showUsers(filteredData);
}

function searchByText(){
    let searchTxt = document.getElementById("searchTxt").value;

    if (!searchTxt) {
        showUsers(users);
        return;
    };

    const filteredData = users.filter((user) => {
        return user.name.toLowerCase().match(searchTxt) || 
        user.email.toLowerCase().match(searchTxt) ||
        user.role.toLowerCase().match(searchTxt);
    });

    showUsers(filteredData);

}
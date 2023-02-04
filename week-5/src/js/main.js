// Class Employee
class Employee {

}

// Call object class
let employee = new Employee;
// Sumbit Handler
let form = document.getElementById("registration-form");
// Form onsubmit
form.onsubmit = async function (event) {
    // Disabled button submit
    event.preventDefault();
    // Get all inputs
    let name = document.querySelector("input[name='nama_lengkap']");
    let age = document.querySelector("input[name='umur']");
    let pocket_money = document.querySelector("input[name='uang_sangu']");
    // Get sumbit button
    let btn = document.querySelector("button[type='submit']");
    // Get alert
    let alert_container = document.querySelector("#alert-container");

    // store data
    let store = await employee.storeData(name.value, age.value, pocket_money.value);

    if (store) {
        if (alert_container.classList.contains('alert-danger')) {
            alert_container.classList.remove('alert-danger')
        }
        alert_container.classList.add('alert-success');
        alert_container.innerHTML = 'Berhasil input data!';
    }
}
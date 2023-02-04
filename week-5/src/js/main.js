// Class Employee
class Employee {
    constructor(name, age, pocket_money) {
        this.data = [];
        this.name = name;
        this.age = age;
        this.pocket_money = pocket_money;
    }
    filterData(name, age, pocket_money) {
        let li;
        let element_ul = document.createElement("ul");
        let alert_container = document.querySelector("#alert-container");


        if (name.length < 10) {
            alert_container.classList.add('alert-danger');
            alert_container.innerHTML = "Nama minimal 10 karakter";
            return false;
        }
        if (age < 25) {
            alert_container.classList.add('alert-danger');
            alert_container.innerHTML = "Umur minimal 25 Tahun"
            return false;
        }
        if (pocket_money < 100000 || pocket_money > 1000000) {
            alert_container.classList.add('alert-danger');
            alert_container.innerHTML = "Uang sangu harus antara 100 ribu dan 1 juta"
            return false;
        }

        return true;
    }
    storeData(name, age, pocket_money) {
        // Call function for filter data
        let filter_data = this.filterData(name, age, pocket_money);
        if (filter_data) {
            let saveToArray = this.saveToArray(name, age, pocket_money);
            let update_table = this.updateTable(name, age, pocket_money);
            let update_resume = this.updateResume();
            return true;
        } else {
            return false;
        }
    }
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
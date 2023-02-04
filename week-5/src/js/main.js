// Class Employee
class Employee {
    constructor(name, age, pocket_money) {
        this.data = [];
        this.name = name;
        this.age = age;
        this.pocket_money = pocket_money;
    }
    saveToArray(name, age, pocket_money) {
        this.data.push({
            name: name,
            age: parseInt(age),
            pocket_money: parseInt(pocket_money),
        })
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
    updateTable(name, age, pocket_money) {
        let tbody = document.querySelector("#tbody-id");
        let tr = document.createElement('tr');
        let name_column = document.createElement('td');
        name_column.innerHTML = name;
        let age_column = document.createElement('td');
        age_column.innerHTML = age;
        let pocket_money_column = document.createElement('td');
        pocket_money_column.innerHTML = pocket_money;

        tr.appendChild(name_column);
        tr.appendChild(age_column);
        tr.appendChild(pocket_money_column);

        tbody.appendChild(tr);

        return true;
    }
    getTotalResumeData() {
        let new_age = 0;
        let new_pocket_money = 0;
        for (let i = 0; i < this.data.length; i++) {
            new_age += this.data[i].age;
            new_pocket_money += this.data[i].pocket_money
        }

        return {
            age: new_age,
            pocket_money: new_pocket_money,
        };
    }
    getAverageResume() {
        let total_data = this.data.length;
        let avg_age = Math.floor(this.getTotalResumeData().age / total_data);
        let avg_pocket_money = Math.floor(this.getTotalResumeData().pocket_money / total_data);

        return {
            age: avg_age,
            pocket_money: avg_pocket_money,
        }
    }
    updateResume() {
        let resume = document.querySelector("#resume");
        let resume_content;
        resume_content = `
            <div class="row">
                <div class="col-md-6">
                <div class="card text-start">
                    <div class="card-body">
                    <h6 class="card-title">Rata - Rata Uang Sangu:</h6>
                    <div class="card-body">
                        <p>${this.getAverageResume().pocket_money}</p>
                        <small class="text-danger">* pembulatan kebawah</small>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-md-6">
                <div class="card text-start">
                    <div class="card-body">
                    <h6 class="card-title">Rata - Rata Umur:</h6>
                    <div class="card-body">
                        <p>${this.getAverageResume().age}</p>
                        <small class="text-danger">* pembulatan kebawah</small>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            `;
        resume.innerHTML = resume_content
    }
    updateTable(name, age, pocket_money) {
        let tbody = document.querySelector("#tbody-id");
        let tr = document.createElement('tr');
        let name_column = document.createElement('td');
        name_column.innerHTML = name;
        let age_column = document.createElement('td');
        age_column.innerHTML = age;
        let pocket_money_column = document.createElement('td');
        pocket_money_column.innerHTML = pocket_money;

        tr.appendChild(name_column);
        tr.appendChild(age_column);
        tr.appendChild(pocket_money_column);

        tbody.appendChild(tr);

        return true;
    }
    getTotalResumeData() {
        let new_age = 0;
        let new_pocket_money = 0;
        for (let i = 0; i < this.data.length; i++) {
            new_age += this.data[i].age;
            new_pocket_money += this.data[i].pocket_money
        }

        return {
            age: new_age,
            pocket_money: new_pocket_money,
        };
    }
    getAverageResume() {
        let total_data = this.data.length;
        let avg_age = Math.floor(this.getTotalResumeData().age / total_data);
        let avg_pocket_money = Math.floor(this.getTotalResumeData().pocket_money / total_data);

        return {
            age: avg_age,
            pocket_money: avg_pocket_money,
        }
    }
    updateResume() {
        let resume = document.querySelector("#resume");
        let resume_content;
        resume_content = `
            <div class="row">
                <div class="col-md-6">
                <div class="card text-start">
                    <div class="card-body">
                    <h6 class="card-title">Rata - Rata Uang Sangu:</h6>
                    <div class="card-body">
                        <p>${this.getAverageResume().pocket_money}</p>
                        <small class="text-danger">* pembulatan kebawah</small>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-md-6">
                <div class="card text-start">
                    <div class="card-body">
                    <h6 class="card-title">Rata - Rata Umur:</h6>
                    <div class="card-body">
                        <p>${this.getAverageResume().age}</p>
                        <small class="text-danger">* pembulatan kebawah</small>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            `;
        resume.innerHTML = resume_content
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
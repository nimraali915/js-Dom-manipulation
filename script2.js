const btnSubmit = document.querySelector("input[type=submit]");
btnSubmit.addEventListener("click", e => {
    e.preventDefault();
    const id = document.querySelector("#id");
    const fname = document.querySelector("#fname");
    const lname = document.querySelector("#lname");
    const cnic = document.querySelector("#cnic");
    const email = document.querySelector("#email");
    const contact = document.querySelector("#contact");
    const jtitle = document.querySelector("#jtitle");
    const salary = document.querySelector("#salary");
    const experience = document.querySelector("#experience");

    let idBool = false;
    let fnameBool = false;
    let lnameBool = false;
    let cnicBool = false;
    let emailBool = false;
    let contactBool = false;
    let jtitleBool = false;
    let salaryBool = false;
    let experienceBool = false;

    if (id.value === "") {
        id.parentElement.children[2].classList.add("d-block");
        idBool = false;
    } else {
        id.parentElement.children[2].classList.remove("d-block");
        idBool = true;
    }

    if (fname.value === "") {
        fname.parentElement.children[2].classList.add("d-block");
        fnameBool = false;
    } else {
        fname.parentElement.children[2].classList.remove("d-block");
        fnameBool = true;
    }

    if (lname.value === "") {
        lname.parentElement.children[2].classList.add("d-block");
        lnameBool = false;
    } else {
        lname.parentElement.children[2].classList.remove("d-block");
        lnameBool = true;
    }

    if (cnic.value === "") {
        cnic.parentElement.children[2].classList.add("d-block");
        cnicBool = false;
    } else {
        cnic.parentElement.children[2].classList.remove("d-block");
        cnicBool = true;
    }

    if (email.value === "") {
        email.parentElement.children[2].classList.add("d-block");
        emailBool = false;
    } else {
        email.parentElement.children[2].classList.remove("d-block");
        emailBool = true;
    }

    if (contact.value === "") {
        contact.parentElement.children[2].classList.add("d-block");
        contactBool = false;
    } else {
        contact.parentElement.children[2].classList.remove("d-block");
        contactBool = true;
    }

    if (jtitle.value === "") {
        jtitle.parentElement.children[2].classList.add("d-block");
        jtitleBool = false;
    } else {
        jtitle.parentElement.children[2].classList.remove("d-block");
        jtitleBool = true;
    }

    if (salary.value === "") {
        salary.parentElement.children[2].classList.add("d-block");
        salaryBool = false;
    } else {
        salary.parentElement.children[2].classList.remove("d-block");
        salaryBool = true;
    }

    if (experience.value === "") {
        experience.parentElement.children[2].classList.add("d-block");
        experienceBool = false;
    } else {
        experience.parentElement.children[2].classList.remove("d-block");
        experienceBool = true;
    }

    //// Saving data in the table
    if (idBool && fnameBool && lnameBool && cnicBool && emailBool && contactBool && jtitleBool && salaryBool && experienceBool) {
        const employeetable = document.querySelector("#employee-table");
        const trArray = Array.from(employeetable.children);
        const updateEmployee = trArray.filter(tr => tr.children[0].innerText === id.value);

        if (updateEmployee.length > 0) {
            updateEmployee[0].children[1].innerText = fname.value;
            updateEmployee[0].children[2].innerText = lname.value;
            updateEmployee[0].children[3].innerText = cnic.value;
            updateEmployee[0].children[4].innerText = email.value;
            updateEmployee[0].children[5].innerText = contact.value;
            updateEmployee[0].children[6].innerText = jtitle.value;
            updateEmployee[0].children[7].innerText = salary.value;
            updateEmployee[0].children[8].innerText = experience.value;
        } else {
            employeetable.innerHTML +=
                `<tr>
                    <td>${id.value}</td>
                    <td>${fname.value}</td>
                    <td>${lname.value}</td>
                    <td>${cnic.value}</td>
                    <td>${email.value}</td>
                    <td>${contact.value}</td>
                    <td>${jtitle.value}</td>
                    <td>${salary.value}</td>
                    <td>${experience.value}</td>
                    <td>
                        <button class="btn btn-warning text-white btn-edit">
                            Edit <i class="fa-regular fa-pen-to-square"></i>
                        </button> | 
                        <button class="btn btn-danger btn-delete">
                            Delete <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>`;
        }

        //// Edit Button Selector and Handler
        const editButtons = document.querySelectorAll(".btn-edit");
        editButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const tr = btn.parentElement.parentElement;
                id.value = tr.children[0].innerText;
                fname.value = tr.children[1].innerText;
                lname.value = tr.children[2].innerText;
                cnic.value = tr.children[3].innerText;
                email.value = tr.children[4].innerText;
                contact.value = tr.children[5].innerText;
                jtitle.value = tr.children[6].innerText;
                salary.value = tr.children[7].innerText;
                experience.value = tr.children[8].innerText;
            });
        });

        //// Delete Button Selector and Handler
        const deleteButtons = document.querySelectorAll(".btn-delete");
        deleteButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                btn.parentElement.parentElement.remove();
            });
        });

        //// Clear fields
        id.value = "";
        fname.value = "";
        lname.value = "";
        cnic.value = "";
        email.value = "";
        contact.value = "";
        jtitle.value = "";
        salary.value = "";
        experience.value = "";
    }
});

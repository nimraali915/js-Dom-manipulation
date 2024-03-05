const btnSubmit = document.querySelector("input[type=submit]");
btnSubmit.addEventListener("click", e => {
    e.preventDefault();
    const id = document.querySelector("#id");
    const fname = document.querySelector("#fname");
    const lname = document.querySelector("#lname");
    const cnic = document.querySelector("#cnic");
    const email = document.querySelector("#email");
    const contact = document.querySelector("#contact");
    const department = document.querySelector("#department");
    const semester = document.querySelector("#semester");
    const gpa = document.querySelector("#gpa");

    let idBool = false;
    let fnameBool = false;
    let lnameBool = false;
    let cnicBool = false;
    let emailBool = false;
    let contactBool = false;
    let departmentBool = false;
    let semesterBool = false;
    let gpaBool = false;

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

    if (department.value === "") {
        department.parentElement.children[2].classList.add("d-block");
        departmentBool = false;
    } else {
        department.parentElement.children[2].classList.remove("d-block");
        departmentBool = true;
    }

    if (semester.value === "") {
        semester.parentElement.children[2].classList.add("d-block");
        semesterBool = false;
    } else {
        semester.parentElement.children[2].classList.remove("d-block");
        semesterBool = true;
    }

    if (gpa.value === "") {
        gpa.parentElement.children[2].classList.add("d-block");
        gpaBool = false;
    } else {
        gpa.parentElement.children[2].classList.remove("d-block");
        gpaBool = true;
    }

    //// Saving data in the table
    if (idBool && fnameBool && lnameBool && cnicBool && emailBool && contactBool && departmentBool && semesterBool && gpaBool) {
        const studenttable = document.querySelector("#student-table");
        const trArray = Array.from(studenttable.children);
        const updateStudent = trArray.filter(tr => tr.children[0].innerText === id.value);

        if (updateStudent.length > 0) {
            updateStudent[0].children[1].innerText = fname.value;
            updateStudent[0].children[2].innerText = lname.value;
            updateStudent[0].children[3].innerText = cnic.value;
            updateStudent[0].children[4].innerText = email.value;
            updateStudent[0].children[5].innerText = contact.value;
            updateStudent[0].children[6].innerText = department.value;
            updateStudent[0].children[7].innerText = semester.value;
            updateStudent[0].children[8].innerText = gpa.value;
        } else {
            producttable.innerHTML +=
                `<tr>
                    <td>${id.value}</td>
                    <td>${fname.value}</td>
                    <td>${lname.value}</td>
                    <td>${cnic.value}</td>
                    <td>${email.value}</td>
                    <td>${contact.value}</td>
                    <td>${department.value}</td>
                    <td>${semester.value}</td>
                    <td>${gpa.value}</td>
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
                department.value = tr.children[6].innerText;
                semester.value = tr.children[7].innerText;
                gpa.value = tr.children[8].innerText;
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
        department.value = "";
        semester.value = "";
        gpa.value = "";
    }
});

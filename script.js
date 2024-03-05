//DOM manipulation is the way in which we interact with HTML documents. 
const btnSubmit = document.querySelector("input[type=submit]");
btnSubmit.addEventListener("click", e => {
    e.preventDefault();
    //querySelector find and select specific HTML elements.This function returns the first Element within the document that matches the specified selector
    const id = document.querySelector("#id");
    const name = document.querySelector("#name");
    const category = document.querySelector("#category");
    const weight = document.querySelector("#weight");
    const price = document.querySelector("#price");
    const quantity = document.querySelector("#quantity");
    const brand = document.querySelector("#brand");
    const description = document.querySelector("#description");
    let idBool = false;
    let nameBool = false;
    let categoryBool = false;
    let weightBool = false;
    let priceBool = false;
    let quantityBool = false;
    let brandBool = false;
    let descriptionBool = false;
// id.value property is used to get or set the value of an HTML element. In this case, id represents an HTML element with an id attribute
//idBool is set to false to indicate that the input field is empty.
//The d-block function of d block is a utility function in Bootstrap that sets the CSS display property of an element to block
//id.paraent element   selects the parent element of the input field
//id.parentElement.children: This selects all the child elements of the parent element.
//id.parentElement.children[2]: This selects the third child element (index starts from 0)

    if (id.value === "") {
        id.parentElement.children[2].classList.add("d-block");
        idBool = false;
    } else {
        id.parentElement.children[2].classList.remove("d-block");
        idBool = true;
    }

    if (name.value === "") {
        name.parentElement.children[2].classList.add("d-block");
        nameBool = false;
    } else {
        name.parentElement.children[2].classList.remove("d-block");
        nameBool = true;
    }

    if (category.value === "") {
        category.parentElement.children[2].classList.add("d-block");
        categoryBool = false;
    } else {
        category.parentElement.children[2].classList.remove("d-block");
        categoryBool = true;
    }
    if (weight.value === "") {
        weight.parentElement.children[2].classList.add("d-block");
        weightBool = false;
    } else {
        weight.parentElement.children[2].classList.remove("d-block");
        weightBool = true;
    }
    if (price.value === "") {
        price.parentElement.children[2].classList.add("d-block");
        priceBool = false;
        } else {
            price.parentElement.children[2].classList.remove("d-block");
            priceBool = true;
            }
    if (quantity.value ===""){
        quantity.parentElement.children[2].classList.add("d-block");
        quantityBool = false;
        } else {
            quantity.parentElement.children[2].classList.remove("d-block");
            quantityBool = true;
            }
    if (brand.value === "") {
        brand.parentElement.children[2].classList.add("d-block");
        brandBool = false;
        } else {
            brand.parentElement.children[2].classList.remove("d-block");
            brandBool = true;
            }
    if (description.value === "") {
        description.parentElement.children[2].classList.add("d-block");
        descriptionBool = false;
    } else {
        description.parentElement.children[2].classList.remove("d-block");
        descriptionBool = true;
    }

    //// Saving data in the table
    if (idBool === true && nameBool === true && categoryBool === true && weightBool===true && priceBool===true && quantityBool===true && brandBool===true && descriptionBool === true) {
        const producttable = document.querySelector("#product-table");
        const trArray = Array.from(producttable.children)
        const updateProduct = trArray.filter(tr=>{
            return tr.children[0].innerText===id.value;
       
        });

        if (updateProduct.length > 0) {
            //updateProduct[0]: This selects the first element in the updateProduct array.
            //updateProduct[0].children[1]: This selects the second child element of the first element in the updateProduct
            //updateProduct[0].children[1].innerText = name.value;: This sets the text content of the second child element to the value of the name input field
            updateProduct[0].children[1].innerText = name.value;
            updateProduct[0].children[2].innerText = category.value;
            updateProduct[0].children[3].innerText = weight.value;
            updateProduct[0].children[4].innerText = price.value;
            updateProduct[0].children[5].innerText = quantity.value;
            updateProduct[0].children[6].innerText = brand.value;
            updateProduct[0].children[7].innerText = description.value;
            //this line of code updates the text content of the sibling element to the current value of the input field, effectively updating the displayed product name.
        } else {
            //this line of code adds a new row to the product table with the ID of the product, effectively displaying the new product in the table.
            producttable.innerHTML +=
                `<tr>
                    <td>${id.value}</td>
                    <td>${name.value}</td>
                    <td>${category.value}</td>
                    <td>${weight.value}</td>
                    <td>${price.value}</td>
                    <td>${quantity.value}</td>
                    <td>${brand.value}</td>
                    <td>${description.value}</td>
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
                name.value = tr.children[1].innerText;
                category.value = tr.children[2].innerText;
                weight.value = tr.children[3].innerText;
                price.value = tr.children[4].innerText;
                quantity.value = tr.children[5].innerText;
                brand.value = tr.children[6].innerText;
                description.value = tr.children[7].innerText;
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
        name.value = "";
        category.value = "";
        weight.value = "";
        price.value = "";
        quantity.value = "";
        brand.value = "";
        description.value = "";
    }
});

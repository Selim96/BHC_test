
const tours_type1 = document.getElementById("tours_type1");
const tours_type2 = document.getElementById("tours_type2");
const tours_list1 = document.getElementById("tours_list1");
const tours_list2 = document.getElementById("tours_list2");

const linkToHotTour = document.getElementById("hot_link");
const linkToPopularTour = document.getElementById("popular_link");

const countryInput = document.getElementById("country");
const selectMenu = document.querySelector(".select");
const selectItem = [...document.querySelectorAll(".select_item")];
const submitBtn = document.querySelector(".submit_btn");
const form =document.getElementById("form");

countryInput.addEventListener("click", chooseCountry);
submitBtn.addEventListener("click", submitForm)

tours_type1.addEventListener("click", (e)=>showTours(1));
tours_type2.addEventListener("click", (e)=>showTours(2));
linkToHotTour.addEventListener("click", (e)=>showTours(1))
linkToPopularTour.addEventListener("click", (e)=>showTours(2))

tours_list1.classList.add("shown");


function showTours(num) {
    if(num === 1) {
        tours_type1.classList.add("type_choosen");
        tours_type2.classList.remove("type_choosen");

        tours_list1.classList.add("shown");
        tours_list2.classList.remove("shown");
        console.log("click 111")
    } else if(num === 2) {
        tours_type2.classList.add("type_choosen");
        tours_type1.classList.remove("type_choosen");

        tours_list2.classList.add("shown");
        tours_list1.classList.remove("shown");
        console.log("click 222")
    } else {
        return;
    }
}

function chooseCountry(e) {
    selectMenu.classList.add("shown");
    e.target.classList.remove("input_error");
    document.addEventListener("click", closeSelect);
}

function closeSelect(e) {
    const isSelectedCountry = selectItem.some(item => e.target === item);
    if(isSelectedCountry) {
        const value = e.target.textContent;
        countryInput.value = value;
        selectMenu.classList.remove("shown");
        document.removeEventListener("click", closeSelect);
        
    }
    if(e.target !== countryInput) {
        selectMenu.classList.remove("shown");
        document.removeEventListener("click", closeSelect);
    }
}

function removeError(e) {
    e.target.classList.remove("input_error");
}


function submitForm(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        country: formData.get("country")
    }
    if(Object.values(data).some(item=> item === '')) {
        const formInputs = [...form];
        formInputs.pop();
        formInputs.forEach(item=>{
            item.classList.add("input_error");
            item.addEventListener("input", removeError);
        });
        console.dir( formInputs)
        return;
    }

    console.log(data);
    form.reset();
    
}

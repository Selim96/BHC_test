
const tours_type1 = document.getElementById("tours_type1");
const tours_type2 = document.getElementById("tours_type2");
const tours_list1 = document.getElementById("tours_list1");
const tours_list2 = document.getElementById("tours_list2");

tours_type1.addEventListener("click", (e)=>showTours(1));
tours_type2.addEventListener("click", (e)=>showTours(2));

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
const parentBar = document.querySelector(".bar-parent");
const childCategory = document.getElementById("child-categ");
const subContainer = document.querySelectorAll(".sub-container");
const childBar = document.querySelectorAll(".child-bar");
console.log(childBar , subContainer);
childBar.forEach((bar ,index)=>{
    bar.addEventListener("click",(e)=>{
    console.log("sdjbl");    
subContainer[index].classList.toggle("deactive")
    })
})



parentBar.addEventListener("click" , ()=>{
    childCategory.classList.toggle("deactive")
} )





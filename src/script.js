const light = document.querySelector(".fa-sun");
console.log(light);

const dark = document.querySelector(".fa-moon");
console.log(dark);


let switchCount = 0;

//switch background to light and font to dark when sun is clicked
const toLight = (event) =>{
    if(event.target.className === "fa-solid fa-sun"){
        document.body.style.backgroundColor = "#f9f7f1";
        document.body.style.color = "#2f2f2f";
        console.log('sun func works');
    }
}


//switch background to dark and font to light when moon is clicked
const toDark = (event) =>{
    if(event.target.className === "fa-solid fa-moon"){
        document.body.style.backgroundColor = "#2f2f2f";
        document.body.style.color = "#f9f7f1";
        console.log('moon func works');
    }
    
}

const addLineS = (event) => {
    if(event.target.className === "fa-solid fa-sun"){
        light.style.borderBottom = "3px solid black";
    }

}

const addLineM = (event) => {
    if(event.target.className === "fa-solid fa-moon"){
        dark.style.borderBottom = "3px solid black";
    }
}

const removeLineS = (event) => {
    if(event.target.className === "fa-solid fa-sun"){
        light.style.borderBottom = "";
    }
}

const removeLineM = (event) => {
    if(event.target.className === "fa-solid fa-moon"){
        dark.style.borderBottom = "";
    }
}

light.addEventListener("click", toLight);
light.addEventListener("mouseover", addLineS);
light.addEventListener("mouseout", removeLineS);

dark.addEventListener("click", toDark);
dark.addEventListener("mouseover", addLineM);
dark.addEventListener("mouseout", removeLineM);


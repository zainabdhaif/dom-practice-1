// This is called "deconstruction"
// We assign the elements returned by the querySelector
// to variable names in consecutive order
// It is equiuvalent to:
// const sun = document.querySelectorAll("i")[0]
// const moon = document.querySelectorAll("i")[1]
const [sun, moon] = document.querySelectorAll("i");
moon.addEventListener("click", ()=>{
    document.querySelector("body").className="dark"
})
sun.addEventListener("click", ()=>{
    document.querySelector("body").className=""
})

// BONUS
moon.addEventListener("mouseenter", ()=>{
    moon.style.borderBottom = "3px solid"
})
moon.addEventListener("mouseout", ()=>{
    moon.style.borderBottom = ""
})
sun.addEventListener("mouseenter", ()=>{
    sun.style.borderBottom = "3px solid"
})
sun.addEventListener("mouseout", ()=>{
    sun.style.borderBottom = ""
})


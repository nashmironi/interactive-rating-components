let wre = document.getElementsByClassName("oval");
let active = null;

let firtsBox = document.querySelector("#firstHalf");
let secondBox = document.querySelector("#secondHalf");
let button = document.getElementById("sub");
let rates = document.querySelectorAll(".oval")
let rating = document.getElementById("rating")

function changeColor(index) {
    if (active !== null){
        wre[active].style.backgroundColor="rgba(38, 46, 56, 1)";
    }
    wre[index].style.backgroundColor="rgba(124, 135, 152, 1)";
    active=index;
    
  }



 button.addEventListener("click", () => {
  secondBox.style.display="flex"
  firtsBox.style.display="none"
 })


  

  rates.forEach((rate) => {
    rate.addEventListener("click" , () => {
      console.log(rate.innerHTML)
      rating.innerHTML=rate.innerHTML
  })
  })


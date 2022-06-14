var elForm = document.querySelector(".js-form")
var elInput = document.querySelector(".js-input")
var elError = document.querySelector(".js-error")
var elRezult1 = document.querySelector(".js-rezult1")
var elRezult2 = document.querySelector(".js-rezult2")
var elRezult3 = document.querySelector(".js-rezult3")
var elRezult4 = document.querySelector(".js-rezult4")

// elForm.addEventListener("submit" )
elForm.addEventListener('submit', function(e){
  e.preventDefault();

  if(elInput.value <=0){
    elError.textContent = "0 sonidan katta son kiriting va harfham yozmang!!!"
    elInput.classList.add("is-invalid")
    elInput.classList.remove("is-valid")
    return;
  }else{
    elError.textContent = ""
    elInput.classList.remove("is-invalid")
    elInput.classList.add("is-valid")
  }

    elRezult1.textContent = Man().toFixed(2)
    elRezult2.textContent = Bicucle().toFixed(2)
    elRezult3.textContent = Car().toFixed(2)
    elRezult4.textContent = Plane().toFixed(2)

})



function Man(x = 3.6) {
  return Number(elInput.value) / x
}

function Bicucle(x = 20.1) {
  return Number(elInput.value) / x
}

function Car(x = 70) {
  return Number(elInput.value) / x
}

function Plane(x = 800) {
  return Number(elInput.value) / x
}
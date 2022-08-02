const main = document.querySelector(".main"),
input = main.querySelector(".info input"),
button = main.querySelector(".button"),
qr = main.querySelector(".qr-code img");

button.addEventListener("click", () => {
    let qrValue = input.value;
    if(!qrValue) return;
    
    main.classList.add("active");
    qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;

})
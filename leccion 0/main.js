function getDogImage() {
    fetch("https://dog.ceo/api/breed/rottweiler/images/random")
        .then(response => response.json())
        .then(data => {
            const img = document.querySelector("img");
            img.src = data.message;
            img.alt = "Un perro";
        });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);

const btn2 = document.querySelector(".js-otherdog");
btn2.addEventListener("click", getDogImage);
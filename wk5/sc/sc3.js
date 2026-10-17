const btt = document.querySelectorAll("button");
const text = document.getElementById("count");
const area = document.querySelector("textarea");

btt[0].addEventListener("click", () =>{
    let textCount = area.value.length;
    text.textContent = textCount;
})

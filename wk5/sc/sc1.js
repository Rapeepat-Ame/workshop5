const btt = document.querySelectorAll("button").forEach((bttEvent) =>{
    bttEvent.addEventListener("click", () =>{
        document.body.style.backgroundColor = bttEvent.textContent;
    })
})
const btt = document.querySelectorAll("button"); 

const TiList = document.createElement("ul");
document.body.appendChild(TiList);


btt[0].addEventListener("click", () =>{
    let text = document.getElementById("pname").value;
    
    const LiList = document.createElement("li");
    LiList.textContent = text;
    TiList.appendChild(LiList)
    
    document.getElementById("pname").value = "";
    
})

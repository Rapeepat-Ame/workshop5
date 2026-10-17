const btt = document.querySelectorAll("button");
const score = document.getElementById("score");
const grade = document.getElementById("grade");

btt[0].addEventListener("click", () =>{
    const userScore = Number(score.value);
    if (userScore >= 80) {
        grade.textContent = "Grade : A";
    } else if (userScore >= 75) {
        grade.textContent = "Grade : B+";
    } else if (userScore >= 70) {
        grade.textContent = "Grade : B";
    } else if (userScore >= 65) {
        grade.textContent = "Grade : C+";
    } else if (userScore >= 60) {
        grade.textContent = "Grade : C";
    } else if (userScore >= 55) {
        grade.textContent = "Grade : D+";
    } else if (userScore >= 50) {
        grade.textContent = "Grade : D";
    } else {
        grade.textContent = "Grade : F";
    } 
})

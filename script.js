

const questionsArray = document.querySelectorAll(".question-flex");

questionsArray.forEach((question) =>
    question.addEventListener("click", () => {
        if (question.parentNode.classList.contains("active")) {
            question.parentNode.classList.toggle("active");
        } else {
            questionsArray.forEach((question) =>
                question.parentNode.classList.remove("active")
            );
            question.parentNode.classList.add("active");
        }
    })
);
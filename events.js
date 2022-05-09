fetch("/grupo/cabecalho.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

fetch("/grupo/rodape.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });

const questions = document.querySelectorAll('.question-answer');
questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})
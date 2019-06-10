function accordeonQuestions() {
  var acc = document.getElementsByClassName("accordion-heading");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");

      this.nextElementSibling.classList.toggle("show");
    }
  }

};  
module.exports = accordeonQuestions;
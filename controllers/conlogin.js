
module.exports = function(req, resp, next){
    
  var user = req.body.Username;
  var pass = req.body.Password;

  res.status(200);
  if                     (user == "Ahmad" && pass == "8888") {
      res.redirect('/main', {us:user});
      next();
  } else {
      res.redirect('/', {condition: true});
      next();
  }
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function myfun(myform) {

    var email = document.myform.email.valid;
    var password = document.myform.password.valid;
    var valid = false;
    
     var emailArray = ["asas@gmail","asaso@gmail"];
     var passwordArray = ["sdsddsds","asfdggf"];  
            for (var i=0; i <emailArray.length; i++) {
    if ((email == emailArray[i]) && (password == passwordArray[i])) {
        valid = true;
            break;
            }
    if (valid) {
   window.alert ("Login was successful");
    window.location = "books.html";
    return false;
     }  else {  alert("Invalid email")
      }
      window.alert(enter);
     }
       }
      };
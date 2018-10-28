module.exports=function(req,resp){
console.log('signup');
res.render('signup',{title:'signup'});



function fun(form){
     
    var Fname = document.form.fName.value,
    lname = document.form.LName.value,
    femail = document.form.Email.value,
    freemail = document.form.Email.value,
    fpassword = document.form.Password.value;
         
        
        if( Fname == " " )
        {
          document.form.fName.focus() ;
          document.getElementById("fname_form").innerHTML = "enter the first name";
          return false;
        }
         if( lname == "" )
        {
        document.form.LastName.focus() ;
        document.getElementById("lname_form").innerHTML = "enter the last name";
        return false;
        }
    
        if (femail == "" )
         {
          document.form.E-MAIL.focus();
          document.getElementById("email_form").innerHTML = "enter the email";
          return false;
          }else if(!emailRegex.test(femail)){
          document.form.Email.focus();
          document.getElementById("email2_form").innerHTML = "enter the valid email";
          return false;
          }
        
           if (freemail == "" )
         {
          document.form.enterEmail.focus();
          document.getElementById("password_form").innerHTML = "Re-enter the email";
          return false;
          }else if(!emailRegex.test(freemail)){
          document.form.enterEmail.focus();
          document.getElementById("errorBox").innerHTML = "Re-enter the valid email";
          return false;
          }
        
          if(freemail !=  femail){
           document.form.enterEmail.focus();
           document.getElementById("errorBox").innerHTML = "emails are not matching, re-enter again";
           return false;
           }
         if(fpassword == "")
          {
           document.form.Password.focus();
           document.getElementById("errorBox").innerHTML = "enter the password";
           return false;
          }
        if(document.form.radiobutton[0].checked == false && document.form.radiobutton[1].checked == false){
        document.getElementById("errorBox").innerHTML = "select your gender";
        return false;
           }
          if(fname != '' && lname != '' && Femail != '' && freemail != '' && fpassword != '' ){
        document.getElementById("errorBox").innerHTML = "form submitted successfully";
        alert("Form Submitted Successfully");
      
           }
        
        }
      };
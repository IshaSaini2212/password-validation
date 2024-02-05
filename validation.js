function validation()
{
  
  let username = document.getElementById("name_txt").value;
  let exp = /^[a-zA-Z]*$/;
  if(username == "")
  {
    alert("Name must be filled");
  }
  else if(username.length<3 )
  {
    alert("Please enter valid name");
  }
  else if(!(exp.test(username)))
  {
    alert("Name must be alphabet");
  }

  let email = document.getElementById("email_txt").value;
  let regex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z-]+(?:\.[a-zA-Z-]+)$/;

  if(email == "")
  {
    alert("Please enter email id");
  }
  else if(!(regex.test(email)))
  {
    alert("Email don't match with the pattern");
  }
  
  let password = document.getElementById("password_txt").value;
  let pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,20}$/;

  if(password == "")
  {
    alert("Please enter a password");
  }

  else if(!pass.test(password))
  {
    alert("Password is not valid.....!!!");
  }
}
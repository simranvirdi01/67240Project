
//based off of https://www.w3resource.com/javascript/form/email-validation.php 
function validateForm()
{
    name = document.getElementById("inputName").value;
    email = document.getElementById("inputEmail").value;
    subject = document.getElementById("inputSubject").value;
    message = document.getElementById("inputMessage").value;
    if(name == "" || email =="" || subject == "" || message == "")
    {
        alert("Please make sure all fields are filled out!");
        return false;
    }
    
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    {
        alert("Valid email address!");
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        return false;
    }
}

function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputInfo");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableInfo");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } 
        else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
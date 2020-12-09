// Contact form from "Contact Us" page
//based off of https://www.w3resource.com/javascript/form/email-validation.php 
function validateForm()
{
    // takes in all the fields that user inputs
    name = document.getElementById("inputName").value;
    email = document.getElementById("inputEmail").value;
    subject = document.getElementById("inputSubject").value;
    message = document.getElementById("inputMessage").value;
    // all fields should be filled out
    if(name == "" || email =="" || subject == "" || message == "")
    {
        alert("Please make sure all fields are filled out!");
        return false;
    }
    // check if email field is or isn't correct
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

// Search function that searches through elements in the table
// Adapted from "How TO - Filter/Search List" from w3schools code
function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputInfo");
    // convert anything that the user inputs to upper case to match the information in my table exactly
    filter = input.value.toUpperCase();
    table = document.getElementById("tableInfo");
    tr = table.getElementsByTagName("tr");
    // looking through second column of elements in table by looping through all elements with tag name tr 
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } 
        // if no elements from the table match what the user is inputting
        else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
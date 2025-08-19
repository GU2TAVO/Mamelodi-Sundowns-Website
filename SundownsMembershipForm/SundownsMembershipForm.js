
document.getElementById("myForm").addEventListener("submit", function(event) { 
    event.preventDefault(); //Stops page from refreshing
    //Get values of input fields
    let name = document.getElementById("name").value.trim();
    let surname = document.getElementById("surname").value.trim();
    let age = document.getElementById("age").value.trim();
    let branch = document.getElementById("branch").value.trim();
    let errorMessage = document.getElementById("errorMessage");
    let successMessage = document.getElementById("membershipSuccessMessage");

    //Ensure error and success messages exist
    if (!errorMessage || !successMessage) {
        console.error("Error: messages not found in the HTML.");
        return;
    }

    //Check if any field is empty
    if (name === "" || surname === "" || age === "" || branch === "") {
        errorMessage.style.display = "block"; //Show error message
        successMessage.style.display = "none";  //Show success message
        return; //Stop submission
    }
        errorMessage.style.display = "none"; //Hide error message if all fields are filled
        successMessage.style.display = "block";  //Show success message
    
    
   //Hide after 3 second
    setTimeout(() => {
    successMessage.style.display = "none"; 
  //Clears the form
    document.getElementById("myForm").reset(); 
    }, 3000);
})

//Attatch event listener for membership form
document.getElementById("myForm").addEventListener("submit", submitMembershipForm);

//Function to only allow letters (no numbers or special characters)
function onlyLetters(event) { 
    let char = String.fromCharCode(event.keyCode);
    if (!/^[a-zA-Z\s]+$/.test(char)) {
        return false;
    }
}

//Function to only allow numbers (no letters or special characters)
function onlyNumbers(event) {
    let char = String.fromCharCode(event.keyCode);
    if (!/^[0-9]+$/.test(char)) {  //Allows only numbers
        return false
    }
}

//Function for Newsletter Form submition
document.getElementById("newsletterEmail").addEventListener("submit", function(event) {
    event.preventDefault(); //Stops page from refreshing

    let emailInput = document.getElementById("emailInput").value.trim();
    let successMessage = document.getElementById("newsletterSuccessMessage"); 

    if (!successMessage) {
        console.error("Error: Newsletter success message not found.");
        return;
    }
    if (emailInput === "") {
        alert("Please enter your email address."); //Prevents empty submission
        return;
    }
    successMessage.style.display = "block"; //Show success messsage

    setTimeout(() => {
        successMessage.style.display = "none";
        document.getElementById("newsletterEmail").reset(); //clears input field
    }, 3000);
});
